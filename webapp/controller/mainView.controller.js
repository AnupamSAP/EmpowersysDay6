sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.emp.empproject6.controller.mainView", {
            onInit: function () {
                var oModel = this.getOwnerComponent().getModel();
                oModel.read("/Categories", {
                    success: function(oRetrievedResult) { 
                        /* do something */ 
                    debugger;},
                    error: function(oError) { 
                        /* do something */
                    debugger; }
                  });
            }
        });
    });
