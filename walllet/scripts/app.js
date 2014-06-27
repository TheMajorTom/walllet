(function (global) {
    
    var app = global.app = global.app || {};
    var validator;
    
    app.makeUrlAbsolute = function (url) {
        var anchorEl = document.createElement("a");
        anchorEl.href = url;
        return anchorEl.href;
    };

    document.addEventListener("onInitialize", function () {
        alert("xpto");
    });
    
    document.addEventListener("deviceready", function () {
        navigator.splashscreen.hide();

        app.changeSkin = function (e) {
            var mobileSkin = "";

            if (e.sender.element.text() === "Flat") {
                e.sender.element.text("Native");
                mobileSkin = "flat";
            } else {
                e.sender.element.text("Flat");
                mobileSkin = "";
            }

            app.application.skin(mobileSkin);
        };

        new kendo.mobile.Application($(document.body), {platform:"ios7"});
        
        app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout", hideAddressBar: true }), validator;   
        
        app.InitValidator = function(e) 
        {
           alert("init");
           validator = e.view.element.kendoValidator().data("kendoValidator");
        }
        
        app.tabstripOnSelect = function(e) 
        {
        	alert("select");    
            var x = $(e.item).index();
            
            if (x === 1) {
                if (validator.validate()) {
                    app.navigate("address.html");
                }
            } 
            
            e.preventDefault();
        }
    }, false);
})(window);