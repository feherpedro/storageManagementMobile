"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var date_helper_service_1 = require("~/date-helper.service");
var OrderItemService = /** @class */ (function () {
    function OrderItemService(http, dateHelperService) {
        this.http = http;
        this.dateHelperService = dateHelperService;
        this.resourceUrl = "https://storage-management.herokuapp.com/api/order-items";
        this.resourceSearchUrl = "https://storage-management.herokuapp.com/api/_search/order-items";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXItaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWdFO0FBQ2hFLHNDQUEyQztBQUUzQyw2REFBMEQ7QUFRMUQ7SUFLSSwwQkFBb0IsSUFBZ0IsRUFBVSxpQkFBb0M7UUFBOUQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFIMUUsZ0JBQVcsR0FBSSwwREFBMEQsQ0FBQztRQUMxRSxzQkFBaUIsR0FBRyxrRUFBa0UsQ0FBQztJQUVULENBQUM7SUFFdkYsaUNBQU0sR0FBTixVQUFPLFNBQW9CO1FBQTNCLGlCQUtDO1FBSkcsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDNUUsR0FBRyxDQUFDLFVBQUMsR0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLFNBQW9CO1FBQTNCLGlCQUtDO1FBSkcsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDM0UsR0FBRyxDQUFDLFVBQUMsR0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQXpCLENBQXlC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QUFVLEVBQTZCLHVDQUFpQjtPQUx6RSxnQkFBZ0IsQ0ErRTVCO0lBQUQsdUJBQUM7Q0FBQSxBQS9FRCxJQStFQztBQS9FWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSBcIn4vZGF0ZS1oZWxwZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgT3JkZXJJdGVtIH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWl0ZW0ubW9kZWxcIjtcblxuLy8gaW1wb3J0IHsgY3JlYXRlUmVxdWVzdE9wdGlvbiB9IGZyb20gXCIuLi8uLi9zaGFyZWRcIjtcblxuZXhwb3J0IHR5cGUgRW50aXR5UmVzcG9uc2VUeXBlID0gSHR0cFJlc3BvbnNlPE9yZGVySXRlbT47XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlckl0ZW1TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcmVzb3VyY2VVcmwgPSAgXCJodHRwczovL3N0b3JhZ2UtbWFuYWdlbWVudC5oZXJva3VhcHAuY29tL2FwaS9vcmRlci1pdGVtc1wiO1xuICAgIHByaXZhdGUgcmVzb3VyY2VTZWFyY2hVcmwgPSBcImh0dHBzOi8vc3RvcmFnZS1tYW5hZ2VtZW50Lmhlcm9rdWFwcC5jb20vYXBpL19zZWFyY2gvb3JkZXItaXRlbXNcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBkYXRlSGVscGVyU2VydmljZTogRGF0ZUhlbHBlclNlcnZpY2UpIHsgfVxuXG4gICAgY3JlYXRlKG9yZGVySXRlbTogT3JkZXJJdGVtKTogT2JzZXJ2YWJsZTxFbnRpdHlSZXNwb25zZVR5cGU+IHtcbiAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29udmVydChvcmRlckl0ZW0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxPcmRlckl0ZW0+KHRoaXMucmVzb3VyY2VVcmwsIGNvcHksIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwiIH0pXG4gICAgICAgICAgICAubWFwKChyZXM6IEVudGl0eVJlc3BvbnNlVHlwZSkgPT4gdGhpcy5jb252ZXJ0UmVzcG9uc2UocmVzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKG9yZGVySXRlbTogT3JkZXJJdGVtKTogT2JzZXJ2YWJsZTxFbnRpdHlSZXNwb25zZVR5cGU+IHtcbiAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29udmVydChvcmRlckl0ZW0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PE9yZGVySXRlbT4odGhpcy5yZXNvdXJjZVVybCwgY29weSwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCIgfSlcbiAgICAgICAgICAgIC5tYXAoKHJlczogRW50aXR5UmVzcG9uc2VUeXBlKSA9PiB0aGlzLmNvbnZlcnRSZXNwb25zZShyZXMpKTtcbiAgICB9XG5cbiAgICBmaW5kKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEVudGl0eVJlc3BvbnNlVHlwZT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9yZGVySXRlbT4oYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtpZH1gLCB7IG9ic2VydmU6IFwicmVzcG9uc2VcIn0pXG4gICAgICAgICAgICAubWFwKChyZXM6IEVudGl0eVJlc3BvbnNlVHlwZSkgPT4gdGhpcy5jb252ZXJ0UmVzcG9uc2UocmVzKSk7XG4gICAgfVxuXG4gICAgcXVlcnkocmVxPzogYW55KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T3JkZXJJdGVtW10+PiB7XG4gICAgICAgIC8vIGNvbnN0IG9wdGlvbnMgPSBjcmVhdGVSZXF1ZXN0T3B0aW9uKHJlcSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3JkZXJJdGVtW10+KHRoaXMucmVzb3VyY2VVcmwsIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwiIH0pLypwYXJhbXM6IG9wdGlvbnMsKi9cbiAgICAgICAgICAgIC5tYXAoKHJlczogSHR0cFJlc3BvbnNlPE9yZGVySXRlbVtdPikgPT4gdGhpcy5jb252ZXJ0QXJyYXlSZXNwb25zZShyZXMpKTtcbiAgICB9XG5cbiAgICBkZWxldGUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KGAke3RoaXMucmVzb3VyY2VVcmx9LyR7aWR9YCwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCJ9KTtcbiAgICB9XG5cbiAgICBzZWFyY2gocmVxPzogYW55KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T3JkZXJJdGVtW10+PiB7XG4gICAgICAgIC8vIGNvbnN0IG9wdGlvbnMgPSBjcmVhdGVSZXF1ZXN0T3B0aW9uKHJlcSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3JkZXJJdGVtW10+KHRoaXMucmVzb3VyY2VTZWFyY2hVcmwsIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwiIH0pLypwYXJhbXM6IG9wdGlvbnMsKi9cbiAgICAgICAgICAgIC5tYXAoKHJlczogSHR0cFJlc3BvbnNlPE9yZGVySXRlbVtdPikgPT4gdGhpcy5jb252ZXJ0QXJyYXlSZXNwb25zZShyZXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnZlcnRSZXNwb25zZShyZXM6IEVudGl0eVJlc3BvbnNlVHlwZSk6IEVudGl0eVJlc3BvbnNlVHlwZSB7XG4gICAgICAgIGNvbnN0IGJvZHk6IE9yZGVySXRlbSA9IHRoaXMuY29udmVydEl0ZW1Gcm9tU2VydmVyKHJlcy5ib2R5KTtcblxuICAgICAgICByZXR1cm4gcmVzLmNsb25lKHtib2R5fSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb252ZXJ0QXJyYXlSZXNwb25zZShyZXM6IEh0dHBSZXNwb25zZTxPcmRlckl0ZW1bXT4pOiBIdHRwUmVzcG9uc2U8T3JkZXJJdGVtW10+IHtcbiAgICAgICAgY29uc3QganNvblJlc3BvbnNlOiBPcmRlckl0ZW1bXSA9IHJlcy5ib2R5O1xuICAgICAgICBjb25zdCBib2R5OiBPcmRlckl0ZW1bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25SZXNwb25zZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keS5wdXNoKHRoaXMuY29udmVydEl0ZW1Gcm9tU2VydmVyKGpzb25SZXNwb25zZVtpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcy5jbG9uZSh7Ym9keX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSByZXR1cm5lZCBKU09OIG9iamVjdCB0byBPcmRlckl0ZW0uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjb252ZXJ0SXRlbUZyb21TZXJ2ZXIob3JkZXJJdGVtOiBPcmRlckl0ZW0pOiBPcmRlckl0ZW0ge1xuICAgICAgICBjb25zdCBjb3B5OiBPcmRlckl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBvcmRlckl0ZW0pO1xuXG4gICAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBPcmRlckl0ZW0gdG8gYSBKU09OIHdoaWNoIGNhbiBiZSBzZW50IHRvIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjb252ZXJ0KG9yZGVySXRlbTogT3JkZXJJdGVtKTogT3JkZXJJdGVtIHtcbiAgICAgICAgY29uc3QgY29weTogT3JkZXJJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgb3JkZXJJdGVtKTtcblxuICAgICAgICByZXR1cm4gY29weTtcbiAgICB9XG59XG4iXX0=