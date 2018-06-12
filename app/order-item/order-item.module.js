"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_client_1 = require("nativescript-angular/http-client");
var common_1 = require("nativescript-angular/common");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var order_item_routing_module_1 = require("~/order-item/order-item-routing.module");
var order_item_component_1 = require("~/order-item/order-item.component");
var order_item_service_1 = require("~/order-item/order-item.service");
var product_service_1 = require("~/scan/product.service");
var OrderItemModule = /** @class */ (function () {
    function OrderItemModule() {
    }
    OrderItemModule = __decorate([
        core_1.NgModule({
            imports: [
                http_client_1.NativeScriptHttpClientModule,
                common_1.NativeScriptCommonModule,
                order_item_routing_module_1.OrderItemRoutingModule
            ],
            declarations: [
                order_item_component_1.OrderItemComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                http_client_1.NativeScriptHttpClientModule,
                product_service_1.ProductService,
                order_item_service_1.OrderItemService,
                nativescript_barcodescanner_1.BarcodeScanner
            ]
        })
    ], OrderItemModule);
    return OrderItemModule;
}());
exports.OrderItemModule = OrderItemModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRUFBZ0Y7QUFFaEYsc0RBQXVFO0FBQ3ZFLDJFQUE2RDtBQUM3RCxvRkFBZ0Y7QUFDaEYsMEVBQXVFO0FBQ3ZFLHNFQUFtRTtBQUNuRSwwREFBd0Q7QUFxQnhEO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBbkIzQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsMENBQTRCO2dCQUM1QixpQ0FBd0I7Z0JBQ3hCLGtEQUFzQjthQUN6QjtZQUNELFlBQVksRUFBRTtnQkFDVix5Q0FBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBDQUE0QjtnQkFDNUIsZ0NBQWM7Z0JBQ2QscUNBQWdCO2dCQUNoQiw0Q0FBYzthQUNqQjtTQUNKLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcbmltcG9ydCB7IE9yZGVySXRlbVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwifi9vcmRlci1pdGVtL29yZGVyLWl0ZW0tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IE9yZGVySXRlbUNvbXBvbmVudCB9IGZyb20gXCJ+L29yZGVyLWl0ZW0vb3JkZXItaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9yZGVySXRlbVNlcnZpY2UgfSBmcm9tIFwifi9vcmRlci1pdGVtL29yZGVyLWl0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwifi9zY2FuL3Byb2R1Y3Quc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBPcmRlckl0ZW1Sb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgT3JkZXJJdGVtQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgT3JkZXJJdGVtU2VydmljZSxcbiAgICAgICAgQmFyY29kZVNjYW5uZXJcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVySXRlbU1vZHVsZSB7IH1cbiJdfQ==