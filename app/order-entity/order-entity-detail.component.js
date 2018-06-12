"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var router_1 = require("nativescript-angular/router");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var operators_1 = require("rxjs/operators");
var dialogs = require("ui/dialogs");
var order_entity_service_1 = require("~/order-entity/order-entity.service");
var product_service_1 = require("~/scan/product.service");
var product_dialog_component_1 = require("~/product/product-dialog.component");
var nativescript_angular_1 = require("nativescript-angular");
var OrderEntityDetailComponent = /** @class */ (function () {
    // private barcodeNumber: string;
    function OrderEntityDetailComponent(barcodeScanner, orderEntityService, pageRoute, modal, vcRef, routerExtensions, productService) {
        this.barcodeScanner = barcodeScanner;
        this.orderEntityService = orderEntityService;
        this.pageRoute = pageRoute;
        this.modal = modal;
        this.vcRef = vcRef;
        this.routerExtensions = routerExtensions;
        this.productService = productService;
        this.scanned = false;
        this.scannedFormat = "";
        this.scannedText = "";
        this.orderItems = [];
        this.productList = [];
    }
    OrderEntityDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            var id = +params["id"];
            _this.load(id);
        });
    };
    OrderEntityDetailComponent.prototype.onScan = function () {
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
            console.log("Formátum: " + result.format + ",\nTartalom: " + result.text);
            _this.scanned = true;
            _this.scannedFormat = result.format;
            _this.scannedText = result.text;
            var confirmOptions = {
                title: "Scan eredménye",
                message: "Formátum: " + result.format + ",\nTartalom: " + result.text,
                okButtonText: "Tovább a " + result.text + " vonalkódú termékhez",
                cancelButtonText: "Vissza"
            };
            setTimeout(function () {
                dialogs.confirm(confirmOptions).then(function (action) {
                    console.log("Dialog result: " + action);
                    if (action) {
                        _this.productService.query()
                            .subscribe(function (res) {
                            _this.productList = res.body;
                            console.log(res.body);
                        }, function (res) { return console.log(res.message); });
                        /*
                        this.productService.find(parseInt(this.scannedText, 10))
                        .subscribe(
                            (res: HttpResponse<Product>) => {
                                this.product = res.body;
                                console.log(res.body);
                            },
                            (res: HttpErrorResponse) => console.log(res.message)
                        );*/
                    }
                });
            }, 0);
        }, function (errorMessage) {
            console.log("Hiba a beolvasáskor: " + errorMessage);
        });
    };
    OrderEntityDetailComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    OrderEntityDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.orderEntityService.find(id).subscribe(function (res) { return _this.onSuccess(res.body, res.headers); }, function (res) { return _this.onError(res.message); });
    };
    OrderEntityDetailComponent.prototype.onSuccess = function (data, headers) {
        // this.links = this.parseLinks.parse(headers.get('link'));
        // this.totalItems = headers.get('X-Total-Count');
        // this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.orderEntity = data;
        console.log(this.orderEntity);
    };
    OrderEntityDetailComponent.prototype.onError = function (error) {
        // this.jhiAlertService.error(error.message, null, null);
        console.log("Hiba a bevételezés lekérésekor");
    };
    OrderEntityDetailComponent.prototype.onNewOrderItem = function () {
        var _this = this;
        var options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(product_dialog_component_1.ProductDialogComponent, options).then(function (res) {
            console.log(res);
            if (res) {
                _this.loadOrderItems();
                // this.onDetailTap(res);
            }
        });
    };
    OrderEntityDetailComponent.prototype.onDetailTap = function (orderItem) {
        this.routerExtensions.navigate(["/order-items", orderItem.id]);
    };
    OrderEntityDetailComponent.prototype.loadOrderItems = function () {
    };
    OrderEntityDetailComponent = __decorate([
        core_1.Component({
            selector: "OrderEntityDetail",
            moduleId: module.id,
            templateUrl: "./order-entity-detail.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner,
            order_entity_service_1.OrderEntityService,
            router_1.PageRoute,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef,
            router_1.RouterExtensions,
            product_service_1.ProductService])
    ], OrderEntityDetailComponent);
    return OrderEntityDetailComponent;
}());
exports.OrderEntityDetailComponent = OrderEntityDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50aXR5LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci1lbnRpdHktZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFvRTtBQUNwRSxpQ0FBbUM7QUFDbkMsc0RBQTBFO0FBQzFFLDJFQUE2RDtBQUU3RCw0Q0FBMkM7QUFDM0Msb0NBQXNDO0FBRXRDLDRFQUF5RTtBQUd6RSwwREFBd0Q7QUFDeEQsK0VBQTRFO0FBQzVFLDZEQUEwRDtBQU8xRDtJQVFJLGlDQUFpQztJQUVqQyxvQ0FBb0IsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLFNBQW9CLEVBQ3BCLEtBQXlCLEVBQ3pCLEtBQXVCLEVBQ3ZCLGdCQUFrQyxFQUNsQyxjQUE4QjtRQU45QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBZDFDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFDN0IsZ0JBQVcsR0FBYyxFQUFFLENBQUM7SUFVcEMsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUIscUJBQVMsQ0FBQyxVQUFDLGNBQWMsSUFBSyxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsQ0FDdkQsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ2Is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bUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0NBQXNDO1NBQ3RELENBQUM7eUNBV3NDLDRDQUFjO1lBQ1YseUNBQWtCO1lBQzNCLGtCQUFTO1lBQ2IseUNBQWtCO1lBQ2xCLHVCQUFnQjtZQUNMLHlCQUFnQjtZQUNsQixnQ0FBYztPQWhCekMsMEJBQTBCLENBNkh0QztJQUFELGlDQUFDO0NBQUEsQUE3SEQsSUE2SEM7QUE3SFksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IE9yZGVyRW50aXR5IH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWVudGl0eS5tb2RlbFwiO1xuaW1wb3J0IHsgT3JkZXJFbnRpdHlTZXJ2aWNlIH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWVudGl0eS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPcmRlckl0ZW0gfSBmcm9tIFwifi9vcmRlci1pdGVtL29yZGVyLWl0ZW0ubW9kZWxcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwifi9zY2FuL3Byb2R1Y3QubW9kZWxcIjtcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIn4vc2Nhbi9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFByb2R1Y3REaWFsb2dDb21wb25lbnQgfSBmcm9tIFwifi9wcm9kdWN0L3Byb2R1Y3QtZGlhbG9nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIk9yZGVyRW50aXR5RGV0YWlsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL29yZGVyLWVudGl0eS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckVudGl0eURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIHNjYW5uZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIHNjYW5uZWRGb3JtYXQgPSBcIlwiO1xuICAgIHByaXZhdGUgc2Nhbm5lZFRleHQgPSBcIlwiO1xuICAgIHByaXZhdGUgb3JkZXJFbnRpdHk6IE9yZGVyRW50aXR5O1xuICAgIHByaXZhdGUgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSBbXTtcbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0OiBQcm9kdWN0W10gPSBbXTtcbiAgICAvLyBwcml2YXRlIGJhcmNvZGVOdW1iZXI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgb3JkZXJFbnRpdHlTZXJ2aWNlOiBPcmRlckVudGl0eVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gK3BhcmFtc1tcImlkXCJdO1xuICAgICAgICAgICAgdGhpcy5sb2FkKGlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TY2FuKCkge1xuICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnNjYW4oe1xuICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IHRydWUsXG4gICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogZmFsc2UsXG4gICAgICAgICAgICBzaG93VG9yY2hCdXR0b246IHRydWUsXG4gICAgICAgICAgICBiZWVwT25TY2FuOiB0cnVlLFxuICAgICAgICAgICAgdG9yY2hPbjogZmFsc2UsXG4gICAgICAgICAgICByZXN1bHREaXNwbGF5RHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBvcGVuU2V0dGluZ3NJZlBlcm1pc3Npb25XYXNQcmV2aW91c2x5RGVuaWVkOiB0cnVlXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb3Jtw6F0dW06IFwiICsgcmVzdWx0LmZvcm1hdCArIFwiLFxcblRhcnRhbG9tOiBcIiArIHJlc3VsdC50ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuc2Nhbm5lZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjYW5uZWRGb3JtYXQgPSByZXN1bHQuZm9ybWF0O1xuICAgICAgICAgICAgdGhpcy5zY2FubmVkVGV4dCA9IHJlc3VsdC50ZXh0O1xuICAgICAgICAgICAgY29uc3QgY29uZmlybU9wdGlvbnM6IGRpYWxvZ3MuQ29uZmlybU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU2NhbiBlcmVkbcOpbnllXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJGb3Jtw6F0dW06IFwiICsgcmVzdWx0LmZvcm1hdCArIFwiLFxcblRhcnRhbG9tOiBcIiArIHJlc3VsdC50ZXh0LFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJUb3bDoWJiIGEgXCIgKyByZXN1bHQudGV4dCArIFwiIHZvbmFsa8OzZMO6IHRlcm3DqWtoZXpcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIlZpc3N6YVwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKGNvbmZpcm1PcHRpb25zKS50aGVuKChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UucXVlcnkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8UHJvZHVjdFtdPikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RMaXN0ID0gcmVzLmJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5ib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXM6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXMubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0U2VydmljZS5maW5kKHBhcnNlSW50KHRoaXMuc2Nhbm5lZFRleHQsIDEwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlczogSHR0cFJlc3BvbnNlPFByb2R1Y3Q+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdCA9IHJlcy5ib2R5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICApOyovXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9LCAoZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhpYmEgYSBiZW9sdmFzw6Fza29yOiBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIGxvYWQoaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLm9yZGVyRW50aXR5U2VydmljZS5maW5kKGlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8T3JkZXJFbnRpdHk+KSA9PiB0aGlzLm9uU3VjY2VzcyhyZXMuYm9keSwgcmVzLmhlYWRlcnMpLFxuICAgICAgICAgICAgKHJlczogSHR0cEVycm9yUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMubWVzc2FnZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3VjY2VzcyhkYXRhLCBoZWFkZXJzKSB7XG4gICAgICAgIC8vIHRoaXMubGlua3MgPSB0aGlzLnBhcnNlTGlua3MucGFyc2UoaGVhZGVycy5nZXQoJ2xpbmsnKSk7XG4gICAgICAgIC8vIHRoaXMudG90YWxJdGVtcyA9IGhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gICAgICAgIC8vIHRoaXMucXVlcnlDb3VudCA9IHRoaXMudG90YWxJdGVtcztcbiAgICAgICAgLy8gdGhpcy5wYWdlID0gcGFnaW5nUGFyYW1zLnBhZ2U7XG4gICAgICAgIHRoaXMub3JkZXJFbnRpdHkgPSBkYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9yZGVyRW50aXR5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgLy8gdGhpcy5qaGlBbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IubWVzc2FnZSwgbnVsbCwgbnVsbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGliYSBhIGJldsOpdGVsZXrDqXMgbGVrw6lyw6lzZWtvclwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTmV3T3JkZXJJdGVtKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDoge30sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoUHJvZHVjdERpYWxvZ0NvbXBvbmVudCwgb3B0aW9ucykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZE9yZGVySXRlbXMoKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9uRGV0YWlsVGFwKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EZXRhaWxUYXAob3JkZXJJdGVtOiBPcmRlckl0ZW0pIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9vcmRlci1pdGVtc1wiLCBvcmRlckl0ZW0uaWRdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRPcmRlckl0ZW1zKCl7XG4gICAgfVxufVxuIl19