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
var StockTakingComponent = /** @class */ (function () {
    // orientation = require("nativescript-orientation");        formats: "QR_CODE, EAN_13",
    function StockTakingComponent(barcodeScanner, productService) {
        this.barcodeScanner = barcodeScanner;
        this.productService = productService;
        this.scanned = false;
        this.scannedFormat = "";
        this.scannedText = "";
        this.confirmOptions = {};
    }
    StockTakingComponent.prototype.ngOnInit = function () {
    };
    StockTakingComponent.prototype.onLeltar = function () {
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
    StockTakingComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    StockTakingComponent = __decorate([
        core_1.Component({
            selector: "Scan",
            moduleId: module.id,
            templateUrl: "./scan.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner,
            product_service_1.ProductService])
    ], StockTakingComponent);
    return StockTakingComponent;
}());
exports.StockTakingComponent = StockTakingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stdGFraW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0b2NrLXRha2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBQ25DLDJFQUE2RDtBQUU3RCxvQ0FBc0M7QUFFdEMsMERBQXdEO0FBRXhEOzs7Ozs4REFLOEQ7QUFPOUQ7SUFRSSx3RkFBd0Y7SUFFeEYsOEJBQW9CLGNBQThCLEVBQzlCLGNBQThCO1FBRDlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFUMUMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUdqQixtQkFBYyxHQUEyQixFQUFFLENBQUM7SUFLcEQsQ0FBQztJQUVELHVDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQWdEQztRQS9DRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNyQixvQkFBb0IsRUFBRSxJQUFJO1lBQzFCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsZUFBZSxFQUFFLElBQUk7WUFDckIsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxxQkFBcUIsRUFBRSxHQUFHO1lBQzFCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLDJDQUEyQyxFQUFFLElBQUk7U0FDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUMvQixJQUFNLGNBQWMsR0FBMkI7Z0JBQzNDLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLE9BQU8sRUFBRSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUk7Z0JBQ3JFLFlBQVksRUFBRSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxzQkFBc0I7Z0JBQ2hFLGdCQUFnQixFQUFFLFFBQVE7YUFDN0IsQ0FBQztZQUNGLFVBQVUsQ0FBQztnQkFDUCxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ1QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUU7NkJBQzFCLFNBQVMsQ0FDTixVQUFDLEdBQTRCOzRCQUN6QixLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7NEJBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMxQixDQUFDLEVBQ0QsVUFBQyxHQUFzQixJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXhCLENBQXdCLENBQ3ZELENBQUM7d0JBQ0Y7Ozs7Ozs7OzRCQVFJO29CQUNSLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVixDQUFDLEVBQUUsVUFBQyxZQUFZO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnREFBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBdEVRLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FXc0MsNENBQWM7WUFDZCxnQ0FBYztPQVh6QyxvQkFBb0IsQ0F1RWhDO0lBQUQsMkJBQUM7Q0FBQSxBQXZFRCxJQXVFQztBQXZFWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwifi9zY2FuL3Byb2R1Y3QubW9kZWxcIjtcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIn4vc2Nhbi9wcm9kdWN0LnNlcnZpY2VcIjtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogQmVmb3JlIHlvdSBjYW4gbmF2aWdhdGUgdG8gdGhpcyBwYWdlIGZyb20geW91ciBhcHAsIHlvdSBuZWVkIHRvIHJlZmVyZW5jZSB0aGlzIHBhZ2UncyBtb2R1bGUgaW4gdGhlXG4qIGdsb2JhbCBhcHAgcm91dGVyIG1vZHVsZS4gQWRkIHRoZSBmb2xsb3dpbmcgb2JqZWN0IHRvIHRoZSBnbG9iYWwgYXJyYXkgb2Ygcm91dGVzOlxuKiB7IHBhdGg6IFwic2NhblwiLCBsb2FkQ2hpbGRyZW46IFwiLi9zY2FuL3NjYW4ubW9kdWxlI1NjYW5Nb2R1bGVcIiB9XG4qIE5vdGUgdGhhdCB0aGlzIHNpbXBseSBwb2ludHMgdGhlIHBhdGggdG8gdGhlIHBhZ2UgbW9kdWxlIGZpbGUuIElmIHlvdSBtb3ZlIHRoZSBwYWdlLCB5b3UgbmVlZCB0byB1cGRhdGUgdGhlIHJvdXRlIHRvby5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlNjYW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2Nhbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrVGFraW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgc2Nhbm5lZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgc2Nhbm5lZEZvcm1hdCA9IFwiXCI7XG4gICAgcHJpdmF0ZSBzY2FubmVkVGV4dCA9IFwiXCI7XG4gICAgcHJpdmF0ZSBwcm9kdWN0OiBQcm9kdWN0O1xuICAgIHByaXZhdGUgcHJvZHVjdExpc3Q6IFByb2R1Y3RbXTtcbiAgICBwcml2YXRlIGNvbmZpcm1PcHRpb25zOiBkaWFsb2dzLkNvbmZpcm1PcHRpb25zID0ge307XG4gICAgLy8gb3JpZW50YXRpb24gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LW9yaWVudGF0aW9uXCIpOyAgICAgICAgZm9ybWF0czogXCJRUl9DT0RFLCBFQU5fMTNcIixcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgb25MZWx0YXIoKSB7XG4gICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuc2Nhbih7XG4gICAgICAgICAgICBzaG93RmxpcENhbWVyYUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZlckZyb250Q2FtZXJhOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dUb3JjaEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGJlZXBPblNjYW46IHRydWUsXG4gICAgICAgICAgICB0b3JjaE9uOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc3VsdERpc3BsYXlEdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG9wZW5TZXR0aW5nc0lmUGVybWlzc2lvbldhc1ByZXZpb3VzbHlEZW5pZWQ6IHRydWVcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZvcm3DoXR1bTogXCIgKyByZXN1bHQuZm9ybWF0ICsgXCIsXFxuVGFydGFsb206IFwiICsgcmVzdWx0LnRleHQpO1xuICAgICAgICAgICAgdGhpcy5zY2FubmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2Nhbm5lZEZvcm1hdCA9IHJlc3VsdC5mb3JtYXQ7XG4gICAgICAgICAgICB0aGlzLnNjYW5uZWRUZXh0ID0gcmVzdWx0LnRleHQ7XG4gICAgICAgICAgICBjb25zdCBjb25maXJtT3B0aW9uczogZGlhbG9ncy5Db25maXJtT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTY2FuIGVyZWRtw6lueWVcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkZvcm3DoXR1bTogXCIgKyByZXN1bHQuZm9ybWF0ICsgXCIsXFxuVGFydGFsb206IFwiICsgcmVzdWx0LnRleHQsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlRvdsOhYmIgYSBcIiArIHJlc3VsdC50ZXh0ICsgXCIgdm9uYWxrw7Nkw7ogdGVybcOpa2hlelwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiVmlzc3phXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmNvbmZpcm0oY29uZmlybU9wdGlvbnMpLnRoZW4oKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0U2VydmljZS5xdWVyeSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXM6IEh0dHBSZXNwb25zZTxQcm9kdWN0W10+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdExpc3QgPSByZXMuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmJvZHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlczogSHR0cEVycm9yUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlcy5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmZpbmQocGFyc2VJbnQodGhpcy5zY2FubmVkVGV4dCwgMTApKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8UHJvZHVjdD4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0ID0gcmVzLmJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5ib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXM6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXMubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7Ki9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0sIChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGliYSBhIGJlb2x2YXPDoXNrb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIl19