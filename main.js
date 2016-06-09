
var getPos = function(ATarget){
    var target = ATarget;
	var x = target.getBoundingClientRect().left;
	var y = target.getBoundingClientRect().top;
    return {
		'x': x,
		'y': y
	};
}
     
window.onload = function(){
	var $face =  document.getElementsByClassName('face')[0];
	var centerX = getPos($face).x+30;
	var centerY = getPos($face).y+25;

	document.onmousemove=function(e){
		e=e? e:window.event;
		var offsetX = e.pageX - centerX;
		var offsetY = e.pageY - centerY;
		$('.face').css('transform','translate('+offsetX/20+'px,'+offsetY/30+'px)');
		$('.hair').css('transform','translateY('+offsetY/40+'px)');
		var ratio = 0.1/window.screen.availWidth;
		var leftScale = (offsetX*ratio+1);
		var rightScale = (1-offsetX*ratio);
		$('.ear-left').css('transform','translate('+(-offsetX/300)+'px,'+(-offsetY/60)+'px) scale('+leftScale+')');
		$('.ear-right').css('transform','translate('+(-offsetX/300)+'px,'+(-offsetY/60)+'px) scale('+rightScale+')');

}}