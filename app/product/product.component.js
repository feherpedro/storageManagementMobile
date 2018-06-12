"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var product_dialog_component_1 = require("~/product/product-dialog.component");
var product_service_1 = require("~/product/product.service");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, modal, vcRef, routerExtensions) {
        this.productService = productService;
        this.modal = modal;
        this.vcRef = vcRef;
        this.routerExtensions = routerExtensions;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    ProductComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ProductComponent.prototype.loadAll = function () {
        var _this = this;
        this.productService.query().subscribe(function (res) { return _this.onSuccess(res.body, res.headers); }, function (res) { return _this.onError(res.message); });
    };
    ProductComponent.prototype.onSuccess = function (data, headers) {
        // this.links = this.parseLinks.parse(headers.get('link'));
        // this.totalItems = headers.get('X-Total-Count');
        // this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.products = data;
        console.log(this.products);
    };
    ProductComponent.prototype.onError = function (error) {
        console.log("Hiba a termékek lekérésekor");
    };
    ProductComponent.prototype.onNewProduct = function () {
        var _this = this;
        // this.routerExtensions.navigate(["/products/new"]);
        var options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(product_dialog_component_1.ProductDialogComponent, options).then(function (res) {
            console.log(res);
            if (res) {
                _this.loadAll();
                // this.onDetailTap(res);
            }
        });
    };
    ProductComponent.prototype.onDetailTap = function (product) {
        this.routerExtensions.navigate(["/products", product.id]);
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: "Product",
            moduleId: module.id,
            templateUrl: "./product.component.html"
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef,
            router_1.RouterExtensions])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFvRTtBQUNwRSw2REFBMEQ7QUFDMUQsc0RBQStEO0FBRS9ELGtEQUFvRDtBQUNwRCwrRUFBNEU7QUFFNUUsNkRBQTJEO0FBTzNEO0lBSUksMEJBQW9CLGNBQThCLEVBQzlCLEtBQXlCLEVBQ3pCLEtBQXVCLEVBQ3ZCLGdCQUFrQztRQUhsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUNqQyxVQUFDLEdBQTRCLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFyQyxDQUFxQyxFQUN2RSxVQUFDLEdBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsQ0FDeEQsQ0FBQztJQUNOLENBQUM7SUFFTyxvQ0FBUyxHQUFqQixVQUFrQixJQUFJLEVBQUUsT0FBTztRQUMzQiwyREFBMkQ7UUFDM0Qsa0RBQWtEO1FBQ2xELHFDQUFxQztRQUNyQyxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVPLGtDQUFPLEdBQWYsVUFBZ0IsS0FBSztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVPLHVDQUFZLEdBQXBCO1FBQUEsaUJBY0M7UUFiRyxxREFBcUQ7UUFDckQsSUFBTSxPQUFPLEdBQUc7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxpREFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YseUJBQXlCO1lBQzdCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxzQ0FBVyxHQUFuQixVQUFvQixPQUFnQjtRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUF6RFEsZ0JBQWdCO1FBTDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO3lDQUtzQyxnQ0FBYztZQUN2Qix5Q0FBa0I7WUFDbEIsdUJBQWdCO1lBQ0wseUJBQWdCO09BUDdDLGdCQUFnQixDQTBENUI7SUFBRCx1QkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUHJvZHVjdERpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCJ+L3Byb2R1Y3QvcHJvZHVjdC1kaWFsb2cuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIn4vcHJvZHVjdC9wcm9kdWN0Lm1vZGVsXCI7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gXCJ+L3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlByb2R1Y3RcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJvZHVjdC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSBwcm9kdWN0czogUHJvZHVjdFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIGxvYWRBbGwoKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UucXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8UHJvZHVjdFtdPikgPT4gdGhpcy5vblN1Y2Nlc3MocmVzLmJvZHksIHJlcy5oZWFkZXJzKSxcbiAgICAgICAgICAgIChyZXM6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLm1lc3NhZ2UpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblN1Y2Nlc3MoZGF0YSwgaGVhZGVycykge1xuICAgICAgICAvLyB0aGlzLmxpbmtzID0gdGhpcy5wYXJzZUxpbmtzLnBhcnNlKGhlYWRlcnMuZ2V0KCdsaW5rJykpO1xuICAgICAgICAvLyB0aGlzLnRvdGFsSXRlbXMgPSBoZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xuICAgICAgICAvLyB0aGlzLnF1ZXJ5Q291bnQgPSB0aGlzLnRvdGFsSXRlbXM7XG4gICAgICAgIC8vIHRoaXMucGFnZSA9IHBhZ2luZ1BhcmFtcy5wYWdlO1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGliYSBhIHRlcm3DqWtlayBsZWvDqXLDqXNla29yXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25OZXdQcm9kdWN0KCkge1xuICAgICAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3Byb2R1Y3RzL25ld1wiXSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB7fSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChQcm9kdWN0RGlhbG9nQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5vbkRldGFpbFRhcChyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGV0YWlsVGFwKHByb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9kdWN0c1wiLCBwcm9kdWN0LmlkXSk7XG4gICAgfVxufVxuIl19