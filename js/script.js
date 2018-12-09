const addElement = ( tagName, container ) =>
    ( container ? container : document.body ).appendChild (
          document.createElement ( tagName )
	)
Date.prototype.getFormatDate = function() {
	var monthNames = [ "января", "февраля", "марта", "апреля", "мая", "июня", 
		"июля", "августа", "сентября", "октября", "ноября", "декабря" ];
	return this.getDate()+' '+monthNames[this.getMonth()]+' '+this.getFullYear();
}
let comBox = document.querySelector ( '.comments-body' )
let inp = document.querySelector ( '.comment-form__text' )
function addComm (event) {
	if ( inp.value == false ) return
	let block =  addElement ( 'div', comBox)
	block.className = 'comment'
	let allComment = document.querySelectorAll ( '.comment' )
	let userName = addElement ( 'h4', block)
	userName.className = 'comment__user'
	userName.innerText = `Пользователь ${allComment.length}` 
	let newDate = addElement ( 'span', block)
	newDate.className = 'comment__date'
	newDate.innerText = new Date().getFormatDate()
	let blockText = addElement ( 'div', block)
	blockText.className = 'comment__text'
	blockText.innerText = inp.value
	let btnAllComment = document.querySelector ( '.social__btn--comment' )
	btnAllComment.innerText = +btnAllComment.innerText + 1
	inp.value = ''
}
function addComm2 (event) {
    if ( event.ctrlKey && event.keyCode == 13  ) { 
    	addComm()
	}
}

let toggle = false
let numHeart = document.querySelector ( '.social__btn--heart' )
let shapeHeart = document.querySelector ( '.fa-heart' )
function toggleLike () {
	toggle = !toggle
	if (toggle == true) {
		numHeart.innerText = +numHeart.innerText + 1
		shapeHeart.style.color = 'red' 
	}
	else {
		numHeart.innerText = +numHeart.innerText - 1
		shapeHeart.style.color = '#73b4d5'
	}
	
}
