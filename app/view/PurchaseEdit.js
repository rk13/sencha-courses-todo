Ext.define('Sencha.view.PurchaseEdit', {
	extend : 'Sencha.view.PurchaseView',
	xtype : 'purchaseedit',

	config : {
		title : 'Edit'
	},

	initialize : function(view, options) {
		this.add({
					xtype : 'button',
					text : 'Add'
				});
	}
});