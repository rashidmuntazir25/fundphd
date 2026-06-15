// [BRAND] — shared interactions
(function () {
  // mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // active link based on filename
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === path) a.classList.add('active');
  });

  // scroll reveal
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }
})();

// floating book-a-call popup
(function(){
  var pop = document.getElementById('callpop');
  if(!pop) return;
  var dismissed = false;
  try { dismissed = sessionStorage.getItem('callpopClosed')==='1'; } catch(e){}
  if(dismissed){ pop.remove(); return; }
  var t = setTimeout(function(){ pop.classList.add('in'); }, 6000);
  var close = pop.querySelector('.close');
  if(close){ close.addEventListener('click', function(){
    pop.classList.remove('in');
    try { sessionStorage.setItem('callpopClosed','1'); } catch(e){}
    setTimeout(function(){ pop.remove(); }, 500);
  }); }
})();
