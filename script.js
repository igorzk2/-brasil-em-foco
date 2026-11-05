
// Tela inicial: evita que o site apareça "cru" enquanto os elementos carregam.
document.body.classList.add('loading');
const loader = document.querySelector('#loader');
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('hide');
    document.body.classList.remove('loading');
    setTimeout(() => loader.remove(), 750);
  }, 700);
});
const menuBtn=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const modal=document.querySelector('#modal'),title=document.querySelector('#modal-title'),text=document.querySelector('#modal-text');
document.querySelectorAll('.card').forEach(card=>card.querySelector('.more').addEventListener('click',()=>{title.textContent=card.dataset.title;text.textContent=card.dataset.text;modal.classList.add('show');modal.setAttribute('aria-hidden','false')}));
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}
document.querySelector('.close').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

const busca=document.querySelector('#busca'),resultado=document.querySelector('#resultado');document.querySelector('#buscar').addEventListener('click',buscar);busca.addEventListener('keydown',e=>{if(e.key==='Enter')buscar()});
function buscar(){const q=busca.value.trim().toLowerCase();if(!q){resultado.textContent='Digite um tema para pesquisar.';return}const termos=['brasil','brasília','cultura','futebol','amazônia','amazonas','arquitetura','regiões','turismo','cidade'];const ok=termos.some(t=>q.includes(t)||t.includes(q));resultado.textContent=ok?'Tema encontrado no conteúdo deste site. Use o menu para explorar a seção relacionada.':'Ainda não há uma página específica para esse tema, mas você pode usar a seção Cultura e as Regiões para começar.'}

const topo=document.querySelector('#topo');window.addEventListener('scroll',()=>{topo.style.display=scrollY>500?'block':'none'});topo.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
