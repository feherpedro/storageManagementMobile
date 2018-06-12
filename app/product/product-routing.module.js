"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var product_detail_component_1 = require("~/product/product-detail.component");
var product_dialog_component_1 = require("~/product/product-dialog.component");
var product_component_1 = require("./product.component");
var routes = [
    { path: "", component: product_component_1.ProductComponent },
    { path: "new", component: product_dialog_component_1.ProductDialogComponent },
    { path: ":id", component: product_detail_component_1.ProductDetailComponent }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());
exports.ProductRoutingModule = ProductRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3Qtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLCtFQUE0RTtBQUM1RSwrRUFBNEU7QUFDNUUseURBQXVEO0FBRXZELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7SUFDekMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO0NBQ3JELENBQUM7QUFNRjtJQUFBO0lBQW9DLENBQUM7SUFBeEIsb0JBQW9CO1FBSmhDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csb0JBQW9CLENBQUk7SUFBRCwyQkFBQztDQUFBLEFBQXJDLElBQXFDO0FBQXhCLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUHJvZHVjdERldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9kdWN0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSBcIn4vcHJvZHVjdC9wcm9kdWN0LWRpYWxvZy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9kdWN0LmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogUHJvZHVjdENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJuZXdcIiwgY29tcG9uZW50OiBQcm9kdWN0RGlhbG9nQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIjppZFwiLCBjb21wb25lbnQ6IFByb2R1Y3REZXRhaWxDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSb3V0aW5nTW9kdWxlIHsgfVxuIl19