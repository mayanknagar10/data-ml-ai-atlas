const $ = (s) => document.querySelector(s);
const ROLE_OPTIONS = [
  ['all','All'],
  ['ds','Data Scientist'],
  ['da','Data / Product Analyst'],
  ['as','Applied Scientist'],
  ['mle','ML Engineer'],
  ['aie','AI / GenAI Engineer'],
  ['de','Data Engineer'],
  ['cv','Computer Vision'],
];
const ROLE_IDS = new Set(ROLE_OPTIONS.map(([value])=>value));
const savedRole = localStorage.getItem('atlas-role') || 'all';
const state = {
  role: ROLE_IDS.has(savedRole) ? savedRole : 'all',
  priority: 'all',
  query: '',
  done: new Set(JSON.parse(localStorage.getItem('atlas-done') || '[]')),
  quizSlug: null,
  resumeText: '',
  jdText: '',
  analyzerResult: null,
  analyzerDays: 5,
  analyzerRole: 'auto',
  analyzerStatus: '',
  resumeFileName: '',
  jdFileName: '',
  resourceQuery: '',
  resourceKind: 'all',
};
const chapterLoader=AtlasChapterLoader.create((...args)=>fetch(...args));
let routeVersion=0;
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function save(){localStorage.setItem('atlas-done',JSON.stringify([...state.done]));localStorage.setItem('atlas-role',state.role)}
function priorityLabel(p){return {'very-high':'Very high','high':'High','medium':'Medium'}[p]||p}
function moduleFor(slug){return ATLAS.modules.find(m=>m.slug===slug)}
function lessonFor(slug){return ATLAS.lessons.find(l=>l.slug===slug)}
function roleMatches(l,role=state.role){return role==='all'||l.roles.includes('all')||l.roles.includes(role)}
function lessonVisible(l,{includeRole=true}={}){
  const q=state.query.trim().toLowerCase();
  const roleOk=!includeRole||roleMatches(l);
  const pOk=state.priority==='all'||l.priority===state.priority;
  const qOk=!q||(`${l.title} ${l.description||''} ${l.interviewAnswer} ${l.keyPoints.join(' ')}`).toLowerCase().includes(q);
  return roleOk&&pOk&&qOk;
}
function curriculumFiltering(){return state.role!=='all'||state.priority!=='all'||Boolean(state.query.trim())}
function moduleLessonSets(module){
  const all=ATLAS.lessons.filter(l=>l.module===module.slug);
  const relevant=all.filter(l=>lessonVisible(l));
  return {all,relevant};
}
function roleName(role=state.role){return ROLE_OPTIONS.find(([value])=>value===role)?.[1]||'All'}
function progress(){return Math.round(100*state.done.size/ATLAS.lessons.length)}
function deepCount(){return ATLAS.lessons.filter(l=>['chapter-complete','verified'].includes(l.status)).length}
function labCount(){return ATLAS.lessons.filter(l=>l.hasLab).length}
function visualCount(){return ATLAS.lessons.reduce((n,l)=>n+(l.visualCount||0),0)}
function doneBtn(slug,compact=true){
 const d=state.done.has(slug);
 const label=d?'Completed':'Mark complete';
 return `<button class="check completion-toggle ${d?'done':''} ${compact?'compact':''}" data-done="${slug}" aria-pressed="${d?'true':'false'}" title="${label}"><span aria-hidden="true">${d?'✓':'○'}</span><span class="completion-label">${label}</span></button>`;
}
function syncDoneButtons(slug){const d=state.done.has(slug);document.querySelectorAll(`[data-done="${slug}"]`).forEach(b=>{b.classList.toggle('done',d);b.setAttribute('aria-pressed',d?'true':'false');b.title=d?'Completed':'Mark complete';const icon=b.querySelector('span[aria-hidden]');if(icon)icon.textContent=d?'✓':'○';const label=b.querySelector('.completion-label');if(label)label.textContent=d?'Completed':'Mark complete'});}
function wireDone(){document.querySelectorAll('[data-done]').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();const slug=b.dataset.done;state.done.has(slug)?state.done.delete(slug):state.done.add(slug);save();if(location.hash.startsWith('#/lesson/'))syncDoneButtons(slug);else route(false);});}
function nextStudyLessons(limit=4){
 const candidates=ATLAS.lessons.filter(l=>roleMatches(l)&&(state.priority==='all'||l.priority===state.priority));
 const incomplete=candidates.filter(l=>!state.done.has(l.slug));
 return (incomplete.length?incomplete:candidates).slice(0,limit);
}
function lessonPosition(slug){
 const lesson=lessonFor(slug); if(!lesson)return null;
 const xs=ATLAS.lessons.filter(l=>l.module===lesson.module);
 const index=xs.findIndex(l=>l.slug===slug);
 return {index,total:xs.length};
}
function home(){
 const featured=ATLAS.lessons.filter(l=>l.featured&&lessonVisible(l)).slice(0,8);
 const continueLessons=nextStudyLessons(4);
 const primaryNext=continueLessons[0];
 const filtering=curriculumFiltering();
 const groups=[...new Set(ATLAS.modules.map(m=>m.group||'Curriculum'))];
 const groupModels=groups.map(group=>({
   group,
   modules:ATLAS.modules.filter(m=>(m.group||'Curriculum')===group).map(m=>({m,...moduleLessonSets(m)})).filter(x=>!filtering||x.relevant.length),
 })).filter(x=>x.modules.length);
 const visibleModuleCount=groupModels.reduce((n,g)=>n+g.modules.length,0);
 const relevantLessonCount=ATLAS.lessons.filter(l=>lessonVisible(l)).length;
 const moduleCards=groupModels.map(({group,modules})=>{
   const cards=modules.map(({m,all,relevant})=>{
     const shown=filtering?relevant:all;
     const done=shown.filter(l=>state.done.has(l.slug)).length;
     const pct=shown.length?Math.round(100*done/shown.length):0;
     const topicLabel=filtering?`${relevant.length} relevant · ${all.length} total`:`${all.length} lessons`;
     return `<a class="module-card" href="#/module/${m.slug}">
       <div class="module-card-top"><span class="module-icon" aria-hidden="true">${m.icon}</span><span class="module-arrow" aria-hidden="true">↗</span></div>
       <h3>${m.title}</h3><p>${m.description}</p>
       <div class="module-card-footer"><span>${topicLabel}</span><strong>${pct}%</strong></div>
       <div class="progress" aria-label="${pct}% complete"><span style="width:${pct}%"></span></div>
     </a>`;
   }).join('');
   return `<section class="curriculum-group"><div class="group-heading"><div><div class="kicker">${group}</div><span>${modules.length} modules</span></div></div><div class="module-grid">${cards}</div></section>`;
 }).join('');
 const filterParts=[];
 if(state.role!=='all')filterParts.push(roleName());
 if(state.priority!=='all')filterParts.push(`${priorityLabel(state.priority)} priority`);
 if(state.query.trim())filterParts.push(`“${esc(state.query.trim())}”`);
 const filterSummary=filtering?`<div class="curriculum-filter-summary"><div><strong>Focused curriculum</strong><span>${visibleModuleCount} modules · ${relevantLessonCount} relevant lessons${filterParts.length?` · ${filterParts.join(' · ')}`:''}</span></div><button id="resetCurriculumFilters" class="ghost">Reset filters</button></div>`:'';
 const continueCards=continueLessons.map((l,i)=>{const m=moduleFor(l.module);const pos=lessonPosition(l.slug);return `<a class="continue-card" href="#/lesson/${l.slug}"><span class="continue-index">${String(i+1).padStart(2,'0')}</span><div><small>${m.icon} ${m.title}${pos?` · ${pos.index+1}/${pos.total}`:''}</small><strong>${l.title}</strong><span>${priorityLabel(l.priority)} priority</span></div><span class="continue-arrow" aria-hidden="true">→</span></a>`}).join('');
 return `<section class="hero hero-v2">
   <div class="hero-copy"><div class="hero-badge"><span class="status-dot"></span>394 verified chapters · built for serious study</div><h1>Build depth.<br><span>Move with confidence.</span></h1><p class="lede">A rigorous Data, ML & AI curriculum that combines textbook-level explanations, research-grounded visuals, runnable labs and interview-focused practice.</p><div class="hero-actions">${primaryNext?`<a class="primary-btn hero-primary" href="#/lesson/${primaryNext.slug}">${state.done.size?'Continue learning':'Start learning'} <span>→</span></a>`:''}<button class="secondary-btn" data-open-search>Find a topic <kbd>⌘K</kbd></button><a class="text-btn" href="#/paths">Choose a study path</a></div></div>
   <aside class="hero-dashboard"><div class="progress-ring" style="--progress:${Math.min(100,progress())}"><div><strong>${progress()}%</strong><span>complete</span></div></div><div class="hero-dashboard-copy"><span>Your Atlas</span><strong>${state.done.size} of ${ATLAS.lessons.length} lessons</strong><p>${state.done.size?`${ATLAS.lessons.length-state.done.size} lessons remain. Keep the streak moving.`:'Pick a role or start with the roadmap. Your progress stays in this browser.'}</p></div><div class="hero-metrics"><span><strong>${ATLAS.modules.length}</strong> modules</span><span><strong>${labCount()}</strong> labs</span><span><strong>${visualCount()}</strong> visuals</span></div></aside>
 </section>
 <section class="continue-section"><div class="section-title-row"><div><div class="kicker">Your next steps</div><h2>${state.done.size?'Continue learning':'Start with a strong sequence'}</h2></div><a class="section-link" href="#/roadmap">Full roadmap →</a></div><div class="continue-grid">${continueCards}</div></section>
 <section class="explore-panel"><div class="section-title-row"><div><div class="kicker">Personalize the Atlas</div><h2>Focus the curriculum</h2><p class="section-subtitle">Choose a role to show the modules that matter most. Direct module pages always keep their full lesson list.</p></div></div><div class="explore-controls"><label class="search-field"><span aria-hidden="true">⌕</span><input id="search" class="search" placeholder="Search lessons, concepts, tools…" value="${esc(state.query)}"></label><label class="select-field"><span>Priority</span><select id="priority"><option value="all">All priorities</option><option value="very-high" ${state.priority==='very-high'?'selected':''}>Very high</option><option value="high" ${state.priority==='high'?'selected':''}>High</option><option value="medium" ${state.priority==='medium'?'selected':''}>Medium</option></select></label></div><div class="roles role-tabs" aria-label="Filter by role">${ROLE_OPTIONS.map(([v,n])=>`<button class="role-btn ${state.role===v?'active':''}" data-role="${v}" aria-pressed="${state.role===v?'true':'false'}">${n}</button>`).join('')}</div></section>
 <section class="curriculum-shell"><div class="section-title-row curriculum-heading"><div><div class="kicker">Role-aware map</div><h2>Curriculum</h2></div><span class="curriculum-count">${visibleModuleCount} modules</span></div>${filterSummary}${moduleCards||'<div class="empty"><h3>No modules match these filters.</h3><p>Reset the filters or broaden your search.</p></div>'}</section>
 <section class="section interview-section"><div class="section-title-row"><div><div class="kicker">Interview essentials</div><h2>High-frequency topics</h2></div><a class="section-link" href="#/quiz">Practice mode →</a></div><div class="sprint">${featured.map(l=>`<article class="sprint-card"><div class="meta"><span class="pill ${l.priority}">${priorityLabel(l.priority)}</span>${doneBtn(l.slug)}</div><h3><a href="#/lesson/${l.slug}">${l.title}</a></h3><p class="small">${esc(l.interviewAnswer)}</p></article>`).join('')||'<div class="empty">No topics match the current filters.</div>'}</div></section>`;
}
function modulePage(slug){
 const m=moduleFor(slug); if(!m)return notFound();
 const all=ATLAS.lessons.filter(l=>l.module===slug);
 const ls=all.filter(l=>lessonVisible(l,{includeRole:false}));
 const done=all.filter(l=>state.done.has(l.slug)).length;
 const pct=all.length?Math.round(100*done/all.length):0;
 const rows=ls.map((l,i)=>`<article class="lesson-row lesson-row-v2"><a class="lesson-row-main" href="#/lesson/${l.slug}"><span class="lesson-number">${String(all.indexOf(l)+1).padStart(2,'0')}</span><div><div class="lesson-row-title"><strong>${l.title}</strong><span aria-hidden="true">→</span></div><p>${esc(l.interviewAnswer)}</p><div class="meta"><span class="pill ${l.priority}">${priorityLabel(l.priority)}</span><span class="pill ${l.status}">${l.status}</span>${l.hasLab?'<span class="pill">Python lab</span>':''}</div></div></a>${doneBtn(l.slug)}</article>`).join('');
 return `<div class="breadcrumbs"><a href="#/">Home</a><span>/</span><span>${m.title}</span></div><section class="module-hero"><div class="module-hero-icon" aria-hidden="true">${m.icon}</div><div class="module-hero-copy"><div class="kicker">Module · ${all.length} lessons</div><h1>${m.title}</h1><p class="lede">${m.description}</p><div class="module-progress"><div><strong>${done}/${all.length}</strong><span>lessons complete</span></div><div class="progress"><span style="width:${pct}%"></span></div><b>${pct}%</b></div></div></section><section class="module-toolbar"><label class="search-field"><span aria-hidden="true">⌕</span><input id="search" class="search" placeholder="Filter this module…" value="${esc(state.query)}"></label><label class="select-field"><span>Priority</span><select id="priority"><option value="all">All priorities</option><option value="very-high" ${state.priority==='very-high'?'selected':''}>Very high</option><option value="high" ${state.priority==='high'?'selected':''}>High</option><option value="medium" ${state.priority==='medium'?'selected':''}>Medium</option></select></label><span class="result-count">${ls.length} shown</span></section><section class="lesson-list lesson-list-v2">${rows||'<div class="empty"><h3>No lessons match.</h3><p>Try another keyword or priority.</p></div>'}</section>`;
}
function resourcesHtml(ids){return ids.map(id=>{const r=ATLAS.resources[id]; if(!r)return'';return `<a class="resource" href="${r.url}" target="_blank" rel="noopener"><strong>${r.title}</strong><span>${r.provider}</span><span class="kind">${r.kind} · ${r.level}</span></a>`}).join('')}
function codeBlock(title,subtitle,code,idx){return `<div class="code-step"><div class="code-toolbar"><div><strong>${title}</strong><span>${subtitle}</span></div><button class="copy-btn" data-copy="code-${idx}">Copy</button></div><pre class="code"><code id="code-${idx}">${esc(code)}</code></pre></div>`}

