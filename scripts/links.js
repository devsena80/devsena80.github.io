const instagram = window.document.getElementById('instagram');
const whatsapp = window.document.getElementById('whatsapp');
const email = window.document.getElementById('email');
const github = window.document.getElementById('github');
const telegram = window.document.getElementById('telegram');

instagram.addEventListener('click', function(){
  window.open('https://www.instagram.com/senna.xtz?igsh=MTVkdnNrNDdlMGw0Zg==', '_blank')
})

whatsapp.addEventListener('click', function(){
  window.open('https://api.whatsapp.com/send?phone=5589999259619', '_blank')
})

email.addEventListener('click', function(){
  window.open('mailto:usermatheus230@gmail.com', '_blank')
})

github.addEventListener('click', function(){
  window.open('https://www.github.com/opsenna', '_blank')
})

telegram.addEventListener('click', function(){
  window.open('https://www.t.me/+5589999259619', '_blank')
})