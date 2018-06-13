"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("nativescript-angular/router");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var operators_1 = require("rxjs/operators");
var dialogs = require("tns-core-modules/ui/dialogs");
var order_entity_model_1 = require("~/order-entity/order-entity.model");
var order_entity_service_1 = require("~/order-entity/order-entity.service");
var order_item_dialog_component_1 = require("~/order-entity/order-item-dialog.component");
var order_item_service_1 = require("~/order-entity/order-item.service");
var OrderEntityDetailComponent = /** @class */ (function () {
    function OrderEntityDetailComponent(barcodeScanner, orderEntityService, orderItemService, pageRoute, modal, vcRef, routerExtensions) {
        this.barcodeScanner = barcodeScanner;
        this.orderEntityService = orderEntityService;
        this.orderItemService = orderItemService;
        this.pageRoute = pageRoute;
        this.modal = modal;
        this.vcRef = vcRef;
        this.routerExtensions = routerExtensions;
        this.orderEntity = new order_entity_model_1.OrderEntity();
        this.orderItems = [];
    }
    OrderEntityDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            var id = +params["id"];
            _this.load(id);
        });
    };
    OrderEntityDetailComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    OrderEntityDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.orderEntityService.find(id).subscribe(function (res) {
            _this.onSuccess(res.body, res.headers);
        }, function (res) { return _this.onError(res.message); });
    };
    OrderEntityDetailComponent.prototype.onSuccess = function (data, headers) {
        this.orderEntity = data;
        console.log(this.orderEntity);
    };
    OrderEntityDetailComponent.prototype.onOrderItemSuccess = function (data, headers, id) {
        this.orderItems = data;
        this.orderEntity.orderItemList = this.orderItems.filter(function (x) { return x.orderEntityId === id; });
        console.log(this.orderItems);
    };
    OrderEntityDetailComponent.prototype.onError = function (error) {
        console.log("Hiba a bevételezés lekérésekor");
    };
    OrderEntityDetailComponent.prototype.onNewOrderItem = function () {
        var _this = this;
        var options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(order_item_dialog_component_1.OrderItemDialogComponent, options).then(function (res) {
            console.log(res);
            if (res) {
                _this.loadOrderItems(_this.orderEntity.id);
                // this.onDetailTap(res);
            }
        });
    };
    OrderEntityDetailComponent.prototype.onDetailTap = function (orderItem) {
        this.routerExtensions.navigate(["/order-entities", this.orderEntity.id, "order-items", orderItem.id]);
    };
    OrderEntityDetailComponent.prototype.loadOrderItems = function (id) {
        var _this = this;
        this.orderItemService.query().subscribe(function (res) { return _this.onOrderItemSuccess(res.body, res.headers, id); }, function (res) { return _this.onError(res.message); });
    };
    OrderEntityDetailComponent.prototype.onRaktarba = function () {
        var _this = this;
        this.orderEntityService.placeIntoProducts(this.orderEntity.orderItemList, this.orderEntity.id).subscribe(function (res) {
            _this.load(_this.orderEntity.id);
            dialogs.alert({
                title: "Sikeres művelet",
                message: "Sikeresen hozzáadta a raktárkészlethez a bevételezendő termékeket",
                okButtonText: "Bezárás"
            }).then(function () {
                console.log("Dialog closed!");
            });
        }, function (res) { return _this.onError(res.message); });
    };
    OrderEntityDetailComponent = __decorate([
        core_1.Component({
            selector: "OrderEntityDetail",
            moduleId: module.id,
            templateUrl: "./order-entity-detail.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner,
            order_entity_service_1.OrderEntityService,
            order_item_service_1.OrderItemService,
            router_1.PageRoute,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef,
            router_1.RouterExtensions])
    ], OrderEntityDetailComponent);
    return OrderEntityDetailComponent;
}());
exports.OrderEntityDetailComponent = OrderEntityDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50aXR5LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci1lbnRpdHktZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFvRTtBQUNwRSxpQ0FBbUM7QUFDbkMsNkRBQTBEO0FBQzFELHNEQUEwRTtBQUMxRSwyRUFBNkQ7QUFFN0QsNENBQTJDO0FBQzNDLHFEQUF1RDtBQUN2RCx3RUFBZ0U7QUFDaEUsNEVBQXlFO0FBQ3pFLDBGQUFzRjtBQUV0Rix3RUFBcUU7QUFPckU7SUFLSSxvQ0FBb0IsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLGdCQUFrQyxFQUNsQyxTQUFvQixFQUNwQixLQUF5QixFQUN6QixLQUF1QixFQUN2QixnQkFBa0M7UUFObEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFUOUMsZ0JBQVcsR0FBZ0IsSUFBSSxnQ0FBVyxFQUFFLENBQUM7UUFDN0MsZUFBVSxHQUFnQixFQUFFLENBQUM7SUFTckMsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUIscUJBQVMsQ0FBQyxVQUFDLGNBQWMsSUFBSyxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsQ0FDdkQsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ2IsSUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLElB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eUIsQ0FDeEQsQ0FBQztJQUNOLENBQUM7SUFFTywrQ0FBVSxHQUFsQjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNwRyxVQUFDLEdBQThCO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNWLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLE9BQU8sRUFBRSxtRUFBbUU7Z0JBQzVFLFlBQVksRUFBRSxTQUFTO2FBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUNELFVBQUMsR0FBc0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUF6QixDQUF5QixDQUN4RCxDQUFDO0lBQ04sQ0FBQztJQTVGUSwwQkFBMEI7UUFMdEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQ0FBc0M7U0FDdEQsQ0FBQzt5Q0FNc0MsNENBQWM7WUFDVix5Q0FBa0I7WUFDcEIscUNBQWdCO1lBQ3ZCLGtCQUFTO1lBQ2IseUNBQWtCO1lBQ2xCLHVCQUFnQjtZQUNMLHlCQUFnQjtPQVg3QywwQkFBMEIsQ0E2RnRDO0lBQUQsaUNBQUM7Q0FBQSxBQTdGRCxJQTZGQztBQTdGWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IE9yZGVyRW50aXR5IH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWVudGl0eS5tb2RlbFwiO1xuaW1wb3J0IHsgT3JkZXJFbnRpdHlTZXJ2aWNlIH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWVudGl0eS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPcmRlckl0ZW1EaWFsb2dDb21wb25lbnQgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItaXRlbS1kaWFsb2cuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlckl0ZW0gfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItaXRlbS5tb2RlbFwiO1xuaW1wb3J0IHsgT3JkZXJJdGVtU2VydmljZSB9IGZyb20gXCJ+L29yZGVyLWVudGl0eS9vcmRlci1pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiT3JkZXJFbnRpdHlEZXRhaWxcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vb3JkZXItZW50aXR5LWRldGFpbC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRW50aXR5RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgb3JkZXJFbnRpdHk6IE9yZGVyRW50aXR5ID0gbmV3IE9yZGVyRW50aXR5KCk7XG4gICAgcHJpdmF0ZSBvcmRlckl0ZW1zOiBPcmRlckl0ZW1bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXJjb2RlU2Nhbm5lcjogQmFyY29kZVNjYW5uZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBvcmRlckVudGl0eVNlcnZpY2U6IE9yZGVyRW50aXR5U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG9yZGVySXRlbVNlcnZpY2U6IE9yZGVySXRlbVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gK3BhcmFtc1tcImlkXCJdO1xuICAgICAgICAgICAgdGhpcy5sb2FkKGlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgbG9hZChpZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub3JkZXJFbnRpdHlTZXJ2aWNlLmZpbmQoaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IEh0dHBSZXNwb25zZTxPcmRlckVudGl0eT4pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhyZXMuYm9keSwgcmVzLmhlYWRlcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChyZXM6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLm1lc3NhZ2UpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblN1Y2Nlc3MoZGF0YSwgaGVhZGVycykge1xuICAgICAgICB0aGlzLm9yZGVyRW50aXR5ID0gZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vcmRlckVudGl0eSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk9yZGVySXRlbVN1Y2Nlc3MoZGF0YSwgaGVhZGVycywgaWQpIHtcbiAgICAgICAgdGhpcy5vcmRlckl0ZW1zID0gZGF0YTtcbiAgICAgICAgdGhpcy5vcmRlckVudGl0eS5vcmRlckl0ZW1MaXN0ID0gdGhpcy5vcmRlckl0ZW1zLmZpbHRlcigoeCkgPT4geC5vcmRlckVudGl0eUlkID09PSBpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3JkZXJJdGVtcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGliYSBhIGJldsOpdGVsZXrDqXMgbGVrw6lyw6lzZWtvclwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTmV3T3JkZXJJdGVtKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDoge30sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoT3JkZXJJdGVtRGlhbG9nQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkT3JkZXJJdGVtcyh0aGlzLm9yZGVyRW50aXR5LmlkKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9uRGV0YWlsVGFwKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EZXRhaWxUYXAob3JkZXJJdGVtOiBPcmRlckl0ZW0pIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9vcmRlci1lbnRpdGllc1wiLCB0aGlzLm9yZGVyRW50aXR5LmlkLCBcIm9yZGVyLWl0ZW1zXCIsIG9yZGVySXRlbS5pZF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZE9yZGVySXRlbXMoaWQpIHtcbiAgICAgICAgdGhpcy5vcmRlckl0ZW1TZXJ2aWNlLnF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlczogSHR0cFJlc3BvbnNlPE9yZGVySXRlbVtdPikgPT4gdGhpcy5vbk9yZGVySXRlbVN1Y2Nlc3MocmVzLmJvZHksIHJlcy5oZWFkZXJzLCBpZCksXG4gICAgICAgICAgICAocmVzOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5tZXNzYWdlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25SYWt0YXJiYSgpIHtcbiAgICAgICAgdGhpcy5vcmRlckVudGl0eVNlcnZpY2UucGxhY2VJbnRvUHJvZHVjdHModGhpcy5vcmRlckVudGl0eS5vcmRlckl0ZW1MaXN0LCB0aGlzLm9yZGVyRW50aXR5LmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8T3JkZXJFbnRpdHk+KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkKHRoaXMub3JkZXJFbnRpdHkuaWQpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTaWtlcmVzIG3FsXZlbGV0XCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2lrZXJlc2VuIGhvenrDoWFkdGEgYSByYWt0w6Fya8Opc3psZXRoZXogYSBiZXbDqXRlbGV6ZW5kxZEgdGVybcOpa2VrZXRcIixcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkJlesOhcsOhc1wiXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKHJlczogSHR0cEVycm9yUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMubWVzc2FnZSlcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=