const a=document.getElementById('audio'),b=document.getElementById('play'),s=document.getElementById('seek'),c=document.getElementById('cur'),d=document.getElementById('dur');
const fmt=t=>{if(!isFinite(t))return'0:00';let m=Math.floor(t/60),ss=Math.floor(t%60);return m+':'+String(ss).padStart(2,'0');};
a.onloadedmetadata=()=>d.textContent=fmt(a.duration);
b.onclick=()=>{if(a.paused){a.play();b.textContent='❚❚'}else{a.pause();b.textContent='▶'}};
a.ontimeupdate=()=>{c.textContent=fmt(a.currentTime);if(a.duration)s.value=a.currentTime/a.duration*100;};
s.oninput=()=>{if(a.duration)a.currentTime=s.value/100*a.duration;};