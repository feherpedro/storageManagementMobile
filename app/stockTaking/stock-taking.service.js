"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var StockTakingService = /** @class */ (function () {
    function StockTakingService(http) {
        this.http = http;
        this.resourceUrl = "http://192.168.0.102:8888/api/products";
        this.resourceSearchUrl = "http://192.168.56.1:8888/api/_search/products";
    }
    StockTakingService.prototype.create = function (product) {
        var _this = this;
        var copy = this.convert(product);
        return this.http.post(this.resourceUrl, copy, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    StockTakingService.prototype.update = function (product) {
        var _this = this;
        var copy = this.convert(product);
        return this.http.put(this.resourceUrl, copy, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    StockTakingService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + id, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    StockTakingService.prototype.query = function (req) {
        // const options = createRequestOption(req);
        var _this = this;
        return this.http.get(this.resourceUrl, { observe: "response" }) /* params: options,*/
            .map(function (res) { return _this.convertArrayResponse(res); });
    };
    StockTakingService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: "response" });
    };
    StockTakingService.prototype.search = function (req) {
        // const options = createRequestOption(req);
        var _this = this;
        return this.http.get(this.resourceSearchUrl, { observe: "response" }) /* params: options,*/
            .map(function (res) { return _this.convertArrayResponse(res); });
    };
    StockTakingService.prototype.convertResponse = function (res) {
        var body = this.convertItemFromServer(res.body);
        return res.clone({ body: body });
    };
    StockTakingService.prototype.convertArrayResponse = function (res) {
        var jsonResponse = res.body;
        var body = [];
        for (var i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({ body: body });
    };
    /**
     * Convert a returned JSON object to Product.
     */
    StockTakingService.prototype.convertItemFromServer = function (product) {
        var copy = Object.assign({}, product);
        return copy;
    };
    /**
     * Convert a Product to a JSON which can be sent to the server.
     */
    StockTakingService.prototype.convert = function (product) {
        var copy = Object.assign({}, product);
        return copy;
    };
    StockTakingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], StockTakingService);
    return StockTakingService;
}());
exports.StockTakingService = StockTakingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stdGFraW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdG9jay10YWtpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFnRTtBQUNoRSxzQ0FBMkM7QUFDM0MsaUNBQStCO0FBUy9CO0lBS0ksNEJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFINUIsZ0JBQVcsR0FBSSx3Q0FBd0MsQ0FBQztRQUN4RCxzQkFBaUIsR0FBRywrQ0FBK0MsQ0FBQztJQUVwQyxDQUFDO0lBRXpDLG1DQUFNLEdBQU4sVUFBTyxPQUFnQjtRQUF2QixpQkFLQztRQUpHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFVLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQzFFLEdBQUcsQ0FBQyxVQUFDLEdBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxPQUFnQjtRQUF2QixpQkFLQztRQUpHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQ3pFLEdBQUcsQ0FBQyxVQUFDLEdBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELGlDQUFJLEdBQUos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QUEvRUQsSUErRUM7QUEvRVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwifi9zY2FuL3Byb2R1Y3QubW9kZWxcIjtcblxuLy8gaW1wb3J0IHsgY3JlYXRlUmVxdWVzdE9wdGlvbiB9IGZyb20gXCIuLi8uLi9zaGFyZWRcIjtcblxuZXhwb3J0IHR5cGUgRW50aXR5UmVzcG9uc2VUeXBlID0gSHR0cFJlc3BvbnNlPFByb2R1Y3Q+O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvY2tUYWtpbmdTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcmVzb3VyY2VVcmwgPSAgXCJodHRwOi8vMTkyLjE2OC4wLjEwMjo4ODg4L2FwaS9wcm9kdWN0c1wiO1xuICAgIHByaXZhdGUgcmVzb3VyY2VTZWFyY2hVcmwgPSBcImh0dHA6Ly8xOTIuMTY4LjU2LjE6ODg4OC9hcGkvX3NlYXJjaC9wcm9kdWN0c1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIGNyZWF0ZShwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxFbnRpdHlSZXNwb25zZVR5cGU+IHtcbiAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29udmVydChwcm9kdWN0KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UHJvZHVjdD4odGhpcy5yZXNvdXJjZVVybCwgY29weSwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCIgfSlcbiAgICAgICAgICAgIC5tYXAoKHJlczogRW50aXR5UmVzcG9uc2VUeXBlKSA9PiB0aGlzLmNvbnZlcnRSZXNwb25zZShyZXMpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8RW50aXR5UmVzcG9uc2VUeXBlPiB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvbnZlcnQocHJvZHVjdCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8UHJvZHVjdD4odGhpcy5yZXNvdXJjZVVybCwgY29weSwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCIgfSlcbiAgICAgICAgICAgIC5tYXAoKHJlczogRW50aXR5UmVzcG9uc2VUeXBlKSA9PiB0aGlzLmNvbnZlcnRSZXNwb25zZShyZXMpKTtcbiAgICB9XG5cbiAgICBmaW5kKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEVudGl0eVJlc3BvbnNlVHlwZT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3Q+KGAke3RoaXMucmVzb3VyY2VVcmx9LyR7aWR9YCwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCJ9KVxuICAgICAgICAgICAgLm1hcCgocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIHF1ZXJ5KHJlcT86IGFueSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFByb2R1Y3RbXT4+IHtcbiAgICAgICAgLy8gY29uc3Qgb3B0aW9ucyA9IGNyZWF0ZVJlcXVlc3RPcHRpb24ocmVxKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQcm9kdWN0W10+KHRoaXMucmVzb3VyY2VVcmwsIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwiIH0pLyogcGFyYW1zOiBvcHRpb25zLCovXG4gICAgICAgICAgICAubWFwKChyZXM6IEh0dHBSZXNwb25zZTxQcm9kdWN0W10+KSA9PiB0aGlzLmNvbnZlcnRBcnJheVJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIGRlbGV0ZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtpZH1gLCB7IG9ic2VydmU6IFwicmVzcG9uc2VcIn0pO1xuICAgIH1cblxuICAgIHNlYXJjaChyZXE/OiBhbnkpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxQcm9kdWN0W10+PiB7XG4gICAgICAgIC8vIGNvbnN0IG9wdGlvbnMgPSBjcmVhdGVSZXF1ZXN0T3B0aW9uKHJlcSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvZHVjdFtdPih0aGlzLnJlc291cmNlU2VhcmNoVXJsLCB7IG9ic2VydmU6IFwicmVzcG9uc2VcIiB9KS8qIHBhcmFtczogb3B0aW9ucywqL1xuICAgICAgICAgICAgLm1hcCgocmVzOiBIdHRwUmVzcG9uc2U8UHJvZHVjdFtdPikgPT4gdGhpcy5jb252ZXJ0QXJyYXlSZXNwb25zZShyZXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnZlcnRSZXNwb25zZShyZXM6IEVudGl0eVJlc3BvbnNlVHlwZSk6IEVudGl0eVJlc3BvbnNlVHlwZSB7XG4gICAgICAgIGNvbnN0IGJvZHk6IFByb2R1Y3QgPSB0aGlzLmNvbnZlcnRJdGVtRnJvbVNlcnZlcihyZXMuYm9keSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcy5jbG9uZSh7Ym9keX0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29udmVydEFycmF5UmVzcG9uc2UocmVzOiBIdHRwUmVzcG9uc2U8UHJvZHVjdFtdPik6IEh0dHBSZXNwb25zZTxQcm9kdWN0W10+IHtcbiAgICAgICAgY29uc3QganNvblJlc3BvbnNlOiBQcm9kdWN0W10gPSByZXMuYm9keTtcbiAgICAgICAgY29uc3QgYm9keTogUHJvZHVjdFtdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvblJlc3BvbnNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5LnB1c2godGhpcy5jb252ZXJ0SXRlbUZyb21TZXJ2ZXIoanNvblJlc3BvbnNlW2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLmNsb25lKHtib2R5fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIHJldHVybmVkIEpTT04gb2JqZWN0IHRvIFByb2R1Y3QuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjb252ZXJ0SXRlbUZyb21TZXJ2ZXIocHJvZHVjdDogUHJvZHVjdCk6IFByb2R1Y3Qge1xuICAgICAgICBjb25zdCBjb3B5OiBQcm9kdWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvZHVjdCk7XG5cbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIFByb2R1Y3QgdG8gYSBKU09OIHdoaWNoIGNhbiBiZSBzZW50IHRvIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjb252ZXJ0KHByb2R1Y3Q6IFByb2R1Y3QpOiBQcm9kdWN0IHtcbiAgICAgICAgY29uc3QgY29weTogUHJvZHVjdCA9IE9iamVjdC5hc3NpZ24oe30sIHByb2R1Y3QpO1xuXG4gICAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cbn1cbiJdfQ==