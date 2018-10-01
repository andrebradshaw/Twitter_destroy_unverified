function kill(){
var container = document.getElementsByClassName("content-main AdaptiveSearchTimeline");
var itm = container[0].getElementsByClassName("js-stream-item stream-item stream-item");
for(var i=0; i<itm.length; i++) {
	var h = itm[i].getElementsByClassName("stream-item-header");
	var promo = h[0].getElementsByClassName("Icon Icon--promoted");
	var verif = h[0].getElementsByClassName("Icon Icon--verified");
	if(verif.length == 0) {
		if(promo.length < 1 && verif.length > 0) {
			itm[i].parentElement.removeChild(itm[i]);
		}
		itm[i].parentElement.removeChild(itm[i]);
    }
}
}
window.addEventListener("scroll", kill);