function queueMathTypeset(root=document,attempt=0){
  if(window.MathJax?.typesetPromise){
    try{window.MathJax.typesetClear?.(root && root.nodeType===1 ? [root] : undefined);}catch(_e){}
    return window.MathJax.typesetPromise(root && root.nodeType===1 ? [root] : undefined).catch(()=>{});
  }
  if(attempt<12) setTimeout(()=>queueMathTypeset(root,attempt+1),180);
  return Promise.resolve();
}
function mathTypographyFragment(value=''){
  let s=esc(value);
  const greek={alpha:'α',beta:'β',gamma:'γ',delta:'δ',epsilon:'ε',eta:'η',theta:'θ',lambda:'λ',mu:'μ',pi:'π',rho:'ρ',sigma:'σ',tau:'τ',phi:'φ',psi:'ψ',omega:'ω'};
  s=s.replace(/&lt;=/g,'≤').replace(/&gt;=/g,'≥').replace(/!=/g,'≠').replace(/-&gt;/g,'→');
  s=s.replace(/\bR\^\(([^)]+)\)/g,(_m,e)=>`ℝ<sup>${e.replace(/x/g,'×')}</sup>`);
  s=s.replace(/\bR\^([A-Za-z0-9+-]+)/g,(_m,e)=>`ℝ<sup>${e}</sup>`);
  s=s.replace(/\b(beta|theta|alpha|gamma|delta|epsilon|eta|lambda|mu|pi|rho|sigma|tau|phi|psi|omega)_hat\b/g,(_m,g)=>`${greek[g]}̂`);
  s=s.replace(/\b(alpha|beta|gamma|delta|epsilon|eta|theta|lambda|mu|pi|rho|sigma|tau|phi|psi|omega)\b/g,(_m,g)=>greek[g]);
  s=s.replace(/Σ/g,'∑').replace(/Π/g,'∏').replace(/sqrt\s*\(/g,'√(');
  s=s.replace(/\^T\b/g,'<sup>⊤</sup>');
  s=s.replace(/\^\(-1\)/g,'<sup>−1</sup>').replace(/\^-1\b/g,'<sup>−1</sup>');
  s=s.replace(/\^\(?([0-9A-Za-z+-]+)\)?/g,'<sup>$1</sup>');
  s=s.replace(/_\{?([A-Za-z0-9*+-]+)\}?/g,'<sub>$1</sub>');
  s=s.replace(/\|\|([^|]+)\|\|/g,'‖$1‖');
  return s;
}
function mathRichText(value=''){
  return String(value).split(/(`[^`]+`)/g).map((part)=>{
    if(part.startsWith('`')&&part.endsWith('`')) return esc(part);
    return mathTypographyFragment(part);
  }).join('');
}
function mathHtml(value=''){
  return String(value||'').split(/\n\s*\n/).filter(Boolean).map((block)=>{
    const lines=block.split(/\n+/).filter(Boolean);
    if(lines.length>1) return `<div class="math-stack">${lines.map(line=>`<div class="math-line">${mathRichText(line)}</div>`).join('')}</div>`;
    return `<p class="math-paragraph">${mathRichText(lines[0]||'')}</p>`;
  }).join('');
}
function visualGroundingHtml(v){
  const refs=(v.grounding||[]).map((g)=>{
    const r=(g.id&&ATLAS.resources[g.id])?ATLAS.resources[g.id]:null;
    if(!r)return '';
    return `<a class="viz-ref" href="${r.url}" target="_blank" rel="noopener"><strong>${esc(r.title)}</strong><span>${esc(r.provider)} · ${esc(r.kind)}</span></a>`;
  }).filter(Boolean);
  if(!refs.length&&!v.adaptationNote)return '';
  return `<div class="viz-grounding"><div class="viz-grounding-kicker">Figure sources</div>${refs.length?`<div class="viz-ref-grid">${refs.join('')}</div>`:''}${v.adaptationNote?`<p class="viz-adaptation">${esc(v.adaptationNote)}</p>`:''}</div>`;
}
function labHtml(l){if(!l.lab)return l.code?`<section><h2>Quick code / pseudocode</h2><pre class="code"><code>${esc(l.code)}</code></pre></section>`:'';const x=l.lab;const ship=x.shipIt||l.production||'Turn the learning artifact into a tested module with explicit inputs, outputs and failure handling.';return `<section class="code-lab-web"><div class="lab-title-row"><div><div class="kicker">Runnable code lab</div><h2>Build it → Use it → Ship it → Verify it</h2><p>${esc(x.goal||'')}</p></div><a class="lab-file-link" href="labs/${l.slug}/index.html" target="_blank">Open lab files ↗</a></div>${codeBlock('1 · Build it','first principles',x.buildIt,`${l.slug}-build`)}${codeBlock('2 · Use it','library / practical API',x.useIt,`${l.slug}-use`)}<div class="ship-card"><div class="kicker">3 · Ship it</div><p>${esc(ship)}</p></div>${codeBlock('4 · Verify it','sanity checks / assertions',x.verifyIt,`${l.slug}-verify`)}</section>`}
function svgWrap(text,x,y,max=18,anchor='middle',cls='viz-text'){
 const words=String(text).split(/\s+/); let lines=[''];
 words.forEach(w=>{const last=lines.length-1; const cand=(lines[last]+' '+w).trim(); if(cand.length>max && lines[last]) lines.push(w); else lines[last]=cand;});
 const start=y-((lines.length-1)*7); return `<text x="${x}" y="${start}" text-anchor="${anchor}" class="${cls}">${lines.map((ln,i)=>`<tspan x="${x}" dy="${i?14:0}">${esc(ln)}</tspan>`).join('')}</text>`;
}
function visualHtml(l,vArg=null,visualIndex=0){
 const v=vArg||l.visual; if(!v)return '';
 const title=esc(v.title||l.title); const caption=esc(v.caption||'Conceptual illustration.');
 const colors=['var(--viz-1)','var(--viz-2)','var(--viz-3)','var(--viz-4)'];
 const arrowId=`arrow-${String(l.slug||'lesson').replace(/[^a-z0-9-]/gi,'-')}-${visualIndex}`;
 const arrow=`<marker id="${arrowId}" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="var(--viz-line)"/></marker>`;
 let body='';
 if(v.type==='flow'){
   const items=v.items||[]; const vertical=v.orientation==='vertical';
   if(vertical){const h=58,gap=20,x=300,w=400;items.forEach((it,i)=>{const y=45+i*(h+gap); if(i)body+=`<line x1="500" y1="${y-gap}" x2="500" y2="${y-6}" class="viz-edge" marker-end="url(#${arrowId})"/>`;body+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" class="viz-node ${v.accent===i?'accent':''}"/>${svgWrap(it,500,y+33,34)}`;});}
   else {const n=Math.max(items.length,1), margin=45, gap=26, w=Math.min(150,(1000-2*margin-gap*(n-1))/n), y=145,h=100;items.forEach((it,i)=>{const x=margin+i*(w+gap); if(i)body+=`<line x1="${x-gap+6}" y1="${y+h/2}" x2="${x-7}" y2="${y+h/2}" class="viz-edge" marker-end="url(#${arrowId})"/>`;body+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" class="viz-node ${v.accent===i?'accent':''}"/>${svgWrap(it,x+w/2,y+54,Math.max(12,Math.floor(w/8)))}`;});}
 } else if(v.type==='layers'){
   const items=v.items||[]; const w=660,h=56,gap=14,x=170;items.forEach((it,i)=>{const y=48+i*(h+gap);body+=`<rect x="${x+i*18}" y="${y}" width="${w-i*36}" height="${h}" rx="13" fill="${colors[i%4]}" opacity="${0.16+0.05*(i%3)}" stroke="${colors[i%4]}"/>${svgWrap(it,500,y+33,42)}`;});
 } else if(v.type==='curve'){
   const x0=90,y0=350,x1=930,y1=55; body+=`<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" class="viz-axis"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" class="viz-axis"/>`;
   (v.series||[]).forEach((s,si)=>{const pts=(s.points||[]).map(([x,y])=>`${x0+x*(x1-x0)},${y0-y*(y0-y1)}`).join(' ');body+=`<polyline points="${pts}" fill="none" stroke="${colors[si%4]}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;});
   body+=svgWrap(v.xLabel||'x',510,400,30,'middle','viz-axis-label')+svgWrap(v.yLabel||'y',45,205,18,'middle','viz-axis-label');
   (v.series||[]).forEach((s,si)=>{body+=`<circle cx="${120+si*190}" cy="28" r="6" fill="${colors[si%4]}"/>${svgWrap(s.label||`series ${si+1}`,136+si*190,32,18,'start','viz-legend')}`;});
 } else if(v.type==='scatter'){
   const x0=90,y0=350,x1=930,y1=55; body+=`<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" class="viz-axis"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" class="viz-axis"/>`;
   (v.series||[]).forEach((s,si)=>{const pts=s.points||[];const isLine=(pts.length===2 && /fit|pc1|margin|objective/i.test(s.label||'')); if(isLine){const [[ax,ay],[bx,by]]=pts;body+=`<line x1="${x0+ax*(x1-x0)}" y1="${y0-ay*(y0-y1)}" x2="${x0+bx*(x1-x0)}" y2="${y0-by*(y0-y1)}" stroke="${colors[si%4]}" stroke-width="4"/>`;} else pts.forEach(([x,y])=>{body+=`<circle cx="${x0+x*(x1-x0)}" cy="${y0-y*(y0-y1)}" r="6" fill="${colors[si%4]}" opacity=".88"/>`;});});
   body+=svgWrap(v.xLabel||'x',510,400,30,'middle','viz-axis-label')+svgWrap(v.yLabel||'y',45,205,18,'middle','viz-axis-label');
   (v.series||[]).forEach((s,si)=>{body+=`<circle cx="${120+si*200}" cy="28" r="6" fill="${colors[si%4]}"/>${svgWrap(s.label||`series ${si+1}`,136+si*200,32,18,'start','viz-legend')}`;});
 } else if(v.type==='bars'){
   const labels=v.labels||[],vals=v.values||[],x0=95,y0=350,x1=930; const gap=26,w=Math.max(42,(x1-x0-gap*(labels.length+1))/Math.max(labels.length,1)); body+=`<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" class="viz-axis"/>`;labels.forEach((lab,i)=>{const h=250*(vals[i]||0),x=x0+gap+i*(w+gap);body+=`<rect x="${x}" y="${y0-h}" width="${w}" height="${h}" rx="8" fill="${colors[i%4]}" opacity=".76"/>${svgWrap(lab,x+w/2,385,14)}`;});body+=svgWrap(v.yLabel||'value',45,205,18,'middle','viz-axis-label');
 } else if(v.type==='matrix'){
   const rows=v.rows||[],cols=v.cols||[],cells=v.cells||[]; const left=190,top=90,w=650,h=250,cw=w/Math.max(cols.length,1),ch=h/Math.max(rows.length,1); cols.forEach((c,i)=>body+=svgWrap(c,left+i*cw+cw/2,68,14)); rows.forEach((r,j)=>body+=svgWrap(r,170,top+j*ch+ch/2,14,'end')); for(let j=0;j<rows.length;j++)for(let i=0;i<cols.length;i++){const val=(cells[j]||[])[i]??'';let op=.10+.10*((i+j)%3);const num=parseFloat(String(val).replace('%',''));if(Number.isFinite(num))op=.12+.60*(String(val).includes('%')?num/100:Math.min(1,num));body+=`<rect x="${left+i*cw}" y="${top+j*ch}" width="${cw}" height="${ch}" fill="${colors[(i+j)%4]}" opacity="${op}" stroke="var(--viz-border)"/>${svgWrap(val,left+i*cw+cw/2,top+j*ch+ch/2+4,14)}`;}
 } else if(v.type==='network'){
   const nodes=v.nodes||[],edges=v.edges||[]; const by=Object.fromEntries(nodes.map(n=>[n.id,n])); edges.forEach(e=>{const a=by[e[0]],b=by[e[1]];if(!a||!b)return;body+=`<line x1="${80+a.x*840}" y1="${40+a.y*330}" x2="${80+b.x*840}" y2="${40+b.y*330}" class="viz-edge" ${v.directed?`marker-end="url(#${arrowId})"`:''}/>`;});nodes.forEach((n,i)=>{const x=80+n.x*840,y=40+n.y*330;body+=`<circle cx="${x}" cy="${y}" r="34" fill="${colors[['a','b','c'].indexOf(n.kind)>=0?['a','b','c'].indexOf(n.kind):i%4]}" opacity=".16" stroke="${colors[['a','b','c'].indexOf(n.kind)>=0?['a','b','c'].indexOf(n.kind):i%4]}" stroke-width="2"/>${svgWrap(n.label,x,y+4,15)}`;});
 } else if(v.type==='schema'){
   const sats=v.satellites||[]; const cx=500,cy=210; sats.forEach((s,i)=>{const ang=(Math.PI*2*i/sats.length)-Math.PI/2,x=cx+300*Math.cos(ang),y=cy+145*Math.sin(ang);body+=`<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="viz-edge"/><rect x="${x-105}" y="${y-32}" width="210" height="64" rx="14" class="viz-node"/>${svgWrap(s,x,y+4,22)}`;});body+=`<rect x="390" y="165" width="220" height="90" rx="18" class="viz-node accent"/>${svgWrap(v.center||'',500,214,22)}`;
 } else if(v.type==='compare'){
   const sides=[v.left||{},v.right||{}]; sides.forEach((s,i)=>{const x=i?525:55;body+=`<rect x="${x}" y="60" width="420" height="280" rx="20" fill="${colors[i]}" opacity=".09" stroke="${colors[i]}" stroke-width="2"/>${svgWrap(s.title||'',x+210,105,28,'middle','viz-compare-title')}`; (s.items||[]).forEach((it,j)=>body+=`<circle cx="${x+42}" cy="${150+j*48}" r="5" fill="${colors[i]}"/>${svgWrap(it,x+62,155+j*48,40,'start')}`);});
 } else if(v.type==='concept-map'){
   const items=v.items||[],cx=500,cy=210;items.forEach((it,i)=>{const ang=(Math.PI*2*i/Math.max(items.length,1))-Math.PI/2,x=cx+300*Math.cos(ang),y=cy+140*Math.sin(ang);body+=`<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="viz-edge"/><rect x="${x-105}" y="${y-30}" width="210" height="60" rx="14" class="viz-node"/>${svgWrap(it,x,y+4,22)}`;});body+=`<circle cx="${cx}" cy="${cy}" r="72" fill="var(--viz-1)" opacity=".13" stroke="var(--viz-1)" stroke-width="2"/>${svgWrap(v.title||l.title,cx,cy+4,18)}`;
 } else if(v.type==='funnel'){
   const items=v.items||[];items.forEach((it,i)=>{const frac=1-i*.16,w=760*frac,x=500-w/2,y=55+i*76;body+=`<path d="M ${x} ${y} L ${x+w} ${y} L ${x+w-42} ${y+58} L ${x+42} ${y+58} Z" fill="${colors[i%4]}" opacity="${.16+.07*i}" stroke="${colors[i%4]}"/>${svgWrap(`${it.label}${it.value!=null?' · '+it.value:''}`,500,y+33,28)}`;});
 } else if(v.type==='map'){
   const vals=v.regions||[.25,.55,.82,.40,.67,.30]; const polys=['100,100 300,75 330,190 120,210','340,70 555,90 545,205 330,190','570,95 830,80 875,190 545,205','130,225 335,205 350,350 105,335','350,220 550,215 565,350 350,350','580,215 875,205 840,345 565,350']; polys.forEach((p,i)=>body+=`<polygon points="${p}" fill="${colors[i%4]}" opacity="${.12+.55*(vals[i]||.3)}" stroke="var(--viz-border)" stroke-width="2"/>`);body+=svgWrap('Illustrative regions',500,385,30,'middle','viz-axis-label');
 } else return '';
 return `<figure class="concept-visual ${esc(v.figureClass||'')}"><div class="viz-heading"><span>${(v.grounding||[]).length?'Research-grounded figure':'Visual model'}</span><strong>${title}</strong></div><svg viewBox="0 0 1000 430" role="img" aria-label="${title}"><defs>${arrow}</defs>${body}</svg>${visualGroundingHtml(v)}<figcaption>${caption} <span>${(v.grounding||[]).length?'Adapted teaching redraw with source attribution.':'Conceptual illustration — not measured data unless stated.'}</span></figcaption></figure>`;
}

function lessonPage(slug){
 const l=lessonFor(slug); if(!l)return notFound(); const m=moduleFor(l.module);
 const detailSections = l.why ? `<section><h2>Why this matters</h2><p>${esc(l.why)}</p></section><section><h2>Intuition</h2><p>${esc(l.intuition)}</p></section>${visualHtml(l)}<section><h2>Deep explanation</h2><p>${esc(l.deepDive)}</p></section>${l.math?`<section><h2>Math / formal view</h2><div class="math">${mathHtml(l.math)}</div></section>`:''}${l.workedExample?`<section><h2>Worked example</h2><p>${esc(l.workedExample)}</p></section>`:''}${labHtml(l)}${l.production?`<section><h2>Ship it: production / system-design connection</h2><p>${esc(l.production)}</p></section>`:''}${l.commonMistakes?`<section class="warning"><h2>Common wrong answers</h2><ul>${l.commonMistakes.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`:''}${l.followUps?`<section><h2>Likely follow-ups</h2><ul>${l.followUps.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`:''}` : `<section><h2>What to know</h2><ul>${l.keyPoints.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`;
 return `<div class="breadcrumbs"><a href="#/">Home</a> / <a href="#/module/${m.slug}">${m.title}</a> / ${l.title}</div><section class="lesson-head"><div class="meta"><span class="pill ${l.priority}">${priorityLabel(l.priority)} priority</span><span class="pill ${l.status}">${l.status}</span>${doneBtn(l.slug)}</div><h1>${l.title}</h1><p class="lede">${esc(l.keyPoints.join(' · '))}</p></section><div class="answer-card"><h3>🎤 30–60 second interview answer</h3><p>${esc(l.interviewAnswer)}</p></div><div class="content-grid"><article class="article">${detailSections}</article><aside class="sidebar"><div class="side-card"><div class="kicker">Quick revision</div><ul>${l.keyPoints.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="side-card"><div class="kicker">Best resources</div>${resourcesHtml(l.resources)}</div></aside></div>`;
}
function readerContext(slug){
 const summary=lessonFor(slug); const m=summary?moduleFor(summary.module):null;
 const moduleLessons=summary?ATLAS.lessons.filter(l=>l.module===summary.module):[];
 const index=moduleLessons.findIndex(l=>l.slug===slug);
 return {
   module:m,
   previous:index>0?moduleLessons[index-1]:null,
   next:index>=0&&index<moduleLessons.length-1?moduleLessons[index+1]:null,
   index,
   total:moduleLessons.length,
   moduleDone:moduleLessons.filter(l=>state.done.has(l.slug)).length,
   lessonTitle:(value)=>lessonFor(value)?.title||value,
 };
}
function readerHelpers(){
 return {
   escape:esc,
   visualHtml,
   labHtml,
   resourcesHtml,
   mathHtml,
   doneButton:doneBtn,
 };
}
function chapterLoading(summary){
 return `<div class="breadcrumbs"><a href="#/">Home</a> / Loading</div><section class="chapter-loading" aria-live="polite"><div class="loading-line wide"></div><div class="loading-line"></div><div class="loading-block"></div><p>Loading ${esc(summary.title)}…</p></section>`;
}
function chapterLoadError(summary,error){
 return `<div class="breadcrumbs"><a href="#/">Home</a> / ${esc(summary.title)}</div><section class="chapter-load-error" role="alert"><div class="kicker">Chapter unavailable</div><h1>${esc(summary.title)}</h1><p>${esc(error?.message||'The lesson file could not be loaded.')}</p><button id="retryChapter" class="primary-btn">Retry chapter</button> <a class="ghost" href="#/module/${esc(summary.module)}">Return to module</a></section>`;
}
async function loadLessonPage(slug,version,refresh=false){
 document.body.dataset.view='lesson';
 const summary=lessonFor(slug);
 if(!summary){$('#app').innerHTML=notFound();return}
 $('#app').innerHTML=chapterLoading(summary);
 try{
   const chapter=await chapterLoader.load(slug,{refresh});
   if(version!==routeVersion||location.hash!==`#/lesson/${slug}`)return;
   $('#app').innerHTML=AtlasChapterReader.render(chapter,readerContext(slug),readerHelpers());
   localStorage.setItem('atlas-last-lesson',slug);
   wireCommon();queueMathTypeset($('#app'));updateReadingProgress();scrollTo(0,0);
 }catch(error){
   if(version!==routeVersion)return;
   $('#app').innerHTML=chapterLoadError(summary,error);
   const retry=$('#retryChapter');if(retry)retry.onclick=()=>loadLessonPage(slug,version,true);
 }
}
function roadmap(){
 const groups=[...new Set(ATLAS.modules.map(m=>m.group||'Curriculum'))];
 const html=groups.map(group=>{const mods=ATLAS.modules.filter(m=>(m.group||'Curriculum')===group);return `<section class="roadmap-group"><div class="group-heading"><div><div class="kicker">${group}</div><span>${mods.length} modules</span></div></div><div class="roadmap-modules">${mods.map(m=>{const ls=ATLAS.lessons.filter(l=>l.module===m.slug);const done=ls.filter(l=>state.done.has(l.slug)).length;const pct=ls.length?Math.round(100*done/ls.length):0;return `<details class="roadmap-module"><summary><span class="roadmap-icon">${m.icon}</span><span class="roadmap-summary"><strong>${m.title}</strong><small>${ls.length} lessons · ${done} complete</small></span><span class="roadmap-progress"><i style="width:${pct}%"></i></span><b>${pct}%</b><span class="roadmap-chevron">⌄</span></summary><ol>${ls.map((l,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><a href="#/lesson/${l.slug}">${l.title}</a><em class="pill ${l.priority}">${priorityLabel(l.priority)}</em>${state.done.has(l.slug)?'<strong class="roadmap-done">✓</strong>':''}</li>`).join('')}</ol></details>`}).join('')}</div></section>`}).join('');
 return `<div class="breadcrumbs"><a href="#/">Home</a><span>/</span><span>Roadmap</span></div><section class="page-hero"><div class="kicker">Complete learning map</div><h1>Roadmap</h1><p class="lede">Explore all ${ATLAS.modules.length} modules without scrolling through 394 lessons at once. Expand a module when you need its exact sequence.</p><div class="page-metrics"><span><strong>${ATLAS.lessons.length}</strong> lessons</span><span><strong>${ATLAS.modules.length}</strong> modules</span><span><strong>${progress()}%</strong> complete</span></div></section>${html}`;
}
function roleLessons(role, priority='all'){
 return ATLAS.lessons.filter(l=>(role==='all'||l.roles.includes('all')||l.roles.includes(role))&&(priority==='all'||l.priority===priority));
}
function pathsPage(){
 const paths=[
  ['ds','Data Scientist','Probability, inference, regression, classical ML, experimentation, causal inference, forecasting, product metrics and production-aware modeling.'],
  ['da','Data / Product Analyst','SQL, EDA, visualization, statistics, experimentation, funnels, cohorts, retention, forecasting and trustworthy metric design.'],
  ['as','Applied Scientist','Mathematical/statistical depth, causal inference, optimization, advanced ML/DL, domain modeling and rigorous evaluation.'],
  ['mle','ML Engineer','ML/DL fundamentals, software, data pipelines, serving, containers, monitoring, performance and system design.'],
  ['aie','AI / GenAI Engineer','Transformers, generative AI, retrieval, RAG, tools/agents, multimodal systems, evaluation, serving and safety.'],
  ['de','Data Engineer','SQL, data modeling, ETL/ELT, CDC, Spark, Kafka/Flink, distributed systems, orchestration, quality, cloud and reliability.'],
  ['cv','Computer Vision','Deep learning, CNN/ViT, reconstruction/segmentation, image metrics, generative vision and serving.']
 ];
 const cards=paths.map(([role,name,desc])=>{const very=roleLessons(role,'very-high');const high=roleLessons(role,'high');const ordered=[...very,...high].filter((x,i,a)=>a.findIndex(y=>y.slug===x.slug)===i);const done=ordered.filter(l=>state.done.has(l.slug)).length;const top=ordered.slice(0,5);return `<article class="role-path-card"><div class="role-path-head"><div><div class="kicker">${name}</div><h2>${ordered.length} priority topics</h2></div><div class="path-progress-badge"><strong>${done}</strong><span>done</span></div></div><p>${desc}</p><div class="role-path-preview">${top.map((l,i)=>`<a href="#/lesson/${l.slug}"><span>${String(i+1).padStart(2,'0')}</span><strong>${l.title}</strong><em>${priorityLabel(l.priority)}</em></a>`).join('')}</div><details class="role-path-more"><summary>View all ${ordered.length} topics</summary><div class="path-list">${ordered.slice(5).map((l,i)=>`<a href="#/lesson/${l.slug}"><span>${String(i+6).padStart(2,'0')}</span><strong>${l.title}</strong><em>${priorityLabel(l.priority)}</em></a>`).join('')}</div></details><button class="secondary-btn path-focus-btn" data-role="${role}" data-go-home>Use this role on home</button></article>`}).join('');
 return `<div class="breadcrumbs"><a href="#/">Home</a><span>/</span><span>Study paths</span></div><section class="page-hero"><div class="kicker">Role-based revision</div><h1>Study paths</h1><p class="lede">Choose the role you are targeting, then work through its highest-value topics in curriculum order. The full Atlas stays available at all times.</p></section><div class="role-path-grid">${cards}</div>`;
}
function quizCandidates(){return ATLAS.lessons.filter(l=>(state.role==='all'||l.roles.includes('all')||l.roles.includes(state.role))&&(state.priority==='all'||l.priority===state.priority));}
function randomQuizSlug(){const xs=quizCandidates();if(!xs.length)return null;let next=xs[Math.floor(Math.random()*xs.length)].slug;if(xs.length>1&&next===state.quizSlug)next=xs[(xs.findIndex(x=>x.slug===next)+1)%xs.length].slug;return next;}
function quizPage(){
 let xs=quizCandidates();if(!state.quizSlug||!xs.some(x=>x.slug===state.quizSlug))state.quizSlug=randomQuizSlug();const l=lessonFor(state.quizSlug);if(!l)return `<div class="empty">No practice questions match these filters.</div>`;const m=moduleFor(l.module);
 return `<div class="breadcrumbs"><a href="#/">Home</a><span>/</span><span>Practice</span></div><section class="page-hero compact"><div class="kicker">Mock interview mode</div><h1>Practice one question at a time</h1><p class="lede">Answer aloud before revealing the model answer. Use the follow-ups to push one level deeper.</p></section><div class="practice-toolbar"><label class="select-field"><span>Priority</span><select id="priority"><option value="all">All priorities</option><option value="very-high" ${state.priority==='very-high'?'selected':''}>Very high</option><option value="high" ${state.priority==='high'?'selected':''}>High</option><option value="medium" ${state.priority==='medium'?'selected':''}>Medium</option></select></label><div class="roles role-tabs">${ROLE_OPTIONS.map(([v,n])=>`<button class="role-btn ${state.role===v?'active':''}" data-role="${v}">${n}</button>`).join('')}</div><button id="newQuiz" class="primary-btn">New question</button></div><section class="quiz-card quiz-card-v2"><div class="quiz-top"><div class="meta"><span class="pill ${l.priority}">${priorityLabel(l.priority)}</span><span class="pill">${m.icon} ${m.title}</span></div><span>${xs.length} questions in filter</span></div><h2>${l.title}</h2><p class="quiz-prompt">Explain this as if an interviewer asked you directly. Aim for 30–60 seconds, then state one trade-off or failure mode.</p><button id="revealQuiz" class="primary-btn">Reveal strong answer</button><div id="quizAnswer" class="quiz-answer" hidden><div class="answer-card"><h3>Strong interview answer</h3><p>${esc(l.interviewAnswer)}</p></div><div class="quiz-answer-grid"><div><h3>Key points</h3><ul>${l.keyPoints.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div><h3>Follow-ups</h3><ul>${(l.followUpQuestions||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div><p><a href="#/lesson/${l.slug}">Open full lesson →</a></p></div></section>`;
}
function labsPage(){
 const labs=ATLAS.lessons.filter(l=>l.hasLab&&lessonVisible(l));
 return `<div class="breadcrumbs"><a href="#/">Home</a><span>/</span><span>Code labs</span></div><section class="page-hero compact"><div class="kicker">Build · Use · Verify</div><h1>Runnable code labs</h1><p class="lede">Implementation-first exercises for every lesson. Filter by role, priority, or topic instead of browsing all 394 at once.</p></section><section class="collection-toolbar"><label class="search-field"><span>⌕</span><input id="search" class="search" placeholder="Search labs…" value="${esc(state.query)}"></label><label class="select-field"><span>Priority</span><select id="priority"><option value="all">All priorities</option><option value="very-high" ${state.priority==='very-high'?'selected':''}>Very high</option><option value="high" ${state.priority==='high'?'selected':''}>High</option><option value="medium" ${state.priority==='medium'?'selected':''}>Medium</option></select></label><span class="result-count">${labs.length} labs</span></section><div class="roles role-tabs collection-roles">${ROLE_OPTIONS.map(([v,n])=>`<button class="role-btn ${state.role===v?'active':''}" data-role="${v}">${n}</button>`).join('')}</div><div class="lab-grid section collection-grid">${labs.map(l=>{const m=moduleFor(l.module);return `<article class="lab-card lab-card-v2"><div class="lab-card-icon">⌘</div><div class="meta"><span class="pill ${l.priority}">${priorityLabel(l.priority)}</span><span class="pill">${m.icon} ${m.title}</span></div><h3><a href="#/lesson/${l.slug}">${l.title}</a></h3><p>${esc(l.labGoal)}</p><div class="lab-actions"><a href="#/lesson/${l.slug}">Lesson →</a><a href="labs/${l.slug}/index.html" target="_blank">Open lab ↗</a></div></article>`}).join('')||'<div class="empty">No labs match these filters.</div>'}</div>`;
}
function visualsPage(){
 const ls=ATLAS.lessons.filter(l=>l.visualCount&&lessonVisible(l));
 const groups=ATLAS.modules.map(m=>{const xs=ls.filter(l=>l.module===m.slug);if(!xs.length)return '';return `<section class="visual-group"><div class="group-heading"><div><div class="kicker">${m.icon} ${m.title}</div><span>${xs.length} lessons</span></div></div><div class="visual-index-grid">${xs.map(l=>{const first=(l.visualSummaries||[])[0]||{};const types=[...new Set((l.visualSummaries||[]).map(v=>v.type).filter(Boolean))].join(' · ');return `<a class="visual-index-card visual-card-v2" href="#/lesson/${l.slug}"><div class="visual-card-top"><span class="pill">${esc(types||'visual')}</span><b>${l.visualCount}</b></div><strong>${l.title}</strong><small>${esc(first.title||'Concept visual')}</small><span>Open lesson →</span></a>`}).join('')}</div></section>`}).join('');
 return `<div class="breadcrumbs"><a href="#/">Home</a><span>/</span><span>Visual atlas</span></div><section class="page-hero compact"><div class="kicker">Research-grounded diagrams</div><h1>Visual atlas</h1><p class="lede">Browse source-attributed teaching figures by role and topic. Every figure is an Atlas redraw grounded in authoritative references.</p></section><section class="collection-toolbar"><label class="search-field"><span>⌕</span><input id="search" class="search" placeholder="Search visual topics…" value="${esc(state.query)}"></label><span class="result-count">${ls.length} lessons · ${ls.reduce((n,l)=>n+l.visualCount,0)} visuals</span></section><div class="roles role-tabs collection-roles">${ROLE_OPTIONS.map(([v,n])=>`<button class="role-btn ${state.role===v?'active':''}" data-role="${v}">${n}</button>`).join('')}</div>${groups||'<div class="empty">No visuals match these filters.</div>'}`;
}
function analyzerTopicCard(x,label=''){
 const jm=(x.jdMatches||[]).slice(0,4), rm=(x.resumeMatches||[]).slice(0,4);
 return `<article class="analyzer-topic"><div class="analyzer-topic-head"><div><div class="meta"><span class="pill ${x.lesson.priority}">${priorityLabel(x.lesson.priority)}</span>${label?`<span class="pill">${label}</span>`:''}<span class="pill">${esc(x.module.title)}</span></div><h3><a href="#/lesson/${x.lesson.slug}">${esc(x.lesson.title)}</a></h3></div><strong class="match-score">${x.final}</strong></div><div class="score-row"><span>JD</span><div class="score-track"><i style="width:${x.jdScore}%"></i></div><b>${x.jdScore}</b></div><div class="score-row resume"><span>Resume</span><div class="score-track"><i style="width:${x.resumeScore}%"></i></div><b>${x.resumeScore}</b></div>${jm.length?`<p class="match-terms"><strong>JD signals:</strong> ${jm.map(esc).join(' · ')}</p>`:''}${rm.length?`<p class="match-terms"><strong>Resume signals:</strong> ${rm.map(esc).join(' · ')}</p>`:''}</article>`;
}
function analyzerResultsHtml(r){
 if(!r)return '';
 const gaps=r.gaps.slice(0,10), overlap=r.overlap.slice(0,10), resume=r.resumeCritical.slice(0,10), rec=r.recommended.slice(0,24);
 return `<section class="analyzer-results section"><div class="analyzer-summary-grid"><article><span>Detected path</span><strong>${esc(r.roleLabel)}</strong><small>${r.guessedRole.score?`Auto-detected from JD signals: ${r.guessedRole.matched.map(esc).join(', ')||'broad role'}`:'No strong role title detected; using broad matching.'}</small></article><article><span>JD-critical topics</span><strong>${r.summary.jdStrong}</strong><small>Strong deterministic matches against the Atlas.</small></article><article><span>Resume + JD overlap</span><strong>${r.summary.covered}</strong><small>Topics strongly evidenced in both texts.</small></article><article><span>Potential review gaps</span><strong>${r.summary.gaps}</strong><small>JD-emphasized topics not strongly evidenced in the resume text.</small></article></div>
 <div class="analyzer-note"><strong>Interpretation:</strong> this is a keyword/phrase and curriculum-overlap analysis, not a skill assessment. A “gap” means “not strongly evidenced in the resume text,” not “you do not know it.”</div>
 <section><div class="section-title-row"><div><div class="kicker">Prioritized preparation</div><h2>What to study first</h2></div><button id="copyPrepPlan" class="ghost">Copy study plan</button></div><div class="analyzer-topic-grid">${rec.map(x=>analyzerTopicCard(x,x.gap?'Potential gap':x.overlap?'Overlap':'JD match')).join('')||'<div class="empty">No strong curriculum matches found. Add more detail from the job description.</div>'}</div></section>
 ${gaps.length?`<section class="section"><div class="kicker">Gap review</div><h2>JD-emphasized topics to verify</h2><p class="small">Review these first if they are genuinely new to you. If you already know them but simply omitted them from your resume, treat them as interview-refresh topics.</p><div class="analyzer-compact-grid">${gaps.map(x=>`<a href="#/lesson/${x.lesson.slug}"><strong>${esc(x.lesson.title)}</strong><span>${esc(x.module.title)} · JD ${x.jdScore}</span></a>`).join('')}</div></section>`:''}
 ${overlap.length?`<section class="section"><div class="kicker">Defend these</div><h2>Strong resume + JD overlap</h2><p class="small">These are especially likely to become resume-driven follow-up questions.</p><div class="analyzer-compact-grid">${overlap.map(x=>`<a href="#/lesson/${x.lesson.slug}"><strong>${esc(x.lesson.title)}</strong><span>${esc(x.module.title)} · JD ${x.jdScore} / Resume ${x.resumeScore}</span></a>`).join('')}</div></section>`:''}
 ${resume.length?`<section class="section"><div class="kicker">Resume defense</div><h2>Topics your resume can invite</h2><div class="analyzer-compact-grid">${resume.map(x=>`<a href="#/lesson/${x.lesson.slug}"><strong>${esc(x.lesson.title)}</strong><span>${esc(x.module.title)} · Resume ${x.resumeScore}</span></a>`).join('')}</div></section>`:''}
 <section class="section"><div class="kicker">Study schedule</div><h2>${r.plan.length}-day preparation path</h2><div class="prep-days">${r.plan.map(d=>`<article><span>Day ${d.day}</span>${d.topics.map(x=>`<a href="#/lesson/${x.lesson.slug}">${esc(x.lesson.title)}</a>`).join('')}</article>`).join('')}</div></section></section>`;
}
function analyzerPage(){
 const status=state.analyzerStatus?`<div class="analyzer-status">${esc(state.analyzerStatus)}</div>`:'';
 return `<div class="breadcrumbs"><a href="#/">Home</a> / Resume + Job Description</div><section class="lesson-head analyzer-head"><div class="kicker">Private · browser-side · deterministic</div><h1>Resume + JD preparation mapper</h1><p class="lede">Upload or paste a resume and job description. The Atlas maps both texts to the curriculum, highlights likely interview topics, separates overlap from potential gaps, and builds a study path. No resume or job-description text is sent to an API or stored by the Atlas.</p></section>
 <div class="privacy-card"><strong>Privacy:</strong> analysis runs in your browser. PDF text extraction uses PDF.js loaded from cdnjs; the selected document itself is processed locally and is not uploaded to an Atlas backend. If you prefer, paste plain text instead. Inputs are not saved to localStorage and disappear when the page is reloaded.</div>
 <section class="analyzer-input-grid section"><article class="analyzer-input-card"><div class="section-title-row"><div><div class="kicker">1 · Evidence</div><h2>Resume</h2></div><label class="file-button">Upload PDF/TXT<input id="resumeFile" type="file" accept=".pdf,.txt,.md,text/plain,application/pdf"></label></div><p class="small">${state.resumeFileName?`Loaded: ${esc(state.resumeFileName)}`:'Upload a PDF/TXT or paste extracted text.'}</p><textarea id="resumeText" class="analyzer-textarea" placeholder="Paste resume text here…">${esc(state.resumeText)}</textarea></article>
 <article class="analyzer-input-card"><div class="section-title-row"><div><div class="kicker">2 · Target</div><h2>Job description</h2></div><label class="file-button">Upload PDF/TXT<input id="jdFile" type="file" accept=".pdf,.txt,.md,text/plain,application/pdf"></label></div><p class="small">Paste the full description if possible, including requirements, responsibilities and preferred qualifications.</p><textarea id="jdText" class="analyzer-textarea" placeholder="Paste job description here…">${esc(state.jdText)}</textarea></article></section>
 <section class="analyzer-controls"><label><span>Role weighting</span><select id="analyzerRole"><option value="auto" ${state.analyzerRole==='auto'?'selected':''}>Auto-detect from JD</option>${ROLE_OPTIONS.filter(([v])=>v!=='all').map(([v,n])=>`<option value="${v}" ${state.analyzerRole===v?'selected':''}>${n}</option>`).join('')}</select></label><label><span>Days available</span><input id="analyzerDays" type="number" min="1" max="14" value="${state.analyzerDays}"></label><div class="analyzer-actions"><button id="runAnalyzer" class="primary-btn">Analyze & build prep path</button><button id="clearAnalyzer" class="ghost">Clear</button></div></section>${status}${analyzerResultsHtml(state.analyzerResult)}`;
}

function resourcePage(){
 const all=Object.values(ATLAS.resources);
 const kinds=[...new Set(all.map(r=>r.kind))].sort();
 const q=state.resourceQuery.trim().toLowerCase();
 const vals=all.filter(r=>(state.resourceKind==='all'||r.kind===state.resourceKind)&&(!q||`${r.title} ${r.provider} ${r.kind} ${r.level} ${r.why}`.toLowerCase().includes(q)));
 return `<div class="breadcrumbs"><a href="#/">Home</a><span>/</span><span>Resources</span></div><section class="page-hero compact"><div class="kicker">Curated source ladder</div><h1>Best external resources</h1><p class="lede">Primary courses, original papers, canonical books and official documentation—organized so you can go deeper without searching from scratch.</p></section><section class="collection-toolbar resource-toolbar"><label class="search-field"><span>⌕</span><input id="resourceSearch" class="search" placeholder="Search resources, providers, topics…" value="${esc(state.resourceQuery)}"></label><label class="select-field"><span>Type</span><select id="resourceKind"><option value="all">All types</option>${kinds.map(k=>`<option value="${esc(k)}" ${state.resourceKind===k?'selected':''}>${esc(k)}</option>`).join('')}</select></label><span class="result-count">${vals.length} resources</span></section><div class="resource-grid section collection-grid">${vals.map(r=>`<article class="resource-card resource-card-v2"><div class="resource-card-top"><div class="tier">${esc(r.kind)}</div><span>${esc(r.level)}</span></div><h3><a href="${r.url}" target="_blank" rel="noopener">${r.title} ↗</a></h3><p class="resource-provider">${esc(r.provider)}</p><p>${r.why}</p></article>`).join('')||'<div class="empty">No resources match these filters.</div>'}</div>`;
}
function notFound(){return '<div class="empty"><h2>Page not found</h2><a href="#/">Return home</a></div>'}
let commandIndex=0;
function atlasSearchResults(query=''){
 const q=query.trim().toLowerCase();
 if(!q){
   return nextStudyLessons(6).map(l=>({type:'lesson',title:l.title,subtitle:moduleFor(l.module)?.title||'',href:`#/lesson/${l.slug}`,icon:'→'}));
 }
 const tokens=q.split(/\s+/).filter(Boolean);
 const lessonMatches=ATLAS.lessons.map(l=>{
   const m=moduleFor(l.module);const hay=`${l.title} ${m?.title||''} ${l.description||''} ${(l.keyPoints||[]).join(' ')} ${l.interviewAnswer||''}`.toLowerCase();
   const score=tokens.reduce((n,t)=>n+(l.title.toLowerCase().includes(t)?5:0)+((m?.title||'').toLowerCase().includes(t)?2:0)+(hay.includes(t)?1:0),0);
   return {score,type:'lesson',title:l.title,subtitle:m?.title||'',href:`#/lesson/${l.slug}`,icon:'→'};
 }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,8);
 const moduleMatches=ATLAS.modules.map(m=>{const hay=`${m.title} ${m.description||''}`.toLowerCase();const score=tokens.reduce((n,t)=>n+(m.title.toLowerCase().includes(t)?6:0)+(hay.includes(t)?1:0),0);return {score,type:'module',title:m.title,subtitle:'Module',href:`#/module/${m.slug}`,icon:m.icon};}).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,4);
 return [...moduleMatches,...lessonMatches].sort((a,b)=>b.score-a.score).slice(0,10);
}
function renderGlobalSearch(query=''){
 const host=$('#globalSearchResults');if(!host)return;
 const results=atlasSearchResults(query);commandIndex=Math.min(commandIndex,Math.max(0,results.length-1));
 const heading=query.trim()?'Search results':'Continue learning';
 host.innerHTML=`<div class="command-section-title">${heading}<span>${results.length}</span></div>${results.map((r,i)=>`<a class="command-item ${i===commandIndex?'active':''}" data-command-index="${i}" href="${r.href}"><span class="command-item-icon">${r.icon}</span><span><strong>${esc(r.title)}</strong><small>${esc(r.subtitle)}</small></span><kbd>↵</kbd></a>`).join('')||'<div class="command-empty">No results. Try a broader term.</div>'}`;
 host.querySelectorAll('.command-item').forEach(el=>{el.addEventListener('mouseenter',()=>{commandIndex=Number(el.dataset.commandIndex);host.querySelectorAll('.command-item').forEach(x=>x.classList.toggle('active',Number(x.dataset.commandIndex)===commandIndex))});el.addEventListener('click',closeGlobalSearch)});
}
function openGlobalSearch(seed=''){
 const overlay=$('#searchOverlay'),input=$('#globalSearchInput');if(!overlay||!input)return;
 overlay.hidden=false;document.body.classList.add('search-open');commandIndex=0;input.value=seed;renderGlobalSearch(seed);setTimeout(()=>input.focus(),20);
}
function closeGlobalSearch(){const overlay=$('#searchOverlay');if(!overlay)return;overlay.hidden=true;document.body.classList.remove('search-open');}
function updateActiveNav(){
 const routeName=location.hash.replace(/^#\//,'').split('/')[0]||'home';
 document.querySelectorAll('#mainNav [data-nav]').forEach(a=>{if(a.dataset.nav===routeName)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
}
function updateReadingProgress(){
 const bar=$('#readingProgressBar');if(!bar)return;
 const doc=document.documentElement;const max=Math.max(1,doc.scrollHeight-window.innerHeight);const pct=Math.max(0,Math.min(1,window.scrollY/max));bar.style.transform=`scaleX(${pct})`;
}
let chapterTocObserver=null;
function wireChapterToc(){
 chapterTocObserver?.disconnect();
 chapterTocObserver=null;
 const controls=[...document.querySelectorAll('.chapter-toc [data-section-target]')];
 if(!controls.length)return;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const targets=controls.map(control=>document.getElementById(control.dataset.sectionTarget)).filter(Boolean);
 const setActive=(id)=>controls.forEach(control=>{if(control.dataset.sectionTarget===id)control.setAttribute('aria-current','true');else control.removeAttribute('aria-current')});
 controls.forEach(control=>control.onclick=()=>{const target=document.getElementById(control.dataset.sectionTarget);if(!target)return;target.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});setActive(control.dataset.sectionTarget)});
 if(!targets.length)return;
 setActive(targets[0].id);
 if(!('IntersectionObserver' in window))return;
 chapterTocObserver=new IntersectionObserver((entries)=>{
   const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
   if(visible[0])setActive(visible[0].target.id);
 },{rootMargin:'-96px 0px -64% 0px',threshold:[0,.05,.25]});
 targets.forEach(target=>chapterTocObserver.observe(target));
}
let filterTimer=0;
function scheduleFilterRender(selector){clearTimeout(filterTimer);filterTimer=setTimeout(()=>{route(false);setTimeout(()=>{const el=$(selector);if(el){el.focus();try{el.setSelectionRange(el.value.length,el.value.length)}catch{}}},0)},140)}
function wireCommon(){
 wireDone();
 wireChapterToc();
 document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=async()=>{const el=document.getElementById(b.dataset.copy);if(!el)return;try{await navigator.clipboard.writeText(el.textContent);const old=b.textContent;b.textContent='Copied';setTimeout(()=>b.textContent=old,900)}catch{}});
 const nq=$('#newQuiz'); if(nq)nq.onclick=()=>{state.quizSlug=randomQuizSlug();route(false)};
 const rq=$('#revealQuiz'); if(rq)rq.onclick=()=>{const a=$('#quizAnswer');a.hidden=!a.hidden;rq.textContent=a.hidden?'Reveal answer':'Hide answer'};
 const resumeText=$('#resumeText'); if(resumeText)resumeText.oninput=e=>{state.resumeText=e.target.value;state.analyzerResult=null};
 const jdText=$('#jdText'); if(jdText)jdText.oninput=e=>{state.jdText=e.target.value;state.analyzerResult=null};
 const analyzerDays=$('#analyzerDays'); if(analyzerDays)analyzerDays.oninput=e=>{state.analyzerDays=Math.max(1,Math.min(14,Number(e.target.value)||5))};
 const analyzerRole=$('#analyzerRole'); if(analyzerRole)analyzerRole.onchange=e=>{state.analyzerRole=e.target.value;state.analyzerResult=null};
 const loadAnalyzerFile=async(kind,file)=>{if(!file)return;state.analyzerStatus=`Reading ${file.name} locally…`;route(false);try{const text=await AtlasAnalyzer.extractFile(file,(page,total)=>{state.analyzerStatus=`Reading ${file.name} locally… page ${page}/${total}`});if(kind==='resume'){state.resumeText=text;state.resumeFileName=file.name}else{state.jdText=text;state.jdFileName=file.name}state.analyzerStatus=`Loaded ${file.name}. Review the extracted text, then analyze.`}catch(err){state.analyzerStatus=err.message||String(err)}route(false)};
 const resumeFile=$('#resumeFile'); if(resumeFile)resumeFile.onchange=e=>loadAnalyzerFile('resume',e.target.files&&e.target.files[0]);
 const jdFile=$('#jdFile'); if(jdFile)jdFile.onchange=e=>loadAnalyzerFile('jd',e.target.files&&e.target.files[0]);
 const runAnalyzer=$('#runAnalyzer'); if(runAnalyzer)runAnalyzer.onclick=()=>{if(state.resumeText.trim().length<80||state.jdText.trim().length<80){state.analyzerStatus='Add more resume and job-description text before analyzing (at least a short paragraph for each).';state.analyzerResult=null;route(false);return}state.analyzerResult=AtlasAnalyzer.analyze(ATLAS,state.resumeText,state.jdText,{days:state.analyzerDays,role:state.analyzerRole});state.analyzerStatus='Analysis complete. Scores are deterministic relevance signals, not skill ratings.';route(false)};
 const clearAnalyzer=$('#clearAnalyzer'); if(clearAnalyzer)clearAnalyzer.onclick=()=>{state.resumeText='';state.jdText='';state.analyzerResult=null;state.analyzerStatus='';state.resumeFileName='';state.jdFileName='';route(false)};
 const copyPrepPlan=$('#copyPrepPlan'); if(copyPrepPlan)copyPrepPlan.onclick=async()=>{if(!state.analyzerResult)return;try{await navigator.clipboard.writeText(AtlasAnalyzer.planText(state.analyzerResult));const old=copyPrepPlan.textContent;copyPrepPlan.textContent='Copied';setTimeout(()=>copyPrepPlan.textContent=old,900)}catch{}};
 const resetCurriculumFilters=$('#resetCurriculumFilters'); if(resetCurriculumFilters)resetCurriculumFilters.onclick=()=>{state.role='all';state.priority='all';state.query='';save();route(false)};
 document.querySelectorAll('[data-open-search]').forEach(b=>b.onclick=()=>openGlobalSearch());
 const resourceSearch=$('#resourceSearch'); if(resourceSearch)resourceSearch.oninput=e=>{state.resourceQuery=e.target.value;scheduleFilterRender('#resourceSearch')};
 const resourceKind=$('#resourceKind'); if(resourceKind)resourceKind.onchange=e=>{state.resourceKind=e.target.value;route(false)};
 const s=$('#search'); if(s)s.oninput=e=>{state.query=e.target.value;scheduleFilterRender('#search')}; const p=$('#priority'); if(p)p.onchange=e=>{state.priority=e.target.value;route(false)}; document.querySelectorAll('[data-role]').forEach(b=>b.onclick=()=>{state.role=b.dataset.role;save();if(b.hasAttribute('data-go-home'))location.hash='#/';else route(false)});
}
function route(scroll=true){const version=++routeVersion;const h=location.hash.replace(/^#\//,'').split('/');document.body.dataset.view=h[0]||'home';if(h[0]==='lesson'){loadLessonPage(h[1],version);return}let view;if(!h[0])view=home();else if(h[0]==='module')view=modulePage(h[1]);else if(h[0]==='roadmap')view=roadmap();else if(h[0]==='paths')view=pathsPage();else if(h[0]==='analyzer')view=analyzerPage();else if(h[0]==='quiz')view=quizPage();else if(h[0]==='labs')view=labsPage();else if(h[0]==='resources')view=resourcePage();else if(h[0]==='visuals')view=visualsPage();else view=notFound();$('#app').innerHTML=view;wireCommon();updateActiveNav();queueMathTypeset($('#app'));if(scroll)scrollTo(0,0);updateReadingProgress()}
window.addEventListener('hashchange',()=>{closeGlobalSearch();route()});
window.addEventListener('scroll',updateReadingProgress,{passive:true});
const menuBtn=$('#menuBtn'), mainNav=$('#mainNav');if(menuBtn&&mainNav){menuBtn.onclick=()=>{const open=mainNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'✕':'☰'};mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰'}));}
const themeBtn=$('#themeBtn');function updateThemeBtn(){if(themeBtn){const dark=document.documentElement.dataset.theme==='dark';themeBtn.textContent=dark?'☀':'☾';themeBtn.setAttribute('aria-label',dark?'Use light theme':'Use dark theme')}}updateThemeBtn();if(themeBtn)themeBtn.onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('atlas-theme',n);updateThemeBtn();window.AtlasBackground?.syncTheme?.()};
const searchBtn=$('#searchBtn'),searchOverlay=$('#searchOverlay'),globalSearchInput=$('#globalSearchInput');if(searchBtn)searchBtn.onclick=()=>openGlobalSearch();if(searchOverlay)searchOverlay.querySelectorAll('[data-search-close]').forEach(x=>x.onclick=closeGlobalSearch);if(globalSearchInput){globalSearchInput.oninput=e=>{commandIndex=0;renderGlobalSearch(e.target.value)};globalSearchInput.onkeydown=e=>{const items=[...document.querySelectorAll('.command-item')];if(e.key==='ArrowDown'){e.preventDefault();commandIndex=Math.min(items.length-1,commandIndex+1);renderGlobalSearch(e.currentTarget.value)}else if(e.key==='ArrowUp'){e.preventDefault();commandIndex=Math.max(0,commandIndex-1);renderGlobalSearch(e.currentTarget.value)}else if(e.key==='Enter'&&items[commandIndex]){e.preventDefault();items[commandIndex].click()}}}
document.addEventListener('keydown',e=>{const target=e.target;const typing=target&&(['INPUT','TEXTAREA','SELECT'].includes(target.tagName)||target.isContentEditable);if(e.key==='Escape'&&!$('#searchOverlay')?.hidden){closeGlobalSearch();return}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openGlobalSearch();return}if(e.key==='/'&&!typing&&!e.metaKey&&!e.ctrlKey&&!e.altKey){e.preventDefault();openGlobalSearch()}});
route();
