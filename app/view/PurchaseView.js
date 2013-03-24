Ext.define("Sencha.view.PurchaseView", {
	extend : 'Ext.form.Panel',
	requires : ['Ext.form.FieldSet'],
	xtype : 'purchaseview',
	
	config : {
		purchaseitem : null, 
		title : 'Details',
		id : 'purchase_details_form',
		items : [{
					id : 'purchase_details',
					xtype : 'fieldset',
					title : 'Purchase Item info',
					items : [{
								xtype : 'textfield',
								name : 'product',
								label : 'Product'
							}, {
								xtype : 'textfield',
								name : 'quantity',
								label : 'Quantity'
							}, {
								xtype : 'textfield',
								name : 'notes',
								label : 'Notes'
							}]
				}]
	},
	
	updatePurchaseitem : function(newVal, oldVal) {
		var pdetails = Ext.getCmp('purchase_details');
		
		pdetails.down('[name = product]').setValue(newVal.get('product'));
		pdetails.down('[name = quantity]').setValue(newVal.get('quantity'));
		pdetails.down('[name = notes]').setValue(newVal.get('notes'));
	}
});