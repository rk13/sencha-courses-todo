Ext.define("Sencha.view.Navigation", {
	extend : 'Ext.navigation.View',
	xtype : 'navigation',
	requires : ['Ext.TitleBar'],

	config : {
		iconCls : 'home',
		defaultBackButtonText : 'Back',

		navigationBar : {
			items : [{
						id : 'btn-navigation-add',
						xtype : 'button',
						align : 'right',
						text : 'Add'
					}, {
						xtype : 'button',
						align : 'right',
						text : 'Exit',

						handler : function() {
							if (window.senchaAndroidNative != undefined) {
				            	senchaAndroidNative.exitToMain();
							}
						}
					}]
		}
	}
});
