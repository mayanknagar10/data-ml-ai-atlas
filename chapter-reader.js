(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasChapterReader = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function words(value) {
    if (typeof value === 'string') return (value.match(/[\p{L}\p{N}_'-]+/gu) || []).length;
    if (Array.isArray(value)) return value.reduce((total, item) => total + words(item), 0);
    if (value && typeof value === 'object') {
      return Object.values(value).reduce((total, item) => total + words(item), 0);
    }
    return 0;
  }

  function estimatedMinutes(chapter) {
    return Math.max(1, Math.round(words(chapter) / 220));
  }

  function idFor(value, fallback) {
    const result = String(value || fallback || 'section')
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return result || fallback || 'section';
  }

  function sectionModels(chapter) {
    const deep = chapter.deepSections?.length
      ? chapter.deepSections.map((section, index) => ({
          ...section,
          id: idFor(section.id || section.title, `deep-${index + 1}`),
        }))
      : chapter.deepDive
        ? [{ id: 'deep-explanation', title: 'Deep explanation', body: chapter.deepDive }]
        : [];
    const examples = chapter.workedExamples?.length
      ? chapter.workedExamples
      : chapter.workedExample
        ? [{ title: 'Worked example', walkthrough: chapter.workedExample }]
        : [];
    const visuals = chapter.visuals?.length
      ? chapter.visuals
      : chapter.visual
        ? [chapter.visual]
        : [];
    const followUps = (chapter.followUps || []).map((item) =>
      typeof item === 'string' ? { question: item, answer: '' } : item,
    );
    const mistakes = (chapter.commonMistakes || []).map((item) =>
      typeof item === 'string' ? { mistake: item, correction: '' } : item,
    );
    return { deep, examples, visuals, followUps, mistakes };
  }

  function render(chapter, context, helpers) {
    const esc = helpers.escape;
    const models = sectionModels(chapter);
    const status = chapter.editorial?.status || chapter.status || 'summary';
    const module = context.module || { slug: '', title: '' };
    const lessonTitle = context.lessonTitle || ((slug) => slug);
    const paragraphHtml = (value) => String(value || '')
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map((paragraph) => `<p>${esc(paragraph)}</p>`)
      .join('');
    const visualIndexes = new Set();
    const visualsAfter = (anchor) => models.visuals
      .map((visual, index) => ({ visual, index }))
      .filter(({ visual, index }) => {
        if (visualIndexes.has(index)) return false;
        const target = visual.afterSection || (index === 0 ? 'intuition' : 'deep');
        if (target !== anchor) return false;
        visualIndexes.add(index);
        return true;
      })
      .map(({ visual, index }) => helpers.visualHtml(chapter, visual, index))
      .join('');
    const remainingVisuals = () => models.visuals
      .map((visual, index) => ({ visual, index }))
      .filter(({ index }) => !visualIndexes.has(index))
      .map(({ visual, index }) => {
        visualIndexes.add(index);
        return helpers.visualHtml(chapter, visual, index);
      })
      .join('');

    const toc = [
      chapter.description && ['description', 'Topic overview'],
      ['why', 'Why this matters'],
      ['intuition', 'Intuition'],
      ...models.deep.map((section) => [section.id, section.title]),
      chapter.math && ['formal-view', 'Formal view'],
      models.examples.length && ['worked-examples', 'Worked examples'],
      chapter.production && ['production', 'Production connection'],
      models.followUps.length && ['follow-ups', 'Follow-up questions'],
      chapter.exercises?.length && ['exercises', 'Exercises'],
      (chapter.sourceNotes?.length || chapter.resources?.length) && ['references', 'References'],
    ].filter(Boolean);

    const prerequisites = (chapter.prerequisites || []).length
      ? `<section class="chapter-prerequisites" id="section-prerequisites"><h2>Prerequisites</h2><div class="prerequisite-list">${chapter.prerequisites.map((slug) => `<a href="#/lesson/${encodeURIComponent(slug)}">${esc(lessonTitle(slug))}</a>`).join('')}</div></section>`
      : '';
    const objectives = (chapter.learningObjectives || []).length
      ? `<section class="chapter-objectives" id="section-objectives"><h2>Learning objectives</h2><ul>${chapter.learningObjectives.map((objective) => `<li>${esc(objective)}</li>`).join('')}</ul></section>`
      : '';
    const deepHtml = models.deep.map((section) => `
      <section id="section-${esc(section.id)}">
        <h2>${esc(section.title)}</h2>
        ${paragraphHtml(section.body)}
        ${visualsAfter(section.id)}
      </section>`).join('');
    const examplesHtml = models.examples.length
      ? `<section id="section-worked-examples"><h2>Worked examples</h2>${models.examples.map((example, index) => `
          <article class="worked-example">
            <h3>${esc(example.title || `Worked example ${index + 1}`)}</h3>
            ${example.setup ? `<h4>Setup</h4>${paragraphHtml(example.setup)}` : ''}
            ${example.steps?.length ? `<h4>Steps</h4><ol>${example.steps.map((step) => `<li>${esc(step)}</li>`).join('')}</ol>` : ''}
            ${paragraphHtml(example.walkthrough || example.body || '')}
            ${example.result ? `<h4>Result</h4>${paragraphHtml(example.result)}` : ''}
            ${example.conclusion ? `<h4>Conclusion</h4>${paragraphHtml(example.conclusion)}` : ''}
          </article>`).join('')}</section>`
      : '';
    const mistakesHtml = models.mistakes.length
      ? `<section class="warning" id="section-common-mistakes"><h2>Common mistakes</h2>${models.mistakes.map((item) => `
          <article class="mistake-item"><h3>${esc(item.mistake)}</h3>${item.correction ? paragraphHtml(item.correction) : ''}</article>`).join('')}</section>`
      : '';
    const followUpsHtml = models.followUps.length
      ? `<section id="section-follow-ups"><h2>Follow-up questions</h2><div class="chapter-qa">${models.followUps.map((item) => `
          <article><h3>${esc(item.question)}</h3>${item.answer ? paragraphHtml(item.answer) : '<p class="answer-pending">Use the chapter to construct your answer.</p>'}</article>`).join('')}</div></section>`
      : '';
    const exercisesHtml = chapter.exercises?.length
      ? `<section class="chapter-exercises" id="section-exercises"><h2>Exercises</h2>${chapter.exercises.map((exercise, index) => `
          <article><div class="exercise-meta">Exercise ${index + 1}${exercise.difficulty ? ` · ${esc(exercise.difficulty)}` : ''}</div>${paragraphHtml(exercise.prompt)}<details><summary>Show solution</summary>${paragraphHtml(exercise.solution)}</details></article>`).join('')}</section>`
      : '';
    const notesHtml = chapter.sourceNotes?.length || chapter.resources?.length
      ? `<section id="section-references"><h2>References and further depth</h2>${chapter.sourceNotes?.length ? `<div class="source-notes">${chapter.sourceNotes.map((note) => `
          <article><strong>${esc(note.resource)}</strong>${paragraphHtml(note.contribution)}</article>`).join('')}</div>` : ''}${helpers.resourcesHtml(chapter.resources || [], chapter.sourceNotes || [])}</section>`
      : '';
    const previous = context.previous
      ? `<a class="chapter-prev" href="#/lesson/${encodeURIComponent(context.previous.slug)}"><span>Previous</span><strong>${esc(context.previous.title)}</strong></a>`
      : '<span></span>';
    const next = context.next
      ? `<a class="chapter-next" href="#/lesson/${encodeURIComponent(context.next.slug)}"><span>Next</span><strong>${esc(context.next.title)}</strong></a>`
      : '<span></span>';

    const position = Number.isInteger(context.index) && context.index >= 0 ? `Lesson ${context.index + 1} of ${context.total || '?'}` : 'Lesson';
    const modulePct = context.total ? Math.round(100 * (context.moduleDone || 0) / context.total) : 0;
    const heroPoints = (chapter.keyPoints || []).slice(0, 2).join(' · ');
    return `<div class="reading-progress" aria-hidden="true"><span id="readingProgressBar"></span></div>
      <div class="breadcrumbs breadcrumbs-v2"><a href="#/">Home</a><span>/</span><a href="#/module/${esc(module.slug)}">${esc(module.title)}</a><span>/</span><span>${esc(chapter.title)}</span></div>
      <section class="lesson-head chapter-heading chapter-hero">
        <div class="chapter-eyebrow"><span>${esc(position)}</span><span>·</span><span>${estimatedMinutes(chapter)} min read</span></div>
        <h1>${esc(chapter.title)}</h1>
        <p class="lede">${esc(heroPoints)}</p>
        <div class="chapter-meta-row"><span class="pill ${esc(chapter.priority)}">${esc(chapter.priority)} priority</span><span class="pill ${esc(status)}">${esc(status)}</span>${helpers.doneButton(chapter.slug, false)}<a class="chapter-back-link" href="#/module/${esc(module.slug)}">Back to module</a></div>
      </section>
      ${chapter.description ? `<section class="chapter-description" id="section-description">${paragraphHtml(chapter.description)}</section>` : ''}
      ${prerequisites}${objectives}
      <div class="answer-card answer-card-v2"><div class="answer-card-label">Interview-ready summary</div><h2>30–60 second answer</h2>${paragraphHtml(chapter.interviewAnswer)}</div>
      <div class="chapter-layout">
        <article class="article chapter-article">
          ${chapter.why ? `<section id="section-why"><div class="section-kicker">Context</div><h2>Why this matters</h2>${paragraphHtml(chapter.why)}</section>` : ''}
          ${chapter.intuition ? `<section id="section-intuition"><div class="section-kicker">Mental model</div><h2>Intuition</h2>${paragraphHtml(chapter.intuition)}${visualsAfter('intuition')}</section>` : ''}
          ${deepHtml}${visualsAfter('deep')}${remainingVisuals()}
          ${chapter.math ? `<section id="section-formal-view"><div class="section-kicker">Formalism</div><h2>Math / formal view</h2><div class="math">${helpers.mathHtml ? helpers.mathHtml(chapter.math) : esc(chapter.math)}</div></section>` : ''}
          ${examplesHtml}
          ${helpers.labHtml(chapter)}
          ${chapter.production ? `<section id="section-production"><div class="section-kicker">Applied systems</div><h2>Production / system-design connection</h2>${paragraphHtml(chapter.production)}</section>` : ''}
          ${mistakesHtml}${followUpsHtml}${exercisesHtml}${notesHtml}
          <nav class="chapter-nav" aria-label="Lesson navigation">${previous}${next}</nav>
        </article>
        <aside class="chapter-sidebar">
          <div class="side-card module-study-card"><div class="kicker">${esc(module.title)}</div><div class="module-study-progress"><strong>${context.moduleDone || 0}/${context.total || 0}</strong><span>lessons complete</span></div><div class="progress"><span style="width:${modulePct}%"></span></div><a href="#/module/${esc(module.slug)}">View module →</a></div>
          <nav class="side-card chapter-toc" aria-label="On this page"><div class="kicker">On this page</div><ol>${toc.map(([id, title]) => `<li><button type="button" data-section-target="section-${esc(id)}">${esc(title)}</button></li>`).join('')}</ol></nav>
          <details class="side-card quick-revision-card"><summary>Quick revision</summary><ul>${(chapter.keyPoints || []).map((point) => `<li>${esc(point)}</li>`).join('')}</ul></details>
        </aside>
      </div>`;
  }

  return { estimatedMinutes, sectionModels, render };
});
