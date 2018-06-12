"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var order_entity_detail_component_1 = require("~/order-entity/order-entity-detail.component");
var order_entity_component_1 = require("~/order-entity/order-entity.component");
var routes = [
    { path: "", component: order_entity_component_1.OrderEntityComponent },
    { path: ":id", component: order_entity_detail_component_1.OrderEntityDetailComponent }
];
var OrderEntityRoutingModule = /** @class */ (function () {
    function OrderEntityRoutingModule() {
    }
    OrderEntityRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], OrderEntityRoutingModule);
    return OrderEntityRoutingModule;
}());
exports.OrderEntityRoutingModule = OrderEntityRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50aXR5LXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXItZW50aXR5LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSw4RkFBMEY7QUFDMUYsZ0ZBQTZFO0FBRTdFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7SUFDN0MsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSwwREFBMEIsRUFBRTtDQUN6RCxDQUFDO0FBTUY7SUFBQTtJQUF3QyxDQUFDO0lBQTVCLHdCQUF3QjtRQUpwQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHdCQUF3QixDQUFJO0lBQUQsK0JBQUM7Q0FBQSxBQUF6QyxJQUF5QztBQUE1Qiw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPcmRlckVudGl0eURldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L29yZGVyLWVudGl0eS9vcmRlci1lbnRpdHktZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3JkZXJFbnRpdHlDb21wb25lbnQgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItZW50aXR5LmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogT3JkZXJFbnRpdHlDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiOmlkXCIsIGNvbXBvbmVudDogT3JkZXJFbnRpdHlEZXRhaWxDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRW50aXR5Um91dGluZ01vZHVsZSB7IH1cbiJdfQ==