"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.resourceUrl = "https://storage-management.herokuapp.com/api/products";
        this.resourceSearchUrl = "https://storage-management.herokuapp.com/api/_search/products";
    }
    ProductService.prototype.create = function (product) {
        var _this = this;
        var copy = this.convert(product);
        return this.http.post(this.resourceUrl, copy, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    ProductService.prototype.update = function (product) {
        var _this = this;
        var copy = this.convert(product);
        return this.http.put(this.resourceUrl, copy, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    ProductService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + id, { observe: "response" })
            .map(function (res) { return _this.convertResponse(res); });
    };
    ProductService.prototype.query = function (req) {
        // const options = createRequestOption(req);
        var _this = this;
        return this.http.get(this.resourceUrl, { observe: "response" }) /* params: options,*/
            .map(function (res) { return _this.convertArrayResponse(res); });
    };
    ProductService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: "response" });
    };
    ProductService.prototype.search = function (req) {
        // const options = createRequestOption(req);
        var _this = this;
        return this.http.get(this.resourceSearchUrl, { observe: "response" }) /* params: options,*/
            .map(function (res) { return _this.convertArrayResponse(res); });
    };
    ProductService.prototype.convertResponse = function (res) {
        var body = this.convertItemFromServer(res.body);
        return res.clone({ body: body });
    };
    ProductService.prototype.convertArrayResponse = function (res) {
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
    ProductService.prototype.convertItemFromServer = function (product) {
        var copy = Object.assign({}, product);
        return copy;
    };
    /**
     * Convert a Product to a JSON which can be sent to the server.
     */
    ProductService.prototype.convert = function (product) {
        var copy = Object.assign({}, product);
        return copy;
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWdFO0FBQ2hFLHNDQUEyQztBQUMzQyxpQ0FBK0I7QUFTL0I7SUFLSSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUg1QixnQkFBVyxHQUFJLHVEQUF1RCxDQUFDO1FBQ3ZFLHNCQUFpQixHQUFHLCtEQUErRCxDQUFDO0lBRXBELENBQUM7SUFFekMsK0JBQU0sR0FBTixVQUFPLE9BQWdCO1FBQXZCLGlCQUtDO1FBSkcsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDMUUsR0FBRyxDQUFDLFVBQUMsR0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLE9BQWdCO1FBQXZCLGlCQUtDO1FBSkcsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDekUsR0FBRyxDQUFDLFVBQUMsR0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLEVBQVU7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L0VZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi9wcm9kdWN0Lm1vZGVsXCI7XHJcbi8vIGltcG9ydCB7IGNyZWF0ZVJlcXVlc3RPcHRpb24gfSBmcm9tIFwiLi4vLi4vc2hhcmVkXCI7XHJcblxyXG5leHBvcnQgdHlwZSBFbnRpdHlSZXNwb25zZVR5cGUgPSBIdHRwUmVzcG9uc2U8UHJvZHVjdD47XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvdXJjZVVybCA9ICBcImh0dHBzOi8vc3RvcmFnZS1tYW5hZ2VtZW50Lmhlcm9rdWFwcC5jb20vYXBpL3Byb2R1Y3RzXCI7XHJcbiAgICBwcml2YXRlIHJlc291cmNlU2VhcmNoVXJsID0gXCJodHRwczovL3N0b3JhZ2UtbWFuYWdlbWVudC5oZXJva3VhcHAuY29tL2FwaS9fc2VhcmNoL3Byb2R1Y3RzXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgICBjcmVhdGUocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8RW50aXR5UmVzcG9uc2VUeXBlPiB7XHJcbiAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29udmVydChwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFByb2R1Y3Q+KHRoaXMucmVzb3VyY2VVcmwsIGNvcHksIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwiIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogRW50aXR5UmVzcG9uc2VUeXBlKSA9PiB0aGlzLmNvbnZlcnRSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8RW50aXR5UmVzcG9uc2VUeXBlPiB7XHJcbiAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29udmVydChwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8UHJvZHVjdD4odGhpcy5yZXNvdXJjZVVybCwgY29weSwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCIgfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8RW50aXR5UmVzcG9uc2VUeXBlPiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3Q+KGAke3RoaXMucmVzb3VyY2VVcmx9LyR7aWR9YCwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCJ9KVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IEVudGl0eVJlc3BvbnNlVHlwZSkgPT4gdGhpcy5jb252ZXJ0UmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVlcnkocmVxPzogYW55KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8UHJvZHVjdFtdPj4ge1xyXG4gICAgICAgIC8vIGNvbnN0IG9wdGlvbnMgPSBjcmVhdGVSZXF1ZXN0T3B0aW9uKHJlcSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3RbXT4odGhpcy5yZXNvdXJjZVVybCwgeyBvYnNlcnZlOiBcInJlc3BvbnNlXCIgfSkvKiBwYXJhbXM6IG9wdGlvbnMsKi9cclxuICAgICAgICAgICAgLm1hcCgocmVzOiBIdHRwUmVzcG9uc2U8UHJvZHVjdFtdPikgPT4gdGhpcy5jb252ZXJ0QXJyYXlSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLnJlc291cmNlVXJsfS8ke2lkfWAsIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwifSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKHJlcT86IGFueSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFByb2R1Y3RbXT4+IHtcclxuICAgICAgICAvLyBjb25zdCBvcHRpb25zID0gY3JlYXRlUmVxdWVzdE9wdGlvbihyZXEpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQcm9kdWN0W10+KHRoaXMucmVzb3VyY2VTZWFyY2hVcmwsIHsgb2JzZXJ2ZTogXCJyZXNwb25zZVwiIH0pLyogcGFyYW1zOiBvcHRpb25zLCovXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogSHR0cFJlc3BvbnNlPFByb2R1Y3RbXT4pID0+IHRoaXMuY29udmVydEFycmF5UmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb252ZXJ0UmVzcG9uc2UocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpOiBFbnRpdHlSZXNwb25zZVR5cGUge1xyXG4gICAgICAgIGNvbnN0IGJvZHk6IFByb2R1Y3QgPSB0aGlzLmNvbnZlcnRJdGVtRnJvbVNlcnZlcihyZXMuYm9keSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuY2xvbmUoe2JvZHl9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnZlcnRBcnJheVJlc3BvbnNlKHJlczogSHR0cFJlc3BvbnNlPFByb2R1Y3RbXT4pOiBIdHRwUmVzcG9uc2U8UHJvZHVjdFtdPiB7XHJcbiAgICAgICAgY29uc3QganNvblJlc3BvbnNlOiBQcm9kdWN0W10gPSByZXMuYm9keTtcclxuICAgICAgICBjb25zdCBib2R5OiBQcm9kdWN0W10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25SZXNwb25zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBib2R5LnB1c2godGhpcy5jb252ZXJ0SXRlbUZyb21TZXJ2ZXIoanNvblJlc3BvbnNlW2ldKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzLmNsb25lKHtib2R5fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgcmV0dXJuZWQgSlNPTiBvYmplY3QgdG8gUHJvZHVjdC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb252ZXJ0SXRlbUZyb21TZXJ2ZXIocHJvZHVjdDogUHJvZHVjdCk6IFByb2R1Y3Qge1xyXG4gICAgICAgIGNvbnN0IGNvcHk6IFByb2R1Y3QgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgUHJvZHVjdCB0byBhIEpTT04gd2hpY2ggY2FuIGJlIHNlbnQgdG8gdGhlIHNlcnZlci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb252ZXJ0KHByb2R1Y3Q6IFByb2R1Y3QpOiBQcm9kdWN0IHtcclxuICAgICAgICBjb25zdCBjb3B5OiBQcm9kdWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvZHVjdCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb3B5O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==