const service = {
	vendingMachine(){
		VendingMachine.prototype.setChange = function(change){_change = change}
		VendingMachine.prototype.getChange = function(){return _change}
		VendingMachine.prototype.setItemNo = function(itemNo){_itemNo = itemNo}
		VendingMachine.prototype.getItemNo = function(){return _itemNo}
		VendingMachine.prototype.setItemNoList = function(itemNoList){_itemNoList = itemNoList}
		VendingMachine.prototype.getItemNoList = function(){return _itemNoList}
		VendingMachine.prototype.setItemList = function(itemList){_itemList = itemList}
		VendingMachine.prototype.getItemList = function(){return _itemList}
	},
	insertCoin(coin){
		service.vendingMachine()
		const vm = new VendingMachine()
		vm.setChange(coin)
		return vm.getChange()
	},
	selectItem(itemNo){
		let menu = [{no:1, name:"콜라"},
					{no:2, name:"사이다"},
					{no:3, name:"환타"}]
		service.vendingMachine()
		const vm = new VendingMachine()
		let itemNos = [...arguments]
		vm.setItemNo(itemNo)
		alert(vm.getItemNo())
		let itemsName = []
		let findName = []
		for(let i = 0; i<itemNo.length;i++){
			findName = menu.find(j=>j.no == itemNo[i])
			//itemsName.push(findName.name)
		}
		vm.setItemList(itemsName)
		alert(findName)
	},
	returnChange(){
		service.vendingMachine()
		const vm = new VendingMachine()
		let itemCost = []
		itemCost.push(vm.getChange())
		/* let items = vm.getItemNo()
		items.forEach(i=>{if(items[i]==1)itemCost.push(1000)
						if(items[i]==2)itemCost.push(900)
						if(items[i]==3)itemCost.push(500)})
		return itemCost.reduce((i,j)=>i-j) */

	},
	handleOrder(quantity, price, itemName, stock){}
}
