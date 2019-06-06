var reg = (o, n) => o ? o[n] : '';
var cn = (o, s) => o ? o.getElementsByClassName(s) : console.log(o);
var tn = (o, s) => o ? o.getElementsByTagName(s) : console.log(o);
var gi = (o, s) => o ? o.getElementById(s) : console.log(o);

function feedCleaner(){
  var promoObserve = new MutationObserver(() => {
    deletePromotedFromTwitter();
  });
  promoObserve.observe(document.getElementsByClassName('content-main top-timeline-tweetbox')[0], {
    childList: true,
    subtree: true
  });
}


function deletePromotedFromTwitter(){
  Array.from(cn(doc,'js-stream-item stream-item stream-item')).forEach(el=> {
    var a = Array.from(tn(el,'a'));
    if(a.some(i=> /Promoted/i.test(i.innerText))) { el.outerHTML = '';}
  });
}

deletePromotedFromTwitter();
feedCleaner();
