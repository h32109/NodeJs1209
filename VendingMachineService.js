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
		service.vendingMachine()
		const vm = new VendingMachine()
		let itemName
		switch(itemNo){
			case '1' : itemName = '콜라'
				break
			case '2' : itemName = '사이다'
				break
			case '3' : itemName = '환타'
				break
		}
		vm.setItemNo(itemNo)
		vm.setItemList(itemName)
		alert(itemName)
	},
	returnChange(inputCost, qty){
		service.vendingMachine()
		const vm = new VendingMachine()
		let itemNo = vm.getItemNo()
		let cost = 0
		switch(itemNo){
			case '1' : cost = 1000
				break
			case '2' : cost = 900
				break
			case '3' : cost = 500
				break
		}
		alert(vm.getChange())
		alert(vm.getItemNo())
		return inputCost-(cost*qty)

	},
	handleOrder(quantity, price, itemName, stock){}
}

