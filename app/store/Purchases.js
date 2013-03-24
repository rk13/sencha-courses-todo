Ext.define("Sencha.store.Purchases", {
	extend : 'Ext.data.Store',

	config : {
		storeId : 'purchases',
		model : 'Sencha.model.Purchase',

		sorters : 'product',
		groupField : 'list',
		autoLoad : 'true',

		data: [
	     { "product": "Tomato", "quantity": "1kg", "list" : "Mom's List", "notes" : "Some additional details" },
	     { "product": "Bread", "quantity": "1", "list" : "Mom's List", "notes" : "Some additional details" },
	     { "product": "Cabbage", "quantity": "3kg", "list" : "Mom's List", "notes" : "Some additional details" },
	     { "product": "Jameson", "quantity": "1", "list" : "Mom's List", "notes" : "Some additional details" },
	     { "product": "Tomato", "quantity": "1kg", "list" : "My List", "notes" : "Some additional details" },
	     { "product": "Bread", "quantity": "1", "list" : "My List", "notes" : "Some additional details" },
	     { "product": "Cabbage", "quantity": "3kg", "list" : "My List", "notes" : "Some additional details" },
	     { "product": "Jameson", "quantity": "1", "list" : "My List", "notes" : "Some additional details" },
	  	],
		
//		proxy : {
//			type : 'ajax',
//			
//			url : 'purchases.json',
//			reader : {
//				type : 'json',
//				rootProperty : 'purchases'
//			}
//		}
	}
});