Ext.define('Sencha.controller.PurchaseList', {
    extend: 'Ext.app.Controller',
        
    config: {
        refs: {
            navigation: 'navigation',
            list: 'purchaselistview'
        },
        
        control: {
            list: {
                itemtap: function(view, index, target, record, e, eOpts) {
                    view.select(record);
                    
                    this.getNavigation().push({
                        xtype: 'purchaseview',
                        purchaseitem: record
                    });
                    
                    return true;
                }
            }
        }
    }
});
