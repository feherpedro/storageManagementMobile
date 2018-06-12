import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { ModalDialogService } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { DateHelperService } from "~/date-helper.service";
import { OrderEntityDetailComponent } from "~/order-entity/order-entity-detail.component";
import { OrderEntityDialogComponent } from "~/order-entity/order-entity-dialog.component";
import { OrderEntityRoutingModule } from "~/order-entity/order-entity-routing.module";
import { OrderEntityComponent } from "~/order-entity/order-entity.component";
import { OrderEntityService } from "~/order-entity/order-entity.service";
import { ProductService } from "~/scan/product.service";

@NgModule({
    imports: [
        NativeScriptHttpClientModule,
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        OrderEntityRoutingModule
    ],
    declarations: [
        OrderEntityComponent,
        OrderEntityDialogComponent,
        OrderEntityDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        NativeScriptHttpClientModule,
        ProductService,
        OrderEntityService,
        DateHelperService,
        ModalDialogService,
        BarcodeScanner
    ],
    entryComponents: [
        OrderEntityDialogComponent
    ]
})
export class OrderEntityModule { }
