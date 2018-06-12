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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci1lbnRpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFnRTtBQUNoRSxzQ0FBMkM7QUFFM0MsNkRBQTBEO0FBUzFEO0lBS0ksNEJBQW9CLElBQWdCLEVBQVUsaUJBQW9DO1FBQTlELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBSDFFLGdCQUFXLEdBQUksNkRBQTZELENBQUM7UUFDN0Usc0JBQWlCLEdBQUcscUVBQXFFLENBQUM7SUFFWixDQUFDO0lBRXZGLG1DQUFNLEdBQU4sVUFBTyxXQUF3QjtRQUEvQixpQkFLQztRQUpHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFjLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQzlFLEdBQUcsQ0FBQyxVQUFDLEdBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELDhDQUFpQixHQUFqQixVQUFrQixVQUF1QixFQUFFLEVBQVU7UUFBckQsaUJBSUM7UUFGRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLFdBQVcsU0FBSSxFQUFFLHVCQUFvQixFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUNwRyxHQUFHLENBQUMsVUFBQyxHQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7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Q2xELElBQU0sSUFBSSxHQUFnQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDdkMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjthQUN4QywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCO2FBQ3BDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNLLG9DQUFPLEdBQWYsVUFBZ0IsV0FBd0I7UUFDcEMsSUFBTSxJQUFJLEdBQWdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3pEOzs7Ozt5REFLaUQ7UUFFakQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBaEdRLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFO3lDQU1pQixpQkFBVSxFQUE2Qix1Q0FBaUI7T0FMekUsa0JBQWtCLENBaUc5QjtJQUFELHlCQUFDO0NBQUEsQUFqR0QsSUFpR0M7QUFqR1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gXCJ+L2RhdGUtaGVscGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IE9yZGVyRW50aXR5IH0gZnJvbSBcIn4vb3JkZXItZW50aXR5L29yZGVyLWVudGl0eS5tb2RlbFwiO1xuaW1wb3J0IHsgT3JkZXJJdGVtIH0gZnJvbSBcIn4vb3JkZXItaXRlbS9vcmRlci1pdGVtLm1vZGVsXCI7XG5cbi8vIGltcG9ydCB7IGNyZWF0ZVJlcXVlc3RPcHRpb24gfSBmcm9tIFwiLi4vLi4vc2hhcmVkXCI7XG5cbmV4cG9ydCB0eXBlIEVudGl0eVJlc3BvbnNlVHlwZSA9IEh0dHBSZXNwb25zZTxPcmRlckVudGl0eT47XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlckVudGl0eVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSByZXNvdXJjZVVybCA9ICBcImh0dHBzOi8vc3RvcmFnZS1tYW5hZ2VtZW50Lmhlcm9rdWFwcC5jb20vYXBpL29yZGVyLWVudGl0aWVzXCI7XG4gICAgcHJpdmF0ZSByZXNvdXJjZVNlYXJjaFVybCA9IFwiaHR0cHM6Ly9zdG9yYWdlLW1hbmFnZW1lbnQuaGVyb2t1YXBwLmNvbS9hcGkvX3NlYXJjaC9vcmRlci1lbnRpdGllc1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGRhdGVIZWxwZXJTZXJ2aWNlOiBEYXRlSGVscGVyU2VydmljZSkgeyB9XG5cbiAgICBjcmVhdGUob3JkZXJFbnRpdHk6IE9yZGVyRW50aXR5KTogT2JzZXJ2YWJsZTxFbnRpdHlSZXNwb25zZVR5cGU+IHtcbiAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29udmVydChvcmRlckVudGl0eSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PE9yZGVyRW50aXR5Pih0aGlzLnJlc291cmNlVXJsLCBjb3B5LCB7IG9ic2VydmU6IFwicmVzcG9uc2VcIiB9KVxuICAgICAgICAgICAgLm1hcCgocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIHBsYWNlSW50b1Byb2R1Y3RzKG9yZGVySXRlbXM6IE9yZGVySXRlbVtdLCBpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxFbnRpdHlSZXNwb25zZVR5cGU+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtpZH0vcGxhY2VJbnRvUHJvZHVjdHNgLCBvcmRlckl0ZW1zLCB7IG9ic2VydmU6IFwicmVzcG9uc2VcIiB9KVxuICAgICAgICAgICAgLm1hcCgocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIHVwZGF0ZShvcmRlckVudGl0eTogT3JkZXJFbnRpdHkpOiBPYnNlcnZhYmxlPEVudGl0eVJlc3BvbnNlVHlwZT4ge1xuICAgICAgICBjb25zdCBjb3B5ID0gdGhpcy5jb252ZXJ0KG9yZGVyRW50aXR5KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxPcmRlckVudGl0eT4odGhpcy5yZXNvdXJjZVVybCwgY29weSwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCIgfSlcbiAgICAgICAgICAgIC5tYXAoKHJlczogRW50aXR5UmVzcG9uc2VUeXBlKSA9PiB0aGlzLmNvbnZlcnRSZXNwb25zZShyZXMpKTtcbiAgICB9XG5cbiAgICBmaW5kKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEVudGl0eVJlc3BvbnNlVHlwZT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9yZGVyRW50aXR5PihgJHt0aGlzLnJlc291cmNlVXJsfS8ke2lkfWAsIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwifSlcbiAgICAgICAgICAgIC5tYXAoKHJlczogRW50aXR5UmVzcG9uc2VUeXBlKSA9PiB0aGlzLmNvbnZlcnRSZXNwb25zZShyZXMpKTtcbiAgICB9XG5cbiAgICBxdWVyeShyZXE/OiBhbnkpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPcmRlckVudGl0eVtdPj4ge1xuICAgICAgICAvLyBjb25zdCBvcHRpb25zID0gY3JlYXRlUmVxdWVzdE9wdGlvbihyZXEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9yZGVyRW50aXR5W10+KHRoaXMucmVzb3VyY2VVcmwsIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwiIH0pLypwYXJhbXM6IG9wdGlvbnMsKi9cbiAgICAgICAgICAgIC5tYXAoKHJlczogSHR0cFJlc3BvbnNlPE9yZGVyRW50aXR5W10+KSA9PiB0aGlzLmNvbnZlcnRBcnJheVJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIGRlbGV0ZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtpZH1gLCB7IG9ic2VydmU6IFwicmVzcG9uc2VcIn0pO1xuICAgIH1cblxuICAgIHNlYXJjaChyZXE/OiBhbnkpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPcmRlckVudGl0eVtdPj4ge1xuICAgICAgICAvLyBjb25zdCBvcHRpb25zID0gY3JlYXRlUmVxdWVzdE9wdGlvbihyZXEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9yZGVyRW50aXR5W10+KHRoaXMucmVzb3VyY2VTZWFyY2hVcmwsIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwiIH0pLypwYXJhbXM6IG9wdGlvbnMsKi9cbiAgICAgICAgICAgIC5tYXAoKHJlczogSHR0cFJlc3BvbnNlPE9yZGVyRW50aXR5W10+KSA9PiB0aGlzLmNvbnZlcnRBcnJheVJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29udmVydFJlc3BvbnNlKHJlczogRW50aXR5UmVzcG9uc2VUeXBlKTogRW50aXR5UmVzcG9uc2VUeXBlIHtcbiAgICAgICAgY29uc3QgYm9keTogT3JkZXJFbnRpdHkgPSB0aGlzLmNvbnZlcnRJdGVtRnJvbVNlcnZlcihyZXMuYm9keSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcy5jbG9uZSh7Ym9keX0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29udmVydEFycmF5UmVzcG9uc2UocmVzOiBIdHRwUmVzcG9uc2U8T3JkZXJFbnRpdHlbXT4pOiBIdHRwUmVzcG9uc2U8T3JkZXJFbnRpdHlbXT4ge1xuICAgICAgICBjb25zdCBqc29uUmVzcG9uc2U6IE9yZGVyRW50aXR5W10gPSByZXMuYm9keTtcbiAgICAgICAgY29uc3QgYm9keTogT3JkZXJFbnRpdHlbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25SZXNwb25zZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keS5wdXNoKHRoaXMuY29udmVydEl0ZW1Gcm9tU2VydmVyKGpzb25SZXNwb25zZVtpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcy5jbG9uZSh7Ym9keX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSByZXR1cm5lZCBKU09OIG9iamVjdCB0byBPcmRlckVudGl0eS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNvbnZlcnRJdGVtRnJvbVNlcnZlcihvcmRlckVudGl0eTogT3JkZXJFbnRpdHkpOiBPcmRlckVudGl0eSB7XG4gICAgICAgIGNvbnN0IGNvcHk6IE9yZGVyRW50aXR5ID0gT2JqZWN0LmFzc2lnbih7fSwgb3JkZXJFbnRpdHkpO1xuICAgICAgICBjb3B5LmNyZWF0ZURhdGUgPSB0aGlzLmRhdGVIZWxwZXJTZXJ2aWNlXG4gICAgICAgIC5jb252ZXJ0TG9jYWxEYXRlRnJvbVNlcnZlcihvcmRlckVudGl0eS5jcmVhdGVEYXRlKTtcbiAgICAgICAgY29weS5wYXltZW50RGF0ZSA9IHRoaXMuZGF0ZUhlbHBlclNlcnZpY2VcbiAgICAgICAgLmNvbnZlcnRMb2NhbERhdGVGcm9tU2VydmVyKG9yZGVyRW50aXR5LnBheW1lbnREYXRlKTtcbiAgICAgICAgY29weS5kdWVEYXRlID0gdGhpcy5kYXRlSGVscGVyU2VydmljZVxuICAgICAgICAuY29udmVydExvY2FsRGF0ZUZyb21TZXJ2ZXIob3JkZXJFbnRpdHkuZHVlRGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIE9yZGVyRW50aXR5IHRvIGEgSlNPTiB3aGljaCBjYW4gYmUgc2VudCB0byB0aGUgc2VydmVyLlxuICAgICAqL1xuICAgIHByaXZhdGUgY29udmVydChvcmRlckVudGl0eTogT3JkZXJFbnRpdHkpOiBPcmRlckVudGl0eSB7XG4gICAgICAgIGNvbnN0IGNvcHk6IE9yZGVyRW50aXR5ID0gT2JqZWN0LmFzc2lnbih7fSwgb3JkZXJFbnRpdHkpO1xuICAgICAgICAvKmNvcHkuY3JlYXRlRGF0ZSA9IHRoaXMuZGF0ZUhlbHBlclNlcnZpY2VcbiAgICAgICAgLmNvbnZlcnRMb2NhbERhdGVUb1NlcnZlcihvcmRlckVudGl0eS5jcmVhdGVEYXRlKTtcbiAgICAgICAgY29weS5wYXltZW50RGF0ZSA9IHRoaXMuZGF0ZUhlbHBlclNlcnZpY2VcbiAgICAgICAgLmNvbnZlcnRMb2NhbERhdGVUb1NlcnZlcihvcmRlckVudGl0eS5wYXltZW50RGF0ZSk7XG4gICAgICAgIGNvcHkuZHVlRGF0ZSA9IHRoaXMuZGF0ZUhlbHBlclNlcnZpY2VcbiAgICAgICAgLmNvbnZlcnRMb2NhbERhdGVUb1NlcnZlcihvcmRlckVudGl0eS5kdWVEYXRlKTsqL1xuXG4gICAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cbn1cbiJdfQ==