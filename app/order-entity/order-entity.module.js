"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_client_1 = require("nativescript-angular/http-client");
var forms_1 = require("@angular/forms");
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
var order_item_detail_component_1 = require("~/order-entity/order-item-detail.component");
var order_item_dialog_component_1 = require("~/order-entity/order-item-dialog.component");
var order_item_service_1 = require("~/order-entity/order-item.service");
var product_service_1 = require("~/product/product.service");
var OrderEntityModule = /** @class */ (function () {
    function OrderEntityModule() {
    }
    OrderEntityModule = __decorate([
        core_1.NgModule({
            imports: [
                http_client_1.NativeScriptHttpClientModule,
                common_1.NativeScriptCommonModule,
                forms_1.FormsModule,
                nativescript_angular_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIListViewModule,
                order_entity_routing_module_1.OrderEntityRoutingModule
            ],
            declarations: [
                order_entity_component_1.OrderEntityComponent,
                order_entity_dialog_component_1.OrderEntityDialogComponent,
                order_entity_detail_component_1.OrderEntityDetailComponent,
                order_item_dialog_component_1.OrderItemDialogComponent,
                order_item_detail_component_1.OrderItemDetailComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                http_client_1.NativeScriptHttpClientModule,
                product_service_1.ProductService,
                order_entity_service_1.OrderEntityService,
                order_item_service_1.OrderItemService,
                date_helper_service_1.DateHelperService,
                nativescript_angular_1.ModalDialogService,
                nativescript_barcodescanner_1.BarcodeScanner
            ],
            entryComponents: [
                order_entity_dialog_component_1.OrderEntityDialogComponent,
                order_item_dialog_component_1.OrderItemDialogComponent
            ]
        })
    ], OrderEntityModule);
    return OrderEntityModule;
}());
exports.OrderEntityModule = OrderEntityModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50aXR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVyLWVudGl0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0VBQWdGO0FBRWhGLHdDQUE2QztBQUM3Qyw2REFBbUY7QUFDbkYsc0RBQXVFO0FBQ3ZFLDJFQUE2RDtBQUM3RCw0REFBZ0Y7QUFDaEYsNkRBQTBEO0FBQzFELDhGQUEwRjtBQUMxRiw4RkFBMEY7QUFDMUYsMEZBQXNGO0FBQ3RGLGdGQUE2RTtBQUM3RSw0RUFBeUU7QUFDekUsMEZBQXNGO0FBQ3RGLDBGQUFzRjtBQUN0Rix3RUFBcUU7QUFDckUsNkRBQTJEO0FBbUMzRDtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBakM3QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsMENBQTRCO2dCQUM1QixpQ0FBd0I7Z0JBQ3hCLG1CQUFXO2dCQUNYLDhDQUF1QjtnQkFDdkIsc0NBQTRCO2dCQUM1QixzREFBd0I7YUFDM0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNkNBQW9CO2dCQUNwQiwwREFBMEI7Z0JBQzFCLDBEQUEwQjtnQkFDMUIsc0RBQXdCO2dCQUN4QixzREFBd0I7YUFDM0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBDQUE0QjtnQkFDNUIsZ0NBQWM7Z0JBQ2QseUNBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLHVDQUFpQjtnQkFDakIseUNBQWtCO2dCQUNsQiw0Q0FBYzthQUNqQjtZQUNELGVBQWUsRUFBRTtnQkFDYiwwREFBMEI7Z0JBQzFCLHNEQUF3QjthQUMzQjtTQUNKLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gXCJ+L2RhdGUtaGVscGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IE9yZGVyRW50aXR5RGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWVudGl0eS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlckVudGl0eURpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCJ+L29yZGVyLWVudGl0eS9vcmRlci1lbnRpdHktZGlhbG9nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3JkZXJFbnRpdHlSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWVudGl0eS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgT3JkZXJFbnRpdHlDb21wb25lbnQgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItZW50aXR5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3JkZXJFbnRpdHlTZXJ2aWNlIH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWVudGl0eS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPcmRlckl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlckl0ZW1EaWFsb2dDb21wb25lbnQgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItaXRlbS1kaWFsb2cuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlckl0ZW1TZXJ2aWNlIH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWl0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwifi9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE9yZGVyRW50aXR5Um91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE9yZGVyRW50aXR5Q29tcG9uZW50LFxuICAgICAgICBPcmRlckVudGl0eURpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgT3JkZXJFbnRpdHlEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIE9yZGVySXRlbURpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgT3JkZXJJdGVtRGV0YWlsQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgT3JkZXJFbnRpdHlTZXJ2aWNlLFxuICAgICAgICBPcmRlckl0ZW1TZXJ2aWNlLFxuICAgICAgICBEYXRlSGVscGVyU2VydmljZSxcbiAgICAgICAgTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBCYXJjb2RlU2Nhbm5lclxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIE9yZGVyRW50aXR5RGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBPcmRlckl0ZW1EaWFsb2dDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRW50aXR5TW9kdWxlIHsgfVxuIl19