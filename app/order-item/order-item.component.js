"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var dialogs = require("ui/dialogs");
var product_service_1 = require("~/scan/product.service");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "scan", loadChildren: "./scan/scan.module#ScanModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var OrderItemComponent = /** @class */ (function () {
    // orientation = require("nativescript-orientation");        formats: "QR_CODE, EAN_13",
    function OrderItemComponent(barcodeScanner, productService) {
        this.barcodeScanner = barcodeScanner;
        this.productService = productService;
        this.scanned = false;
        this.scannedFormat = "";
        this.scannedText = "";
        this.confirmOptions = {};
    }
    OrderItemComponent.prototype.ngOnInit = function () {
    };
    OrderItemComponent.prototype.onScan = function () {
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
    OrderItemComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    OrderItemComponent = __decorate([
        core_1.Component({
            selector: "OrderEntity",
            moduleId: module.id,
            templateUrl: "./order-item.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner,
            product_service_1.ProductService])
    ], OrderItemComponent);
    return OrderItemComponent;
}());
exports.OrderItemComponent = OrderItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFDbkMsMkVBQTZEO0FBRTdELG9DQUFzQztBQUV0QywwREFBd0Q7QUFFeEQ7Ozs7OzhEQUs4RDtBQU85RDtJQVFJLHdGQUF3RjtJQUV4Riw0QkFBb0IsY0FBOEIsRUFDOUIsY0FBOEI7UUFEOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVQxQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBR2pCLG1CQUFjLEdBQTJCLEVBQUUsQ0FBQztJQUtwRCxDQUFDO0lBRUQscUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQUEsaUJBZ0RDO1FBL0NHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3JCLG9CQUFvQixFQUFFLElBQUk7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixlQUFlLEVBQUUsSUFBSTtZQUNyQixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsS0FBSztZQUNkLHFCQUFxQixFQUFFLEdBQUc7WUFDMUIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsMkNBQTJDLEVBQUUsSUFBSTtTQUNwRCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxRSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixLQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbkMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQy9CLElBQU0sY0FBYyxHQUEyQjtnQkFDM0MsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsT0FBTyxFQUFFLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSTtnQkFDckUsWUFBWSxFQUFFLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLHNCQUFzQjtnQkFDaEUsZ0JBQWdCLEVBQUUsUUFBUTthQUM3QixDQUFDO1lBQ0YsVUFBVSxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtvQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDVCxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRTs2QkFDMUIsU0FBUyxDQUNOLFVBQUMsR0FBNEI7NEJBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQzs0QkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzFCLENBQUMsRUFDRCxVQUFDLEdBQXNCLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FDdkQsQ0FBQzt3QkFDRjs7Ozs7Ozs7NEJBUUk7b0JBQ1IsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNWLENBQUMsRUFBRSxVQUFDLFlBQVk7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUF0RVEsa0JBQWtCO1FBTDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO3lDQVdzQyw0Q0FBYztZQUNkLGdDQUFjO09BWHpDLGtCQUFrQixDQXVFOUI7SUFBRCx5QkFBQztDQUFBLEFBdkVELElBdUVDO0FBdkVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJ+L3NjYW4vcHJvZHVjdC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gXCJ+L3NjYW4vcHJvZHVjdC5zZXJ2aWNlXCI7XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIEJlZm9yZSB5b3UgY2FuIG5hdmlnYXRlIHRvIHRoaXMgcGFnZSBmcm9tIHlvdXIgYXBwLCB5b3UgbmVlZCB0byByZWZlcmVuY2UgdGhpcyBwYWdlJ3MgbW9kdWxlIGluIHRoZVxyXG4qIGdsb2JhbCBhcHAgcm91dGVyIG1vZHVsZS4gQWRkIHRoZSBmb2xsb3dpbmcgb2JqZWN0IHRvIHRoZSBnbG9iYWwgYXJyYXkgb2Ygcm91dGVzOlxyXG4qIHsgcGF0aDogXCJzY2FuXCIsIGxvYWRDaGlsZHJlbjogXCIuL3NjYW4vc2Nhbi5tb2R1bGUjU2Nhbk1vZHVsZVwiIH1cclxuKiBOb3RlIHRoYXQgdGhpcyBzaW1wbHkgcG9pbnRzIHRoZSBwYXRoIHRvIHRoZSBwYWdlIG1vZHVsZSBmaWxlLiBJZiB5b3UgbW92ZSB0aGUgcGFnZSwgeW91IG5lZWQgdG8gdXBkYXRlIHRoZSByb3V0ZSB0b28uXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk9yZGVyRW50aXR5XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9vcmRlci1pdGVtLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIE9yZGVySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBzY2FubmVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNjYW5uZWRGb3JtYXQgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBzY2FubmVkVGV4dCA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHByb2R1Y3Q6IFByb2R1Y3Q7XHJcbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0OiBQcm9kdWN0W107XHJcbiAgICBwcml2YXRlIGNvbmZpcm1PcHRpb25zOiBkaWFsb2dzLkNvbmZpcm1PcHRpb25zID0ge307XHJcbiAgICAvLyBvcmllbnRhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtb3JpZW50YXRpb25cIik7ICAgICAgICBmb3JtYXRzOiBcIlFSX0NPREUsIEVBTl8xM1wiLFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBvblNjYW4oKSB7XHJcbiAgICAgICAgdGhpcy5iYXJjb2RlU2Nhbm5lci5zY2FuKHtcclxuICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHByZWZlckZyb250Q2FtZXJhOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1RvcmNoQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBiZWVwT25TY2FuOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3JjaE9uOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVzdWx0RGlzcGxheUR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIG9wZW5TZXR0aW5nc0lmUGVybWlzc2lvbldhc1ByZXZpb3VzbHlEZW5pZWQ6IHRydWVcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb3Jtw6F0dW06IFwiICsgcmVzdWx0LmZvcm1hdCArIFwiLFxcblRhcnRhbG9tOiBcIiArIHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5zY2FubmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2FubmVkRm9ybWF0ID0gcmVzdWx0LmZvcm1hdDtcclxuICAgICAgICAgICAgdGhpcy5zY2FubmVkVGV4dCA9IHJlc3VsdC50ZXh0O1xyXG4gICAgICAgICAgICBjb25zdCBjb25maXJtT3B0aW9uczogZGlhbG9ncy5Db25maXJtT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNjYW4gZXJlZG3DqW55ZVwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJGb3Jtw6F0dW06IFwiICsgcmVzdWx0LmZvcm1hdCArIFwiLFxcblRhcnRhbG9tOiBcIiArIHJlc3VsdC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlRvdsOhYmIgYSBcIiArIHJlc3VsdC50ZXh0ICsgXCIgdm9uYWxrw7Nkw7ogdGVybcOpa2hlelwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJWaXNzemFcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybShjb25maXJtT3B0aW9ucykudGhlbigoYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLnF1ZXJ5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXM6IEh0dHBSZXNwb25zZTxQcm9kdWN0W10+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGlzdCA9IHJlcy5ib2R5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZmluZChwYXJzZUludCh0aGlzLnNjYW5uZWRUZXh0LCAxMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8UHJvZHVjdD4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXMuYm9keTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuYm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlczogSHR0cEVycm9yUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlcy5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApOyovXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH0sIChlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIaWJhIGEgYmVvbHZhc8Ohc2tvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufVxyXG4iXX0=