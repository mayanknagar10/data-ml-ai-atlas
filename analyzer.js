(function(global){
'use strict';

const STOP=new Set(`a an and are as at be been being by can could did do does doing for from had has have having how i if in into is it its may might more most much must need of on or our should so some such than that the their them then there these they this those to too use used using was we were what when where which who why will with would you your years year experience experienced role work working knowledge strong good plus preferred required requirements responsibility responsibilities skills skill ability looking candidate team teams new also related including across based machine learning model models modeling data analysis analytics engineering engineer scientist science system systems application applications technology technologies technical python sql cloud production feature features framework frameworks`.split(/\s+/));
const ROLE_LABELS={all:'Auto / Broad',ds:'Data Scientist',da:'Data / Product Analyst',as:'Applied Scientist',mle:'ML Engineer',aie:'AI / GenAI Engineer',de:'Data Engineer',cv:'Computer Vision'};
const ROLE_PATTERNS={
 ds:['data scientist','statistical modeling','machine learning','predictive modeling','feature engineering'],
 da:['data analyst','product analyst','business intelligence','dashboard','tableau','power bi','analytics'],
 as:['applied scientist','research scientist','research engineer','scientist','publication','research'],
 mle:['machine learning engineer','ml engineer','mlops','model serving','production ml','inference'],
 aie:['ai engineer','genai','generative ai','llm','rag','agent','foundation model'],
 de:['data engineer','etl','elt','data pipeline','data warehouse','spark','kafka','airflow','dbt'],
 cv:['computer vision','image','video','segmentation','object detection','cnn','vision transformer']
};
const SKILL_ALIASES=[
 {terms:['python'],targets:['python-data-structures','numpy-vectorization','pandas-core','python-testing']},
 {terms:['machine learning','ml'],targets:['bias-variance','cross-validation','data-leakage','hyperparameter-tuning']},
 {terms:['data science','data scientist'],targets:['eda-workflow','confidence-intervals','cross-validation','feature-interactions']},
 {terms:['statistical analysis'],targets:['confidence-intervals','hypothesis-testing','sampling-distributions']},
 {terms:['data quality'],targets:['data-quality','data-observability']},
 {terms:['model interpretation','model explainability','explainable ai','xai'],targets:['feature-importance','shap-permutation']},
 {terms:['production ready','production-ready','productionization','productionise','productionize'],targets:['production-ml-pipeline','serving','monitoring']},
 {terms:['numpy'],targets:['numpy-vectorization']},{terms:['pandas'],targets:['pandas-core']},
 {terms:['sql','sql server','ssms'],targets:['sql-joins','sql-aggregation','sql-window-functions','query-plans']},
 {terms:['stored procedure','stored procedures'],targets:['stored-procedures']},
 {terms:['power bi','tableau','business intelligence','bi dashboard'],targets:['dashboard-design','visual-encoding','data-storytelling']},
 {terms:['scikit learn','scikit-learn','sklearn'],targets:['cross-validation','hyperparameter-tuning','probability-calibration']},
 {terms:['xgboost','lightgbm','catboost','gradient boosting'],targets:['gradient-boosting']},
 {terms:['random forest'],targets:['random-forest']},{terms:['support vector machine','svm'],targets:['svm']},
 {terms:['logistic regression'],targets:['logistic-regression']},{terms:['linear regression'],targets:['linear-regression']},
 {terms:['feature engineering'],targets:['feature-interactions','encoding-scaling','missing-values']},
 {terms:['model evaluation','evaluation metrics'],targets:['classification-metrics','regression-metrics','cross-validation']},
 {terms:['class imbalance','imbalanced data'],targets:['class-imbalance','roc-pr','threshold-tuning']},
 {terms:['statistics','statistical analysis'],targets:['confidence-intervals','hypothesis-testing','sampling-distributions']},
 {terms:['a/b testing','ab testing','experiment design'],targets:['ab-testing','experiment-design','power-sample-size']},
 {terms:['causal inference'],targets:['causal-inference','dag-confounding','potential-outcomes']},
 {terms:['time series','forecasting'],targets:['time-series-components','time-series-split','forecasting-metrics']},
 {terms:['prophet'],targets:['prophet']},{terms:['arima','sarima'],targets:['arima']},
 {terms:['pytorch','torch'],targets:['neural-network','backprop','optimizers','debug-dl']},
 {terms:['tensorflow','keras'],targets:['neural-network','backprop','optimizers','regularization']},
 {terms:['deep learning'],targets:['neural-network','backprop','regularization','debug-dl']},
 {terms:['cnn','convolutional neural network'],targets:['cnn','receptive-field']},
 {terms:['computer vision'],targets:['cnn','vit','vision-metrics']},
 {terms:['image segmentation','semantic segmentation','segmentation'],targets:['unet','segmentation-metrics']},
 {terms:['object detection'],targets:['object-detection','iou-nms-map']},
 {terms:['super resolution','super-resolution','image reconstruction'],targets:['super-resolution','vision-metrics']},
 {terms:['vision transformer','vit'],targets:['vit']},
 {terms:['transformer','transformers'],targets:['attention','transformer','positional-encoding']},
 {terms:['bert','codebert'],targets:['bert-vs-gpt','embeddings','text-classification-finetuning']},
 {terms:['huggingface','hugging face'],targets:['transformer','fine-tuning-lora']},
 {terms:['gan','generative adversarial network'],targets:['gan']},{terms:['cyclegan','cycle gan'],targets:['cyclegan']},
 {terms:['vqgan','vq-gan','vqvae','vq-vae','vector quantization'],targets:['vqgan']},
 {terms:['diffusion model','diffusion models','diffusion'],targets:['diffusion','latent-diffusion']},
 {terms:['flow matching'],targets:['flow-matching']},{terms:['sdxl','stable diffusion xl'],targets:['latent-diffusion','conditioning','controlnet']},
 {terms:['controlnet'],targets:['controlnet']},{terms:['generative ai','genai'],targets:['gan-vs-diffusion','conditioning','llm-training-lifecycle']},
 {terms:['llm','large language model','large language models'],targets:['transformer','llm-training-lifecycle','llm-inference']},
 {terms:['rag','retrieval augmented generation','retrieval-augmented generation'],targets:['rag','embedding-retrieval','rag-evaluation']},
 {terms:['langchain'],targets:['rag','tool-calling','agents']},{terms:['langgraph'],targets:['agents','tool-calling']},
 {terms:['mcp','model context protocol'],targets:['mcp']},{terms:['tool calling','function calling'],targets:['tool-calling']},
 {terms:['vector database','vector db','chromadb','chroma db','faiss'],targets:['embedding-retrieval','ann-search','hnsw']},
 {terms:['embedding','embeddings'],targets:['embeddings','embedding-retrieval']},
 {terms:['gnn','graph neural network','graph neural networks'],targets:['graph-basics','message-passing']},
 {terms:['graphsage'],targets:['graphsage','link-prediction']},{terms:['gcn','graph convolutional network'],targets:['gcn']},{terms:['gat','graph attention network'],targets:['gat']},
 {terms:['recommendation system','recommender system'],targets:['recsys-baselines','two-stage-ranking','recsys-offline-online']},
 {terms:['recall@k','recall at k','ndcg','mrr'],targets:['recall-at-k','retrieval-eval']},
 {terms:['kafka'],targets:['kafka','batch-stream']},{terms:['flink','pyflink'],targets:['flink-streaming','event-time-watermarks']},
 {terms:['spark','pyspark'],targets:['spark','spark-shuffles-skew']},{terms:['etl','elt'],targets:['etl-elt','orchestration','data-quality']},
 {terms:['azure data factory','adf'],targets:['etl-elt','orchestration','data-quality']},{terms:['airflow'],targets:['orchestration']},
 {terms:['dbt'],targets:['dbt-modeling','data-contracts-lineage']},{terms:['data warehouse','data lake','lakehouse'],targets:['warehouse-lake-lakehouse','star-schema']},
 {terms:['redis'],targets:['serving','api-ml']},{terms:['flask','fastapi','rest api','restful api'],targets:['api-ml','serving']},
 {terms:['streamlit'],targets:['dashboard-design','api-ml']},{terms:['docker'],targets:['docker-basics','docker-ml','compose']},
 {terms:['kubernetes','k8s'],targets:['kubernetes-basics']},{terms:['mlops'],targets:['production-ml-pipeline','model-registry','monitoring','ci-cd-ml']},
 {terms:['mlflow','experiment tracking'],targets:['experiment-tracking','model-registry']},
 {terms:['model monitoring','data drift','concept drift'],targets:['monitoring','drift']},
 {terms:['model registry','model versioning'],targets:['model-registry']},{terms:['ci/cd','cicd','continuous integration'],targets:['ci-cd-ml','ml-testing-quality-gates']},
 {terms:['aws','amazon web services'],targets:['aws-ml-map','azure-aws-map','cloud-security']},
 {terms:['azure','microsoft azure'],targets:['aws-ml-map','azure-aws-map','cloud-security']},
 {terms:['gcp','google cloud','vertex ai'],targets:['aws-ml-map','azure-aws-map','cloud-security']},
 {terms:['sagemaker'],targets:['aws-ml-map','production-ml-pipeline','model-registry','serving']},
 {terms:['bedrock','amazon bedrock'],targets:['aws-ml-map','llm-inference','rag','agents']},
 {terms:['microservices','microservice'],targets:['compose','api-ml','failure-modes']},
 {terms:['git','github','version control'],targets:['ci-cd-ml','ml-lineage-reproducibility']},
 {terms:['linux'],targets:['profiling-benchmarking','docker-basics']},
 {terms:['data visualization','visualization'],targets:['visual-encoding','data-storytelling','dashboard-design']},
 {terms:['geospatial','gis','h3','geohash'],targets:['vector-raster-spatial-data','spatial-indexing','spatial-validation']},
 {terms:['bayesian'],targets:['bayes-update','mcmc','hierarchical-bayes']},
 {terms:['gaussian process','gaussian processes'],targets:['gaussian-processes']},{terms:['hmm','hidden markov model'],targets:['hidden-markov-models']},
 {terms:['conformal prediction'],targets:['conformal-prediction']},{terms:['information theory','mutual information','kl divergence'],targets:['entropy-information','mutual-information','kl-divergence']}
];

function norm(s=''){return String(s).toLowerCase().replace(/[–—−]/g,'-').replace(/[^a-z0-9@+#_-]+/g,' ').replace(/\s+/g,' ').trim();}
function words(s=''){return norm(s).split(' ').filter(x=>x.length>2&&!STOP.has(x));}
function phrasePresent(text,phrase){const t=' '+norm(text)+' ';const p=' '+norm(phrase)+' ';return t.includes(p);}
function roleGuess(jd=''){
 const t=norm(jd);let best='all',score=0,detail=[];
 for(const [role,ps] of Object.entries(ROLE_PATTERNS)){
   let s=0,h=[];for(const p of ps){if(phrasePresent(t,p)){s+=p.includes(' ')?3:1;h.push(p)}}
   if(s>score){score=s;best=role;detail=h}
 }
 return {role:best,score,matched:detail};
}
function buildIndex(atlas){
 const moduleMap=Object.fromEntries(atlas.modules.map(m=>[m.slug,m]));
 const profiles=[]; const df=new Map();
 function add(map,text,w){for(const tok of new Set(words(text))){map.set(tok,(map.get(tok)||0)+w)}}
 for(const l of atlas.lessons){
   const m=moduleMap[l.module]||{title:''};const map=new Map();
   add(map,l.title,6);add(map,m.title,1.4);add(map,(l.keyPoints||[]).join(' '),0.65);
   for(const tok of map.keys())df.set(tok,(df.get(tok)||0)+1);
   profiles.push({lesson:l,module:m,map});
 }
 const N=profiles.length;const idf=new Map([...df].map(([t,n])=>[t,Math.log((N+1)/(n+1))+1]));
 return {profiles,idf,moduleMap};
}
function weightedLines(text){
 return String(text||'').split(/\n+/).map(line=>{const n=norm(line);let w=1;if(/\b(must|required|requirements|proficient|strong experience|hands-on|hands on|expertise|essential)\b/.test(n))w=1.45;else if(/\b(preferred|nice to have|bonus|plus)\b/.test(n))w=.8;return {text:line,w};}).filter(x=>x.text.trim());
}
function scoreDoc(text,index,isJD=false){
 const lines=isJD?weightedLines(text):[{text,w:1}];const combined=lines.map(x=>x.text).join('\n');const tokenSet=new Set(words(combined));
 const bySlug=new Map();
 for(const p of index.profiles){let raw=0;const matched=[];for(const [tok,w] of p.map){if(tokenSet.has(tok)){const val=w*(index.idf.get(tok)||1);raw+=val;if(val>4)matched.push(tok)}}
   if(phrasePresent(combined,p.lesson.title)){raw+=18;matched.unshift(p.lesson.title.toLowerCase())}
   bySlug.set(p.lesson.slug,{raw,matched:[...new Set(matched)].slice(0,6),alias:[]});
 }
 for(const a of SKILL_ALIASES){const hits=a.terms.filter(term=>phrasePresent(combined,term));if(!hits.length)continue;for(const slug of a.targets){const r=bySlug.get(slug);if(!r)continue;r.raw+=22+Math.min(10,5*(hits.length-1));r.alias.push(...hits);r.matched.unshift(...hits)}}
 if(isJD){
   for(const {text:line,w} of lines){if(w===1)continue;for(const a of SKILL_ALIASES){if(!a.terms.some(term=>phrasePresent(line,term)))continue;for(const slug of a.targets){const r=bySlug.get(slug);if(r)r.raw+=w>1?8:-2}}}
 }
 for(const r of bySlug.values()){r.score=Math.min(100,Math.round(100*(1-Math.exp(-r.raw/35))));r.matched=[...new Set(r.matched)].slice(0,6)}
 return bySlug;
}
function analyze(atlas,resume,jd,opts={}){
 const index=buildIndex(atlas);const guessed=roleGuess(jd);const role=opts.role&&opts.role!=='auto'?opts.role:guessed.role;
 const rs=scoreDoc(resume,index,false), js=scoreDoc(jd,index,true);const priorityBase={'very-high':12,'high':6,'medium':1};
 const rows=index.profiles.map(({lesson,module})=>{const r=rs.get(lesson.slug),j=js.get(lesson.slug);const roleBoost=(role!=='all'&&(lesson.roles||[]).includes(role))?8:0;const gapBoost=j.score>=28&&r.score<18?12:0;const final=Math.round(.64*j.score+.18*r.score+(priorityBase[lesson.priority]||0)+roleBoost+gapBoost);return {lesson,module,resumeScore:r.score,jdScore:j.score,final,resumeMatches:r.matched,jdMatches:j.matched,gap:j.score>=28&&r.score<18,overlap:j.score>=28&&r.score>=18};});
 const relevant=rows.filter(x=>x.jdScore>=15||x.resumeScore>=18).sort((a,b)=>b.final-a.final);
 const recommended=relevant.filter(x=>x.jdScore>=18).slice(0,Math.max(12,Math.min(42,(Number(opts.days)||5)*6)));
 const gaps=relevant.filter(x=>x.gap).sort((a,b)=>b.jdScore-a.jdScore).slice(0,15);
 const overlap=relevant.filter(x=>x.overlap).sort((a,b)=>b.jdScore-a.jdScore).slice(0,15);
 const resumeCritical=relevant.filter(x=>x.resumeScore>=25).sort((a,b)=>b.resumeScore-a.resumeScore).slice(0,15);
 const jdStrong=relevant.filter(x=>x.jdScore>=28);const covered=jdStrong.filter(x=>x.resumeScore>=18).length;
 const days=Math.max(1,Math.min(14,Number(opts.days)||5));const plan=[];for(let d=0;d<days;d++){const topics=recommended.filter((_,i)=>i%days===d).slice(0,6);if(topics.length)plan.push({day:d+1,topics});}
 return {role,roleLabel:ROLE_LABELS[role]||ROLE_LABELS.all,guessedRole:guessed,recommended,gaps,overlap,resumeCritical,plan,summary:{jdStrong:jdStrong.length,covered,gaps:gaps.length,recommended:recommended.length}};
}

const PDF_JS='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
const PDF_WORKER='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
let pdfPromise=null;
function ensurePdfJs(){
 if(global.pdfjsLib){global.pdfjsLib.GlobalWorkerOptions.workerSrc=PDF_WORKER;return Promise.resolve(global.pdfjsLib)}
 if(pdfPromise)return pdfPromise;
 pdfPromise=new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=PDF_JS;s.async=true;s.onload=()=>{if(!global.pdfjsLib)return reject(new Error('PDF.js loaded but was unavailable.'));global.pdfjsLib.GlobalWorkerOptions.workerSrc=PDF_WORKER;resolve(global.pdfjsLib)};s.onerror=()=>reject(new Error('Could not load the PDF parser library. Paste the text instead or check your connection.'));document.head.appendChild(s)});return pdfPromise;
}
async function extractFile(file,onProgress){
 if(!file)return '';
 const name=(file.name||'').toLowerCase();
 if(name.endsWith('.txt')||name.endsWith('.md')||file.type.startsWith('text/'))return await file.text();
 if(name.endsWith('.pdf')||file.type==='application/pdf'){
   const lib=await ensurePdfJs();const bytes=new Uint8Array(await file.arrayBuffer());const pdf=await lib.getDocument({data:bytes}).promise;const pages=[];
   for(let i=1;i<=pdf.numPages;i++){const page=await pdf.getPage(i);const c=await page.getTextContent();pages.push(c.items.map(x=>x.str).join(' '));if(onProgress)onProgress(i,pdf.numPages)}
   return pages.join('\n');
 }
 throw new Error('Unsupported file type. Use PDF, TXT or Markdown, or paste the text directly.');
}
function planText(result){
 const lines=[`Data, ML & AI Atlas — personalized preparation plan`,`Detected role: ${result.roleLabel}`,''];
 if(result.gaps.length){lines.push('Potential gaps / highest-priority review:');result.gaps.slice(0,10).forEach((x,i)=>lines.push(`${i+1}. ${x.lesson.title} — ${x.module.title}`));lines.push('')}
 if(result.overlap.length){lines.push('JD + resume overlap:');result.overlap.slice(0,10).forEach((x,i)=>lines.push(`${i+1}. ${x.lesson.title}`));lines.push('')}
 result.plan.forEach(d=>{lines.push(`Day ${d.day}:`);d.topics.forEach(x=>lines.push(`- ${x.lesson.title}`));lines.push('')});
 return lines.join('\n');
}

global.AtlasAnalyzer={analyze,extractFile,roleGuess,planText,ROLE_LABELS};
if(typeof module!=='undefined'&&module.exports)module.exports={analyze,roleGuess,planText,ROLE_LABELS,norm,words};
})(typeof window!=='undefined'?window:globalThis);
