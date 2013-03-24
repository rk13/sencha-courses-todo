Ext.define('Sencha.model.Purchase', {
	extend : 'Ext.data.Model',
	
	config : {
		fields : [
			'product', 
			'quantity', 
			'list',
			'notes'
		]
	}
});
