"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var date_helper_service_1 = require("~/date-helper.service");
var OrderEntityService = /** @class */ (function () {
    function OrderEntityService(http, dateHelperService) {
        this.http = http;
        this.dateHelperService = dateHelperService;
        this.resourceUrl = "https://storage-management.herokuapp.com/api/order-entities";
        this.resourceSearchUrl = "https://storage-management.herokuapp.com/api/_search/order-entities";
    }
    OrderEntityService.prototype.create = function (orderEntity) {
        var _this = this;
        var copy = this.convert(orderEntity);
        return this.http.post(this.resourceUrl, copy, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    OrderEntityService.prototype.placeIntoProducts = function (orderItems, id) {
        var _this = this;
        return this.http.post(this.resourceUrl + "/" + id + "/placeIntoProducts", orderItems, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    OrderEntityService.prototype.update = function (orderEntity) {
        var _this = this;
        var copy = this.convert(orderEntity);
        return this.http.put(this.resourceUrl, copy, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    OrderEntityService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + id, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    OrderEntityService.prototype.query = function (req) {
        // const options = createRequestOption(req);
        var _this = this;
        return this.http.get(this.resourceUrl, { observe: "response" }) /*params: options,*/
            .map(function (res) { return _this.convertArrayResponse(res); });
    };
    OrderEntityService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: "response" });
    };
    OrderEntityService.prototype.search = function (req) {
        // const options = createRequestOption(req);
        var _this = this;
        return this.http.get(this.resourceSearchUrl, { observe: "response" }) /*params: options,*/
            .map(function (res) { return _this.convertArrayResponse(res); });
    };
    OrderEntityService.prototype.convertResponse = function (res) {
        var body = this.convertItemFromServer(res.body);
        return res.clone({ body: body });
    };
    OrderEntityService.prototype.convertArrayResponse = function (res) {
        var jsonResponse = res.body;
        var body = [];
        for (var i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({ body: body });
    };
    /**
     * Convert a returned JSON object to OrderEntity.
     */
    OrderEntityService.prototype.convertItemFromServer = function (orderEntity) {
        var copy = Object.assign({}, orderEntity);
        copy.createDate = this.dateHelperService
            .convertLocalDateFromServer(orderEntity.createDate);
        copy.paymentDate = this.dateHelperService
            .convertLocalDateFromServer(orderEntity.paymentDate);
        copy.dueDate = this.dateHelperService
            .convertLocalDateFromServer(orderEntity.dueDate);
        return copy;
    };
    /**
     * Convert a OrderEntity to a JSON which can be sent to the server.
     */
    OrderEntityService.prototype.convert = function (orderEntity) {
        var copy = Object.assign({}, orderEntity);
        /*copy.createDate = this.dateHelperService
        .convertLocalDateToServer(orderEntity.createDate);
        copy.paymentDate = this.dateHelperService
        .convertLocalDateToServer(orderEntity.paymentDate);
        copy.dueDate = this.dateHelperService
        .convertLocalDateToServer(orderEntity.dueDate);*/
        return copy;
    };
    OrderEntityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, date_helper_service_1.DateHelperService])
    ], OrderEntityService);
    return OrderEntityService;
}());
exports.OrderEntityService = OrderEntityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci1lbnRpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFnRTtBQUNoRSxzQ0FBMkM7QUFFM0MsNkRBQTBEO0FBUzFEO0lBS0ksNEJBQW9CLElBQWdCLEVBQVUsaUJBQW9DO1FBQTlELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBSDFFLGdCQUFXLEdBQUksNkRBQTZELENBQUM7UUFDN0Usc0JBQWlCLEdBQUcscUVBQXFFLENBQUM7SUFFWixDQUFDO0lBRXZGLG1DQUFNLEdBQU4sVUFBTyxXQUF3QjtRQUEvQixpQkFLQztRQUpHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFjLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQzlFLEdBQUcsQ0FBQyxVQUFDLEdBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELDhDQUFpQixHQUFqQixVQUFrQixVQUF1QixFQUFFLEVBQVU7UUFBckQsaUJBSUM7UUFGRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLFdBQVcsU0FBSSxFQUFFLHVCQUFvQixFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUNwRyxHQUFHLENBQUMsVUFBQyxHQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7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Q2xELElBQU0sSUFBSSxHQUFnQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDdkMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjthQUN4QywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCO2FBQ3BDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNLLG9DQUFPLEdBQWYsVUFBZ0IsV0FBd0I7UUFDcEMsSUFBTSxJQUFJLEdBQWdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3pEOzs7Ozt5REFLaUQ7UUFFakQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBaEdRLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFO3lDQU1pQixpQkFBVSxFQUE2Qix1Q0FBaUI7T0FMekUsa0JBQWtCLENBaUc5QjtJQUFELHlCQUFDO0NBQUEsQUFqR0QsSUFpR0M7QUFqR1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gXCJ+L2RhdGUtaGVscGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IE9yZGVyRW50aXR5IH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWVudGl0eS5tb2RlbFwiO1xuaW1wb3J0IHsgT3JkZXJJdGVtIH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWl0ZW0ubW9kZWxcIjtcblxuLy8gaW1wb3J0IHsgY3JlYXRlUmVxdWVzdE9wdGlvbiB9IGZyb20gXCIuLi8uLi9zaGFyZWRcIjtcblxuZXhwb3J0IHR5cGUgRW50aXR5UmVzcG9uc2VUeXBlID0gSHR0cFJlc3BvbnNlPE9yZGVyRW50aXR5PjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyRW50aXR5U2VydmljZSB7XG5cbiAgICBwcml2YXRlIHJlc291cmNlVXJsID0gIFwiaHR0cHM6Ly9zdG9yYWdlLW1hbmFnZW1lbnQuaGVyb2t1YXBwLmNvbS9hcGkvb3JkZXItZW50aXRpZXNcIjtcbiAgICBwcml2YXRlIHJlc291cmNlU2VhcmNoVXJsID0gXCJodHRwczovL3N0b3JhZ2UtbWFuYWdlbWVudC5oZXJva3VhcHAuY29tL2FwaS9fc2VhcmNoL29yZGVyLWVudGl0aWVzXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgZGF0ZUhlbHBlclNlcnZpY2U6IERhdGVIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICAgIGNyZWF0ZShvcmRlckVudGl0eTogT3JkZXJFbnRpdHkpOiBPYnNlcnZhYmxlPEVudGl0eVJlc3BvbnNlVHlwZT4ge1xuICAgICAgICBjb25zdCBjb3B5ID0gdGhpcy5jb252ZXJ0KG9yZGVyRW50aXR5KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8T3JkZXJFbnRpdHk+KHRoaXMucmVzb3VyY2VVcmwsIGNvcHksIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwiIH0pXG4gICAgICAgICAgICAubWFwKChyZXM6IEVudGl0eVJlc3BvbnNlVHlwZSkgPT4gdGhpcy5jb252ZXJ0UmVzcG9uc2UocmVzKSk7XG4gICAgfVxuXG4gICAgcGxhY2VJbnRvUHJvZHVjdHMob3JkZXJJdGVtczogT3JkZXJJdGVtW10sIGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEVudGl0eVJlc3BvbnNlVHlwZT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnJlc291cmNlVXJsfS8ke2lkfS9wbGFjZUludG9Qcm9kdWN0c2AsIG9yZGVySXRlbXMsIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwiIH0pXG4gICAgICAgICAgICAubWFwKChyZXM6IEVudGl0eVJlc3BvbnNlVHlwZSkgPT4gdGhpcy5jb252ZXJ0UmVzcG9uc2UocmVzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKG9yZGVyRW50aXR5OiBPcmRlckVudGl0eSk6IE9ic2VydmFibGU8RW50aXR5UmVzcG9uc2VUeXBlPiB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvbnZlcnQob3JkZXJFbnRpdHkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PE9yZGVyRW50aXR5Pih0aGlzLnJlc291cmNlVXJsLCBjb3B5LCB7IG9ic2VydmU6IFwicmVzcG9uc2VcIiB9KVxuICAgICAgICAgICAgLm1hcCgocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIGZpbmQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8RW50aXR5UmVzcG9uc2VUeXBlPiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3JkZXJFbnRpdHk+KGAke3RoaXMucmVzb3VyY2VVcmx9LyR7aWR9YCwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCJ9KVxuICAgICAgICAgICAgLm1hcCgocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIHF1ZXJ5KHJlcT86IGFueSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9yZGVyRW50aXR5W10+PiB7XG4gICAgICAgIC8vIGNvbnN0IG9wdGlvbnMgPSBjcmVhdGVSZXF1ZXN0T3B0aW9uKHJlcSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3JkZXJFbnRpdHlbXT4odGhpcy5yZXNvdXJjZVVybCwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCIgfSkvKnBhcmFtczogb3B0aW9ucywqL1xuICAgICAgICAgICAgLm1hcCgocmVzOiBIdHRwUmVzcG9uc2U8T3JkZXJFbnRpdHlbXT4pID0+IHRoaXMuY29udmVydEFycmF5UmVzcG9uc2UocmVzKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLnJlc291cmNlVXJsfS8ke2lkfWAsIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwifSk7XG4gICAgfVxuXG4gICAgc2VhcmNoKHJlcT86IGFueSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9yZGVyRW50aXR5W10+PiB7XG4gICAgICAgIC8vIGNvbnN0IG9wdGlvbnMgPSBjcmVhdGVSZXF1ZXN0T3B0aW9uKHJlcSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3JkZXJFbnRpdHlbXT4odGhpcy5yZXNvdXJjZVNlYXJjaFVybCwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCIgfSkvKnBhcmFtczogb3B0aW9ucywqL1xuICAgICAgICAgICAgLm1hcCgocmVzOiBIdHRwUmVzcG9uc2U8T3JkZXJFbnRpdHlbXT4pID0+IHRoaXMuY29udmVydEFycmF5UmVzcG9uc2UocmVzKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb252ZXJ0UmVzcG9uc2UocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpOiBFbnRpdHlSZXNwb25zZVR5cGUge1xuICAgICAgICBjb25zdCBib2R5OiBPcmRlckVudGl0eSA9IHRoaXMuY29udmVydEl0ZW1Gcm9tU2VydmVyKHJlcy5ib2R5KTtcblxuICAgICAgICByZXR1cm4gcmVzLmNsb25lKHtib2R5fSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb252ZXJ0QXJyYXlSZXNwb25zZShyZXM6IEh0dHBSZXNwb25zZTxPcmRlckVudGl0eVtdPik6IEh0dHBSZXNwb25zZTxPcmRlckVudGl0eVtdPiB7XG4gICAgICAgIGNvbnN0IGpzb25SZXNwb25zZTogT3JkZXJFbnRpdHlbXSA9IHJlcy5ib2R5O1xuICAgICAgICBjb25zdCBib2R5OiBPcmRlckVudGl0eVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvblJlc3BvbnNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5LnB1c2godGhpcy5jb252ZXJ0SXRlbUZyb21TZXJ2ZXIoanNvblJlc3BvbnNlW2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLmNsb25lKHtib2R5fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIHJldHVybmVkIEpTT04gb2JqZWN0IHRvIE9yZGVyRW50aXR5LlxuICAgICAqL1xuICAgIHByaXZhdGUgY29udmVydEl0ZW1Gcm9tU2VydmVyKG9yZGVyRW50aXR5OiBPcmRlckVudGl0eSk6IE9yZGVyRW50aXR5IHtcbiAgICAgICAgY29uc3QgY29weTogT3JkZXJFbnRpdHkgPSBPYmplY3QuYXNzaWduKHt9LCBvcmRlckVudGl0eSk7XG4gICAgICAgIGNvcHkuY3JlYXRlRGF0ZSA9IHRoaXMuZGF0ZUhlbHBlclNlcnZpY2VcbiAgICAgICAgLmNvbnZlcnRMb2NhbERhdGVGcm9tU2VydmVyKG9yZGVyRW50aXR5LmNyZWF0ZURhdGUpO1xuICAgICAgICBjb3B5LnBheW1lbnREYXRlID0gdGhpcy5kYXRlSGVscGVyU2VydmljZVxuICAgICAgICAuY29udmVydExvY2FsRGF0ZUZyb21TZXJ2ZXIob3JkZXJFbnRpdHkucGF5bWVudERhdGUpO1xuICAgICAgICBjb3B5LmR1ZURhdGUgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlXG4gICAgICAgIC5jb252ZXJ0TG9jYWxEYXRlRnJvbVNlcnZlcihvcmRlckVudGl0eS5kdWVEYXRlKTtcblxuICAgICAgICByZXR1cm4gY29weTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgT3JkZXJFbnRpdHkgdG8gYSBKU09OIHdoaWNoIGNhbiBiZSBzZW50IHRvIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjb252ZXJ0KG9yZGVyRW50aXR5OiBPcmRlckVudGl0eSk6IE9yZGVyRW50aXR5IHtcbiAgICAgICAgY29uc3QgY29weTogT3JkZXJFbnRpdHkgPSBPYmplY3QuYXNzaWduKHt9LCBvcmRlckVudGl0eSk7XG4gICAgICAgIC8qY29weS5jcmVhdGVEYXRlID0gdGhpcy5kYXRlSGVscGVyU2VydmljZVxuICAgICAgICAuY29udmVydExvY2FsRGF0ZVRvU2VydmVyKG9yZGVyRW50aXR5LmNyZWF0ZURhdGUpO1xuICAgICAgICBjb3B5LnBheW1lbnREYXRlID0gdGhpcy5kYXRlSGVscGVyU2VydmljZVxuICAgICAgICAuY29udmVydExvY2FsRGF0ZVRvU2VydmVyKG9yZGVyRW50aXR5LnBheW1lbnREYXRlKTtcbiAgICAgICAgY29weS5kdWVEYXRlID0gdGhpcy5kYXRlSGVscGVyU2VydmljZVxuICAgICAgICAuY29udmVydExvY2FsRGF0ZVRvU2VydmVyKG9yZGVyRW50aXR5LmR1ZURhdGUpOyovXG5cbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxufVxuIl19