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

// Cookie banner
  const cookieBanner = document.querySelector('.cookie-banner');
  const cookieBtn = document.getElementById('cookie-accept');
  const cookieKey = 'investraCookieConsent';
  if(cookieBanner && cookieBtn){
    let consent = false;
    try{
      consent = localStorage.getItem(cookieKey) === 'true';
    }catch(e){
      consent = document.cookie.includes(cookieKey + '=true');
    }
    if(consent){
      cookieBanner.remove();
    }else{
      cookieBanner.removeAttribute('hidden');
      cookieBtn.addEventListener('click', ()=>{
        cookieBanner.setAttribute('hidden','');
        try{
          localStorage.setItem(cookieKey,'true');
        }catch(e){
          document.cookie = cookieKey + '=true;path=/;max-age=31536000';
        }
      });
    }
  }
})();
