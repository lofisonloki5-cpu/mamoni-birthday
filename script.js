function revealSite(){
  document.querySelector('.hero').style.display='none';
  const story=document.getElementById('story');
  story.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'instant'});
  startPetals();
}

function finalSurprise(){
  document.getElementById('finalModal').classList.remove('hidden');
  burst();
}
function closeModal(){document.getElementById('finalModal').classList.add('hidden')}

function startPetals(){
  setInterval(()=>{
    const p=document.createElement('div');
    p.className='petal';
    p.textContent=Math.random()>.5?'♥':'✦';
    p.style.left=(Math.random()*100)+'vw';
    p.style.fontSize=(10+Math.random()*16)+'px';
    p.style.setProperty('--x',(Math.random()*160-80)+'px');
    p.style.animationDuration=(5+Math.random()*6)+'s';
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),12000);
  },650);
}
function burst(){
  for(let i=0;i<45;i++){
    const p=document.createElement('div');
    p.className='petal';
    p.textContent=Math.random()>.45?'♥':'✦';
    p.style.position='fixed';
    p.style.left='50vw';
    p.style.top='50vh';
    p.style.zIndex=100;
    p.style.fontSize=(12+Math.random()*18)+'px';
    p.style.color=['#f3a9bd','#ffd7df','#d9b47c','#ffffff'][Math.floor(Math.random()*4)];
    p.style.setProperty('--x',(Math.random()*1000-500)+'px');
    p.style.animationDuration=(1.4+Math.random()*1.8)+'s';
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),3500);
  }
}
document.getElementById('finalModal').addEventListener('click',e=>{
  if(e.target.id==='finalModal') closeModal();
});
