// Mobile nav toggle and small helpers
(function(){
  const nav = document.querySelector('.nav');
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if(btn && nav && menu){
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.setAttribute('aria-expanded', String(!expanded));
    });
  }
  // Current year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Show success message when redirected by formsubmit (_next with ?sent=1)
  try{
    const params = new URLSearchParams(window.location.search);
    if(params.get('sent') === '1'){
      const msgEl = document.querySelector('#form-auto-msg, #form-mascota-msg, .contact-form + .form-hint');
      if(msgEl){
        msgEl.style.display = 'block';
        msgEl.textContent = msgEl.textContent || 'Gracias. Hemos recibido tu información.';
      }
    }
  }catch(e){ /* no-op */ }
})();

 
