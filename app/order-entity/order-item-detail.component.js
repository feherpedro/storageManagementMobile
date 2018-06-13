"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var router_1 = require("nativescript-angular/router");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var operators_1 = require("rxjs/operators");
var dialogs = require("tns-core-modules/ui/dialogs");
var order_item_service_1 = require("~/order-entity/order-item.service");
var OrderItemDetailComponent = /** @class */ (function () {
    function OrderItemDetailComponent(barcodeScanner, pageRoute, routerExtensions, orderItemService) {
        this.barcodeScanner = barcodeScanner;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.orderItemService = orderItemService;
    }
    OrderItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            var id = +params["orderItemId"];
            _this.orderEntityId = +params["id"];
            _this.load(id);
        });
    };
    OrderItemDetailComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    OrderItemDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.orderItemService.find(id).subscribe(function (res) { return _this.onSuccess(res.body, res.headers); }, function (res) { return _this.onError(res.message); });
    };
    OrderItemDetailComponent.prototype.onSuccess = function (data, headers) {
        this.orderItem = data;
        console.log(this.orderItem);
    };
    OrderItemDetailComponent.prototype.onError = function (error) {
        var _this = this;
        dialogs.alert({
            title: "Hiba a bevételezési tétel lekérésekor",
            message: error.status + error.statusMessage,
            okButtonText: "Bezárás"
        }).then(function () {
            console.log("Hiba a bevételezési tétel lekérésekor");
            _this.routerExtensions.navigate(["/order-entities", _this.orderEntityId]);
        });
    };
    OrderItemDetailComponent.prototype.onEdit = function () {
    };
    OrderItemDetailComponent.prototype.onDelete = function () {
        var _this = this;
        this.orderItemService.delete(this.orderItem.id).subscribe(function (res) { return _this.routerExtensions.navigate(["/order-entities", _this.orderEntityId]); }, function (res) { return _this.onError(res.message); });
    };
    OrderItemDetailComponent = __decorate([
        core_1.Component({
            selector: "OrderItemDetail",
            moduleId: module.id,
            templateUrl: "./order-item-detail.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner,
            router_1.PageRoute,
            router_1.RouterExtensions,
            order_item_service_1.OrderItemService])
    ], OrderItemDetailComponent);
    return OrderItemDetailComponent;
}());
exports.OrderItemDetailComponent = OrderItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXItaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQWtEO0FBQ2xELGlDQUFtQztBQUNuQyxzREFBMEU7QUFDMUUsMkVBQTZEO0FBRTdELDRDQUEyQztBQUMzQyxxREFBdUQ7QUFFdkQsd0VBQXFFO0FBT3JFO0lBS0ksa0NBQW9CLGNBQThCLEVBQzlCLFNBQW9CLEVBQ3BCLGdCQUFrQyxFQUNsQyxnQkFBa0M7UUFIbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzlCLHFCQUFTLENBQUMsVUFBQyxjQUFjLElBQUssT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQ3ZELENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNiLElBQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvREFBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsdUNBQUksR0FBSixVQUFLLEVBQVU7UUFBZixpQkFLQztRQUpHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNwQyxVQUFDLEdBQTRCLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFyQyxDQUFxQyxFQUN2RSxVQUFDLEdBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsQ0FDeEQsQ0FBQztJQUNOLENBQUM7SUFFTyw0Q0FBUyxHQUFqQixVQUFrQixJQUFJLEVBQUUsT0FBTztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sMENBQU8sR0FBZixVQUFnQixLQUFLO1FBQXJCLGlCQVNDO1FBUkcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSx1Q0FBdUM7WUFDOUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQWE7WUFDM0MsWUFBWSxFQUFFLFNBQVM7U0FDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUNyRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDNUUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8seUNBQU0sR0FBZDtJQUNBLENBQUM7SUFFTywyQ0FBUSxHQUFoQjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDckQsVUFBQyxHQUFzQixJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUF2RSxDQUF1RSxFQUNuRyxVQUFDLEdBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsQ0FDeEQsQ0FBQztJQUNOLENBQUM7SUF6RFEsd0JBQXdCO1FBTHBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0NBQW9DO1NBQ3BELENBQUM7eUNBTXNDLDRDQUFjO1lBQ25CLGtCQUFTO1lBQ0YseUJBQWdCO1lBQ2hCLHFDQUFnQjtPQVI3Qyx3QkFBd0IsQ0EwRHBDO0lBQUQsK0JBQUM7Q0FBQSxBQTFERCxJQTBEQztBQTFEWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBPcmRlckl0ZW0gfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItaXRlbS5tb2RlbFwiO1xuaW1wb3J0IHsgT3JkZXJJdGVtU2VydmljZSB9IGZyb20gXCJ+L29yZGVyLWVudGl0eS9vcmRlci1pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiT3JkZXJJdGVtRGV0YWlsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL29yZGVyLWl0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJJdGVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgb3JkZXJJdGVtOiBPcmRlckl0ZW07XG4gICAgcHJpdmF0ZSBvcmRlckVudGl0eUlkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhcmNvZGVTY2FubmVyOiBCYXJjb2RlU2Nhbm5lcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG9yZGVySXRlbVNlcnZpY2U6IE9yZGVySXRlbVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gK3BhcmFtc1tcIm9yZGVySXRlbUlkXCJdO1xuICAgICAgICAgICAgdGhpcy5vcmRlckVudGl0eUlkID0gK3BhcmFtc1tcImlkXCJdO1xuICAgICAgICAgICAgdGhpcy5sb2FkKGlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgbG9hZChpZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub3JkZXJJdGVtU2VydmljZS5maW5kKGlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8T3JkZXJJdGVtPikgPT4gdGhpcy5vblN1Y2Nlc3MocmVzLmJvZHksIHJlcy5oZWFkZXJzKSxcbiAgICAgICAgICAgIChyZXM6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLm1lc3NhZ2UpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblN1Y2Nlc3MoZGF0YSwgaGVhZGVycykge1xuICAgICAgICB0aGlzLm9yZGVySXRlbSA9IGRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3JkZXJJdGVtKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJIaWJhIGEgYmV2w6l0ZWxlesOpc2kgdMOpdGVsIGxla8OpcsOpc2Vrb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLnN0YXR1cyArIGVycm9yLnN0YXR1c01lc3NhZ2UsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQmV6w6Fyw6FzXCJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhpYmEgYSBiZXbDqXRlbGV6w6lzaSB0w6l0ZWwgbGVrw6lyw6lzZWtvclwiKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvb3JkZXItZW50aXRpZXNcIiwgdGhpcy5vcmRlckVudGl0eUlkXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FZGl0KCkge1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWxldGUoKSB7XG4gICAgICAgIHRoaXMub3JkZXJJdGVtU2VydmljZS5kZWxldGUodGhpcy5vcmRlckl0ZW0uaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL29yZGVyLWVudGl0aWVzXCIsIHRoaXMub3JkZXJFbnRpdHlJZF0pLFxuICAgICAgICAgICAgKHJlczogSHR0cEVycm9yUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMubWVzc2FnZSlcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=