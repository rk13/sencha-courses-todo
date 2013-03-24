Ext.define('Sencha.controller.Purchases', {
    extend: 'Ext.app.Controller',
        
    config: {
        refs: {
            navigation: 'navigation',
            btnNavigationAdd : '#btn-navigation-add',
            btnPurchaseEditAdd : 'purchaseedit button',
            formPurchaseEdit : 'purchaseedit'
        },
        
        
        control: {
            btnNavigationAdd: {
                tap: function(view, e, eOpts) {
                    this.getNavigation().push({
                        xtype: 'purchaseedit'
                    });
                    return false;
                }
            },
            
            btnPurchaseEditAdd : {
            	tap : function() {
					var purchase = Ext.create('Sencha.model.Purchase', this.getFormPurchaseEdit().getValues());
					Ext.data.StoreManager.lookup('purchases').add(purchase);
					
					this.getNavigation().pop();
					return false;
				}
            }
        }
    }
});
