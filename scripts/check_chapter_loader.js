const assert = require('node:assert/strict');
const AtlasChapterLoader = require('../chapter-loader.js');


async function main() {
  const requests = [];
  let failOnce = true;
  const fakeFetch = async (url) => {
    requests.push(url);
    if (url.includes('retry') && failOnce) {
      failOnce = false;
      return { ok: false, status: 503, json: async () => ({}) };
    }
    return {
      ok: true,
      status: 200,
      json: async () => ({ slug: decodeURIComponent(url.split('/').pop().replace(/\.json$/, '')) }),
    };
  };
  const loader = AtlasChapterLoader.create(fakeFetch, 'lesson-data');

  const first = await loader.load('attention & masks');
  const cached = await loader.load('attention & masks');
  assert.equal(first.slug, 'attention & masks');
  assert.strictEqual(first, cached);
  assert.equal(requests[0], 'lesson-data/attention%20%26%20masks.json');
  assert.equal(requests.length, 1, 'successful responses must be cached');

  await loader.load('attention & masks', { refresh: true });
  assert.equal(requests.length, 2, 'refresh must bypass the cache');

  await assert.rejects(() => loader.load('retry'), /503/);
  const retried = await loader.load('retry');
  assert.equal(retried.slug, 'retry');
  assert.equal(
    requests.filter((url) => url.endsWith('/retry.json')).length,
    2,
    'a failed request must be evicted so retry can fetch again',
  );

  loader.clear('attention & masks');
  await loader.load('attention & masks');
  assert.equal(requests.length, 5);
  console.log('OK: chapter loader cache, refresh, encoding, and retry checks passed');
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
