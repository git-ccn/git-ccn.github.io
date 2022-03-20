function animate (obj,length,callback) {
	clearInterval(obj.time);
	obj.time = setInterval(function(){
		var step = (length - obj.offsetLeft) /20;
		step = step > 0? Math.ceil(step) : Math.floor(step);
		if(obj.offsetLeft == length){
			clearInterval(obj.time);
			if(callback){
				callback();
			}
		}
		obj.style.left = obj.offsetLeft + step + 'px';
	},15)
}