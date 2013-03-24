Ext.define("Sencha.view.PurchaseList", {
	extend : 'Ext.dataview.List',
	xtype : 'purchaselistview',

	config : {
		title : 'Purchases',
		store : 'purchases',
		itemTpl : '<b>{product}</b> ({quantity})',
		grouped : true
	}
});
