const assert = require('node:assert/strict');
const AtlasChapterReader = require('../chapter-reader.js');


const helpers = {
  escape(value = '') {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
    })[char]);
  },
  visualHtml(_chapter, visual, index) {
    return `<figure data-visual="${index}">${helpers.escape(visual.title)}</figure>`;
  },
  labHtml(chapter) {
    return chapter.lab ? '<section id="lab">LAB</section>' : '';
  },
  resourcesHtml() {
    return '<a class="resource">RESOURCE</a>';
  },
  doneButton() {
    return '<button>DONE</button>';
  },
};


const context = {
  module: { slug: 'python', title: 'Python', icon: '🐍' },
  previous: { slug: 'big-o', title: 'Big O' },
  next: { slug: 'python-generators', title: 'Generators' },
};


const structured = {
  slug: 'python-data-structures',
  title: 'Containers',
  priority: 'very-high',
  roles: ['all'],
  description: 'A substantial <script>alert(1)</script> introduction.',
  prerequisites: ['big-o'],
  learningObjectives: ['Compare containers', 'Diagnose aliasing', 'Choose by invariant'],
  interviewAnswer: 'Choose by semantics first.',
  keyPoints: ['Order', 'Uniqueness'],
  why: 'Container semantics affect correctness.',
  intuition: 'Each container makes a promise.',
  deepSections: [
    { id: 'identity', title: 'Identity and equality', body: 'First paragraph.\n\nSecond paragraph.' },
    { id: 'hashing', title: 'Hashing', body: 'Hashing body.' },
  ],
  math: 'expected lookup = O(1)',
  workedExamples: [
    { title: 'Deduplicate events', setup: 'Retries exist.', walkthrough: 'Track IDs.', conclusion: 'Bound retention.' },
  ],
  commonMistakes: [
    { mistake: 'Always O(1)', correction: 'Expected, not guaranteed.' },
  ],
  followUps: [
    { question: 'Why hashable?', answer: 'Hashes must remain stable.' },
    { question: 'Why amortized?', answer: 'Occasional resizing.' },
  ],
  production: 'Bound state and monitor size.',
  exercises: [
    { difficulty: 'application', prompt: 'Pick a type.', solution: 'Use a set for uniqueness.' },
  ],
  resources: ['python-docs'],
  sourceNotes: [
    { resource: 'python-docs', contribution: 'Defines semantics.' },
  ],
  visuals: [
    { type: 'compare', title: 'Container promises', afterSection: 'intuition' },
    { type: 'flow', title: 'Hash lookup', afterSection: 'hashing' },
  ],
  editorial: { status: 'verified' },
};


const html = AtlasChapterReader.render(structured, context, helpers);
assert.match(html, /A substantial &lt;script&gt;alert\(1\)&lt;\/script&gt; introduction/);
assert.match(html, /Prerequisites/);
assert.match(html, /Learning objectives/);
assert.match(html, /href="#section-identity"/);
assert.match(html, /id="section-hashing"/);
assert.match(html, /Why hashable\?/);
assert.match(html, /Hashes must remain stable/);
assert.match(html, /<details/);
assert.match(html, /Use a set for uniqueness/);
assert.match(html, /data-visual="0"/);
assert.match(html, /data-visual="1"/);
assert.match(html, /#\/lesson\/big-o/);
assert.match(html, /#\/lesson\/python-generators/);

const models = AtlasChapterReader.sectionModels({
  deepDive: 'Legacy deep explanation.',
  workedExample: 'Legacy example.',
  followUps: ['Legacy question?'],
  visual: { type: 'flow', title: 'Legacy visual' },
});
assert.equal(models.deep[0].body, 'Legacy deep explanation.');
assert.equal(models.examples[0].walkthrough, 'Legacy example.');
assert.equal(models.followUps[0].question, 'Legacy question?');
assert.equal(models.visuals.length, 1);

const legacyHtml = AtlasChapterReader.render({
  slug: 'legacy',
  title: 'Legacy lesson',
  priority: 'high',
  keyPoints: ['One'],
  interviewAnswer: 'Short answer.',
  why: 'Why.',
  intuition: 'Intuition.',
  deepDive: 'Legacy deep explanation.',
  workedExample: 'Legacy example.',
  commonMistakes: ['Mistake.'],
  followUps: ['Question?'],
  production: 'Production.',
  resources: ['python-docs'],
}, context, helpers);
assert.match(legacyHtml, /References and further depth/);
assert.match(legacyHtml, /RESOURCE/);

console.log('OK: structured and legacy chapter reader checks passed');
