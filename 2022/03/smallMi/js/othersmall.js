var pcimg = document.querySelectorAll('.pcimg')
var pcrow = document.querySelectorAll('.pcrow')
for(var i = 0; i < pcimg.length;i++){
	pcimg[i].addEventListener('mousemove',function(){
	this.children[1].children[0].style.backgroundColor = 'orange'
})
	pcimg[i].addEventListener('mouseleave',function(){
		this.children[1].children[0].style.backgroundColor = ''
	})
}

// 底部微信
var wechet = document.querySelector('.bottom-tubiao').querySelectorAll('a')
var bottomEwm = document.querySelector('.bottom-erwma-img')
wechet[1].addEventListener("mousemove",function(){
	bottomEwm.style.visibility = 'visible'
})
wechet[1].addEventListener("mouseleave",function(){
	bottomEwm.style.visibility = 'hidden'
})

// 侧边栏
var static = document.querySelector('.xioami-cebianl-ul').querySelectorAll('li')
for(var i=0;i<static.length;i++){
	static[i].addEventListener('mousemove',function(){
	    this.children[0].children[0].children[1].style.display = 'block'
		this.children[0].children[0].children[0].style.display = 'none'
		this.children[0].children[1].style.color = 'red'
	})
	static[i].addEventListener('mouseleave',function(){
		this.children[0].children[0].children[1].style.display = 'none'
		this.children[0].children[0].children[0].style.display = 'block'
		this.children[0].children[1].style.color = ''
	})
}
var xiaomiphone = document.querySelector('.Xiaomi-zhanshilan-phone')
var xiaomiceBL = document.querySelector('.xioami-cebianl')
var back = document.querySelector('.xiaoMI-back')
document.addEventListener('scroll',function(){
	if(window.pageYOffset>= xiaomiphone.offsetTop){
		back.style.display = 'block'
	}
	else{
		back.style.display = 'none'
	}
})
back.addEventListener('click',function(){
	window.scroll(0,0)
})

// 搜索框
var seacher = document.querySelector('.seacher').querySelector('input')
var data = ["小米手机","耳机","显示器","净水器","空调","冰箱","洗衣机"];
var i = 0
setInterval(function(){
	if(i < 7){
		seacher.setAttribute('placeholder',data[i])
	    i++
	}
	else{
		i = 0
	}
	 
},5000)
