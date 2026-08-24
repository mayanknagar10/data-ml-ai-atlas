(function(){
  const canvas=document.getElementById('atlasBackground');
  if(!canvas)return;
  const ctx=canvas.getContext('2d',{alpha:true,desynchronized:true});
  if(!ctx)return;

  const reduceQuery=window.matchMedia('(prefers-reduced-motion: reduce)');
  let raf=0, visible=!document.hidden, width=0, height=0, dpr=1, last=0;
  let pointer={x:0,y:0,tx:0,ty:0};
  let scrollY=window.scrollY||0;
  const mobileQuery=window.matchMedia('(max-width: 700px)');

  let grid=[];
  let cols=22, rows=14;
  let stars=[];

  function effective(){return !reduceQuery.matches}
  function state(){return {reduced:reduceQuery.matches,effective:effective()}}

  function palette(){
    const dark=document.documentElement.dataset.theme==='dark';
    return dark?{
      grid:[132,170,255], grid2:[100,224,210], point:[173,200,255], accent:[183,148,255], glow:[91,116,255], veil:[11,17,28]
    }:{
      grid:[36,99,235], grid2:[5,150,105], point:[37,99,235], accent:[124,58,237], glow:[79,70,229], veil:[247,247,243]
    };
  }

  function buildScene(){
    const mobile=mobileQuery.matches;
    cols=mobile?16:22; rows=mobile?11:14;
    grid=[];
    const spanX=mobile?1050:1500, spanZ=mobile?1000:1450;
    for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
      const u=c/(cols-1), v=r/(rows-1);
      grid.push({
        c,r,
        x:(u-.5)*spanX,
        z:(v-.5)*spanZ,
        seed:Math.sin(c*12.9898+r*78.233)*43758.5453
      });
    }
    const count=mobile?44:86;
    stars=Array.from({length:count},(_,i)=>{
      const a=(i*2.3999632297)%(Math.PI*2);
      const ring=260+(i%9)*78;
      return {
        x:Math.cos(a)*ring+(Math.random()-.5)*180,
        y:(Math.random()-.5)*700,
        z:Math.sin(a)*ring+(Math.random()-.5)*320,
        size:0.8+Math.random()*1.7,
        phase:Math.random()*Math.PI*2,
      };
    });
  }

  function resize(){
    const rect=canvas.getBoundingClientRect();
    width=Math.max(1,Math.round(rect.width||window.innerWidth));
    height=Math.max(1,Math.round(rect.height||window.innerHeight));
    dpr=Math.min(window.devicePixelRatio||1,mobileQuery.matches?1.25:1.6);
    canvas.width=Math.round(width*dpr);
    canvas.height=Math.round(height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    buildScene();
    draw(performance.now(),true);
  }

  function rotateProject(x,y,z,rx,ry){
    const cosy=Math.cos(ry), siny=Math.sin(ry);
    let x1=x*cosy-z*siny, z1=x*siny+z*cosy;
    const cosx=Math.cos(rx), sinx=Math.sin(rx);
    let y1=y*cosx-z1*sinx, z2=y*sinx+z1*cosx;
    const camera=1520;
    const depth=Math.max(260,camera+z2);
    const scale=930/depth;
    return {x:width*.5+x1*scale,y:height*.52+y1*scale,scale,depth,z:z2};
  }

  function line(a,b,color,alpha,widthPx=1){
    if(alpha<=.003)return;
    ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
    ctx.strokeStyle=`rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
    ctx.lineWidth=widthPx;ctx.stroke();
  }

  function drawGlow(p,t){
    const g1=ctx.createRadialGradient(width*(.77+p.x*.06),height*(.22+p.y*.04),0,width*(.77+p.x*.06),height*(.22+p.y*.04),Math.max(width,height)*.48);
    g1.addColorStop(0,`rgba(${p.glow[0]},${p.glow[1]},${p.glow[2]},${document.documentElement.dataset.theme==='dark'?.16:.11})`);
    g1.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g1;ctx.fillRect(0,0,width,height);
    const x=width*(.18+Math.sin(t*.00011)*.025),y=height*(.72+Math.cos(t*.00013)*.025);
    const g2=ctx.createRadialGradient(x,y,0,x,y,Math.max(width,height)*.36);
    g2.addColorStop(0,`rgba(${p.grid2[0]},${p.grid2[1]},${p.grid2[2]},${document.documentElement.dataset.theme==='dark'?.11:.07})`);
    g2.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g2;ctx.fillRect(0,0,width,height);
  }

  function draw(now,staticFrame=false){
    const p=palette();
    ctx.clearRect(0,0,width,height);
    drawGlow(p,now);
    const time=staticFrame?1800:now;
    pointer.x+=(pointer.tx-pointer.x)*.035;
    pointer.y+=(pointer.ty-pointer.y)*.035;
    const ry=-.16+pointer.x*.085+Math.sin(time*.00007)*.022;
    const rx=.62+pointer.y*.035;
    const phase=time*.00042+scrollY*.00042;
    const projected=new Array(grid.length);

    for(let i=0;i<grid.length;i++){
      const g=grid[i];
      const wave=Math.sin(g.x*.0082+phase)*38+Math.cos(g.z*.0065-phase*.75)*31+Math.sin((g.x+g.z)*.004+phase*.55)*17;
      projected[i]=rotateProject(g.x,wave+145,g.z,rx,ry);
    }

    const baseAlpha=document.documentElement.dataset.theme==='dark'?.155:.115;
    for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
      const i=r*cols+c,a=projected[i];
      const depthFade=Math.max(.18,Math.min(1,a.scale*1.18));
      if(c<cols-1)line(a,projected[i+1],r%3===0?p.grid2:p.grid,baseAlpha*depthFade,.75);
      if(r<rows-1)line(a,projected[i+cols],c%4===0?p.grid2:p.grid,baseAlpha*.82*depthFade,.7);
    }

    for(let i=0;i<grid.length;i+=mobileQuery.matches?3:2){
      const a=projected[i];
      if(a.x<-30||a.x>width+30||a.y<-30||a.y>height+30)continue;
      const alpha=Math.max(.025,Math.min(.28,a.scale*.19));
      ctx.beginPath();ctx.arc(a.x,a.y,Math.max(.55,1.35*a.scale),0,Math.PI*2);
      ctx.fillStyle=`rgba(${p.point[0]},${p.point[1]},${p.point[2]},${alpha})`;ctx.fill();
    }

    const starProjected=[];
    for(let i=0;i<stars.length;i++){
      const s=stars[i];
      const y=s.y+Math.sin(phase*1.7+s.phase)*28;
      const a=rotateProject(s.x,y,s.z,rx*.55,ry*.8+phase*.025);
      starProjected.push(a);
      if(a.x<-20||a.x>width+20||a.y<-20||a.y>height+20)continue;
      const alpha=Math.max(.025,Math.min(.30,a.scale*.22));
      ctx.beginPath();ctx.arc(a.x,a.y,Math.max(.6,s.size*a.scale),0,Math.PI*2);
      ctx.fillStyle=`rgba(${i%5===0?p.accent.join(','):p.point.join(',')},${alpha})`;ctx.fill();
    }

    for(let i=0;i<starProjected.length-1;i+=3){
      const a=starProjected[i],b=starProjected[(i+7)%starProjected.length];
      const dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);
      if(d<155)line(a,b,p.accent,(1-d/155)*(document.documentElement.dataset.theme==='dark'?.085:.055),.65);
    }

    const vignette=ctx.createRadialGradient(width*.5,height*.45,Math.min(width,height)*.12,width*.5,height*.45,Math.max(width,height)*.78);
    vignette.addColorStop(0,'rgba(0,0,0,0)');
    vignette.addColorStop(1,document.documentElement.dataset.theme==='dark'?'rgba(9,13,20,.34)':'rgba(247,247,243,.32)');
    ctx.fillStyle=vignette;ctx.fillRect(0,0,width,height);
  }

  function loop(now){
    raf=0;
    if(!visible||!effective())return;
    if(now-last>28){draw(now,false);last=now;}
    raf=requestAnimationFrame(loop);
  }
  function start(){
    if(raf||!visible||!effective())return;
    raf=requestAnimationFrame(loop);
  }
  function stop(){if(raf){cancelAnimationFrame(raf);raf=0}}
  function reconcile(){
    if(effective())start();else{stop();draw(performance.now(),true)}
    canvas.dataset.motion=effective()?'on':'off';
  }
  function syncTheme(){draw(performance.now(),!effective())}

  window.addEventListener('resize',resize,{passive:true});
  mobileQuery.addEventListener?.('change',resize);
  window.addEventListener('pointermove',(e)=>{
    if(!effective())return;
    pointer.tx=(e.clientX/Math.max(width,1)-.5)*2;
    pointer.ty=(e.clientY/Math.max(height,1)-.5)*2;
  },{passive:true});
  window.addEventListener('scroll',()=>{scrollY=window.scrollY||0},{passive:true});
  document.addEventListener('visibilitychange',()=>{visible=!document.hidden;if(visible)reconcile();else stop()});
  reduceQuery.addEventListener?.('change',reconcile);
  new MutationObserver((records)=>{if(records.some(r=>r.attributeName==='data-theme'))syncTheme()}).observe(document.documentElement,{attributes:true});

  window.AtlasBackground={state,syncTheme};
  resize();reconcile();
})();
