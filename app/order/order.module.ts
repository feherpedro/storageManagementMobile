import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { BarcodeScanner } from "nativescript-barcodescanner";
import { OrderRoutingModule } from "~/order/order-routing.module";
import { OrderComponent } from "~/order/order.component";
import { ProductService } from "~/scan/product.service";

@NgModule({
    imports: [
        NativeScriptHttpClientModule,
        OrderRoutingModule
    ],
    declarations: [
        OrderComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        NativeScriptHttpClientModule,
        ProductService,
        BarcodeScanner
    ]
})
export class OrderModule { }
