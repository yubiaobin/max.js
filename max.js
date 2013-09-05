/**
 * 
 * @authors max_yu(yubiaobin1986@gmial.com)
 * @date    2013-09-05 10:02:41
 * @version 1.2
 */


// core selector script start

/*var Max = {
	getId : function(id){return document.getElementById(id)},
	getName : function(name){return document.getElementsByName(name)},
	getTag : function(tag){return document.getElementsByTagName(tag)},
	createTag : function(e){return document.createElement(e)}
};
*/

var $ = function(){
	return new Max();
};

function Max(){
	this.elements = [];
	this.getId = function(id){
		this.elements.push(document.getElementById(id));
		return this;
	};
	this.getTag = function(tag){
		var tags = document.getElementsByTagName(tag);
		for(var i = 0; i < tags.length; i++){
			this.elements.push(tags[i]);
		};
		return this;
	};
	this.getName = function(name){
		var tags = document.getElementsByName(name);
		for(var i = 0; i < tags.length; i++){
			this.elements.push(tags[i]);
		};
		return this;
	};
};

// core selector script end




// core object function start

Max.prototype.css = function(attr,value){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style[attr] = value;
	};
	return this;
};
Max.prototype.html = function(value){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].innerHTML = value;
	};
	return this;
};
Max.prototype.click = function(fn){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].onclick = fn;
	};
	return this;
};

/*Max.prototype.value = function(str){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].setAttribute = str;
	};
	return this;
};
*/

// core object function end




// Dynamic loading script function start

/*	function LoadScript(url,target){
		var script = Max.createTag('script');
		script.type = "text/javascript";
		script.src = url;
		var target = Max.getTag(target);
		target[0].appendChild(script);
	}*/

// Dynamic loading script function end




// Dynamic loading cascading style sheet function start

/*	function LoadStyleSheet(url,target){
		var link = Max.createTag('link');
		link.type = "text/css";
		link.rel = "stylesheet";
		link.href = url;
		var target = Max.getTag(target);
		target[0].appendChild(link);
	}*/

// Dynamic loading cascading style sheet function end