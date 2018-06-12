"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var order_entity_model_1 = require("~/order-entity/order-entity.model");
var order_entity_service_1 = require("~/order-entity/order-entity.service");
var OrderEntityDialogComponent = /** @class */ (function () {
    function OrderEntityDialogComponent(barcodeScanner, params, orderEntityService) {
        this.barcodeScanner = barcodeScanner;
        this.params = params;
        this.orderEntityService = orderEntityService;
        this.orderEntity = new order_entity_model_1.OrderEntity();
    }
    OrderEntityDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
    };
    OrderEntityDialogComponent.prototype.save = function () {
        this.isSaving = true;
        var datePickerView = this.datePicker.nativeElement;
        this.orderEntity.createDate = new Date(datePickerView.year, datePickerView.month - 1, datePickerView.day + 1);
        this.subscribeToSaveResponse(this.orderEntityService.create(this.orderEntity));
    };
    OrderEntityDialogComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) {
            return _this.onSaveSuccess(res.body);
        }, function (res) { return _this.onSaveError(res); });
    };
    OrderEntityDialogComponent.prototype.onSaveError = function (error) {
        this.isSaving = false;
        console.log("Hiba: " + error.message);
    };
    OrderEntityDialogComponent.prototype.onSaveSuccess = function (result) {
        console.log(result);
        this.params.closeCallback(result);
    };
    OrderEntityDialogComponent.prototype.onClose = function () {
        this.params.closeCallback(false);
    };
    __decorate([
        core_1.ViewChild("datePicker"),
        __metadata("design:type", core_1.ElementRef)
    ], OrderEntityDialogComponent.prototype, "datePicker", void 0);
    OrderEntityDialogComponent = __decorate([
        core_1.Component({
            selector: "OrderEntityDialog",
            moduleId: module.id,
            templateUrl: "./order-entity-dialog.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner,
            nativescript_angular_1.ModalDialogParams,
            order_entity_service_1.OrderEntityService])
    ], OrderEntityDialogComponent);
    return OrderEntityDialogComponent;
}());
exports.OrderEntityDialogComponent = OrderEntityDialogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50aXR5LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci1lbnRpdHktZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUF5RTtBQUN6RSw2REFBeUQ7QUFDekQsMkVBQTZEO0FBRzdELHdFQUFnRTtBQUNoRSw0RUFBeUU7QUFPekU7SUFPSSxvQ0FBb0IsY0FBOEIsRUFDOUIsTUFBeUIsRUFDekIsa0JBQXNDO1FBRnRDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTDFELGdCQUFXLEdBQUcsSUFBSSxnQ0FBVyxFQUFFLENBQUM7SUFNaEMsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQseUNBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQU0sY0FBYyxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsY0FBYyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RyxJQUFJLENBQUMsdUJBQXVCLENBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVPLDREQUF1QixHQUEvQixVQUFnQyxNQUE2QztRQUE3RSxpQkFHQztRQUZHLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUE4QjtZQUM1QyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUE1QixDQUE0QixFQUFFLFVBQUMsR0FBc0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRU8sZ0RBQVcsR0FBbkIsVUFBb0IsS0FBSztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLGtEQUFhLEdBQXJCLFVBQXNCLE1BQW1CO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVPLDRDQUFPLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBdkN3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTtrRUFBQztJQUZ2QywwQkFBMEI7UUFMdEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQ0FBc0M7U0FDdEQsQ0FBQzt5Q0FRc0MsNENBQWM7WUFDdEIsd0NBQWlCO1lBQ0wseUNBQWtCO09BVGpELDBCQUEwQixDQTBDdEM7SUFBRCxpQ0FBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiO1xuaW1wb3J0IHsgT3JkZXJFbnRpdHkgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItZW50aXR5Lm1vZGVsXCI7XG5pbXBvcnQgeyBPcmRlckVudGl0eVNlcnZpY2UgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItZW50aXR5LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiT3JkZXJFbnRpdHlEaWFsb2dcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vb3JkZXItZW50aXR5LWRpYWxvZy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRW50aXR5RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoXCJkYXRlUGlja2VyXCIpIGRhdGVQaWNrZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBvcmRlckVudGl0eSA9IG5ldyBPcmRlckVudGl0eSgpO1xuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXJjb2RlU2Nhbm5lcjogQmFyY29kZVNjYW5uZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgb3JkZXJFbnRpdHlTZXJ2aWNlOiBPcmRlckVudGl0eVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBkYXRlUGlja2VyVmlldyA9IDxEYXRlUGlja2VyPnRoaXMuZGF0ZVBpY2tlci5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLm9yZGVyRW50aXR5LmNyZWF0ZURhdGUgPSBuZXcgRGF0ZShkYXRlUGlja2VyVmlldy55ZWFyLCBkYXRlUGlja2VyVmlldy5tb250aCAtIDEsIGRhdGVQaWNrZXJWaWV3LmRheSArIDEpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKFxuICAgICAgICAgICAgdGhpcy5vcmRlckVudGl0eVNlcnZpY2UuY3JlYXRlKHRoaXMub3JkZXJFbnRpdHkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKHJlc3VsdDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T3JkZXJFbnRpdHk+Pikge1xuICAgICAgICByZXN1bHQuc3Vic2NyaWJlKChyZXM6IEh0dHBSZXNwb25zZTxPcmRlckVudGl0eT4pID0+XG4gICAgICAgICAgICB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzLmJvZHkpLCAocmVzOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcihyZXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZUVycm9yKGVycm9yKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJIaWJhOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlU3VjY2VzcyhyZXN1bHQ6IE9yZGVyRW50aXR5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soZmFsc2UpO1xuICAgIH1cbn1cbiJdfQ==