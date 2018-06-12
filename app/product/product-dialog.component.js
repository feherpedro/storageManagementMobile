"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("nativescript-angular/router");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var dialogs = require("ui/dialogs");
var product_model_1 = require("~/product/product.model");
var product_service_1 = require("~/product/product.service");
var ProductDialogComponent = /** @class */ (function () {
    function ProductDialogComponent(barcodeScanner, params, routerExtensions, productService) {
        this.barcodeScanner = barcodeScanner;
        this.params = params;
        this.routerExtensions = routerExtensions;
        this.productService = productService;
        this.product = new product_model_1.Product();
    }
    ProductDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
    };
    /*
        ngAfterViewInit(): void {
            /!*setTimeout(() => {
                this.loadAll();
            }, 0);*!/
        }*/
    ProductDialogComponent.prototype.save = function () {
        this.isSaving = true;
        this.subscribeToSaveResponse(this.productService.create(this.product));
    };
    ProductDialogComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) {
            return _this.onSaveSuccess(res.body);
        }, function (res) { return _this.onSaveError(res); });
    };
    ProductDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        dialogs.alert({
            title: "Hiba a mentés során",
            message: error.status + error.statusMessage,
            okButtonText: "Bezárás"
        }).then(function () {
            console.log("Dialog closed!");
        });
        console.log("Hiba: " + error.message);
    };
    ProductDialogComponent.prototype.onSaveSuccess = function (result) {
        console.log(result);
        this.params.closeCallback(result);
        // this.routerExtensions.navigate(["/products"]);
    };
    ProductDialogComponent.prototype.onClose = function () {
        this.params.closeCallback(false);
        // this.routerExtensions.navigate(["/products"]);
    };
    ProductDialogComponent.prototype.onScan = function () {
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
            _this.product.barcode = result.text;
        }, function (errorMessage) {
            console.log("Hiba a beolvasáskor: " + errorMessage);
        });
    };
    ProductDialogComponent.prototype.isFormValid = function () {
        return this.nameModel.nativeElement.valid && this.barcodeModel.nativeElement.valid;
    };
    __decorate([
        core_1.ViewChild("barcodeModel"),
        __metadata("design:type", core_1.ElementRef)
    ], ProductDialogComponent.prototype, "barcodeModel", void 0);
    __decorate([
        core_1.ViewChild("nameModel"),
        __metadata("design:type", core_1.ElementRef)
    ], ProductDialogComponent.prototype, "nameModel", void 0);
    ProductDialogComponent = __decorate([
        core_1.Component({
            selector: "ProductDialog",
            moduleId: module.id,
            templateUrl: "./product-dialog.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner,
            nativescript_angular_1.ModalDialogParams,
            router_1.RouterExtensions,
            product_service_1.ProductService])
    ], ProductDialogComponent);
    return ProductDialogComponent;
}());
exports.ProductDialogComponent = ProductDialogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQXlFO0FBQ3pFLDZEQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsMkVBQTZEO0FBRTdELG9DQUFzQztBQUN0Qyx5REFBa0Q7QUFDbEQsNkRBQTJEO0FBTzNEO0lBUUksZ0NBQW9CLGNBQThCLEVBQzlCLE1BQXlCLEVBQ3pCLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUg5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFObEQsWUFBTyxHQUFHLElBQUksdUJBQU8sRUFBRSxDQUFDO0lBT3hCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNEOzs7OztXQUtPO0lBRVAscUNBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyx1QkFBdUIsQ0FDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLHdEQUF1QixHQUEvQixVQUFnQyxNQUF5QztRQUF6RSxpQkFHQztRQUZHLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUEwQjtZQUN4QyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUE1QixDQUE0QixFQUFFLFVBQUMsR0FBc0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRU8sNENBQVcsR0FBbkIsVUFBb0IsS0FBSztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFFLHFCQUFxQjtZQUM1QixPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsYUFBYTtZQUMzQyxZQUFZLEVBQUUsU0FBUztTQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTyw4Q0FBYSxHQUFyQixVQUFzQixNQUFlO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsaURBQWlEO0lBQ3JELENBQUM7SUFFTyx3Q0FBTyxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsaURBQWlEO0lBQ3JELENBQUM7SUFFTyx1Q0FBTSxHQUFkO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNyQixvQkFBb0IsRUFBRSxJQUFJO1lBQzFCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsZUFBZSxFQUFFLElBQUk7WUFDckIsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxxQkFBcUIsRUFBRSxHQUFHO1lBQzFCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLDJDQUEyQyxFQUFFLElBQUk7U0FDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDWCxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLENBQUMsRUFBRSxVQUFDLFlBQVk7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLDRDQUFXLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDdkYsQ0FBQztJQTNFMEI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7Z0VBQUM7SUFDNUI7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7a0NBQVksaUJBQVU7NkRBQUM7SUFIckMsc0JBQXNCO1FBTGxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztTQUNqRCxDQUFDO3lDQVNzQyw0Q0FBYztZQUN0Qix3Q0FBaUI7WUFDUCx5QkFBZ0I7WUFDbEIsZ0NBQWM7T0FYekMsc0JBQXNCLENBOEVsQztJQUFELDZCQUFDO0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwifi9wcm9kdWN0L3Byb2R1Y3QubW9kZWxcIjtcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIn4vcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiUHJvZHVjdERpYWxvZ1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9kdWN0LWRpYWxvZy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3REaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChcImJhcmNvZGVNb2RlbFwiKSBiYXJjb2RlTW9kZWw6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcIm5hbWVNb2RlbFwiKSBuYW1lTW9kZWw6IEVsZW1lbnRSZWY7XG5cbiAgICBwcm9kdWN0ID0gbmV3IFByb2R1Y3QoKTtcbiAgICBpc1NhdmluZzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICAvKlxuICAgICAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgICAgICAvISpzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgICAgIH0sIDApOyohL1xuICAgICAgICB9Ki9cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKFxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0U2VydmljZS5jcmVhdGUodGhpcy5wcm9kdWN0KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJzY3JpYmVUb1NhdmVSZXNwb25zZShyZXN1bHQ6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFByb2R1Y3Q+Pikge1xuICAgICAgICByZXN1bHQuc3Vic2NyaWJlKChyZXM6IEh0dHBSZXNwb25zZTxQcm9kdWN0PikgPT5cbiAgICAgICAgICAgIHRoaXMub25TYXZlU3VjY2VzcyhyZXMuYm9keSksIChyZXM6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB0aGlzLm9uU2F2ZUVycm9yKHJlcykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkhpYmEgYSBtZW50w6lzIHNvcsOhblwiLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3Iuc3RhdHVzICsgZXJyb3Iuc3RhdHVzTWVzc2FnZSxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJCZXrDoXLDoXNcIlxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhpYmE6IFwiICsgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVTdWNjZXNzKHJlc3VsdDogUHJvZHVjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgIC8vIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcHJvZHVjdHNcIl0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhmYWxzZSk7XG4gICAgICAgIC8vIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcHJvZHVjdHNcIl0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TY2FuKCkge1xuICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnNjYW4oe1xuICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IHRydWUsXG4gICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogZmFsc2UsXG4gICAgICAgICAgICBzaG93VG9yY2hCdXR0b246IHRydWUsXG4gICAgICAgICAgICBiZWVwT25TY2FuOiB0cnVlLFxuICAgICAgICAgICAgdG9yY2hPbjogZmFsc2UsXG4gICAgICAgICAgICByZXN1bHREaXNwbGF5RHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBvcGVuU2V0dGluZ3NJZlBlcm1pc3Npb25XYXNQcmV2aW91c2x5RGVuaWVkOiB0cnVlXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0LmJhcmNvZGUgPSByZXN1bHQudGV4dDtcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIaWJhIGEgYmVvbHZhc8Ohc2tvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzRm9ybVZhbGlkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lTW9kZWwubmF0aXZlRWxlbWVudC52YWxpZCAmJiB0aGlzLmJhcmNvZGVNb2RlbC5uYXRpdmVFbGVtZW50LnZhbGlkO1xuICAgIH1cbn1cbiJdfQ==