const compo = {
	div(id){
		const div = document.createElement('div')
		div.setAttribute('id', id)
		div.setAttribute('style', 'border : 1px solid black')
		return div
	},
	input(type, id){
		const input = document.createElement('input')
		input.setAttribute('id', id)
		input.setAttribute('type', type)
		return input
	},
	br(){
		const br = document.createElement('br')
		return br
	}

}

function Div(){
	this.make = function(id){
		const div = document.createElement('div')
		div.setAttribute('id', id)
		div.setAttribute('style', 'border : 1px solid black')
		return div
	}
}

function Input(){
	this.make = function(type, id){
		const input = document.createElement('input')
		input.setAttribute('type', type)
		input.setAttribute('id', id)
		return input
	}
}
function Br(){
	this.make = function(){
		const br = document.createElement('br')
		return br
	}
}
function Func02(){
			this.play = function(){
				if(input == undefined || input == null || input == ''){
					alert('텍스트 필드를 입력하세요')
				}else{
					alert((input.value !=='')?input.value : '먼저입력하세요')
					input.focus()
				}
				choice. value = 0
		
			}
		}
function Factory(type){
	switch(type){
		case 'input' : return new Input()
		case 'br' : return new Br()
		case 'div' : return new Div()
	}
}