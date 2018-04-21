webpackJsonp([0],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(699);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoryPageModule = (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]),
            ],
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.BACLevels = [0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.002, 0.003, 0.004, 0.005, 0.006, 0.006, 0.007, 0.008, 0.008, 0.009, 0.010, 0.010, 0.011, 0.011, 0.012, 0.013, 0.013, 0.014, 0.014, 0.015, 0.015, 0.016, 0.016, 0.017, 0.017, 0.017, 0.018, 0.018, 0.019, 0.019, 0.019, 0.020, 0.020, 0.020, 0.021, 0.021, 0.021, 0.022, 0.022, 0.022, 0.022, 0.023, 0.023, 0.023, 0.023, 0.024, 0.024, 0.024, 0.024, 0.024, 0.024, 0.025, 0.025, 0.025, 0.025, 0.025, 0.025, 0.026, 0.026, 0.026, 0.026, 0.026, 0.026, 0.026, 0.026, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.034, 0.034, 0.034, 0.034, 0.034, 0.034, 0.034, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.036, 0.036, 0.036, 0.036, 0.036, 0.036, 0.037, 0.037, 0.037, 0.037, 0.037, 0.037, 0.037, 0.038, 0.038, 0.038, 0.038, 0.038, 0.038, 0.039, 0.039, 0.039, 0.039, 0.039, 0.039, 0.040, 0.040, 0.040, 0.040, 0.040, 0.040, 0.041, 0.041, 0.041, 0.041, 0.041, 0.041, 0.042, 0.042, 0.042, 0.042, 0.042, 0.043, 0.043, 0.043, 0.043, 0.043, 0.043, 0.044, 0.044, 0.044, 0.044, 0.044, 0.044, 0.045, 0.045, 0.045, 0.045, 0.045, 0.046, 0.046, 0.046, 0.046, 0.046, 0.046, 0.047, 0.047, 0.047, 0.047, 0.047, 0.048, 0.048, 0.048, 0.048, 0.048, 0.048, 0.049, 0.049, 0.049, 0.049, 0.049, 0.050, 0.050, 0.050, 0.050, 0.050, 0.050, 0.051, 0.051, 0.051, 0.051, 0.051, 0.052, 0.052, 0.052, 0.052, 0.052, 0.052, 0.053, 0.053, 0.053, 0.053, 0.053, 0.054, 0.054, 0.054, 0.054, 0.054, 0.054, 0.055, 0.055, 0.055, 0.055, 0.055, 0.056, 0.056, 0.056, 0.056, 0.056, 0.057, 0.057, 0.057, 0.057, 0.058, 0.058, 0.058, 0.058, 0.058, 0.059, 0.059, 0.059, 0.059, 0.060, 0.060, 0.060, 0.060, 0.061, 0.061, 0.061, 0.061, 0.062, 0.062, 0.062, 0.062, 0.063, 0.063, 0.063, 0.064, 0.064, 0.064, 0.064, 0.065, 0.065, 0.065, 0.066, 0.066, 0.066, 0.067, 0.067, 0.067, 0.068, 0.068, 0.069, 0.069, 0.069, 0.070, 0.070, 0.071, 0.071, 0.071, 0.072, 0.072, 0.073, 0.073, 0.074, 0.074, 0.075, 0.075, 0.076, 0.076, 0.077, 0.077, 0.078, 0.078, 0.079, 0.080, 0.080, 0.081, 0.081, 0.082, 0.083, 0.083, 0.084, 0.085, 0.085, 0.086, 0.087, 0.088, 0.088, 0.089, 0.090, 0.091, 0.092, 0.093, 0.093, 0.094, 0.095, 0.096, 0.097, 0.098, 0.099, 0.100, 0.101, 0.102, 0.103, 0.104, 0.105, 0.106, 0.107, 0.109, 0.110, 0.111, 0.112, 0.113, 0.115, 0.116, 0.117, 0.119, 0.120, 0.121, 0.123, 0.124, 0.126, 0.127, 0.129, 0.130, 0.132, 0.134, 0.135, 0.137, 0.139, 0.140, 0.142, 0.144, 0.146, 0.148, 0.150, 0.151, 0.153, 0.155, 0.157, 0.160, 0.162, 0.164, 0.166, 0.168, 0.170, 0.173, 0.175, 0.177, 0.180, 0.182, 0.185, 0.187, 0.190, 0.193, 0.195, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250];
        this.data = [
            {
                date: '21/04/2018',
                voltage: '',
                plevel: '',
            }
        ];
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        this.allowedPromilleLevel = 0.4;
        __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"].pluginService.register({
            afterDraw: function (chart) {
                var pixelValue = getMax();
                if (typeof chart.config.options.lineAt != 'undefined') {
                    var lineAt = chart.config.options.lineAt;
                    var ctxPlugin = chart.chart.ctx;
                    var xAxe = chart.scales[chart.config.options.scales.xAxes[0].id];
                    var yAxe = chart.scales[chart.config.options.scales.yAxes[0].id];
                    // I'm not good at maths
                    // So I couldn't find a way to make it work ...
                    // ... without having the `min` property set to 0
                    if (yAxe.min != 0)
                        return;
                    ctxPlugin.strokeStyle = "red";
                    ctxPlugin.beginPath();
                    var position = yAxe.getPixelForValue(pixelValue);
                    ctxPlugin.moveTo(xAxe.left, position);
                    ctxPlugin.lineTo(xAxe.right, position);
                    ctxPlugin.stroke();
                }
            }
        });
        __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"].defaults.global.legend.display = false;
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {});
        this.voltage = Math.floor(Math.random() * 1023);
        this.promilleLevel = +(this.BACLevels[this.voltage] * 10).toFixed(2);
        this.allowedPromilleLevel = 0.4; //placeholder
        this.newChart(this.promilleLevel, this.allowedPromilleLevel);
    };
    HistoryPage.prototype.Random = function () {
        this.voltage = Math.floor(Math.random() * 1023);
        this.promilleLevel = +(this.BACLevels[this.voltage] * 10).toFixed(2);
        this.allowedPromilleLevel = 0.4; //placeholder
        this.newChart(this.promilleLevel, this.allowedPromilleLevel);
    };
    HistoryPage.prototype.newChart = function (newPromilleLevel, maxpromille) {
        var maxTick;
        if (newPromilleLevel > maxpromille) {
            this.barColor = 'rgba(255, 5, 5, 1)';
        }
        if (newPromilleLevel == maxpromille) {
            this.barColor = 'rgba(255, 113, 25, 1)';
        }
        if (newPromilleLevel < maxpromille) {
            this.barColor = 'rgba(52, 255, 25, 1)';
        }
        if (newPromilleLevel < 0.5) {
            maxTick = 0.6;
        }
        else if (newPromilleLevel < 0.9) {
            maxTick = 1;
        }
        else if (newPromilleLevel < 1.4) {
            maxTick = 1.5;
        }
        else {
            maxTick = 2;
        }
        this.barChart.destroy();
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                label: "Your Result",
                datasets: [{
                        label: 'Your Color',
                        data: [newPromilleLevel],
                        backgroundColor: [
                            this.barColor,
                        ],
                        borderColor: [
                            this.barColor,
                        ],
                        borderWidth: 1,
                    }]
            },
            options: {
                lineAt: 14,
                scales: {
                    yAxes: [{
                            ticks: {
                                min: 0,
                                max: maxTick
                            }
                        }],
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HistoryPage.prototype, "barCanvas", void 0);
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\history\history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>history</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding text-center>\n  \n    <ion-card>\n      <ion-card-header>\n        Your alchohol test\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barCanvas></canvas> \n        <!--<p style="font-weight: bold; font-size: 20px;">Warning! You are in no condition to drive. Use another means of transportation. You might want to consider drinking less.</p>\n        <p>Your Promile level is 2, you need to wait 13,5 hours before driving </p> -->\n        <p>Voltage: {{voltage}}</p>\n        <p>Promille: {{promilleLevel}}</p>\n        <button ion-button (click)="Random()"> Test </button>\n  \n      </ion-card-content>\n      \n      \n    </ion-card>\n    <google></google>\n  </ion-content>'/*ion-inline-end:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], HistoryPage);
    return HistoryPage;
    var _a, _b;
}());

function getMax() {
    return 0.4;
}
//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=0.js.map