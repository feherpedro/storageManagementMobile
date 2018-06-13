"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderEntity = /** @class */ (function () {
    function OrderEntity(id, createDate, paymentDate, dueDate, statusId, statusName, orderItemList) {
        this.id = id;
        this.createDate = createDate;
        this.paymentDate = paymentDate;
        this.dueDate = dueDate;
        this.statusId = statusId;
        this.statusName = statusName;
        this.orderItemList = orderItemList;
        this.orderItemList = [];
    }
    return OrderEntity;
}());
exports.OrderEntity = OrderEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50aXR5Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXItZW50aXR5Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxxQkFDVyxFQUFXLEVBQ1gsVUFBZ0IsRUFDaEIsV0FBaUIsRUFDakIsT0FBYSxFQUNiLFFBQWlCLEVBQ2pCLFVBQW1CLEVBQ25CLGFBQTJCO1FBTjNCLE9BQUUsR0FBRixFQUFFLENBQVM7UUFDWCxlQUFVLEdBQVYsVUFBVSxDQUFNO1FBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFNO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQU07UUFDYixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFFbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVySXRlbSB9IGZyb20gXCJ+L29yZGVyLWVudGl0eS9vcmRlci1pdGVtLm1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBPcmRlckVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpZD86IG51bWJlcixcbiAgICAgICAgcHVibGljIGNyZWF0ZURhdGU/OiBhbnksXG4gICAgICAgIHB1YmxpYyBwYXltZW50RGF0ZT86IGFueSxcbiAgICAgICAgcHVibGljIGR1ZURhdGU/OiBhbnksXG4gICAgICAgIHB1YmxpYyBzdGF0dXNJZD86IG51bWJlcixcbiAgICAgICAgcHVibGljIHN0YXR1c05hbWU/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBvcmRlckl0ZW1MaXN0PzogT3JkZXJJdGVtW11cbiAgICApIHtcbiAgICAgICAgdGhpcy5vcmRlckl0ZW1MaXN0ID0gW107XG4gICAgfVxufVxuIl19