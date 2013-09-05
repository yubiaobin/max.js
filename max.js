/**
 * 
 * @authors max_yu(yubiaobin1986@gmial.com)
 * @date    2013-09-05 10:02:41
 * @version 1.2
 */


// selector script start
var Max = {
	getId : function(id){return document.getElementById(id)},
	getName : function(name){return document.getElementsByName(name)},
	getTag : function(tag){return document.getElementsByTagName(tag)},
	createTag : function(e){return document.createElement(e)}
};
// selector script end




// Dynamic loading script function start
	function LoadScript(url,target){
		var script = Max.createTag('script');
		script.type = "text/javascript";
		script.src = url;
		var target = Max.getTag(target);
		target[0].appendChild(script);
	}
// Dynamic loading script function end




// Dynamic loading cascading style sheet function start
	function LoadStyleSheet(url,target){
		var link = Max.createTag('link');
		link.type = "text/css";
		link.rel = "stylesheet";
		link.href = url;
		var target = Max.getTag(target);
		target[0].appendChild(link);
	}
// Dynamic loading cascading style sheet function end