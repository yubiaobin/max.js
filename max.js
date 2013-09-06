/**
 * 
 * @authors max_yu(yubiaobin1986@gmial.com)
 * @date    2013-09-05 10:02:41
 * @version 1.2
 */


// core selector script start (核心选择器 开始)
var $ = function(){
	return new Max();
};

function Max(){};
// core selector script end (核心选择器 结束)




// core object function start (封装核心对象的原型方法 开始)


// create a array script start (创建一个数组，来保存获取到的节点和节点的数组 开始)
Max.prototype.elements = [];
// create a array script end (创建一个数组，来保存获取到的节点和节点的数组 结束)


// get Id element script start (获取Id节点元素 开始)
Max.prototype.getId = function(id){
	this.elements.push(document.getElementById(id));
	return this;
};
// get Id element script end (获取Id节点元素 结束)


// get class element script start (获取class节点元素 开始)
Max.prototype.getClass = function(className){
	var all = document.getElementsByTagName('*');
	console.log(all);
	for(var i = 0; i < all.length; i++){
		if(all[i].className == className){
			this.elements.push(all[i]);
		};
	};
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
// get class element script end (获取class节点元素 结束)



// get Tag element script start (获取标记节点元素 开始)
Max.prototype.getTag = function(tag){
	var tags = document.getElementsByTagName(tag);
	for(var i = 0; i < tags.length; i++){
		this.elements.push(tags[i]);
	};
	return this;
};
// get Tag element script end (获取标记节点元素 结束)



Max.prototype.getName = function(name){
	var tags = document.getElementsByName(name);
	for(var i = 0; i < tags.length; i++){
		this.elements.push(tags[i]);
	};
	return this;
};


// set stylesheet script start (设置CSS 开始)
Max.prototype.css = function(attr,value){
	for(var i = 0; i < this.elements.length; i++){
		if(arguments.length == 1){
			// return this.elements[i].style[attr];   //inline style
			if(typeof window.getComputedStyle !== 'undefined'){    //W3C
				return window.getComputedStyle(this.elements[i],null)[attr];
			} else if(typeof this.elements[i].currentStyle !== 'undefined'){   //IE
				return this.elements[i].currentStyle[attr];
			}
		}
		this.elements[i].style[attr] = value;
	};
	return this;
};
// set stylesheet script end (设置CSS 结束)


// set innerHTML script start (设置innerHTML 开始)
Max.prototype.html = function(value){
	for(var i = 0; i < this.elements.length; i++){
		if(arguments.length == 0){
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = value;
	};
	return this;
};
// set innerHTML script end (设置innerHTML 结束)


// set click event script start (设置click方法 开始)
Max.prototype.click = function(fn){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].onclick = fn;
	};
	return this;
};
// set click event script end (设置click方法 结束)



// core object function end (封装核心对象的原型方法 结束)





