const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'..');
const atlas=JSON.parse(fs.readFileSync(path.join(root,'source','atlas.json'),'utf8'));
const A=require(path.join(root,'analyzer.js'));
function assert(cond,msg){if(!cond)throw new Error(msg)}
function titles(r){return new Set(r.recommended.map(x=>x.lesson.slug))}

let r=A.analyze(atlas,
  'Python SQL Azure Data Factory ETL Docker. Built data pipelines and stored procedures.',
  'Data Engineer role. Strong SQL, ETL, Kafka and Spark/PySpark required. Experience with data quality and orchestration preferred.',
  {days:3,role:'auto'});
assert(r.role==='de','Expected Data Engineer role detection');
let t=titles(r);assert(t.has('kafka'),'Kafka should be recommended');assert(t.has('spark'),'Spark should be recommended');assert(t.has('etl-elt'),'ETL should be recommended');

r=A.analyze(atlas,
  'Python scikit-learn statistics and classical machine learning.',
  'AI Engineer. Required RAG, LangGraph agents, vector databases, Docker and AWS. Experience with LLM evaluation and tool calling.',
  {days:4,role:'auto'});
assert(r.role==='aie','Expected AI Engineer role detection');
t=titles(r);assert(t.has('rag'),'RAG should be recommended');assert(t.has('agents'),'Agents should be recommended');assert(t.has('tool-calling'),'Tool calling should be recommended');
assert(r.gaps.some(x=>x.lesson.slug==='rag'),'RAG should appear as a potential gap when absent from resume evidence');

r=A.analyze(atlas,
  'Python PyTorch CycleGAN diffusion flow matching computer vision Docker.',
  'Computer Vision Engineer requiring PyTorch, CNNs, image reconstruction, diffusion models and production inference.',
  {days:2,role:'auto'});
assert(r.role==='cv','Expected Computer Vision role detection');
t=titles(r);assert(t.has('cnn'),'CNN should be recommended');assert(t.has('diffusion'),'Diffusion should be recommended');assert(t.has('super-resolution'),'Reconstruction should be recommended');
console.log('OK: browser-side resume/JD analyzer deterministic smoke tests passed');
