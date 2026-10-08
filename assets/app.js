(function(){
  var lb=document.createElement('div');lb.id='lb';
  lb.innerHTML='<button aria-label="Schließen">×</button><img alt="">';
  document.body.appendChild(lb);
  var im=lb.querySelector('img');
  document.addEventListener('click',function(e){
    var z=e.target.closest('.zoom');
    if(z){e.preventDefault();im.src=z.getAttribute('data-full')||z.src||z.querySelector('img').src;im.alt=z.alt||'';lb.classList.add('on');}
    else if(lb.classList.contains('on')&&(e.target===lb||e.target.tagName==='BUTTON')){lb.classList.remove('on');}
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
  if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(function(){});}
})();
document.querySelectorAll('table').forEach(function(t){var h=[].map.call(t.querySelectorAll('thead th'),function(x){return x.textContent});t.querySelectorAll('tbody tr').forEach(function(r){[].forEach.call(r.children,function(c,i){if(h[i]&&i>0)c.setAttribute('data-l',h[i])})})});
