import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { OrderEntityComponent } from "~/order-entity/order-entity.component";

const routes: Routes = [
    { path: "", component: OrderEntityComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class OrderItemRoutingModule { }
