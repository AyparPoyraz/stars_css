const btn = document.getElementById('btn');

function classAdd(){
 const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}
 btn.addEventListener('click', classAdd);