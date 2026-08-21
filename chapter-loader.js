(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasChapterLoader = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function create(fetchImpl, basePath = 'lesson-data') {
    if (typeof fetchImpl !== 'function') throw new TypeError('fetchImpl must be a function');
    const cache = new Map();

    async function load(slug, { refresh = false } = {}) {
      if (!slug) throw new TypeError('slug is required');
      if (refresh) cache.delete(slug);
      if (cache.has(slug)) return cache.get(slug);

      const pending = Promise.resolve(
        fetchImpl(`${basePath}/${encodeURIComponent(slug)}.json`),
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Lesson request failed (${response.status})`);
          }
          return response.json();
        })
        .catch((error) => {
          cache.delete(slug);
          throw error;
        });
      cache.set(slug, pending);
      return pending;
    }

    function clear(slug) {
      if (slug) cache.delete(slug);
      else cache.clear();
    }

    return { load, clear };
  }

  return { create };
});
