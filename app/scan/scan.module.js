"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var scan_routing_module_1 = require("./scan-routing.module");
var scan_component_1 = require("./scan.component");
var http_client_1 = require("nativescript-angular/http-client");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var product_service_1 = require("~/scan/product.service");
var ScanModule = /** @class */ (function () {
    function ScanModule() {
    }
    ScanModule = __decorate([
        core_1.NgModule({
            imports: [
                http_client_1.NativeScriptHttpClientModule,
                common_1.NativeScriptCommonModule,
                scan_routing_module_1.ScanRoutingModule
            ],
            declarations: [
                scan_component_1.ScanComponent
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
    ], ScanModule);
    return ScanModule;
}());
exports.ScanModule = ScanModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUVqRCxnRUFBZ0Y7QUFFaEYsMkVBQTZEO0FBQzdELDBEQUF3RDtBQW9CeEQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQWxCdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDBDQUE0QjtnQkFDNUIsaUNBQXdCO2dCQUN4Qix1Q0FBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBDQUE0QjtnQkFDNUIsZ0NBQWM7Z0JBQ2QsNENBQWM7YUFDakI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBTY2FuUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3NjYW4tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgU2NhbkNvbXBvbmVudCB9IGZyb20gXCIuL3NjYW4uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcclxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwifi9zY2FuL3Byb2R1Y3Quc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBTY2FuUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFNjYW5Db21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgUHJvZHVjdFNlcnZpY2UsXHJcbiAgICAgICAgQmFyY29kZVNjYW5uZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNjYW5Nb2R1bGUgeyB9XHJcbiJdfQ==