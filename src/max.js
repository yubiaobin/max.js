/**
 * 
 * @authors max_yu(yubiaobin1986@gmial.com)
 * @date    2013-09-05 10:02:41
 * @version 1.2
 */




/**
*
* Section:1
* Core selector script start (核心选择器 开始)
*/
var $ = function(arguments){
	return new Max(arguments);
};


	
function Max(arguments){
	this.elements = [];

	if(typeof arguments == 'string'){
			// css模拟
		if(arguments.indexOf(' ') != -1){
			var element = arguments.split(' ');
			var childElement = [];
			var node = [];

			for(var i = 0; i < element.length; i++){
				if(node.length == 0) node.push(document);
				switch(element[i].charAt(0)){
					case '#' :
						childElement = [];
						childElement.push(this.getId(element[i].substring(1)));
						node = childElement;
						break;
					case '.' :
						childElement = [];
						for(var k = 0; k < node.length; k++){
							var temps = this.getClass(element[i].substring(1),node[k]);
							for(var t = 0; t < temps.length; t++){
								childElement.push(temps[t]);
							}
						}
						node = childElement;
						break;
					default  :
						childElement = [];
						for(var k = 0; k < node.length; k++){
							var temps = this.getTag(element[i],node[k]);
							for(var t = 0; t < temps.length; t++){
								childElement.push(temps[t]);
							}
						}
						node = childElement;
				}
			}
			this.elements = childElement;
		}else{
			// find模拟
			switch(arguments.charAt(0)){
				case '#' :
					this.elements.push(this.getId(arguments.substring(1)));
					break;
				case '.' :
					this.elements = this.getClass(arguments.substring(1));
					break;
				default :
					this.elements = this.getTag(arguments);
			};
		};	
	}else if(typeof arguments == "object"){
		if(arguments != undefined){
			this.elements[0] = arguments;
		};
	};
};




/**
*
* Core object function start (封装核心对象的原型方法 开始)
*/

Max.prototype.getId = function(id){
	return document.getElementById(id);
};


	
Max.prototype.getClass = function(className,parentNode){
	var node = null;
	var temps = [];
	if(parentNode != undefined){
		node = parentNode;
	}else{
		node = document;
	};
	var all = node.getElementsByTagName('*');
	for(var i = 0; i < all.length; i++){
		if(all[i].className == className){
			temps.push(all[i]);
		};
	};
	return temps;
};



Max.prototype.getTag = function(tag,parentNode){
	var node = null;
	var temps = [];
	if(parentNode != undefined){
		node = parentNode;
	}else{
		node = document;
	};
	var tags = node.getElementsByTagName(tag);
	for(var i = 0; i < tags.length; i++){
		temps.push(tags[i]);
	};
	return temps;
};


Max.prototype.find = function(str){
	var childElements = [];
	for(var i = 0; i < this.elements.length; i++){
		switch(str.charAt(0)){
			case '#' :
				childElements.push(this.getId(str.substring(1)));
				break;
			case '.' :
				var temps = this.getClass(str.substring(1),this.elements[i]);
					for(var k = 0; k < temps.length; k++){
						childElements.push(temps[k]);
					};
				break;
			default :
				var temps = this.getTag(str,this.elements[i]);
					for(var k = 0; k < temps.length; k++){
						childElements.push(temps[k]);
					};
		};
	};
	this.elements = childElements;
	return this;
};


Max.prototype.eq = function(num){
	if(typeof num == "number"){
		var len = this.elements[num];
		this.elements = [];    //清空原数组
		this.elements[0] = len;	  //重新把选中的当前索引传给新数组的第一位
		return this;
	};
};




/**
*
*  Set stylesheet script (设置CSS)
*/
Max.prototype.css = function(attr,value){
	for(var i = 0; i < this.elements.length; i++){
		if(arguments.length == 1){
			return getStyle(this.elements[i],attr);
		};
		this.elements[i].style[attr] = value;
	};
	return this;
};




