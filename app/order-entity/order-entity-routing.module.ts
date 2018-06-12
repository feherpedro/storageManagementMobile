import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { OrderEntityDetailComponent } from "~/order-entity/order-entity-detail.component";
import { OrderEntityComponent } from "~/order-entity/order-entity.component";

const routes: Routes = [
    { path: "", component: OrderEntityComponent },
    { path: ":id", component: OrderEntityDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class OrderEntityRoutingModule { }
