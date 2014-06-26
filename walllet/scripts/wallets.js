(function (global) {
    var WalletsViewModel,
        app = global.app = global.app || {};

    WalletsViewModel = kendo.data.ObservableObject.extend({
        walletsDataSource: null,

        init: function () {
            var that = this,
                dataSource,
                jsonUrlToLoad;

            kendo.data.ObservableObject.fn.init.apply(that, []);
            
            jsonUrlToLoad = "data/wallets.json";

            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: jsonUrlToLoad,
                        dataType: "json"
                    }
                }
            });

            that.set("walletsDataSource", dataSource);
        }
    });

    app.walletsServices = {
        viewModel: new WalletsViewModel()
    };
})(window);