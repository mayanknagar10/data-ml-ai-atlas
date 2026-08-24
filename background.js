(function(){
  const canvas=document.getElementById('atlasBackground');
  if(!canvas)return;
  const ctx=canvas.getContext('2d',{alpha:true,desynchronized:true});
  if(!ctx)return;

  const reduceQuery=window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileQuery=window.matchMedia('(max-width: 720px)');
  let width=1,height=1,dpr=1,raf=0,visible=!document.hidden;
  let grid=[],particles=[];
  const pointer={x:0,y:0,tx:0,ty:0};

  function palette(){
    const dark=document.documentElement.dataset.theme==='dark';
    return dark?{
      dark:true,
      grid:[104,137,181],
      gridStrong:[119,158,211],
      point:[168,194,229],
      accent:[110,168,255]
    }:{
      dark:false,
      grid:[118,143,178],
      gridStrong:[86,124,178],
      point:[72,108,158],
      accent:[37,99,235]
    };
  }

  function rgba(c,a){return `rgba(${c[0]},${c[1]},${c[2]},${a})`}

  function buildScene(){
    const mobile=mobileQuery.matches;
    const cols=mobile?12:17;
    const rows=mobile?8:11;
    grid=[];
    for(let r=0;r<rows;r++){
      for(let c=0;c<cols;c++){
        const u=c/(cols-1),v=r/(rows-1);
        grid.push({
          c,r,cols,rows,
          x:(u-.5)*(mobile?1120:1760),
          z:(v-.5)*(mobile?980:1420),
          phase:(c*.67+r*.41)%6.28
        });
      }
    }
    const count=mobile?24:44;
    particles=Array.from({length:count},(_,i)=>({
      x:(Math.random()-.5)*(mobile?1050:1700),
      y:(Math.random()-.5)*(mobile?560:820),
      z:(Math.random()-.5)*(mobile?980:1450),
      size:.7+Math.random()*1.45,
      phase:Math.random()*Math.PI*2,
      drift:.55+Math.random()*.6,
      index:i
    }));
  }

  function resize(){
    const rect=canvas.getBoundingClientRect();
    width=Math.max(1,Math.round(rect.width||innerWidth));
    height=Math.max(1,Math.round(rect.height||innerHeight));
    dpr=Math.min(devicePixelRatio||1,mobileQuery.matches?1:1.25);
    canvas.width=Math.round(width*dpr);
    canvas.height=Math.round(height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    buildScene();
    draw(performance.now());
  }

  function project(x,y,z,rx,ry){
    const cosy=Math.cos(ry),siny=Math.sin(ry);
    const x1=x*cosy-z*siny;
    const z1=x*siny+z*cosy;
    const cosx=Math.cos(rx),sinx=Math.sin(rx);
    const y1=y*cosx-z1*sinx;
    const z2=y*sinx+z1*cosx;
    const camera=1650;
    const depth=Math.max(320,camera+z2);
    const scale=980/depth;
    return {x:width*.5+x1*scale,y:height*.53+y1*scale,scale,depth};
  }

  function stroke(a,b,color,alpha,lineWidth){
    if(alpha<=.003)return;
    ctx.beginPath();
    ctx.moveTo(a.x,a.y);
    ctx.lineTo(b.x,b.y);
    ctx.strokeStyle=rgba(color,alpha);
    ctx.lineWidth=lineWidth;
    ctx.stroke();
  }

  function drawGrid(p,t){
    const phase=t*.00022;
    pointer.x+=(pointer.tx-pointer.x)*.045;
    pointer.y+=(pointer.ty-pointer.y)*.045;
    const ry=-.16+pointer.x*.055+Math.sin(phase*.5)*.018;
    const rx=.63+pointer.y*.025;
    const projected=[];
    for(const g of grid){
      const wave=Math.sin(g.x*.0044+phase+g.phase)*28+Math.cos(g.z*.0048-phase*.74)*20;
      projected.push(project(g.x,wave+160,g.z,rx,ry));
    }
    const base=p.dark?.11:.075;
    for(let i=0;i<grid.length;i++){
      const g=grid[i],a=projected[i];
      const fade=Math.max(.28,Math.min(1,a.scale*1.05));
      if(g.c<g.cols-1){
        stroke(a,projected[i+1],g.r%4===0?p.gridStrong:p.grid,base*fade,g.r%4===0?1.05:.7);
      }
      if(g.r<g.rows-1){
        stroke(a,projected[i+g.cols],g.c%5===0?p.gridStrong:p.grid,base*.82*fade,.68);
      }
    }
  }

  function drawParticles(p,t){
    const phase=t*.00018;
    const points=[];
    const rx=.32+pointer.y*.012;
    const ry=-.10+pointer.x*.04;
    for(const s of particles){
      const y=s.y+Math.sin(phase*s.drift+s.phase)*22;
      const a=project(s.x,y,s.z,rx,ry);
      points.push(a);
      if(a.x<-18||a.x>width+18||a.y<-18||a.y>height+18)continue;
      const alpha=Math.max(.05,Math.min(p.dark?.30:.20,a.scale*(p.dark?.18:.12)));
      ctx.beginPath();
      ctx.arc(a.x,a.y,Math.max(.65,s.size*a.scale),0,Math.PI*2);
      ctx.fillStyle=rgba(s.index%7===0?p.accent:p.point,alpha);
      ctx.fill();
    }
    for(let i=0;i<points.length;i+=4){
      const a=points[i],b=points[(i+9)%points.length];
      const d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<150)stroke(a,b,p.grid,(1-d/150)*(p.dark?.055:.035),.55);
    }
  }

  function draw(now){
    const p=palette();
    ctx.clearRect(0,0,width,height);
    drawGrid(p,now);
    drawParticles(p,now);
  }

  function loop(now){
    raf=0;
    if(!visible)return;
    draw(now);
    raf=requestAnimationFrame(loop);
  }
  function start(){
    if(reduceQuery.matches){stop();draw(performance.now());return}
    if(!raf&&visible)raf=requestAnimationFrame(loop);
  }
  function stop(){if(raf){cancelAnimationFrame(raf);raf=0}}
  function syncTheme(){draw(performance.now())}
  function state(){return {effective:true,reduced:reduceQuery.matches,fps:reduceQuery.matches?0:60}}

  addEventListener('resize',resize,{passive:true});
  mobileQuery.addEventListener?.('change',resize);
  reduceQuery.addEventListener?.('change',()=>{if(reduceQuery.matches){stop();draw(performance.now())}else start()});
  addEventListener('pointermove',(e)=>{
    pointer.tx=(e.clientX/Math.max(width,1)-.5)*2;
    pointer.ty=(e.clientY/Math.max(height,1)-.5)*2;
  },{passive:true});
  document.addEventListener('visibilitychange',()=>{visible=!document.hidden;if(visible)start();else stop()});
  new MutationObserver((records)=>{if(records.some(r=>r.attributeName==='data-theme'))syncTheme()}).observe(document.documentElement,{attributes:true});

  window.AtlasBackground={state,syncTheme};
  resize();start();
})();
