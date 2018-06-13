"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var router_1 = require("nativescript-angular/router");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var operators_1 = require("rxjs/operators");
var dialogs = require("tns-core-modules/ui/dialogs");
var product_service_1 = require("~/product/product.service");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(barcodeScanner, pageRoute, routerExtensions, productService) {
        this.barcodeScanner = barcodeScanner;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.productService = productService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            var id = +params["id"];
            _this.load(id);
        });
    };
    ProductDetailComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ProductDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.productService.find(id).subscribe(function (res) { return _this.onSuccess(res.body, res.headers); }, function (res) { return _this.onError(res.message); });
    };
    ProductDetailComponent.prototype.onSuccess = function (data, headers) {
        // this.links = this.parseLinks.parse(headers.get('link'));
        // this.totalItems = headers.get('X-Total-Count');
        // this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.product = data;
        console.log(this.product);
    };
    ProductDetailComponent.prototype.onError = function (error) {
        var _this = this;
        dialogs.alert({
            title: "Hiba a termék lekérésekor",
            message: error.status + error.statusMessage,
            okButtonText: "Bezárás"
        }).then(function () {
            console.log("Hiba a termék lekérésekor");
            _this.routerExtensions.navigate(["/products"]);
        });
    };
    ProductDetailComponent.prototype.onDelete = function () {
        var _this = this;
        this.productService.delete(this.product.id).subscribe(function (res) { return _this.routerExtensions.navigate(["/products"]); }, function (res) { return _this.onError(res.message); });
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: "ProductDetail",
            moduleId: module.id,
            templateUrl: "./product-detail.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner,
            router_1.PageRoute,
            router_1.RouterExtensions,
            product_service_1.ProductService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQWtEO0FBQ2xELGlDQUFtQztBQUNuQyxzREFBMEU7QUFDMUUsMkVBQTZEO0FBRTdELDRDQUEyQztBQUMzQyxxREFBdUQ7QUFFdkQsNkRBQTJEO0FBTzNEO0lBSUksZ0NBQW9CLGNBQThCLEVBQzlCLFNBQW9CLEVBQ3BCLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUg5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNsRCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUM5QixxQkFBUyxDQUFDLFVBQUMsY0FBYyxJQUFLLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUN2RCxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDYixJQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtEQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxxQ0FBSSxHQUFKLFVBQUssRUFBVTtRQUFmLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNsQyxVQUFDLEdBQTBCLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFyQyxDQUFxQyxFQUNyRSxVQUFDLEdBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsQ0FDeEQsQ0FBQztJQUNOLENBQUM7SUFFTywwQ0FBUyxHQUFqQixVQUFrQixJQUFJLEVBQUUsT0FBTztRQUMzQiwyREFBMkQ7UUFDM0Qsa0RBQWtEO1FBQ2xELHFDQUFxQztRQUNyQyxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLHdDQUFPLEdBQWYsVUFBZ0IsS0FBSztRQUFyQixpQkFTQztRQVJHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUUsMkJBQTJCO1lBQ2xDLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhO1lBQzNDLFlBQVksRUFBRSxTQUFTO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8seUNBQVEsR0FBaEI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNqRCxVQUFDLEdBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBN0MsQ0FBNkMsRUFDekUsVUFBQyxHQUFzQixJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXpCLENBQXlCLENBQ3hELENBQUM7SUFDTixDQUFDO0lBeERRLHNCQUFzQjtRQUxsQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7U0FDakQsQ0FBQzt5Q0FLc0MsNENBQWM7WUFDbkIsa0JBQVM7WUFDRix5QkFBZ0I7WUFDbEIsZ0NBQWM7T0FQekMsc0JBQXNCLENBeURsQztJQUFELDZCQUFDO0NBQUEsQUF6REQsSUF5REM7QUF6RFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJ+L3Byb2R1Y3QvcHJvZHVjdC5tb2RlbFwiO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwifi9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJQcm9kdWN0RGV0YWlsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIHByb2R1Y3Q6IFByb2R1Y3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhcmNvZGVTY2FubmVyOiBCYXJjb2RlU2Nhbm5lcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKChhY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxuICAgICAgICApLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWQgPSArcGFyYW1zW1wiaWRcIl07XG4gICAgICAgICAgICB0aGlzLmxvYWQoaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBsb2FkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0U2VydmljZS5maW5kKGlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8UHJvZHVjdD4pID0+IHRoaXMub25TdWNjZXNzKHJlcy5ib2R5LCByZXMuaGVhZGVycyksXG4gICAgICAgICAgICAocmVzOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5tZXNzYWdlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdWNjZXNzKGRhdGEsIGhlYWRlcnMpIHtcbiAgICAgICAgLy8gdGhpcy5saW5rcyA9IHRoaXMucGFyc2VMaW5rcy5wYXJzZShoZWFkZXJzLmdldCgnbGluaycpKTtcbiAgICAgICAgLy8gdGhpcy50b3RhbEl0ZW1zID0gaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgICAgLy8gdGhpcy5xdWVyeUNvdW50ID0gdGhpcy50b3RhbEl0ZW1zO1xuICAgICAgICAvLyB0aGlzLnBhZ2UgPSBwYWdpbmdQYXJhbXMucGFnZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJIaWJhIGEgdGVybcOpayBsZWvDqXLDqXNla29yXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5zdGF0dXMgKyBlcnJvci5zdGF0dXNNZXNzYWdlLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkJlesOhcsOhc1wiXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIaWJhIGEgdGVybcOpayBsZWvDqXLDqXNla29yXCIpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9kdWN0c1wiXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWxldGUoKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZGVsZXRlKHRoaXMucHJvZHVjdC5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcHJvZHVjdHNcIl0pLFxuICAgICAgICAgICAgKHJlczogSHR0cEVycm9yUmVzcG9uc2UpID0+IHRoaXMub25FcnJvcihyZXMubWVzc2FnZSlcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=