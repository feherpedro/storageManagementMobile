"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("nativescript-angular/router");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var operators_1 = require("rxjs/operators");
var dialogs = require("ui/dialogs");
var order_item_model_1 = require("~/order-entity/order-item.model");
var order_item_service_1 = require("~/order-entity/order-item.service");
var product_model_1 = require("~/product/product.model");
var product_service_1 = require("~/product/product.service");
var OrderItemDialogComponent = /** @class */ (function () {
    function OrderItemDialogComponent(barcodeScanner, params, pageRoute, routerExtensions, orderItemService, productService) {
        this.barcodeScanner = barcodeScanner;
        this.params = params;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.orderItemService = orderItemService;
        this.productService = productService;
        this.product = new product_model_1.Product();
        this.orderItem = new order_item_model_1.OrderItem();
    }
    OrderItemDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.orderItem.orderEntityId = +params["id"];
            console.log(_this.orderItem.orderEntityId);
        });
    };
    OrderItemDialogComponent.prototype.save = function () {
        this.isSaving = true;
        this.subscribeToSaveResponse(this.orderItemService.create(this.orderItem));
    };
    OrderItemDialogComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) {
            return _this.onSaveSuccess(res.body);
        }, function (res) { return _this.onSaveError(res); });
    };
    OrderItemDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        dialogs.alert({
            title: "Hiba a mentés során",
            message: error.message,
            okButtonText: "Bezárás"
        }).then(function () {
            console.log("Dialog closed!");
        });
        console.log("Hiba: " + error.message);
        console.log(error.status + error.statusMessage);
    };
    OrderItemDialogComponent.prototype.onSaveSuccess = function (result) {
        console.log(result);
        this.params.closeCallback(result);
    };
    OrderItemDialogComponent.prototype.onClose = function () {
        this.params.closeCallback(false);
    };
    OrderItemDialogComponent.prototype.onScan = function () {
        var _this = this;
        this.barcodeScanner.scan({
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            resultDisplayDuration: 500,
            orientation: undefined,
            openSettingsIfPermissionWasPreviouslyDenied: true
        }).then(function (result) {
            _this.productService.query().subscribe(function (res) { return _this.onProductSuccess(res.body, res.headers, result.text); }, function (res) { return _this.onError(res.message); });
            // this.product.barcode = result.text;
        }, function (errorMessage) {
            console.log("Hiba a beolvasáskor: " + errorMessage);
        });
    };
    OrderItemDialogComponent.prototype.onProductSuccess = function (data, headers, text) {
        this.products = data;
        this.product = this.products.filter(function (x) { return x.barcode === text; })[0];
        if (this.product) {
            this.orderItem.productId = this.product.id;
            this.orderItem.productName = this.product.name;
            this.orderItem.productUnitOfMeasurement = this.product.unitOfMeasurement;
            this.orderItem.productBarcode = this.product.barcode;
        }
        else {
            dialogs.alert({
                title: "Hiba a termék lekérésekor",
                message: "Nincs ilyen vonalkódú termék",
                okButtonText: "Bezárás"
            }).then(function () {
                console.log("Hiba a termék lekérésekor: Nincs ilyen vonalkódú termék");
            });
        }
        console.log(this.orderItem);
    };
    OrderItemDialogComponent.prototype.onError = function (error) {
        dialogs.alert({
            title: "Hiba a termék lekérésekor",
            message: error.message,
            okButtonText: "Bezárás"
        }).then(function () {
            console.log("Hiba a termék lekérésekor");
        });
    };
    OrderItemDialogComponent = __decorate([
        core_1.Component({
            selector: "OrderItemtDialog",
            moduleId: module.id,
            templateUrl: "./order-item-dialog.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner,
            nativescript_angular_1.ModalDialogParams,
            router_1.PageRoute,
            router_1.RouterExtensions,
            order_item_service_1.OrderItemService,
            product_service_1.ProductService])
    ], OrderItemDialogComponent);
    return OrderItemDialogComponent;
}());
exports.OrderItemDialogComponent = OrderItemDialogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXItaXRlbS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQWtEO0FBQ2xELDZEQUF5RDtBQUN6RCxzREFBMEU7QUFDMUUsMkVBQTZEO0FBRTdELDRDQUEyQztBQUMzQyxvQ0FBc0M7QUFDdEMsb0VBQTREO0FBQzVELHdFQUFxRTtBQUNyRSx5REFBa0Q7QUFDbEQsNkRBQTJEO0FBTzNEO0lBT0ksa0NBQW9CLGNBQThCLEVBQzlCLE1BQXlCLEVBQ3pCLFNBQW9CLEVBQ3BCLGdCQUFrQyxFQUNsQyxnQkFBa0MsRUFDbEMsY0FBOEI7UUFMOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVZsRCxZQUFPLEdBQUcsSUFBSSx1QkFBTyxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFHLElBQUksNEJBQVMsRUFBRSxDQUFDO0lBVTVCLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzlCLHFCQUFTLENBQUMsVUFBQyxjQUFjLElBQUssT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQ3ZELENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNiLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxHQUFH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LENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBM0dRLHdCQUF3QjtRQUxwQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9DQUFvQztTQUNwRCxDQUFDO3lDQVFzQyw0Q0FBYztZQUN0Qix3Q0FBaUI7WUFDZCxrQkFBUztZQUNGLHlCQUFnQjtZQUNoQixxQ0FBZ0I7WUFDbEIsZ0NBQWM7T0FaekMsd0JBQXdCLENBNEdwQztJQUFELCtCQUFDO0NBQUEsQUE1R0QsSUE0R0M7QUE1R1ksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgT3JkZXJJdGVtIH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWl0ZW0ubW9kZWxcIjtcbmltcG9ydCB7IE9yZGVySXRlbVNlcnZpY2UgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIn4vcHJvZHVjdC9wcm9kdWN0Lm1vZGVsXCI7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gXCJ+L3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIk9yZGVySXRlbXREaWFsb2dcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vb3JkZXItaXRlbS1kaWFsb2cuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckl0ZW1EaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJvZHVjdCA9IG5ldyBQcm9kdWN0KCk7XG4gICAgb3JkZXJJdGVtID0gbmV3IE9yZGVySXRlbSgpO1xuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuICAgIHByb2R1Y3RzOiBQcm9kdWN0W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhcmNvZGVTY2FubmVyOiBCYXJjb2RlU2Nhbm5lcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBvcmRlckl0ZW1TZXJ2aWNlOiBPcmRlckl0ZW1TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3JkZXJJdGVtLm9yZGVyRW50aXR5SWQgPSArcGFyYW1zW1wiaWRcIl07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9yZGVySXRlbS5vcmRlckVudGl0eUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9TYXZlUmVzcG9uc2UoXG4gICAgICAgICAgICB0aGlzLm9yZGVySXRlbVNlcnZpY2UuY3JlYXRlKHRoaXMub3JkZXJJdGVtKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJzY3JpYmVUb1NhdmVSZXNwb25zZShyZXN1bHQ6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9yZGVySXRlbT4+KSB7XG4gICAgICAgIHJlc3VsdC5zdWJzY3JpYmUoKHJlczogSHR0cFJlc3BvbnNlPE9yZGVySXRlbT4pID0+XG4gICAgICAgICAgICB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzLmJvZHkpLCAocmVzOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZUVycm9yKGVycm9yKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJIaWJhIGEgbWVudMOpcyBzb3LDoW5cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQmV6w6Fyw6FzXCJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJIaWJhOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5zdGF0dXMgKyBlcnJvci5zdGF0dXNNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MocmVzdWx0OiBPcmRlckl0ZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhmYWxzZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNjYW4oKSB7XG4gICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuc2Nhbih7XG4gICAgICAgICAgICBzaG93RmxpcENhbWVyYUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZlckZyb250Q2FtZXJhOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dUb3JjaEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGJlZXBPblNjYW46IHRydWUsXG4gICAgICAgICAgICB0b3JjaE9uOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc3VsdERpc3BsYXlEdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG9wZW5TZXR0aW5nc0lmUGVybWlzc2lvbldhc1ByZXZpb3VzbHlEZW5pZWQ6IHRydWVcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLnF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChyZXM6IEh0dHBSZXNwb25zZTxQcm9kdWN0W10+KSA9PiB0aGlzLm9uUHJvZHVjdFN1Y2Nlc3MocmVzLmJvZHksIHJlcy5oZWFkZXJzLCByZXN1bHQudGV4dCksXG4gICAgICAgICAgICAgICAgKHJlczogSHR0cEVycm9yUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMubWVzc2FnZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyB0aGlzLnByb2R1Y3QuYmFyY29kZSA9IHJlc3VsdC50ZXh0O1xuICAgICAgICB9LCAoZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhpYmEgYSBiZW9sdmFzw6Fza29yOiBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Qcm9kdWN0U3VjY2VzcyhkYXRhLCBoZWFkZXJzLCB0ZXh0KSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBkYXRhO1xuICAgICAgICB0aGlzLnByb2R1Y3QgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcigoeCkgPT4geC5iYXJjb2RlID09PSB0ZXh0KVswXTtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdCkge1xuICAgICAgICAgICAgdGhpcy5vcmRlckl0ZW0ucHJvZHVjdElkID0gdGhpcy5wcm9kdWN0LmlkO1xuICAgICAgICAgICAgdGhpcy5vcmRlckl0ZW0ucHJvZHVjdE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZTtcbiAgICAgICAgICAgIHRoaXMub3JkZXJJdGVtLnByb2R1Y3RVbml0T2ZNZWFzdXJlbWVudCA9IHRoaXMucHJvZHVjdC51bml0T2ZNZWFzdXJlbWVudDtcbiAgICAgICAgICAgIHRoaXMub3JkZXJJdGVtLnByb2R1Y3RCYXJjb2RlID0gdGhpcy5wcm9kdWN0LmJhcmNvZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJIaWJhIGEgdGVybcOpayBsZWvDqXLDqXNla29yXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJOaW5jcyBpbHllbiB2b25hbGvDs2TDuiB0ZXJtw6lrXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkJlesOhcsOhc1wiXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhpYmEgYSB0ZXJtw6lrIGxla8OpcsOpc2Vrb3I6IE5pbmNzIGlseWVuIHZvbmFsa8OzZMO6IHRlcm3DqWtcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9yZGVySXRlbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiSGliYSBhIHRlcm3DqWsgbGVrw6lyw6lzZWtvclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJCZXrDoXLDoXNcIlxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGliYSBhIHRlcm3DqWsgbGVrw6lyw6lzZWtvclwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19