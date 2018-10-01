
function kill(){
var container = document.getElementsByClassName("stream-container");
var itm = container[0].getElementsByClassName("js-stream-item stream-item stream-item");
for(var i=0; i<itm.length; i++) {
	var h = itm[i].getElementsByClassName("stream-item-header");
	var promo = itm[i].getElementsByClassName("Icon Icon--promoted");
	var verif = h[0].getElementsByClassName("Icon Icon--verified");
	if(promo.length == 1  || verif.length == 0) {
		itm[i].parentElement.removeChild(itm[i]);
    }
}
}
window.addEventListener("scroll", kill);
