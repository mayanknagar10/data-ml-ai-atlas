const $ = (s) => document.querySelector(s);
const state = {
  role: localStorage.getItem('atlas-role') || 'all',
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
};
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function save(){localStorage.setItem('atlas-done',JSON.stringify([...state.done]));localStorage.setItem('atlas-role',state.role)}
function priorityLabel(p){return {'very-high':'Very high','high':'High','medium':'Medium'}[p]||p}
function moduleFor(slug){return ATLAS.modules.find(m=>m.slug===slug)}
function lessonFor(slug){return ATLAS.lessons.find(l=>l.slug===slug)}
function lessonVisible(l){
  const q=state.query.toLowerCase();
  const roleOk=state.role==='all'||l.roles.includes('all')||l.roles.includes(state.role);
  const pOk=state.priority==='all'||l.priority===state.priority;
  const qOk=!q||(`${l.title} ${l.interviewAnswer} ${l.keyPoints.join(' ')}`).toLowerCase().includes(q);
  return roleOk&&pOk&&qOk;
}
function progress(){return Math.round(100*state.done.size/ATLAS.lessons.length)}
function deepCount(){return ATLAS.lessons.filter(l=>l.status==='deep-complete').length}
function labCount(){return ATLAS.lessons.filter(l=>l.lab).length}
function visualCount(){return ATLAS.lessons.filter(l=>l.visual).length}
function doneBtn(slug){const d=state.done.has(slug);return `<button class="check ${d?'done':''}" data-done="${slug}" title="Mark complete">${d?'✓':''}</button>`}
function wireDone(){document.querySelectorAll('[data-done]').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();const s=b.dataset.done;state.done.has(s)?state.done.delete(s):state.done.add(s);save();route();});}
function home(){
 const featured=ATLAS.lessons.filter(l=>l.featured&&lessonVisible(l)).slice(0,12);
 const groups=[...new Set(ATLAS.modules.map(m=>m.group||'Curriculum'))];
 const moduleCards=groups.map(g=>{const cards=ATLAS.modules.filter(m=>(m.group||'Curriculum')===g).map(m=>{const ls=ATLAS.lessons.filter(l=>l.module===m.slug);const d=ls.filter(l=>state.done.has(l.slug)).length;return `<article class="module-card" onclick="location.hash='#/module/${m.slug}'"><div class="module-icon">${m.icon}</div><h3>${m.title}</h3><p>${m.description}</p><div class="meta"><span class="pill">${ls.length} topics</span><span class="pill">${d}/${ls.length} done</span></div><div class="progress" style="margin-top:12px"><span style="width:${ls.length?100*d/ls.length:0}%"></span></div></article>`}).join('');return `<div class="curriculum-group"><div class="kicker">${g}</div><div class="module-grid">${cards}</div></div>`}).join('');
 return `<section class="hero"><div><div class="kicker">Interview-first · data-science broad · engineering-deep</div><h1>Know the stack.<br>Defend the choices.</h1><p class="lede">A broad learning and interview atlas for Data Science, Analytics, Machine Learning, Data Engineering, Applied Science and AI—from statistical inference and forecasting to distributed systems, deep learning, retrieval and production.</p><div class="hero-actions"><a class="primary-btn" href="#/analyzer">Match resume to a job</a><a class="ghost" href="#/paths">Browse study paths</a></div></div><aside class="hero-stat"><div class="big">${ATLAS.lessons.length}</div><div class="small">deep interview topics across ${ATLAS.modules.length} modules</div><div class="mini-stats"><span>${deepCount()} deep-complete</span><span>${labCount()} runnable labs</span><span>${visualCount()} original visuals</span><span>${Object.keys(ATLAS.resources).length} curated sources</span></div><hr style="border:0;border-top:1px solid var(--line);margin:18px 0"><div class="big">${progress()}%</div><div class="small">your progress, saved locally in this browser</div></aside></section>
 <section><div class="toolbar"><input id="search" class="search" placeholder="Search topics, e.g. MSE, RAG, Kafka..." value="${esc(state.query)}"><select id="priority"><option value="all">All priorities</option><option value="very-high" ${state.priority==='very-high'?'selected':''}>Very high</option><option value="high" ${state.priority==='high'?'selected':''}>High</option><option value="medium" ${state.priority==='medium'?'selected':''}>Medium</option></select><div class="roles">${[['all','All'],['ds','Data Scientist'],['da','Data / Product Analyst'],['as','Applied Scientist'],['mle','ML Engineer'],['aie','AI Engineer'],['de','Data Engineer'],['cv','Computer Vision']].map(([v,n])=>`<button class="role-btn ${state.role===v?'active':''}" data-role="${v}">${n}</button>`).join('')}</div></div></section>
 <section><h2>Curriculum</h2>${moduleCards}</section>
 <section class="section"><div class="kicker">Sprint list</div><h2>High-frequency interview topics</h2><div class="sprint">${featured.map(l=>`<div class="sprint-card"><div class="meta"><span class="pill ${l.priority}">${priorityLabel(l.priority)}</span>${doneBtn(l.slug)}</div><h3 style="margin-top:10px"><a href="#/lesson/${l.slug}">${l.title}</a></h3><p class="small">${esc(l.interviewAnswer)}</p></div>`).join('')||'<div class="empty">No topics match the current filters.</div>'}</div></section>`;
}
function modulePage(slug){
 const m=moduleFor(slug); if(!m)return notFound();
 const ls=ATLAS.lessons.filter(l=>l.module===slug&&lessonVisible(l));
 return `<div class="breadcrumbs"><a href="#/">Home</a> / ${m.title}</div><section class="lesson-head"><div class="kicker">${m.icon} Module</div><h1>${m.title}</h1><p class="lede">${m.description}</p></section><div class="toolbar"><input id="search" class="search" placeholder="Filter this module" value="${esc(state.query)}"><select id="priority"><option value="all">All priorities</option><option value="very-high" ${state.priority==='very-high'?'selected':''}>Very high</option><option value="high" ${state.priority==='high'?'selected':''}>High</option><option value="medium" ${state.priority==='medium'?'selected':''}>Medium</option></select><div></div></div><section class="lesson-list">${ls.map(l=>`<div class="lesson-row"><div><a class="lesson-title" href="#/lesson/${l.slug}">${l.title}</a><p>${esc(l.interviewAnswer)}</p><div class="meta" style="margin-top:8px"><span class="pill ${l.priority}">${priorityLabel(l.priority)}</span><span class="pill ${l.status}">${l.status}</span></div></div>${doneBtn(l.slug)}</div>`).join('')||'<div class="empty">No lessons match your filters.</div>'}</section>`;
}
function resourcesHtml(ids){return ids.map(id=>{const r=ATLAS.resources[id]; if(!r)return'';return `<a class="resource" href="${r.url}" target="_blank" rel="noopener"><strong>${r.title}</strong><span>${r.provider}</span><span class="kind">${r.kind} · ${r.level}</span></a>`}).join('')}
function codeBlock(title,subtitle,code,idx){return `<div class="code-step"><div class="code-toolbar"><div><strong>${title}</strong><span>${subtitle}</span></div><button class="copy-btn" data-copy="code-${idx}">Copy</button></div><pre class="code"><code id="code-${idx}">${esc(code)}</code></pre></div>`}
function labHtml(l){if(!l.lab)return l.code?`<section><h2>Quick code / pseudocode</h2><pre class="code"><code>${esc(l.code)}</code></pre></section>`:'';const x=l.lab;const ship=x.shipIt||l.production||'Turn the learning artifact into a tested module with explicit inputs, outputs and failure handling.';return `<section class="code-lab-web"><div class="lab-title-row"><div><div class="kicker">Runnable code lab</div><h2>Build it → Use it → Ship it → Verify it</h2><p>${esc(x.goal||'')}</p></div><a class="lab-file-link" href="labs/${l.slug}/index.html" target="_blank">Open lab files ↗</a></div>${codeBlock('1 · Build it','first principles',x.buildIt,`${l.slug}-build`)}${codeBlock('2 · Use it','library / practical API',x.useIt,`${l.slug}-use`)}<div class="ship-card"><div class="kicker">3 · Ship it</div><p>${esc(ship)}</p></div>${codeBlock('4 · Verify it','sanity checks / assertions',x.verifyIt,`${l.slug}-verify`)}</section>`}
function svgWrap(text,x,y,max=18,anchor='middle',cls='viz-text'){
 const words=String(text).split(/\s+/); let lines=[''];
 words.forEach(w=>{const last=lines.length-1; const cand=(lines[last]+' '+w).trim(); if(cand.length>max && lines[last]) lines.push(w); else lines[last]=cand;});
 const start=y-((lines.length-1)*7); return `<text x="${x}" y="${start}" text-anchor="${anchor}" class="${cls}">${lines.map((ln,i)=>`<tspan x="${x}" dy="${i?14:0}">${esc(ln)}</tspan>`).join('')}</text>`;
}
function visualHtml(l){
 const v=l.visual; if(!v)return '';
 const title=esc(v.title||l.title); const caption=esc(v.caption||'Conceptual illustration.');
 const colors=['var(--viz-1)','var(--viz-2)','var(--viz-3)','var(--viz-4)'];
 const arrow='<marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="var(--viz-line)"/></marker>';
 let body='';
 if(v.type==='flow'){
   const items=v.items||[]; const vertical=v.orientation==='vertical';
   if(vertical){const h=58,gap=20,x=300,w=400;items.forEach((it,i)=>{const y=45+i*(h+gap); if(i)body+=`<line x1="500" y1="${y-gap}" x2="500" y2="${y-6}" class="viz-edge" marker-end="url(#arrow)"/>`;body+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" class="viz-node ${v.accent===i?'accent':''}"/>${svgWrap(it,500,y+33,34)}`;});}
   else {const n=Math.max(items.length,1), margin=45, gap=26, w=Math.min(150,(1000-2*margin-gap*(n-1))/n), y=145,h=100;items.forEach((it,i)=>{const x=margin+i*(w+gap); if(i)body+=`<line x1="${x-gap+6}" y1="${y+h/2}" x2="${x-7}" y2="${y+h/2}" class="viz-edge" marker-end="url(#arrow)"/>`;body+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" class="viz-node ${v.accent===i?'accent':''}"/>${svgWrap(it,x+w/2,y+54,Math.max(12,Math.floor(w/8)))}`;});}
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
   const nodes=v.nodes||[],edges=v.edges||[]; const by=Object.fromEntries(nodes.map(n=>[n.id,n])); edges.forEach(e=>{const a=by[e[0]],b=by[e[1]];if(!a||!b)return;body+=`<line x1="${80+a.x*840}" y1="${40+a.y*330}" x2="${80+b.x*840}" y2="${40+b.y*330}" class="viz-edge" ${v.directed?'marker-end="url(#arrow)"':''}/>`;});nodes.forEach((n,i)=>{const x=80+n.x*840,y=40+n.y*330;body+=`<circle cx="${x}" cy="${y}" r="34" fill="${colors[['a','b','c'].indexOf(n.kind)>=0?['a','b','c'].indexOf(n.kind):i%4]}" opacity=".16" stroke="${colors[['a','b','c'].indexOf(n.kind)>=0?['a','b','c'].indexOf(n.kind):i%4]}" stroke-width="2"/>${svgWrap(n.label,x,y+4,15)}`;});
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
 return `<figure class="concept-visual"><div class="viz-heading"><span>Visual model</span><strong>${title}</strong></div><svg viewBox="0 0 1000 430" role="img" aria-label="${title}"><defs>${arrow}</defs>${body}</svg><figcaption>${caption} <span>Conceptual illustration — not measured data unless stated.</span></figcaption></figure>`;
}

function lessonPage(slug){
 const l=lessonFor(slug); if(!l)return notFound(); const m=moduleFor(l.module);
 const detailSections = l.why ? `<section><h2>Why this matters</h2><p>${esc(l.why)}</p></section><section><h2>Intuition</h2><p>${esc(l.intuition)}</p></section>${visualHtml(l)}<section><h2>Deep explanation</h2><p>${esc(l.deepDive)}</p></section>${l.math?`<section><h2>Math / formal view</h2><div class="math">${esc(l.math)}</div></section>`:''}${l.workedExample?`<section><h2>Worked example</h2><p>${esc(l.workedExample)}</p></section>`:''}${labHtml(l)}${l.production?`<section><h2>Ship it: production / system-design connection</h2><p>${esc(l.production)}</p></section>`:''}${l.commonMistakes?`<section class="warning"><h2>Common wrong answers</h2><ul>${l.commonMistakes.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`:''}${l.followUps?`<section><h2>Likely follow-ups</h2><ul>${l.followUps.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`:''}` : `<section><h2>What to know</h2><ul>${l.keyPoints.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`;
 return `<div class="breadcrumbs"><a href="#/">Home</a> / <a href="#/module/${m.slug}">${m.title}</a> / ${l.title}</div><section class="lesson-head"><div class="meta"><span class="pill ${l.priority}">${priorityLabel(l.priority)} priority</span><span class="pill ${l.status}">${l.status}</span>${doneBtn(l.slug)}</div><h1>${l.title}</h1><p class="lede">${esc(l.keyPoints.join(' · '))}</p></section><div class="answer-card"><h3>🎤 30–60 second interview answer</h3><p>${esc(l.interviewAnswer)}</p></div><div class="content-grid"><article class="article">${detailSections}</article><aside class="sidebar"><div class="side-card"><div class="kicker">Quick revision</div><ul>${l.keyPoints.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="side-card"><div class="kicker">Best resources</div>${resourcesHtml(l.resources)}</div></aside></div>`;
}
function roadmap(){
 return `<div class="breadcrumbs"><a href="#/">Home</a> / Roadmap</div><section class="lesson-head"><div class="kicker">Complete map</div><h1>Roadmap</h1><p class="lede">Use the priorities as a triage system. “Very high” means you should be able to answer without warming up.</p></section>${ATLAS.modules.map(m=>{const ls=ATLAS.lessons.filter(l=>l.module===m.slug);return `<section class="section"><h2>${m.icon} ${m.title}</h2><ol class="toc-list">${ls.map(l=>`<li><a href="#/lesson/${l.slug}">${l.title}</a> <span class="pill ${l.priority}">${priorityLabel(l.priority)}</span></li>`).join('')}</ol></section>`}).join('')}`;
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
 const cards=paths.map(([role,name,desc])=>{
   const very=roleLessons(role,'very-high'); const high=roleLessons(role,'high');
   const ordered=[...very,...high].filter((x,i,a)=>a.findIndex(y=>y.slug===x.slug)===i);
   return `<article class="path-card"><div class="kicker">${name}</div><h2>${ordered.length} topic path</h2><p>${desc}</p><div class="path-list">${ordered.map((l,i)=>`<a href="#/lesson/${l.slug}"><span>${String(i+1).padStart(2,'0')}</span><strong>${l.title}</strong><em>${priorityLabel(l.priority)}</em></a>`).join('')}</div></article>`;
 }).join('');
 return `<div class="breadcrumbs"><a href="#/">Home</a> / Study paths</div><section class="lesson-head"><div class="kicker">Role-based revision</div><h1>Study paths</h1><p class="lede">This is intentionally broader than any single resume. Use role paths to prioritize, but the full curriculum remains available when you need to move between analytics, statistics, ML, engineering and AI.</p></section><div class="path-grid section">${cards}</div>`;
}
function quizCandidates(){
 return ATLAS.lessons.filter(l=>(state.role==='all'||l.roles.includes('all')||l.roles.includes(state.role))&&(state.priority==='all'||l.priority===state.priority));
}
function randomQuizSlug(){
 const xs=quizCandidates(); if(!xs.length)return null;
 let next=xs[Math.floor(Math.random()*xs.length)].slug;
 if(xs.length>1 && next===state.quizSlug) next=xs[(xs.findIndex(x=>x.slug===next)+1)%xs.length].slug;
 return next;
}
function quizPage(){
 let xs=quizCandidates();
 if(!state.quizSlug || !xs.some(x=>x.slug===state.quizSlug)) state.quizSlug=randomQuizSlug();
 const l=lessonFor(state.quizSlug);
 if(!l)return `<div class="empty">No practice questions match these filters.</div>`;
 const m=moduleFor(l.module);
 return `<div class="breadcrumbs"><a href="#/">Home</a> / Practice</div><section class="lesson-head"><div class="kicker">Mock interview mode</div><h1>Practice one question at a time</h1><p class="lede">Say your answer aloud before revealing the model answer. Then use the follow-ups to push one level deeper.</p></section>
 <div class="toolbar"><select id="priority"><option value="all">All priorities</option><option value="very-high" ${state.priority==='very-high'?'selected':''}>Very high</option><option value="high" ${state.priority==='high'?'selected':''}>High</option><option value="medium" ${state.priority==='medium'?'selected':''}>Medium</option></select><div class="roles">${[['all','All'],['ds','Data Scientist'],['da','Data / Product Analyst'],['as','Applied Scientist'],['mle','ML Engineer'],['aie','AI Engineer'],['de','Data Engineer'],['cv','Computer Vision']].map(([v,n])=>`<button class="role-btn ${state.role===v?'active':''}" data-role="${v}">${n}</button>`).join('')}</div><button id="newQuiz" class="primary-btn">New question</button></div>
 <section class="quiz-card"><div class="meta"><span class="pill ${l.priority}">${priorityLabel(l.priority)}</span><span class="pill">${m.icon} ${m.title}</span></div><h2>${l.title}</h2><p class="quiz-prompt">Explain this as if the interviewer asked you directly. Aim for 30–60 seconds.</p><button id="revealQuiz" class="primary-btn">Reveal answer</button><div id="quizAnswer" class="quiz-answer" hidden><div class="answer-card"><h3>Strong interview answer</h3><p>${esc(l.interviewAnswer)}</p></div><h3>Key points</h3><ul>${l.keyPoints.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><h3>Follow-ups</h3><ul>${(l.followUps||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p><a href="#/lesson/${l.slug}">Open full lesson →</a></p></div></section>`;
}

function labsPage(){
 const labs=ATLAS.lessons.filter(l=>l.lab);
 return `<div class="breadcrumbs"><a href="#/">Home</a> / Code labs</div><section class="lesson-head"><div class="kicker">Build · Use · Verify</div><h1>Runnable code labs</h1><p class="lede">The reference course gets one thing exactly right: understanding improves when you implement the mechanism before hiding it behind a framework. These labs keep that rhythm while staying interview-focused.</p></section><div class="lab-grid section">${labs.map(l=>{const m=moduleFor(l.module);return `<article class="lab-card"><div class="meta"><span class="pill ${l.priority}">${priorityLabel(l.priority)}</span><span class="pill">${m.icon} ${m.title}</span></div><h3><a href="#/lesson/${l.slug}">${l.title}</a></h3><p>${esc(l.lab.goal)}</p><div class="lab-actions"><a href="#/lesson/${l.slug}">Open lesson</a><a href="labs/${l.slug}/index.html" target="_blank">Lab files ↗</a></div></article>`}).join('')}</div>`;
}
function visualsPage(){
 const ls=ATLAS.lessons.filter(l=>l.visual);
 const groups=ATLAS.modules.map(m=>{const xs=ls.filter(l=>l.module===m.slug);if(!xs.length)return '';return `<section class="section"><div class="kicker">${m.icon} ${m.title}</div><div class="visual-index-grid">${xs.map(l=>`<a class="visual-index-card" href="#/lesson/${l.slug}"><span class="pill">${esc(l.visual.type)}</span><strong>${l.title}</strong><small>${esc(l.visual.title||'Concept visual')}</small></a>`).join('')}</div></section>`}).join('');
 return `<div class="breadcrumbs"><a href="#/">Home</a> / Visual atlas</div><section class="lesson-head"><div class="kicker">Original diagrams · theme-aware SVG</div><h1>Visual atlas</h1><p class="lede">${ls.length} original conceptual diagrams integrated directly into lessons and the generated book. They are designed to clarify structure, trade-offs and system flow rather than decorate the page.</p></section>${groups}`;
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
 <section class="analyzer-controls"><label><span>Role weighting</span><select id="analyzerRole"><option value="auto" ${state.analyzerRole==='auto'?'selected':''}>Auto-detect from JD</option>${[['ds','Data Scientist'],['da','Data / Product Analyst'],['as','Applied Scientist'],['mle','ML Engineer'],['aie','AI / GenAI Engineer'],['de','Data Engineer'],['cv','Computer Vision']].map(([v,n])=>`<option value="${v}" ${state.analyzerRole===v?'selected':''}>${n}</option>`).join('')}</select></label><label><span>Days available</span><input id="analyzerDays" type="number" min="1" max="14" value="${state.analyzerDays}"></label><div class="analyzer-actions"><button id="runAnalyzer" class="primary-btn">Analyze & build prep path</button><button id="clearAnalyzer" class="ghost">Clear</button></div></section>${status}${analyzerResultsHtml(state.analyzerResult)}`;
}

function resourcePage(){
 const vals=Object.values(ATLAS.resources); return `<div class="breadcrumbs"><a href="#/">Home</a> / Resources</div><section class="lesson-head"><div class="kicker">Curated source ladder</div><h1>Best external resources</h1><p class="lede">Primary university courses and official documentation come first. Visual intuition and practical educators are used to make difficult ideas stick—not to replace primary sources.</p></section><div class="resource-grid section">${vals.map(r=>`<article class="resource-card"><div class="tier">${r.kind}</div><h3><a href="${r.url}" target="_blank" rel="noopener">${r.title}</a></h3><p><strong>${r.provider}</strong> · ${r.level}</p><p>${r.why}</p></article>`).join('')}</div>`;
}
function notFound(){return '<div class="empty"><h2>Page not found</h2><a href="#/">Return home</a></div>'}
function wireCommon(){
 wireDone();
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
 const s=$('#search'); if(s)s.oninput=e=>{state.query=e.target.value;setTimeout(()=>route(false),0)}; const p=$('#priority'); if(p)p.onchange=e=>{state.priority=e.target.value;route(false)}; document.querySelectorAll('[data-role]').forEach(b=>b.onclick=()=>{state.role=b.dataset.role;save();route(false)});
}
function route(scroll=true){const h=location.hash.replace(/^#\//,'').split('/');let view;if(!h[0])view=home();else if(h[0]==='module')view=modulePage(h[1]);else if(h[0]==='lesson')view=lessonPage(h[1]);else if(h[0]==='roadmap')view=roadmap();else if(h[0]==='paths')view=pathsPage();else if(h[0]==='analyzer')view=analyzerPage();else if(h[0]==='quiz')view=quizPage();else if(h[0]==='labs')view=labsPage();else if(h[0]==='resources')view=resourcePage();else if(h[0]==='visuals')view=visualsPage();else view=notFound();$('#app').innerHTML=view;wireCommon();if(scroll)scrollTo(0,0)}
window.addEventListener('hashchange',()=>route());
const menuBtn=$('#menuBtn'), mainNav=$('#mainNav');if(menuBtn&&mainNav){menuBtn.onclick=()=>{const open=mainNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'✕ Close':'☰ Menu'};mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰ Menu'}));}
const themeBtn=$('#themeBtn');function updateThemeBtn(){if(themeBtn)themeBtn.textContent=document.documentElement.dataset.theme==='dark'?'☀ Light':'☾ Dark'}updateThemeBtn();if(themeBtn)themeBtn.onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('atlas-theme',n);updateThemeBtn()};
route();