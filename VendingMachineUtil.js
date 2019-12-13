const looping = {
	forTest(arr){
		let returnVal = []
		for(let i=0; i < arr.length; i++){
			if((arr[i]%2)==0){
				returnVal.push(arr[i])
			}
		}
		return returnVal
	},
	forEachTest(arr){
		let returnVal = []
		arr.forEach(i=>
			{if(arr[i]%2==0)
				returnVal.push(arr[i])}
		)
		return returnVal
	},
	mapTest(arr){
		return arr.map(i=>i*100)	
	},
	findTest(arr){
		return arr.find(i=>i >3)
	},
	findTest2(arr,id){
		let resultVal = (arr.find(i => i.id==id))
		return (resultVal == undefined)?'찾는 아이디가 없습니다'
										:resultVal.name
	},
	reduceTest(arr){
		return arr.reduce((i,j)=>i-j)	
	},
	filterTest(arr){
		return arr.filter(i=>(i%2==0))
	},
	ofTest(arr){
		let temp = []
		for(const item of arr){
			temp.push(item.name)
		}
		return temp
	},
	fromTest(arr){
		return arr.from([...arguments])
	},
	argumentsTest(){
		return [...arguments]
	},
	joinTest(){
		return [...arguments].join("+")
	},
	sortTest(){
		let s1 = [...arguments].sort()
		let s2 = [...s1].reverse()
		return [...s1, ...s2]
	},
	todo(arr){
		const todos = arr;
		function compare(key) {
  			return function (a, b) {
    			return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0)
  			}
		}
		resultVal = todos.sort(compare('id'))
		console.log(resultVal)

		arr = todos.sort(compare('content'))
		let temp = []
		for(const item of arr){
			temp.push(item.content)
		}
		return temp
	}
	//포장마차 리필
	//for forEach map find reduce filter


}