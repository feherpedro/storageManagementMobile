"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var DateHelperService = /** @class */ (function () {
    function DateHelperService() {
        this.pattern = "yyyy-MM-dd";
        this.datePipe = new common_1.DatePipe("hu");
    }
    DateHelperService.prototype.convertDateTimeFromServer = function (date) {
        if (date) {
            return new Date(date);
        }
        else {
            return null;
        }
    };
    DateHelperService.prototype.convertLocalDateFromServer = function (date) {
        if (date) {
            var dateString = date.split("-");
            return new Date(dateString[0], dateString[1] - 1, dateString[2]);
        }
        return null;
    };
    DateHelperService.prototype.convertLocalDateToServer = function (date, pattern) {
        if (pattern === void 0) { pattern = this.pattern; }
        if (date) {
            var newDate = new Date(date.year, date.month - 1, date.day);
            return this.datePipe.transform(newDate, pattern);
        }
        else {
            return null;
        }
    };
    DateHelperService.prototype.dateformat = function () {
        return this.pattern;
    };
    DateHelperService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DateHelperService);
    return DateHelperService;
}());
exports.DateHelperService = DateHelperService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGUtaGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBMkM7QUFDM0Msc0NBQTJDO0FBRzNDO0lBTUk7UUFKUSxZQUFPLEdBQUcsWUFBWSxDQUFDO1FBSzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxxREFBeUIsR0FBekIsVUFBMEIsSUFBUztRQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRVAsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUVKLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFFRCxzREFBMEIsR0FBMUIsVUFBMkIsSUFBUztRQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1AsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELG9EQUF3QixHQUF4QixVQUF5QixJQUFTLEVBQUUsT0FBc0I7UUFBdEIsd0JBQUEsRUFBQSxVQUFVLElBQUksQ0FBQyxPQUFPO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUCxJQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU5RCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUVKLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQTVDUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTs7T0FDQSxpQkFBaUIsQ0E2QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRlSGVscGVyU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBwYXR0ZXJuID0gXCJ5eXl5LU1NLWRkXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlwZSA9IG5ldyBEYXRlUGlwZShcImh1XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnREYXRlVGltZUZyb21TZXJ2ZXIoZGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGRhdGUpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRMb2NhbERhdGVGcm9tU2VydmVyKGRhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChkYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXRlLnNwbGl0KFwiLVwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlU3RyaW5nWzBdLCBkYXRlU3RyaW5nWzFdIC0gMSwgZGF0ZVN0cmluZ1syXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0TG9jYWxEYXRlVG9TZXJ2ZXIoZGF0ZTogYW55LCBwYXR0ZXJuID0gdGhpcy5wYXR0ZXJuKSB7XHJcbiAgICAgICAgaWYgKGRhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShuZXdEYXRlLCBwYXR0ZXJuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGVmb3JtYXQoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdHRlcm47XHJcbiAgICB9XHJcbn1cclxuIl19