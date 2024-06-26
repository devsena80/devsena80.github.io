const menuIcon = window.document.getElementById('menuIcon');
const menuIconX = window.document.getElementById('menuIconX')
const menuHtml = window.document.querySelector('menu');

menuIcon.addEventListener('click', function() {
  if (menuHtml.style.display === "none" || menuHtml.style.display === "") {
    menuHtml.style.display = "block";
    menuIcon.style.display = "none";
    menuIconX.style.display = "block";
    
    menuIconX.addEventListener('click', function(){
      menuHtml.style.display = "none"
      menuIcon.style.display = "block"
      menuIconX.style.display = "none"
    })
  }
});

const sobre = window.document.getElementById('sobre');

sobre.addEventListener('click', function(){
  const sobreTxt = window.document.getElementById('about-me');
  
  sobreTxt.classList.remove('pulse');
  void sobreTxt.offsetWidth;
  sobreTxt.classList.add('pulse')
});

const githubRe = window.document.getElementById('github-0');

githubRe.addEventListener('click', function(){
  window.open('https://www.github.com/opsenna', '_blank')
});