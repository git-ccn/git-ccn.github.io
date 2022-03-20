var lboImg = document.querySelector('.lbo-img');
var img = document.querySelector('.lbo-Img').querySelector('img');
var lbtLeft = document.querySelector('.lbt-left');
var lbtRight = document.querySelector('.lbt-right');
var lboRow = document.querySelector('.lbo-Row').querySelectorAll('li');
var width = img.offsetWidth;
var num = 0
var cursion = 0
var flag = true
var first = lboImg.children[0].cloneNode(true)
lboImg.appendChild(first)
// 右侧按钮
lbtRight.addEventListener('click',function(){
	if(flag){
		flag = false
		if(num == lboImg.children.length-1){
			lboImg.style.left = 0
			num = 0
		}
		num++
		animate(lboImg,-img.offsetWidth*num,function(){
			flag = true
		});
		cursion++
		if(cursion == lboRow.length){
			cursion = 0
		}
		for(var i = 0;i<lboRow.length;i++){
			lboRow[i].className = ''
		}
		lboRow[cursion].className = 'row'
	}
})
// 左侧按钮
lbtLeft.addEventListener('click',function(){
	if(flag){
		flag = false
		if(num == 0){
			lboImg.style.left = (lboImg.children.length-1)*width +'px'
			num = lboImg.children.length-1
		}
		num--
		animate(lboImg,-img.offsetWidth*num,function(){
			flag = true
		});
		cursion--
		if(cursion < 0){
			cursion = lboRow.length-1
		}
		for(var i = 0;i<lboRow.length;i++){
			lboRow[i].className = ''
		}
		lboRow[cursion].className = 'row'
	}
	
})
for(var i =0;i<lboRow.length;i++){
	lboRow[i].addEventListener('click',function(){
		for(var j = 0;j<lboRow.length;j++){
			lboRow[j].className = ''
		}
		var index = Number(this.getAttribute('index'))
		num = index
		cursion = index
		this.className = 'row'
		animate(lboImg,-index*width)
	})
}
var timer = setInterval(function(){
	lbtRight.click()
},3000)
lboImg.addEventListener('mousemove',function(){
	clearInterval(timer)
	timer = null
})
lboImg.addEventListener('mouseleave',function(){
	timer = setInterval(function(){
		lbtRight.click()
	},3000)
})