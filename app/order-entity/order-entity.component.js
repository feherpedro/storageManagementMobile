"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("nativescript-angular/router");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var FrameModule = require("ui/frame");
var Utils = require("utils/utils");
var order_entity_dialog_component_1 = require("~/order-entity/order-entity-dialog.component");
var order_entity_service_1 = require("~/order-entity/order-entity.service");
var OrderEntityComponent = /** @class */ (function () {
    function OrderEntityComponent(barcodeScanner, orderEntityService, modal, vcRef, routerExtensions) {
        this.barcodeScanner = barcodeScanner;
        this.orderEntityService = orderEntityService;
        this.modal = modal;
        this.vcRef = vcRef;
        this.routerExtensions = routerExtensions;
        this.MIN_X = -80;
        this.MAX_X = 80;
        this.THRESHOLD = 0.5;
        this.isBusy = true;
    }
    OrderEntityComponent.prototype.ngOnInit = function () {
        // setTimeout(() => {
        //     this.loadAll();
        // }, 0);
    };
    OrderEntityComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        this.loadAll();
        // }, 0);
    };
    OrderEntityComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    OrderEntityComponent.prototype.loadAll = function () {
        var _this = this;
        this.orderEntityService.query().subscribe(function (res) { return _this.onSuccess(res.body, res.headers); }, function (res) { return _this.onError(res.message); });
    };
    OrderEntityComponent.prototype.onSuccess = function (data, headers) {
        // this.links = this.parseLinks.parse(headers.get('link'));
        // this.totalItems = headers.get('X-Total-Count');
        // this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.orderEntities = data;
        this.isBusy = false;
        console.log(this.orderEntities);
    };
    OrderEntityComponent.prototype.onError = function (error) {
        console.log("Hiba a bevételezések lekérésekor");
    };
    OrderEntityComponent.prototype.onNewOrderEntity = function () {
        var _this = this;
        var options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(order_entity_dialog_component_1.OrderEntityDialogComponent, options).then(function (res) {
            console.log(res);
            if (res) {
                _this.loadAll();
                _this.onDetailTap(res);
            }
        });
    };
    OrderEntityComponent.prototype.onDetailTap = function (orderEntity) {
        this.routerExtensions.navigate(["/order-entities", orderEntity.id]);
    };
    /*private onForegroundPan(arg: PanGestureEventData) {
        const absLayout: AbsoluteLayout = <AbsoluteLayout>arg.object,
            newX: number = absLayout.translateX + arg.deltaX;

        if (newX >= this.MIN_X && newX <= this.MAX_X) {
            absLayout.translateX = newX;
        }
        if (arg.state === GestureStateTypes.ended && !(newX === this.MIN_X || newX === this.MAX_X)) {
            // init our destination X coordinate to 0, in case neither THRESHOLD has been hit
            let destX: number = 0;

            // if user hit or crossed the THESHOLD either way, let's finish in that direction
            if (newX <= this.MIN_X * this.THRESHOLD) {
                destX = this.MIN_X;
            } else if (newX >= this.MAX_X * this.THRESHOLD) {
                destX = this.MAX_X;
            }

            absLayout.animate({
                translate: { x: destX, y: 0 },
                duration: 200
            });
        }
    }

    private editPerson(arg: EventData) {
        const dataItem = (<View>arg.object).bindingContext,
            personList: any[] = (<View>arg.object).page.bindingContext.orderEntities,
            idxToEdit = personList.indexOf(dataItem);

        console.log(`Edit item #${idxToEdit + 1} - ${dataItem.id}`);
    }

    private deletePerson(arg: EventData) {
        const dataItem = (<View>arg.object).bindingContext,
            personList: any[] = (<View>arg.object).page.bindingContext.orderEntities,
            idxToDelete = personList.indexOf(dataItem);

        console.log(`Delete item #${idxToDelete + 1} - ${dataItem.id}`);
    }*/
    OrderEntityComponent.prototype.onPullToRefreshInitiated = function (args) {
        var _this = this;
        var radListView = args.object;
        setTimeout(function () {
            _this.loadAll();
            radListView.notifyPullToRefreshFinished();
        }, 500);
    };
    OrderEntityComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        swipeLimits.threshold = 40 * Utils.layout.getDisplayDensity();
        swipeLimits.left = 80 * Utils.layout.getDisplayDensity();
        swipeLimits.right = 80 * Utils.layout.getDisplayDensity();
        this.selected = args.index;
    };
    OrderEntityComponent.prototype.onDelete = function () {
        var radListView = FrameModule.topmost().currentPage.getViewById("radlistview");
        // Toast.makeText("Deleted").show();
        // this.orderEntities.splice(this.selected, 1);
        // TNSFancyAlert.showSuccess("Sikeresen törölve", "Something finished successfully.", "Bezárás");
        radListView.notifySwipeToExecuteFinished();
    };
    OrderEntityComponent.prototype.onEdit = function () {
        var radListView = FrameModule.topmost().currentPage.getViewById("radlistview");
        // Toast.makeText("Archived").show();
        // this.orderEntities.splice(this.selected, 1);
        // TNSFancyAlert.showSuccess("Sikeresen módosítva", "Something finished successfully.", "Bezárás");
        radListView.notifySwipeToExecuteFinished();
    };
    OrderEntityComponent = __decorate([
        core_1.Component({
            selector: "OrderEntity",
            moduleId: module.id,
            templateUrl: "./order-entity.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner,
            order_entity_service_1.OrderEntityService,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef,
            router_1.RouterExtensions])
    ], OrderEntityComponent);
    return OrderEntityComponent;
}());
exports.OrderEntityComponent = OrderEntityComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50aXR5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVyLWVudGl0eS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBbUY7QUFDbkYsaUNBQW1DO0FBQ25DLDZEQUEwRDtBQUMxRCxzREFBK0Q7QUFDL0QsMkVBQTZEO0FBSTdELHNDQUF3QztBQUN4QyxtQ0FBcUM7QUFDckMsOEZBQTBGO0FBRTFGLDRFQUF5RTtBQU96RTtJQVVJLDhCQUFvQixjQUE4QixFQUM5QixrQkFBc0MsRUFDdEMsS0FBeUIsRUFDekIsS0FBdUIsRUFDdkIsZ0JBQWtDO1FBSmxDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFWOUMsVUFBSyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFFaEIsV0FBTSxHQUFHLElBQUksQ0FBQztJQU90QixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsU0FBUztJQUNiLENBQUM7SUFFRCw4Q0FBZSxHQUFmO1FBQ0kscUJBQXFCO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixTQUFTO0lBQ2IsQ0FBQztJQUVELGdEQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQ0FBTyxHQUFQO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUMs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QUMsNEJBQTRCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ08scUNBQU0sR0FBZDtRQUNJLElBQU0sV0FBVyxHQUFpQixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRixxQ0FBcUM7UUFDckMsK0NBQStDO1FBQy9DLG1HQUFtRztRQUNuRyxXQUFXLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBN0lRLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzt5Q0FXc0MsNENBQWM7WUFDVix5Q0FBa0I7WUFDL0IseUNBQWtCO1lBQ2xCLHVCQUFnQjtZQUNMLHlCQUFnQjtPQWQ3QyxvQkFBb0IsQ0E4SWhDO0lBQUQsMkJBQUM7Q0FBQSxBQTlJRCxJQThJQztBQTlJWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcbi8vIGltcG9ydCB7IFROU0ZhbmN5QWxlcnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhbmN5YWxlcnRcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIEZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBPcmRlckVudGl0eURpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCJ+L29yZGVyLWVudGl0eS9vcmRlci1lbnRpdHktZGlhbG9nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3JkZXJFbnRpdHkgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItZW50aXR5Lm1vZGVsXCI7XG5pbXBvcnQgeyBPcmRlckVudGl0eVNlcnZpY2UgfSBmcm9tIFwifi9vcmRlci1lbnRpdHkvb3JkZXItZW50aXR5LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiT3JkZXJFbnRpdHlcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vb3JkZXItZW50aXR5LmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJFbnRpdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gICAgcHJpdmF0ZSBvcmRlckVudGl0aWVzOiBPcmRlckVudGl0eVtdO1xuXG4gICAgcHJpdmF0ZSBNSU5fWCA9IC04MDtcbiAgICBwcml2YXRlIE1BWF9YID0gODA7XG4gICAgcHJpdmF0ZSBUSFJFU0hPTEQgPSAwLjU7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZDogbnVtYmVyO1xuICAgIHByaXZhdGUgaXNCdXN5ID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgb3JkZXJFbnRpdHlTZXJ2aWNlOiBPcmRlckVudGl0eVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgICAgIC8vIH0sIDApO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgLy8gfSwgMCk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgbG9hZEFsbCgpIHtcbiAgICAgICAgdGhpcy5vcmRlckVudGl0eVNlcnZpY2UucXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8T3JkZXJFbnRpdHlbXT4pID0+IHRoaXMub25TdWNjZXNzKHJlcy5ib2R5LCByZXMuaGVhZGVycyksXG4gICAgICAgICAgICAocmVzOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5tZXNzYWdlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdWNjZXNzKGRhdGEsIGhlYWRlcnMpIHtcbiAgICAgICAgLy8gdGhpcy5saW5rcyA9IHRoaXMucGFyc2VMaW5rcy5wYXJzZShoZWFkZXJzLmdldCgnbGluaycpKTtcbiAgICAgICAgLy8gdGhpcy50b3RhbEl0ZW1zID0gaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgICAgLy8gdGhpcy5xdWVyeUNvdW50ID0gdGhpcy50b3RhbEl0ZW1zO1xuICAgICAgICAvLyB0aGlzLnBhZ2UgPSBwYWdpbmdQYXJhbXMucGFnZTtcbiAgICAgICAgdGhpcy5vcmRlckVudGl0aWVzID0gZGF0YTtcbiAgICAgICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vcmRlckVudGl0aWVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIaWJhIGEgYmV2w6l0ZWxlesOpc2VrIGxla8OpcsOpc2Vrb3JcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk5ld09yZGVyRW50aXR5KCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDoge30sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoT3JkZXJFbnRpdHlEaWFsb2dDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGV0YWlsVGFwKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EZXRhaWxUYXAob3JkZXJFbnRpdHk6IE9yZGVyRW50aXR5KSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvb3JkZXItZW50aXRpZXNcIiwgb3JkZXJFbnRpdHkuaWRdKTtcbiAgICB9XG5cbiAgICAvKnByaXZhdGUgb25Gb3JlZ3JvdW5kUGFuKGFyZzogUGFuR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCBhYnNMYXlvdXQ6IEFic29sdXRlTGF5b3V0ID0gPEFic29sdXRlTGF5b3V0PmFyZy5vYmplY3QsXG4gICAgICAgICAgICBuZXdYOiBudW1iZXIgPSBhYnNMYXlvdXQudHJhbnNsYXRlWCArIGFyZy5kZWx0YVg7XG5cbiAgICAgICAgaWYgKG5ld1ggPj0gdGhpcy5NSU5fWCAmJiBuZXdYIDw9IHRoaXMuTUFYX1gpIHtcbiAgICAgICAgICAgIGFic0xheW91dC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJnLnN0YXRlID09PSBHZXN0dXJlU3RhdGVUeXBlcy5lbmRlZCAmJiAhKG5ld1ggPT09IHRoaXMuTUlOX1ggfHwgbmV3WCA9PT0gdGhpcy5NQVhfWCkpIHtcbiAgICAgICAgICAgIC8vIGluaXQgb3VyIGRlc3RpbmF0aW9uIFggY29vcmRpbmF0ZSB0byAwLCBpbiBjYXNlIG5laXRoZXIgVEhSRVNIT0xEIGhhcyBiZWVuIGhpdFxuICAgICAgICAgICAgbGV0IGRlc3RYOiBudW1iZXIgPSAwO1xuXG4gICAgICAgICAgICAvLyBpZiB1c2VyIGhpdCBvciBjcm9zc2VkIHRoZSBUSEVTSE9MRCBlaXRoZXIgd2F5LCBsZXQncyBmaW5pc2ggaW4gdGhhdCBkaXJlY3Rpb25cbiAgICAgICAgICAgIGlmIChuZXdYIDw9IHRoaXMuTUlOX1ggKiB0aGlzLlRIUkVTSE9MRCkge1xuICAgICAgICAgICAgICAgIGRlc3RYID0gdGhpcy5NSU5fWDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3WCA+PSB0aGlzLk1BWF9YICogdGhpcy5USFJFU0hPTEQpIHtcbiAgICAgICAgICAgICAgICBkZXN0WCA9IHRoaXMuTUFYX1g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFic0xheW91dC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogZGVzdFgsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdFBlcnNvbihhcmc6IEV2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCBkYXRhSXRlbSA9ICg8Vmlldz5hcmcub2JqZWN0KS5iaW5kaW5nQ29udGV4dCxcbiAgICAgICAgICAgIHBlcnNvbkxpc3Q6IGFueVtdID0gKDxWaWV3PmFyZy5vYmplY3QpLnBhZ2UuYmluZGluZ0NvbnRleHQub3JkZXJFbnRpdGllcyxcbiAgICAgICAgICAgIGlkeFRvRWRpdCA9IHBlcnNvbkxpc3QuaW5kZXhPZihkYXRhSXRlbSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYEVkaXQgaXRlbSAjJHtpZHhUb0VkaXQgKyAxfSAtICR7ZGF0YUl0ZW0uaWR9YCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVQZXJzb24oYXJnOiBFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3QgZGF0YUl0ZW0gPSAoPFZpZXc+YXJnLm9iamVjdCkuYmluZGluZ0NvbnRleHQsXG4gICAgICAgICAgICBwZXJzb25MaXN0OiBhbnlbXSA9ICg8Vmlldz5hcmcub2JqZWN0KS5wYWdlLmJpbmRpbmdDb250ZXh0Lm9yZGVyRW50aXRpZXMsXG4gICAgICAgICAgICBpZHhUb0RlbGV0ZSA9IHBlcnNvbkxpc3QuaW5kZXhPZihkYXRhSXRlbSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYERlbGV0ZSBpdGVtICMke2lkeFRvRGVsZXRlICsgMX0gLSAke2RhdGFJdGVtLmlkfWApO1xuICAgIH0qL1xuICAgIHByaXZhdGUgb25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKGFyZ3M6IGFueSkge1xuICAgICAgICBjb25zdCByYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgICAgICAgICAgcmFkTGlzdFZpZXcubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuICAgIHByaXZhdGUgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSA0MCAqIFV0aWxzLmxheW91dC5nZXREaXNwbGF5RGVuc2l0eSgpO1xuICAgICAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gODAgKiBVdGlscy5sYXlvdXQuZ2V0RGlzcGxheURlbnNpdHkoKTtcbiAgICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSA4MCAqIFV0aWxzLmxheW91dC5nZXREaXNwbGF5RGVuc2l0eSgpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gYXJncy5pbmRleDtcbiAgICB9XG4gICAgcHJpdmF0ZSBvbkRlbGV0ZSgpIHtcbiAgICAgICAgY29uc3QgcmFkTGlzdFZpZXcgPSA8UmFkTGlzdFZpZXc+IEZyYW1lTW9kdWxlLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZChcInJhZGxpc3R2aWV3XCIpO1xuICAgICAgICAvLyBUb2FzdC5tYWtlVGV4dChcIkRlbGV0ZWRcIikuc2hvdygpO1xuICAgICAgICAvLyB0aGlzLm9yZGVyRW50aXRpZXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWQsIDEpO1xuICAgICAgICAvLyBUTlNGYW5jeUFsZXJ0LnNob3dTdWNjZXNzKFwiU2lrZXJlc2VuIHTDtnLDtmx2ZVwiLCBcIlNvbWV0aGluZyBmaW5pc2hlZCBzdWNjZXNzZnVsbHkuXCIsIFwiQmV6w6Fyw6FzXCIpO1xuICAgICAgICByYWRMaXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG4gICAgfVxuICAgIHByaXZhdGUgb25FZGl0KCkge1xuICAgICAgICBjb25zdCByYWRMaXN0VmlldyA9IDxSYWRMaXN0Vmlldz4gRnJhbWVNb2R1bGUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKFwicmFkbGlzdHZpZXdcIik7XG4gICAgICAgIC8vIFRvYXN0Lm1ha2VUZXh0KFwiQXJjaGl2ZWRcIikuc2hvdygpO1xuICAgICAgICAvLyB0aGlzLm9yZGVyRW50aXRpZXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWQsIDEpO1xuICAgICAgICAvLyBUTlNGYW5jeUFsZXJ0LnNob3dTdWNjZXNzKFwiU2lrZXJlc2VuIG3Ds2Rvc8OtdHZhXCIsIFwiU29tZXRoaW5nIGZpbmlzaGVkIHN1Y2Nlc3NmdWxseS5cIiwgXCJCZXrDoXLDoXNcIik7XG4gICAgICAgIHJhZExpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcbiAgICB9XG59XG4iXX0=