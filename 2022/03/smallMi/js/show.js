var choese1 = document.querySelectorAll('.Choese1')
var choese2 = document.querySelectorAll('.Choese2')
var choese3 = document.querySelectorAll('.Choese3')
var choese4 = document.querySelectorAll('.Choese4')
var choses11 = document.querySelectorAll('.Choese1-1')
var choses22 = document.querySelectorAll('.Choese2-2')
for(var i =0;i<choese1.length;i++){
	choese1[i].addEventListener('mousemove',function(){
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[0].style.display = 'block'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[1].style.display = 'none'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[2].style.display = 'none'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[3].style.display = 'none'
		this.style.color = 'red'
		this.style.textDecoration = 'underline'
		this.parentNode.nextElementSibling.children[0].style.color = 'black'
		this.parentNode.nextElementSibling.children[0].style.textDecoration = 'none'
		this.parentNode.nextElementSibling.nextElementSibling.children[0].style.color = 'black'
		this.parentNode.nextElementSibling.nextElementSibling.children[0].style.textDecoration = 'none'
		this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.children[0].style.color = 'black'
		this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.children[0].style.textDecoration = 'none'
	})
	choese2[i].addEventListener('mousemove',function(){
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[1].style.display = 'block'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[0].style.display = 'none'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[2].style.display = 'none'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[3].style.display = 'none'
		this.style.color = 'red'
		this.style.textDecoration = 'underline'
		this.parentNode.previousElementSibling.children[0].style.color = 'black'
		this.parentNode.previousElementSibling.children[0].style.textDecoration = 'none'
		this.parentNode.nextElementSibling.children[0].style.color = 'black'
		this.parentNode.nextElementSibling.children[0].style.textDecoration = 'none'
		this.parentNode.nextElementSibling.nextElementSibling.children[0].style.color = 'black'
		this.parentNode.nextElementSibling.nextElementSibling.children[0].style.textDecoration = 'none'
	})
}
for(var i = 0;i< choese3.length;i++){
	choese3[i].addEventListener('mousemove',function(){
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[1].style.display = 'none'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[0].style.display = 'none'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[2].style.display = 'block'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[3].style.display = 'none'
		this.style.color = 'red'
		this.style.textDecoration = 'underline'
		this.parentNode.nextElementSibling.children[0].style.color = 'black'
		this.parentNode.nextElementSibling.children[0].style.textDecoration = 'none'
		this.parentNode.previousElementSibling.children[0].style.color = 'black'
		this.parentNode.previousElementSibling.children[0].style.textDecoration = 'none'
		this.parentNode.previousElementSibling.previousElementSibling.children[0].style.color = 'black'
		this.parentNode.previousElementSibling.previousElementSibling.children[0].style.textDecoration = 'none'
	})
	choese4[i].addEventListener('mousemove',function(){
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[1].style.display = 'none'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[0].style.display = 'none'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[2].style.display = 'none'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[3].style.display = 'block'
		this.style.color = 'red'
		this.style.textDecoration = 'underline'
		this.parentNode.previousElementSibling.children[0].style.color = 'black'
		this.parentNode.previousElementSibling.children[0].style.textDecoration = 'none'
		this.parentNode.previousElementSibling.previousElementSibling.children[0].style.color = 'black'
		this.parentNode.previousElementSibling.previousElementSibling.children[0].style.textDecoration = 'none'
		this.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.children[0].style.color = 'black'
		this.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.children[0].style.textDecoration = 'none'
	})
}
for (var i = 0;i<choses11.length;i++){
	choses11[i].addEventListener('mousemove',function(){
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[1].style.display = 'none'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[0].style.display = 'block'
		this.style.color = 'red'
		this.style.textDecoration = 'underline'
		this.parentNode.nextElementSibling.children[0].style.color = 'black'
		this.parentNode.nextElementSibling.children[0].style.textDecoration = 'none'
	})
	choses22[i].addEventListener('mousemove',function(){
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[1].style.display = 'block'
		this.parentNode.parentNode.parentNode.nextElementSibling.children[1].children[0].style.display = 'none'
		this.style.color = 'red'
		this.style.textDecoration = 'underline'
		this.parentNode.previousElementSibling.children[0].style.color = 'black'
		this.parentNode.previousElementSibling.children[0].style.textDecoration = 'none'
	})
}
