(function(){
  const canvas=document.getElementById('atlasBackground');
  if(!canvas)return;
  const ctx=canvas.getContext('2d',{alpha:true,desynchronized:true});
  if(!ctx)return;

  const reduceQuery=window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileQuery=window.matchMedia('(max-width: 700px)');
  let raf=0, visible=!document.hidden, width=0, height=0, dpr=1, last=0;
  let pointer={x:0,y:0,tx:0,ty:0};
  let scrollY=window.scrollY||0;
  let cols=0, rows=0, grid=[], stars=[], orbit=[];

  function palette(){
    const dark=document.documentElement.dataset.theme==='dark';
    return dark?{
      dark:true,
      grid:[126,166,255], grid2:[83,231,207], point:[184,210,255], accent:[196,161,255],
      blue:[74,116,255], teal:[24,200,180], violet:[152,93,255], base:[10,15,25]
    }:{
      dark:false,
      grid:[37,99,235], grid2:[4,144,120], point:[30,90,220], accent:[109,40,217],
      blue:[56,92,246], teal:[5,150,105], violet:[124,58,237], base:[247,247,243]
    };
  }

  function motionScale(){return reduceQuery.matches?.22:1}
  function targetFps(){return reduceQuery.matches?18:(mobileQuery.matches?24:32)}

  function buildScene(){
    const mobile=mobileQuery.matches;
    cols=mobile?15:23; rows=mobile?10:15;
    const spanX=mobile?1100:1680, spanZ=mobile?1050:1580;
    grid=[];
    for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
      const u=c/(cols-1),v=r/(rows-1);
      grid.push({x:(u-.5)*spanX,z:(v-.5)*spanZ,c,r,seed:Math.sin(c*19.73+r*47.11)});
    }
    const count=mobile?48:104;
    stars=Array.from({length:count},(_,i)=>{
      const a=(i*2.399963229728653)%(Math.PI*2);
      const ring=220+(i%11)*72;
      return {
        x:Math.cos(a)*ring+(Math.random()-.5)*190,
        y:(Math.random()-.5)*760,
        z:Math.sin(a)*ring+(Math.random()-.5)*360,
        size:.85+Math.random()*2.2,
        phase:Math.random()*Math.PI*2,
      };
    });
    orbit=Array.from({length:9},(_,i)=>({
      a:i/9*Math.PI*2,
      radius:118+(i%3)*18,
      phase:i*.73,
      size:2+(i%3)*.7,
    }));
  }

  function resize(){
    const rect=canvas.getBoundingClientRect();
    width=Math.max(1,Math.round(rect.width||window.innerWidth));
    height=Math.max(1,Math.round(rect.height||window.innerHeight));
    dpr=Math.min(window.devicePixelRatio||1,mobileQuery.matches?1.25:1.7);
    canvas.width=Math.round(width*dpr);
    canvas.height=Math.round(height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    buildScene();
    draw(performance.now());
  }

  function project(x,y,z,rx,ry){
    const cosy=Math.cos(ry),siny=Math.sin(ry);
    const x1=x*cosy-z*siny,z1=x*siny+z*cosy;
    const cosx=Math.cos(rx),sinx=Math.sin(rx);
    const y1=y*cosx-z1*sinx,z2=y*sinx+z1*cosx;
    const camera=1510;
    const depth=Math.max(250,camera+z2);
    const scale=980/depth;
    return {x:width*.5+x1*scale,y:height*.51+y1*scale,scale,z:z2,depth};
  }

  function rgba(c,a){return `rgba(${c[0]},${c[1]},${c[2]},${a})`}
  function line(a,b,c,alpha,w=1){
    if(alpha<.004)return;
    ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
    ctx.strokeStyle=rgba(c,alpha);ctx.lineWidth=w;ctx.stroke();
  }

  function radial(x,y,r,c,alpha){
    const g=ctx.createRadialGradient(x,y,0,x,y,r);
    g.addColorStop(0,rgba(c,alpha));
    g.addColorStop(.42,rgba(c,alpha*.42));
    g.addColorStop(1,rgba(c,0));
    ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);
  }

  function drawAurora(p,t){
    const speed=motionScale();
    const s=t*.00018*speed;
    const span=Math.max(width,height);
    radial(width*(.76+Math.sin(s*.73)*.08),height*(.19+Math.cos(s*.58)*.06),span*.48,p.blue,p.dark?.24:.18);
    radial(width*(.18+Math.cos(s*.63)*.09),height*(.70+Math.sin(s*.49)*.08),span*.42,p.teal,p.dark?.17:.14);
    radial(width*(.53+Math.sin(s*.41)*.10),height*(.52+Math.cos(s*.71)*.09),span*.36,p.violet,p.dark?.15:.11);
  }

  function drawGrid(p,t){
    const speed=motionScale();
    const phase=t*.00055*speed+scrollY*.00038;
    pointer.x+=(pointer.tx-pointer.x)*.05;
    pointer.y+=(pointer.ty-pointer.y)*.05;
    const ry=-.19+pointer.x*.13+Math.sin(phase*.18)*.04;
    const rx=.62+pointer.y*.055;
    const projected=new Array(grid.length);
    for(let i=0;i<grid.length;i++){
      const g=grid[i];
      const wave=Math.sin(g.x*.0072+phase)*58+Math.cos(g.z*.0061-phase*.72)*44+Math.sin((g.x+g.z)*.0036+phase*.44)*25;
      projected[i]=project(g.x,wave+150,g.z,rx,ry);
    }
    const base=p.dark?.23:.17;
    for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
      const i=r*cols+c,a=projected[i];
      const fade=Math.max(.22,Math.min(1,a.scale*1.24));
      if(c<cols-1)line(a,projected[i+1],r%3===0?p.grid2:p.grid,base*fade,r%4===0?1.15:.82);
      if(r<rows-1)line(a,projected[i+cols],c%4===0?p.grid2:p.grid,base*.82*fade,.78);
    }
    for(let i=0;i<grid.length;i+=mobileQuery.matches?3:2){
      const a=projected[i];
      if(a.x<-35||a.x>width+35||a.y<-35||a.y>height+35)continue;
      const alpha=Math.max(.06,Math.min(.36,a.scale*.23));
      ctx.beginPath();ctx.arc(a.x,a.y,Math.max(.75,1.8*a.scale),0,Math.PI*2);
      ctx.fillStyle=rgba(i%7===0?p.grid2:p.point,alpha);ctx.fill();
    }
    return {rx,ry,phase};
  }

  function drawStars(p,state){
    const pts=[];
    for(let i=0;i<stars.length;i++){
      const s=stars[i];
      const y=s.y+Math.sin(state.phase*1.45+s.phase)*38*motionScale();
      const a=project(s.x,y,s.z,state.rx*.54,state.ry*.76+state.phase*.025);
      pts.push(a);
      if(a.x<-20||a.x>width+20||a.y<-20||a.y>height+20)continue;
      const alpha=Math.max(.07,Math.min(.42,a.scale*.28));
      const color=i%6===0?p.accent:(i%5===0?p.grid2:p.point);
      if(i%9===0)radial(a.x,a.y,20*a.scale,color,alpha*.26);
      ctx.beginPath();ctx.arc(a.x,a.y,Math.max(.8,s.size*a.scale),0,Math.PI*2);
      ctx.fillStyle=rgba(color,alpha);ctx.fill();
    }
    for(let i=0;i<pts.length;i+=2){
      const a=pts[i],b=pts[(i+11)%pts.length];
      const d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<180)line(a,b,i%4===0?p.grid2:p.accent,(1-d/180)*(p.dark?.12:.085),.8);
    }
  }

  function drawOrbit(p,t){
    if(width<760)return;
    const speed=motionScale();
    const cx=width*.80,cy=height*.25;
    const angle=t*.00016*speed;
    radial(cx,cy,180,p.violet,p.dark?.08:.055);
    ctx.save();
    ctx.translate(cx,cy);
    ctx.rotate(-.18+Math.sin(angle*.8)*.05);
    ctx.scale(1,.56);
    ctx.beginPath();ctx.ellipse(0,0,148,148,0,0,Math.PI*2);
    ctx.strokeStyle=rgba(p.accent,p.dark?.15:.11);ctx.lineWidth=1.2;ctx.stroke();
    ctx.restore();
    const nodes=[];
    for(const o of orbit){
      const a=o.a+angle*(.9+(o.phase%2)*.16);
      const x=cx+Math.cos(a)*o.radius;
      const y=cy+Math.sin(a)*o.radius*.56;
      nodes.push({x,y});
      radial(x,y,18,p.point,p.dark?.09:.065);
      ctx.beginPath();ctx.arc(x,y,o.size,0,Math.PI*2);ctx.fillStyle=rgba(p.point,p.dark?.68:.52);ctx.fill();
    }
    for(let i=0;i<nodes.length;i++)line(nodes[i],nodes[(i+3)%nodes.length],i%2?p.grid2:p.accent,p.dark?.08:.055,.7);
  }

  function draw(now){
    const p=palette();
    ctx.clearRect(0,0,width,height);
    drawAurora(p,now);
    const state=drawGrid(p,now);
    drawStars(p,state);
    drawOrbit(p,now);
    const vignette=ctx.createRadialGradient(width*.50,height*.43,Math.min(width,height)*.18,width*.50,height*.43,Math.max(width,height)*.84);
    vignette.addColorStop(0,'rgba(0,0,0,0)');
    vignette.addColorStop(1,p.dark?'rgba(6,10,17,.18)':'rgba(247,247,243,.12)');
    ctx.fillStyle=vignette;ctx.fillRect(0,0,width,height);
  }

  function loop(now){
    raf=0;
    if(!visible)return;
    const interval=1000/targetFps();
    if(now-last>=interval){draw(now);last=now;}
    raf=requestAnimationFrame(loop);
  }
  function start(){if(!raf&&visible)raf=requestAnimationFrame(loop)}
  function stop(){if(raf){cancelAnimationFrame(raf);raf=0}}
  function syncTheme(){draw(performance.now())}
  function state(){return {effective:true,reduced:reduceQuery.matches,fps:targetFps()}}

  window.addEventListener('resize',resize,{passive:true});
  mobileQuery.addEventListener?.('change',resize);
  reduceQuery.addEventListener?.('change',()=>{draw(performance.now());start()});
  window.addEventListener('pointermove',(e)=>{
    pointer.tx=(e.clientX/Math.max(width,1)-.5)*2;
    pointer.ty=(e.clientY/Math.max(height,1)-.5)*2;
  },{passive:true});
  window.addEventListener('scroll',()=>{scrollY=window.scrollY||0},{passive:true});
  document.addEventListener('visibilitychange',()=>{visible=!document.hidden;if(visible)start();else stop()});
  new MutationObserver((records)=>{if(records.some(r=>r.attributeName==='data-theme'))syncTheme()}).observe(document.documentElement,{attributes:true});

  window.AtlasBackground={state,syncTheme};
  resize();start();
})();
