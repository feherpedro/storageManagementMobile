"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var common_1 = require("nativescript-angular/common");
var http_client_1 = require("nativescript-angular/http-client");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var angular_1 = require("nativescript-ui-dataform/angular");
var product_detail_component_1 = require("~/product/product-detail.component");
var product_dialog_component_1 = require("~/product/product-dialog.component");
var product_service_1 = require("~/product/product.service");
var product_routing_module_1 = require("./product-routing.module");
var product_component_1 = require("./product.component");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                http_client_1.NativeScriptHttpClientModule,
                common_1.NativeScriptCommonModule,
                forms_1.FormsModule,
                angular_1.NativeScriptUIDataFormModule,
                nativescript_angular_1.NativeScriptFormsModule,
                product_routing_module_1.ProductRoutingModule
            ],
            declarations: [
                product_component_1.ProductComponent,
                product_detail_component_1.ProductDetailComponent,
                product_dialog_component_1.ProductDialogComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                http_client_1.NativeScriptHttpClientModule,
                product_service_1.ProductService,
                nativescript_angular_1.ModalDialogService,
                nativescript_barcodescanner_1.BarcodeScanner
            ],
            entryComponents: [
                product_dialog_component_1.ProductDialogComponent
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCx3Q0FBNkM7QUFFN0MsNkRBQW1GO0FBQ25GLHNEQUF1RTtBQUN2RSxnRUFBZ0Y7QUFDaEYsMkVBQTZEO0FBQzdELDREQUFnRjtBQUNoRiwrRUFBNEU7QUFDNUUsK0VBQTRFO0FBQzVFLDZEQUEyRDtBQUMzRCxtRUFBZ0U7QUFDaEUseURBQXVEO0FBNkJ2RDtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQTNCekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDBDQUE0QjtnQkFDNUIsaUNBQXdCO2dCQUN4QixtQkFBVztnQkFDWCxzQ0FBNEI7Z0JBQzVCLDhDQUF1QjtnQkFDdkIsNkNBQW9CO2FBQ3ZCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9DQUFnQjtnQkFDaEIsaURBQXNCO2dCQUN0QixpREFBc0I7YUFDekI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBDQUE0QjtnQkFDNUIsZ0NBQWM7Z0JBQ2QseUNBQWtCO2dCQUNsQiw0Q0FBYzthQUNqQjtZQUNELGVBQWUsRUFBRTtnQkFDYixpREFBc0I7YUFDekI7U0FDSixDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9kdWN0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSBcIn4vcHJvZHVjdC9wcm9kdWN0LWRpYWxvZy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIn4vcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFByb2R1Y3RSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vcHJvZHVjdC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgUHJvZHVjdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2R1Y3QuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgUHJvZHVjdFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQcm9kdWN0Q29tcG9uZW50LFxuICAgICAgICBQcm9kdWN0RGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBQcm9kdWN0RGlhbG9nQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBCYXJjb2RlU2Nhbm5lclxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFByb2R1Y3REaWFsb2dDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RNb2R1bGUgeyB9XG4iXX0=