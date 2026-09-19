const model=document.querySelector('#model');
const stage=document.querySelector('#stage');
const clothInput=document.querySelector('#clothInput');
const customCloth=document.querySelector('#customCloth');
let look=1;

document.querySelectorAll('.choice').forEach(btn=>{
 btn.addEventListener('click',()=>{
  document.querySelectorAll('.choice').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  model.classList.toggle('male',btn.dataset.model==='male');
  model.classList.toggle('female',btn.dataset.model==='female');
  look++;
  document.querySelector('#lookNo').textContent='LOOK '+String(look).padStart(3,'0');
 });
});

document.querySelectorAll('.garment').forEach(btn=>{
 btn.addEventListener('click',()=>{
  document.querySelectorAll('.garment').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  model.querySelector('.torso').className='torso '+btn.dataset.garment+'-body';
  if(btn.dataset.garment==='custom') clothInput.click();
  else {customCloth.hidden=true; model.querySelector('.torso').style.background='#101010';}
 });
});

clothInput.addEventListener('change',e=>{
 const file=e.target.files[0]; if(!file)return;
 const reader=new FileReader();
 reader.onload=ev=>{customCloth.src=ev.target.result;customCloth.hidden=false};
 reader.readAsDataURL(file);
});

document.querySelectorAll('.scene').forEach(btn=>{
 btn.addEventListener('click',()=>{
  document.querySelectorAll('.scene').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  stage.className='avatar-stage '+btn.dataset.scene;
 });
});

document.querySelector('#capture').addEventListener('click',()=>{
 const btn=document.querySelector('#capture');
 btn.innerHTML='EDITORIAL CREATED <span>✓</span>';
 btn.style.background='#444';
 setTimeout(()=>{btn.innerHTML='CREATE EDITORIAL <span>↗</span>';btn.style.background='#111'},1800);
});

document.querySelector('.menu').addEventListener('click',()=>{
 document.querySelector('.nav nav').classList.toggle('open');
});
