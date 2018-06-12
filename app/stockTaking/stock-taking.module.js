"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_client_1 = require("nativescript-angular/http-client");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var product_service_1 = require("~/scan/product.service");
var stock_taking_routing_module_1 = require("~/stockTaking/stock-taking-routing.module");
var stock_taking_component_1 = require("~/stockTaking/stock-taking.component");
var StockTakingModule = /** @class */ (function () {
    function StockTakingModule() {
    }
    StockTakingModule = __decorate([
        core_1.NgModule({
            imports: [
                http_client_1.NativeScriptHttpClientModule,
                stock_taking_routing_module_1.StockTakingRoutingModule
            ],
            declarations: [
                stock_taking_component_1.StockTakingComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                http_client_1.NativeScriptHttpClientModule,
                product_service_1.ProductService,
                nativescript_barcodescanner_1.BarcodeScanner
            ]
        })
    ], StockTakingModule);
    return StockTakingModule;
}());
exports.StockTakingModule = StockTakingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stdGFraW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0b2NrLXRha2luZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsZ0VBQWdGO0FBRWhGLDJFQUE2RDtBQUM3RCwwREFBd0Q7QUFDeEQseUZBQXFGO0FBQ3JGLCtFQUE0RTtBQW1CNUU7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQWpCN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDBDQUE0QjtnQkFDNUIsc0RBQXdCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDZDQUFvQjthQUN2QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMENBQTRCO2dCQUM1QixnQ0FBYztnQkFDZCw0Q0FBYzthQUNqQjtTQUNKLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwifi9zY2FuL3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IHsgU3RvY2tUYWtpbmdSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIn4vc3RvY2tUYWtpbmcvc3RvY2stdGFraW5nLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBTdG9ja1Rha2luZ0NvbXBvbmVudCB9IGZyb20gXCJ+L3N0b2NrVGFraW5nL3N0b2NrLXRha2luZy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIFN0b2NrVGFraW5nUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN0b2NrVGFraW5nQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgQmFyY29kZVNjYW5uZXJcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrVGFraW5nTW9kdWxlIHsgfVxuIl19