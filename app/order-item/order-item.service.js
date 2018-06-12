"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var date_helper_service_1 = require("~/date-helper.service");
var OrderItemService = /** @class */ (function () {
    function OrderItemService(http, dateHelperService) {
        this.http = http;
        this.dateHelperService = dateHelperService;
        this.resourceUrl = "https://storage-management.herokuapp.com/api/order-entities";
        this.resourceSearchUrl = "https://storage-management.herokuapp.com/api/_search/order-entities";
    }
    OrderItemService.prototype.create = function (orderItem) {
        var _this = this;
        var copy = this.convert(orderItem);
        return this.http.post(this.resourceUrl, copy, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    OrderItemService.prototype.update = function (orderItem) {
        var _this = this;
        var copy = this.convert(orderItem);
        return this.http.put(this.resourceUrl, copy, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    OrderItemService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + id, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    OrderItemService.prototype.query = function (req) {
        // const options = createRequestOption(req);
        var _this = this;
        return this.http.get(this.resourceUrl, { observe: "response" }) /*params: options,*/
            .map(function (res) { return _this.convertArrayResponse(res); });
    };
    OrderItemService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: "response" });
    };
    OrderItemService.prototype.search = function (req) {
        // const options = createRequestOption(req);
        var _this = this;
        return this.http.get(this.resourceSearchUrl, { observe: "response" }) /*params: options,*/
            .map(function (res) { return _this.convertArrayResponse(res); });
    };
    OrderItemService.prototype.convertResponse = function (res) {
        var body = this.convertItemFromServer(res.body);
        return res.clone({ body: body });
    };
    OrderItemService.prototype.convertArrayResponse = function (res) {
        var jsonResponse = res.body;
        var body = [];
        for (var i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({ body: body });
    };
    /**
     * Convert a returned JSON object to OrderItem.
     */
    OrderItemService.prototype.convertItemFromServer = function (orderItem) {
        var copy = Object.assign({}, orderItem);
        return copy;
    };
    /**
     * Convert a OrderItem to a JSON which can be sent to the server.
     */
    OrderItemService.prototype.convert = function (orderItem) {
        var copy = Object.assign({}, orderItem);
        return copy;
    };
    OrderItemService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, date_helper_service_1.DateHelperService])
    ], OrderItemService);
    return OrderItemService;
}());
exports.OrderItemService = OrderItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXItaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWdFO0FBQ2hFLHNDQUEyQztBQUUzQyw2REFBMEQ7QUFRMUQ7SUFLSSwwQkFBb0IsSUFBZ0IsRUFBVSxpQkFBb0M7UUFBOUQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFIMUUsZ0JBQVcsR0FBSSw2REFBNkQsQ0FBQztRQUM3RSxzQkFBaUIsR0FBRyxxRUFBcUUsQ0FBQztJQUVaLENBQUM7SUFFdkYsaUNBQU0sR0FBTixVQUFPLFNBQW9CO1FBQTNCLGlCQUtDO1FBSkcsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDNUUsR0FBRyxDQUFDLFVBQUMsR0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLFNBQW9CO1FBQTNCLGlCQUtDO1FBSkcsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDM0UsR0FBRyxDQUFDLFVBQUMsR0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQXpCLENBQXlC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QUFVLEVBQTZCLHVDQUFpQjtPQUx6RSxnQkFBZ0IsQ0ErRTVCO0lBQUQsdUJBQUM7Q0FBQSxBQS9FRCxJQStFQztBQS9FWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSBcIn4vZGF0ZS1oZWxwZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgT3JkZXJJdGVtIH0gZnJvbSBcIn4vb3JkZXItaXRlbS9vcmRlci1pdGVtLm1vZGVsXCI7XG5cbi8vIGltcG9ydCB7IGNyZWF0ZVJlcXVlc3RPcHRpb24gfSBmcm9tIFwiLi4vLi4vc2hhcmVkXCI7XG5cbmV4cG9ydCB0eXBlIEVudGl0eVJlc3BvbnNlVHlwZSA9IEh0dHBSZXNwb25zZTxPcmRlckl0ZW0+O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJJdGVtU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHJlc291cmNlVXJsID0gIFwiaHR0cHM6Ly9zdG9yYWdlLW1hbmFnZW1lbnQuaGVyb2t1YXBwLmNvbS9hcGkvb3JkZXItZW50aXRpZXNcIjtcbiAgICBwcml2YXRlIHJlc291cmNlU2VhcmNoVXJsID0gXCJodHRwczovL3N0b3JhZ2UtbWFuYWdlbWVudC5oZXJva3VhcHAuY29tL2FwaS9fc2VhcmNoL29yZGVyLWVudGl0aWVzXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgZGF0ZUhlbHBlclNlcnZpY2U6IERhdGVIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICAgIGNyZWF0ZShvcmRlckl0ZW06IE9yZGVySXRlbSk6IE9ic2VydmFibGU8RW50aXR5UmVzcG9uc2VUeXBlPiB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvbnZlcnQob3JkZXJJdGVtKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8T3JkZXJJdGVtPih0aGlzLnJlc291cmNlVXJsLCBjb3B5LCB7IG9ic2VydmU6IFwicmVzcG9uc2VcIiB9KVxuICAgICAgICAgICAgLm1hcCgocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIHVwZGF0ZShvcmRlckl0ZW06IE9yZGVySXRlbSk6IE9ic2VydmFibGU8RW50aXR5UmVzcG9uc2VUeXBlPiB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvbnZlcnQob3JkZXJJdGVtKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxPcmRlckl0ZW0+KHRoaXMucmVzb3VyY2VVcmwsIGNvcHksIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwiIH0pXG4gICAgICAgICAgICAubWFwKChyZXM6IEVudGl0eVJlc3BvbnNlVHlwZSkgPT4gdGhpcy5jb252ZXJ0UmVzcG9uc2UocmVzKSk7XG4gICAgfVxuXG4gICAgZmluZChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxFbnRpdHlSZXNwb25zZVR5cGU+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcmRlckl0ZW0+KGAke3RoaXMucmVzb3VyY2VVcmx9LyR7aWR9YCwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCJ9KVxuICAgICAgICAgICAgLm1hcCgocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIHF1ZXJ5KHJlcT86IGFueSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9yZGVySXRlbVtdPj4ge1xuICAgICAgICAvLyBjb25zdCBvcHRpb25zID0gY3JlYXRlUmVxdWVzdE9wdGlvbihyZXEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9yZGVySXRlbVtdPih0aGlzLnJlc291cmNlVXJsLCB7IG9ic2VydmU6IFwicmVzcG9uc2VcIiB9KS8qcGFyYW1zOiBvcHRpb25zLCovXG4gICAgICAgICAgICAubWFwKChyZXM6IEh0dHBSZXNwb25zZTxPcmRlckl0ZW1bXT4pID0+IHRoaXMuY29udmVydEFycmF5UmVzcG9uc2UocmVzKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLnJlc291cmNlVXJsfS8ke2lkfWAsIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwifSk7XG4gICAgfVxuXG4gICAgc2VhcmNoKHJlcT86IGFueSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9yZGVySXRlbVtdPj4ge1xuICAgICAgICAvLyBjb25zdCBvcHRpb25zID0gY3JlYXRlUmVxdWVzdE9wdGlvbihyZXEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9yZGVySXRlbVtdPih0aGlzLnJlc291cmNlU2VhcmNoVXJsLCB7IG9ic2VydmU6IFwicmVzcG9uc2VcIiB9KS8qcGFyYW1zOiBvcHRpb25zLCovXG4gICAgICAgICAgICAubWFwKChyZXM6IEh0dHBSZXNwb25zZTxPcmRlckl0ZW1bXT4pID0+IHRoaXMuY29udmVydEFycmF5UmVzcG9uc2UocmVzKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb252ZXJ0UmVzcG9uc2UocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpOiBFbnRpdHlSZXNwb25zZVR5cGUge1xuICAgICAgICBjb25zdCBib2R5OiBPcmRlckl0ZW0gPSB0aGlzLmNvbnZlcnRJdGVtRnJvbVNlcnZlcihyZXMuYm9keSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcy5jbG9uZSh7Ym9keX0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29udmVydEFycmF5UmVzcG9uc2UocmVzOiBIdHRwUmVzcG9uc2U8T3JkZXJJdGVtW10+KTogSHR0cFJlc3BvbnNlPE9yZGVySXRlbVtdPiB7XG4gICAgICAgIGNvbnN0IGpzb25SZXNwb25zZTogT3JkZXJJdGVtW10gPSByZXMuYm9keTtcbiAgICAgICAgY29uc3QgYm9keTogT3JkZXJJdGVtW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uUmVzcG9uc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkucHVzaCh0aGlzLmNvbnZlcnRJdGVtRnJvbVNlcnZlcihqc29uUmVzcG9uc2VbaV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXMuY2xvbmUoe2JvZHl9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgcmV0dXJuZWQgSlNPTiBvYmplY3QgdG8gT3JkZXJJdGVtLlxuICAgICAqL1xuICAgIHByaXZhdGUgY29udmVydEl0ZW1Gcm9tU2VydmVyKG9yZGVySXRlbTogT3JkZXJJdGVtKTogT3JkZXJJdGVtIHtcbiAgICAgICAgY29uc3QgY29weTogT3JkZXJJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgb3JkZXJJdGVtKTtcblxuICAgICAgICByZXR1cm4gY29weTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgT3JkZXJJdGVtIHRvIGEgSlNPTiB3aGljaCBjYW4gYmUgc2VudCB0byB0aGUgc2VydmVyLlxuICAgICAqL1xuICAgIHByaXZhdGUgY29udmVydChvcmRlckl0ZW06IE9yZGVySXRlbSk6IE9yZGVySXRlbSB7XG4gICAgICAgIGNvbnN0IGNvcHk6IE9yZGVySXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIG9yZGVySXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxufVxuIl19