document.addEventListener('DOMContentLoaded',()=>{
 const page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
 document.querySelectorAll('.nav-link').forEach(link=>{if((link.getAttribute('href')||'').toLowerCase()===page)link.classList.add('active')});
 const year=document.querySelectorAll('[data-year]');year.forEach(el=>el.textContent=new Date().getFullYear());
 document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.animationDelay=(i*70)+'ms'});
 const form=document.querySelector('#contactForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.classList.add('was-validated');return}document.querySelector('#formMessage').textContent='Thank you! Your message is ready. Connect this form to an email service to receive messages.';document.querySelector('#formMessage').classList.remove('d-none');form.reset();form.classList.remove('was-validated')})}
});