/**
*
*  Add stylesheet script (添加CSS)
*  @param {String} 要添加的CSS属性名
*/
Max.prototype.addClass = function(className){
	for(var i = 0; i < this.elements.length; i++){
							// 用正则去匹配如果有该样式 就不重复添加
		if(!this.elements[i].className.match(new RegExp("(\\s|^)" + className +"(\\s|$)"))){
			this.elements[i].className += className + ' ';   //多个样式累加，并用空格隔开
		};	
	};
	return this;
};



/**
*
*  Remove stylesheet script (移除CSS)
*/
Max.prototype.removeClass = function(className){
	for(var i = 0; i < this.elements.length; i++){
		if(this.elements[i].className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"))){
			this.elements[i].className = this.elements[i].className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)"),'')
		};
	};
	return this;
};


/**
*
*  Set innerHTML script (设置innerHTML)
*/
Max.prototype.html = function(value){
	for(var i = 0; i < this.elements.length; i++){
		if(arguments.length == 0){
			return this.elements[i].innerHTML;
		};
		this.elements[i].innerHTML = value;
	};
	return this;
};



/**
*
*  Set hover event script (设置hover方法)
*/
Max.prototype.hover = function(over,out){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].onmouseover = over;
		this.elements[i].onmouseout = out;
	};
	return this;
};



/**
*
*  Set show event script (设置show方法)
*/
Max.prototype.show = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = "block";
	};
	return this;
};




/**
*
*  Set hide event script (设置hide方法)
*/
Max.prototype.hide = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = "none";
	};
	return this;
};



/**
*
*  Set click event script (设置click方法)
*/
Max.prototype.click = function(fn){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].onclick = fn;
	};
	return this;
};



/**
*
*  Set center function script (封装居中显示的方法)
*/
Max.prototype.center = function(width,height){
	if(arguments.length == 0){
		var width = parseInt(this.css('width'));      //动态计算当前元素的宽度
		var height = parseInt(this.css('height'));    //动态计算当前元素的高度

		var left = (getInner().width - width)/2;
		var top = (getInner().height - height)/2;

		for(var i = 0; i < this.elements.length; i++){
	 		this.elements[i].style.left = left +'px';
	 		this.elements[i].style.top = top + 'px';
	 	};
	} else if(arguments.length == 2){
	 	var left = (getInner().width - width)/2;
	 	var top = (getInner().height - height)/2;
	 	for(var i = 0; i < this.elements.length; i++){
	 		this.elements[i].style.left = left +'px';
	 		this.elements[i].style.top = top + 'px';
	 	};	
	};
	return this;
};



Max.prototype.lock = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.width = getInner().width + 'px';
		this.elements[i].style.height = getInner().height + 'px';
		this.elements[i].style.display = 'block';
	};
	return this;
};



Max.prototype.unlock = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = 'none';
	};
	return this;
};




/**
*
*  Set browser resize function  (封装浏览器重载函数)
*/
Max.prototype.resize = function(fn){
	for(var i = 0; i < this.elements.length; i++){
		var element = this.elements[i];
		window.onresize = function(){
			fn();
			if(element.offsetLeft > getInner().width - element.offsetWidth){
				element.style.left = getInner().width - element.offsetWidth + 'px';
			}
			if(element.offsetTop > getInner().height - element.offsetHeight){
				element.style.top = getInner().height - element.offsetHeight + 'px';
			}
		};
	};
	return this;    
};





/**
*
* Core object function end (封装核心对象的原型方法 结束)
*/








/**
*
*  Section:2
*  Cross browser compatible script start (跨浏览器兼容方法 开始)
*/

function getInner(){
	if(typeof window.innerWidth !== 'undefined'){
		return {
			width : window.innerWidth,
			height : window.innerHeight
		};
	} else{
		return {
			width : document.documentElement.clientWidth,
			height : document.documentElement.clientHeight
		};
	};
};


function getStyle(element,attr){
	if(typeof window.getComputedStyle !== 'undefined'){    // W3C
		return window.getComputedStyle(element,null)[attr];
	} else if(typeof element.currentStyle !== 'undefined'){   // IE
		return element.currentStyle[attr];
	};
};



function getEvent(event){
	return event || window.event;
};


/**
*
*  Cross browser compatible script end (跨浏览器兼容方法 结束)
*/
