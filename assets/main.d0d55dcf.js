import{G as a,P as t,a as e,M as n,T as o,b as s,D as c,c as r,C as d,S as l,d as i,e as p,f as u,W as w,g as y,h as m}from"./vendor.dfa3fcc4.js";const g=t=>new Promise(((e,n)=>{(new a).load(t,(a=>{const t=a.scene;e(t)}),(a=>{console.log(a.loaded/a.total*100+"% loaded")}),(a=>{n(a)}))}));function h(a,n,o,s){const c=new t(s);c.translateX(a),c.translateY(n),c.translateZ(o);return[c,new e(c,5)]}const b=async(a,t,e,n=50)=>{const p=new o,u=new s({map:p.load(a),transparent:!0,color:16777215,side:c}),w=new r(t[0]/t[1]*n,n),y=new d({geo:w,material:new l({normal:u})});return y.addEventListener(i.CLICK,(a=>{e.play()})),y};!async function(){const a=document.querySelector("#bg-audio"),t=document.querySelector("#play-audio-btn"),e=t.querySelector("i");t.onclick=()=>{a.paused?(a.play(),null==e||e.classList.remove("la-play"),null==e||e.classList.add("la-stop")):(a.pause(),null==e||e.classList.remove("la-stop"),null==e||e.classList.add("la-play"))};const s=new p,c=new u(75,2,.1,1e3);c.position.setZ(1536/window.innerWidth*120),c.updateProjectionMatrix();const r=new w({canvas:document.querySelector("#bg")});r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),y.init(s,c,r);const d=new m(!0),l=(new o).load("/proyecto-arte/assets/neon.7c865fba.png");s.background=l;const[i,M]=h(0,30,0,16069608);s.add(i),s.add(M);const[P,S]=h(40,30,30,9041181);s.add(P),s.add(S);const[f,Y]=h(-40,30,-30,16051688);s.add(f),s.add(Y);const[x,q]=h(0,-40,30);s.add(x),s.add(q);const v=await g("/proyecto-arte/assets/laptop.3b66b588.glb");v.applyMatrix4((new n).makeScale(.8,.8,.8)),v.translateY(-10),s.add(v);const I=await g("/proyecto-arte/assets/stethoscope.a8a7d954.glb").then((a=>(a.applyMatrix4((new n).makeScale(90,90,90)),a)));s.add(I);const L=await(async()=>g("/proyecto-arte/assets/head.9c530470.glb").then((a=>(a.applyMatrix4((new n).makeScale(50,50,50)),a))))();s.add(L),L.translateY(10);const k=await(async(a,t=50)=>b("/proyecto-arte/assets/zoom-logo.cd4ea45a.png",[1.78,1],a,t))(document.querySelector("#zoom-audio"));k.translateX(90),k.translateY(70),s.add(k);const z=await(async(a,t=50)=>b("/proyecto-arte/assets/teams-logo.90acbb17.png",[1,1],a,t))(document.querySelector("#teams-audio"));z.translateX(-90),z.translateY(-70),s.add(z),function a(){requestAnimationFrame(a),r.render(s,c);const t=r.domElement;c.aspect=t.clientWidth/t.clientHeight,c.updateProjectionMatrix(),v.rotateY(Math.PI/150),v.rotateZ(Math.PI/400),[I.position.x,I.position.z,I.position.y]=function(a,t,e,n=0,o=0){return[t*Math.cos(a)+n,e*Math.sin(a)+o,0]}(d.getElapsedTime(),110,80,0,-15),I.rotateY(Math.PI/-200),k.rotateY(Math.PI/300),z.rotateY(-Math.PI/300)}()}();