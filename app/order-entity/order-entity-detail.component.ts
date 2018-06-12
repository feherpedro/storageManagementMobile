import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, OnInit, ViewContainerRef } from "@angular/core";
import * as app from "application";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { switchMap } from "rxjs/operators";
import * as dialogs from "ui/dialogs";
import { OrderEntity } from "~/order-entity/order-entity.model";
import { OrderEntityService } from "~/order-entity/order-entity.service";
import { OrderItem } from "~/order-item/order-item.model";
import { Product } from "~/scan/product.model";
import { ProductService } from "~/scan/product.service";
import { ProductDialogComponent } from "~/product/product-dialog.component";
import { ModalDialogService } from "nativescript-angular";

@Component({
    selector: "OrderEntityDetail",
    moduleId: module.id,
    templateUrl: "./order-entity-detail.component.html"
})
export class OrderEntityDetailComponent implements OnInit {

    private scanned = false;
    private scannedFormat = "";
    private scannedText = "";
    private orderEntity: OrderEntity;
    private orderItems: OrderItem[] = [];
    private productList: Product[] = [];
    // private barcodeNumber: string;

    constructor(private barcodeScanner: BarcodeScanner,
                private orderEntityService: OrderEntityService,
                private pageRoute: PageRoute,
                private modal: ModalDialogService,
                private vcRef: ViewContainerRef,
                private routerExtensions: RouterExtensions,
                private productService: ProductService) {
    }

    ngOnInit(): void {
        this.pageRoute.activatedRoute.pipe(
            switchMap((activatedRoute) => activatedRoute.params)
        ).forEach((params) => {
            const id = +params["id"];
            this.load(id);
        });
    }

    onScan() {
        this.barcodeScanner.scan({
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            resultDisplayDuration: 500,
            orientation: undefined,
            openSettingsIfPermissionWasPreviouslyDenied: true
        }).then((result) => {
            console.log("Formátum: " + result.format + ",\nTartalom: " + result.text);
            this.scanned = true;
            this.scannedFormat = result.format;
            this.scannedText = result.text;
            const confirmOptions: dialogs.ConfirmOptions = {
                title: "Scan eredménye",
                message: "Formátum: " + result.format + ",\nTartalom: " + result.text,
                okButtonText: "Tovább a " + result.text + " vonalkódú termékhez",
                cancelButtonText: "Vissza"
            };
            setTimeout(() => {
                dialogs.confirm(confirmOptions).then((action) => {
                    console.log("Dialog result: " + action);
                    if (action) {
                        this.productService.query()
                        .subscribe(
                            (res: HttpResponse<Product[]>) => {
                                this.productList = res.body;
                                console.log(res.body);
                            },
                            (res: HttpErrorResponse) => console.log(res.message)
                        );
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
        }, (errorMessage) => {
            console.log("Hiba a beolvasáskor: " + errorMessage);
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    load(id: number) {
        this.orderEntityService.find(id).subscribe(
            (res: HttpResponse<OrderEntity>) => this.onSuccess(res.body, res.headers),
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    private onSuccess(data, headers) {
        // this.links = this.parseLinks.parse(headers.get('link'));
        // this.totalItems = headers.get('X-Total-Count');
        // this.queryCount = this.totalItems;
        // this.page = pagingParams.page;
        this.orderEntity = data;
        console.log(this.orderEntity);
    }

    private onError(error) {
        // this.jhiAlertService.error(error.message, null, null);
        console.log("Hiba a bevételezés lekérésekor");
    }

    private onNewOrderItem() {
        const options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(ProductDialogComponent, options).then((res) => {
            console.log(res);
            if (res) {
                this.loadOrderItems();
                // this.onDetailTap(res);
            }
        });
    }

    private onDetailTap(orderItem: OrderItem) {
        this.routerExtensions.navigate(["/order-items", orderItem.id]);
    }

    private loadOrderItems(){
    }
}
