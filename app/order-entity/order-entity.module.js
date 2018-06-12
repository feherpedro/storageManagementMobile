"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_client_1 = require("nativescript-angular/http-client");
var nativescript_angular_1 = require("nativescript-angular");
var common_1 = require("nativescript-angular/common");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var angular_1 = require("nativescript-ui-listview/angular");
var date_helper_service_1 = require("~/date-helper.service");
var order_entity_detail_component_1 = require("~/order-entity/order-entity-detail.component");
var order_entity_dialog_component_1 = require("~/order-entity/order-entity-dialog.component");
var order_entity_routing_module_1 = require("~/order-entity/order-entity-routing.module");
var order_entity_component_1 = require("~/order-entity/order-entity.component");
var order_entity_service_1 = require("~/order-entity/order-entity.service");
var product_service_1 = require("~/scan/product.service");
var OrderEntityModule = /** @class */ (function () {
    function OrderEntityModule() {
    }
    OrderEntityModule = __decorate([
        core_1.NgModule({
            imports: [
                http_client_1.NativeScriptHttpClientModule,
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUIListViewModule,
                order_entity_routing_module_1.OrderEntityRoutingModule
            ],
            declarations: [
                order_entity_component_1.OrderEntityComponent,
                order_entity_dialog_component_1.OrderEntityDialogComponent,
                order_entity_detail_component_1.OrderEntityDetailComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                http_client_1.NativeScriptHttpClientModule,
                product_service_1.ProductService,
                order_entity_service_1.OrderEntityService,
                date_helper_service_1.DateHelperService,
                nativescript_angular_1.ModalDialogService,
                nativescript_barcodescanner_1.BarcodeScanner
            ],
            entryComponents: [
                order_entity_dialog_component_1.OrderEntityDialogComponent
            ]
        })
    ], OrderEntityModule);
    return OrderEntityModule;
}());
exports.OrderEntityModule = OrderEntityModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50aXR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVyLWVudGl0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0VBQWdGO0FBRWhGLDZEQUEwRDtBQUMxRCxzREFBdUU7QUFDdkUsMkVBQTZEO0FBQzdELDREQUFnRjtBQUNoRiw2REFBMEQ7QUFDMUQsOEZBQTBGO0FBQzFGLDhGQUEwRjtBQUMxRiwwRkFBc0Y7QUFDdEYsZ0ZBQTZFO0FBQzdFLDRFQUF5RTtBQUN6RSwwREFBd0Q7QUE2QnhEO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUEzQjdCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCwwQ0FBNEI7Z0JBQzVCLGlDQUF3QjtnQkFDeEIsc0NBQTRCO2dCQUM1QixzREFBd0I7YUFDM0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNkNBQW9CO2dCQUNwQiwwREFBMEI7Z0JBQzFCLDBEQUEwQjthQUM3QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMENBQTRCO2dCQUM1QixnQ0FBYztnQkFDZCx5Q0FBa0I7Z0JBQ2xCLHVDQUFpQjtnQkFDakIseUNBQWtCO2dCQUNsQiw0Q0FBYzthQUNqQjtZQUNELGVBQWUsRUFBRTtnQkFDYiwwREFBMEI7YUFDN0I7U0FDSixDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSBcIn4vZGF0ZS1oZWxwZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgT3JkZXJFbnRpdHlEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItZW50aXR5LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9yZGVyRW50aXR5RGlhbG9nQ29tcG9uZW50IH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWVudGl0eS1kaWFsb2cuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlckVudGl0eVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItZW50aXR5LXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBPcmRlckVudGl0eUNvbXBvbmVudCB9IGZyb20gXCJ+L29yZGVyLWVudGl0eS9vcmRlci1lbnRpdHkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlckVudGl0eVNlcnZpY2UgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItZW50aXR5LnNlcnZpY2VcIjtcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIn4vc2Nhbi9wcm9kdWN0LnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgT3JkZXJFbnRpdHlSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgT3JkZXJFbnRpdHlDb21wb25lbnQsXG4gICAgICAgIE9yZGVyRW50aXR5RGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBPcmRlckVudGl0eURldGFpbENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgIE9yZGVyRW50aXR5U2VydmljZSxcbiAgICAgICAgRGF0ZUhlbHBlclNlcnZpY2UsXG4gICAgICAgIE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgQmFyY29kZVNjYW5uZXJcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBPcmRlckVudGl0eURpYWxvZ0NvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJFbnRpdHlNb2R1bGUgeyB9XG4iXX0=