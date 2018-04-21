webpackJsonp([1],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GoResult = __WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */];
    }
    AboutPage.prototype.Load = function () {
        this.loadingCtrl.create({
            //spinner: "true",
            content: "Please wait for your result",
            duration: 3000,
            dismissOnPageChange: true
            //dismissOnPageChange: true
        }).present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\about\about.html"*/'<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n  <ion-content padding>\n\n    <ion-card>\n\n        <img src="https://images.unsplash.com/photo-1474500257816-6f941168c7e7?ixlib=rb-0.3.5&s=15cfd4b2ed2bf9afeead872f17e39749&auto=format&fit=crop&w=1050&q=80"/>\n\n    </ion-card>\n\n    \n\n    \n\n  <button [navPush]="rs" ion-button full>Tutorial</button>\n\n  <button (click)="Load()" [navPush]="GoResult" ion-button full>Start Test</button>\n\n  \n\n\n\n</ion-content>\n\n\n\n<call-for-help>\n\n</call-for-help>\n\n'/*ion-inline-end:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geocode_geocode__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__ = __webpack_require__(128);
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
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * GEOLOCATION API KEY:AIzaSyBpIJHzo06e1bzOQS-FCmz75r9xmD5z-NY
 */
var ResultPage = (function () {
    function ResultPage(navCtrl, navParams, geo, platform, geocodeProvider, androidPermissions) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geo = geo;
        this.platform = platform;
        this.geocodeProvider = geocodeProvider;
        this.androidPermissions = androidPermissions;
        this.array = [["Afghanistan", 0], ["Albania", 0.05], ["Algeria", 0.02], ["American Samoa", 0.08], ["Angola", 0.06], ["Anguilla", 0.8], ["Antigua and Barbuda", 0.8], ["Argentina", 0.05], ["Armenia", 0.04], ["Aruba", 0.05], ["Australia", 0.05], ["Austria", 0.05], ["Azerbaijan", 0], ["Bahamas", 0.08], ["Bahrain", 0], ["Bangladesh", 0], ["Barbados", 0.08], ["Belarus", 0.03], ["Belgium", 0.05], ["Belize", 0.08], ["Benin", 0.05], ["Bermuda", 0.08], ["Bhutan", 0.08], ["Bolivia", 0.8], ["Bosnia and Herzegovina", 0.03], ["Botswana", 0.08], ["Bouvet Island", 0.02], ["Brazil", 0.02], ["British Virgin Islands", 0.08], ["Brunei", 0.08], ["Bulgaria", 0.05], ["Burkina Faso", 0.8], ["Burma (Myanmar)", 0.9], ["Burundi", 0.8], ["Cambodia", 0.05], ["Cameroon", 0.08], ["Canada", 0.05], ["Cape Verde", 0.08], ["Cayman Islands", 0.1], ["Chad", 0.05], ["Chile", 0.03], ["China", 0.02], ["Christmas Island", 0.05], ["Cocos (Keeling) Islands", 0.05], ["Colombia", 0.04], ["Comoros", 0], ["Cook Islands", 0.08], ["Costa Rica", 0.05], ["Cote d'Ivoire", 0.08], ["Croatia", 0.05], ["Cuba", 0.05], ["Cyprus", 0.05], ["Czech Republic", 0], ["Democratic Republic of Congo", 0.01], ["Denmark", 0.05], ["Djibouti", 0.9], ["Dominican Republic", 0.05], ["East Timor", 0.05], ["Ecuador", 0.03], ["Egypt", 0.05], ["El Salvador", 0.05], ["England", 0.08], ["Equatorial Guinea", 0.15], ["Eritrea", 0.05], ["Estonia", 0.02], ["Ethiopia", 0.08], ["Falkland Islands", 0.08], ["Faroe Islands", 0.05], ["Fiji", 0.08], ["Finland", 0.05], ["France", 0.05], ["French Guiana", 0.05], ["French Polynesia", 0.05], ["Gabon", 0.08], ["Gambia", 0.8], ["Georgia", 0.02], ["Germany", 0.05], ["Ghana", 0.08], ["Gibraltar", 0.05], ["Greece", 0.05], ["Greenland", 0.05], ["Grenada", 0.8], ["Guadeloupe", 0.05], ["Guam", 0.08], ["Guatemala", 0.8], ["Guernsey", 0.08], ["Guinea", 0.08], ["Guinea-Bissau", 0.15], ["Guyana", 0.08], ["Haiti", 0.9], ["Holland", 0.05], ["Honduras", 0.07], ["Hong Kong", 0.05], ["Hungary", 0], ["Iceland", 0.05], ["India", 0.03], ["Indonesia", 0], ["Iran", 0], ["Iraq", 0.08], ["Ireland", 0.05], ["Isle of Man", 0.08], ["Israel", 0.05], ["Italy", 0.05], ["Jamaica", 0.08], ["Japan", 0.03], ["Jersey", 0.08], ["Jordan", 0.05], ["Kazakhstan", 0], ["Kenya", 0.8], ["Kiribati", 0.08], ["Kosovo", 0.05], ["Kuwait", 0], ["Kyrgyzstan", 0.05], ["Laos", 0.08], ["Latvia", 0.05], ["Lebanon", 0.08], ["Lesotho", 0.08], ["Liberia", 0.05], ["Libya", 0], ["Liechtenstein", 0.08], ["Lithuania", 0.04], ["Luxembourg", 0.05], ["Macau", 0.05], ["Macedonia", 0.05], ["Madagascar", 0.08], ["Malawi", 0.08], ["Malaysia", 0.08], ["Maldives", 0], ["Mali", 0.03], ["Malta", 0.08], ["Manitoba", 0.05], ["Mariana Islands", 0.08], ["Marshall Islands", 0.8], ["Martinique", 0.05], ["Mauritania", 0], ["Mauritius", 0.05], ["Mayotte", 0.05], ["Mexico", 0.08], ["Micronesia", 0.05], ["Midway Islands", 0.08], ["Moldova", 0.03], ["Monaco", 0.05], ["Mongolia", 0.05], ["Montenegro", 0.05], ["Montserrat", 0.08], ["Morocco", 0.06], ["Mozambique", 0.06], ["Namibia", 0.08], ["Nauru", 0.9], ["Navassa Island", 0.08], ["Nepal", 0], ["Netherlands", 0.05], ["Netherlands Antilles", 0.05], ["New Caledonia", 0.05], ["New Zealand", 0.05], ["Nicaragua", 0.05], ["Niger", 0.08], ["Nigeria", 0.05], ["Niue", 0.08], ["Norfolk Island", 0.05], ["North Korea", 0.05], ["Norway", 0.02], ["Oman", 0.08], ["Pakistan", 0], ["Palau", 0.1], ["Panama", 0], ["Papua New Guinea", 0.08], ["Paraguay", 0.08], ["Peru", 0.05], ["Philippines", 0.05], ["Pitcairn Islands", 0.08], ["Poland", 0.02], ["Portugal", 0.05], ["Puerto Rico", 0.08], ["Qatar", 0], ["Reunion", 0.05], ["Romania", 0], ["Russia", 0], ["Rwanda", 0.08], ["Saint Barthelemy", 0.05], ["Saint Helena", 0.08], ["Saint Kitts and Nevis", 0.08], ["Saint Lucia", 0.08], ["Saint Martin", 0.05], ["Saint Pierre and Miquelon", 0.05], ["Saint Vincent", 0.08], ["Samoa", 0.04], ["San Marino", 0.05], ["SÃ£o TomÃ© and PrÃ­ncipe", 0.05], ["Saudi Arabia", 0], ["Scotland", 0.05], ["Senegal", 0], ["Serbia", 0.03], ["Seychelles", 0.08], ["Sierra Leone", 0.08], ["Singapore", 0.08], ["Slovakia", 0], ["Slovenia", 0.05], ["Solomon Islands", 0.05], ["Somalia", 0.8], ["South Africa", 0.05], ["South Georgia and the South Sandwich Islands", 0.08], ["South Korea", 0.05], ["Spain", 0.05], ["Sri Lanka", 0.08], ["Sudan", 0], ["Suriname", 0.05], ["Swaziland", 0.05], ["Sweden", 0.02], ["Switzerland", 0.05], ["Syria", 0.05], ["Taiwan", 0.05], ["Tajikistan", 0.03], ["Tanzania", 0.08], ["Thailand", 0.05], ["The Congo", 0.8], ["Togo", 0.8], ["Tokelau", 0.08], ["Tonga", 0.03], ["Trinidad and Tobago", 0.08], ["Tunisia", 0.05], ["Turkey", 0.05], ["Turkmenistan", 0], ["Turks and Caicos", 0.08], ["Tuvalu", 0.08], ["Uganda", 0.08], ["Ukraine", 0.02], ["United Arab Emirates", 0], ["United States", 0.08], ["Uruguay", 0.03], ["Uzbekistan", 0], ["Vanuatu", 0.8], ["Venezuela", 0.08], ["Vietnam", 0], ["Virgin Islands", 0.08], ["Wallis and Futuna", 0.05], ["Yemen", 0], ["Yugoslavia", 0.05], ["Zambia", 0.08], ["Zimbabwe", 0.08]];
        this.options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 3600
        };
        this.BACLevels = [0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.002, 0.003, 0.004, 0.005, 0.006, 0.006, 0.007, 0.008, 0.008, 0.009, 0.010, 0.010, 0.011, 0.011, 0.012, 0.013, 0.013, 0.014, 0.014, 0.015, 0.015, 0.016, 0.016, 0.017, 0.017, 0.017, 0.018, 0.018, 0.019, 0.019, 0.019, 0.020, 0.020, 0.020, 0.021, 0.021, 0.021, 0.022, 0.022, 0.022, 0.022, 0.023, 0.023, 0.023, 0.023, 0.024, 0.024, 0.024, 0.024, 0.024, 0.024, 0.025, 0.025, 0.025, 0.025, 0.025, 0.025, 0.026, 0.026, 0.026, 0.026, 0.026, 0.026, 0.026, 0.026, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.034, 0.034, 0.034, 0.034, 0.034, 0.034, 0.034, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.036, 0.036, 0.036, 0.036, 0.036, 0.036, 0.037, 0.037, 0.037, 0.037, 0.037, 0.037, 0.037, 0.038, 0.038, 0.038, 0.038, 0.038, 0.038, 0.039, 0.039, 0.039, 0.039, 0.039, 0.039, 0.040, 0.040, 0.040, 0.040, 0.040, 0.040, 0.041, 0.041, 0.041, 0.041, 0.041, 0.041, 0.042, 0.042, 0.042, 0.042, 0.042, 0.043, 0.043, 0.043, 0.043, 0.043, 0.043, 0.044, 0.044, 0.044, 0.044, 0.044, 0.044, 0.045, 0.045, 0.045, 0.045, 0.045, 0.046, 0.046, 0.046, 0.046, 0.046, 0.046, 0.047, 0.047, 0.047, 0.047, 0.047, 0.048, 0.048, 0.048, 0.048, 0.048, 0.048, 0.049, 0.049, 0.049, 0.049, 0.049, 0.050, 0.050, 0.050, 0.050, 0.050, 0.050, 0.051, 0.051, 0.051, 0.051, 0.051, 0.052, 0.052, 0.052, 0.052, 0.052, 0.052, 0.053, 0.053, 0.053, 0.053, 0.053, 0.054, 0.054, 0.054, 0.054, 0.054, 0.054, 0.055, 0.055, 0.055, 0.055, 0.055, 0.056, 0.056, 0.056, 0.056, 0.056, 0.057, 0.057, 0.057, 0.057, 0.058, 0.058, 0.058, 0.058, 0.058, 0.059, 0.059, 0.059, 0.059, 0.060, 0.060, 0.060, 0.060, 0.061, 0.061, 0.061, 0.061, 0.062, 0.062, 0.062, 0.062, 0.063, 0.063, 0.063, 0.064, 0.064, 0.064, 0.064, 0.065, 0.065, 0.065, 0.066, 0.066, 0.066, 0.067, 0.067, 0.067, 0.068, 0.068, 0.069, 0.069, 0.069, 0.070, 0.070, 0.071, 0.071, 0.071, 0.072, 0.072, 0.073, 0.073, 0.074, 0.074, 0.075, 0.075, 0.076, 0.076, 0.077, 0.077, 0.078, 0.078, 0.079, 0.080, 0.080, 0.081, 0.081, 0.082, 0.083, 0.083, 0.084, 0.085, 0.085, 0.086, 0.087, 0.088, 0.088, 0.089, 0.090, 0.091, 0.092, 0.093, 0.093, 0.094, 0.095, 0.096, 0.097, 0.098, 0.099, 0.100, 0.101, 0.102, 0.103, 0.104, 0.105, 0.106, 0.107, 0.109, 0.110, 0.111, 0.112, 0.113, 0.115, 0.116, 0.117, 0.119, 0.120, 0.121, 0.123, 0.124, 0.126, 0.127, 0.129, 0.130, 0.132, 0.134, 0.135, 0.137, 0.139, 0.140, 0.142, 0.144, 0.146, 0.148, 0.150, 0.151, 0.153, 0.155, 0.157, 0.160, 0.162, 0.164, 0.166, 0.168, 0.170, 0.173, 0.175, 0.177, 0.180, 0.182, 0.185, 0.187, 0.190, 0.193, 0.195, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250];
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(function (result) { return console.log('Has permission? ACCESS_FINE_LOCATION', result.hasPermission); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION); });
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_LOCATION_EXTRA_COMMANDS).then(function (result) { return console.log('Has permission? ACCESS_LOCATION_EXTRA_COMMANDS', result.hasPermission); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_LOCATION_EXTRA_COMMANDS); });
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) { return console.log('Has permission? ACCESS_COARSE_LOCATION', result.hasPermission); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION); });
        this.platform.ready().then(function () {
            console.log("Device Ready");
            _this.androidPermissions.requestPermissions([_this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION, _this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION, _this.androidPermissions.PERMISSION.ACCESS_LOCATION_EXTRA_COMMANDS]);
            _this.geo.getCurrentPosition(_this.options).then(function (resp) {
                console.log(resp.coords.latitude);
                console.log(resp.coords.longitude);
                _this.getCountry(resp.coords.latitude, resp.coords.longitude);
            }).catch(function (err) {
                console.log(err);
            });
        });
    }
    ResultPage.prototype.getCountry = function (lat, long) {
        var _this = this;
        this.geocodeProvider.getCountry(lat, long).subscribe(function (result) { return _this.country = _this.getName(result); });
    };
    ResultPage.prototype.getName = function (JSON) {
        var location = JSON.results[0].address_components[0].long_name;
        /* var i;
         for(i =0;i<this.array.length;i++){
             if(this.array[i][0] == location){
               this.maxPro = this.array[i][1];
             }
         }*/
        return JSON.results[0].address_components[0].long_name;
    };
    ResultPage.prototype.ionViewDidLoad = function () {
        this.allowedPromilleLevel = 0.4;
        __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"].plugins.register({
            afterDraw: function (chart) {
                var pixelValue = 0.4;
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
        __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"].defaults.global.legend.display = false;
        this.barChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](this.barCanvas.nativeElement, {});
        this.voltage = Math.floor(Math.random() * 1023);
        this.promilleLevel = +(this.BACLevels[this.voltage] * 10).toFixed(2);
        this.allowedPromilleLevel = 0.4; //placeholder
        this.newChart(this.promilleLevel, this.allowedPromilleLevel);
    };
    ResultPage.prototype.Random = function () {
        this.voltage = Math.floor(Math.random() * 1023);
        this.promilleLevel = +(this.BACLevels[this.voltage] * 10).toFixed(2);
        this.allowedPromilleLevel = 0.4; //placeholder
        this.newChart(this.promilleLevel, this.allowedPromilleLevel);
    };
    ResultPage.prototype.newChart = function (newPromilleLevel, maxpromille) {
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
        this.barChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](this.barCanvas.nativeElement, {
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ResultPage.prototype, "barCanvas", void 0);
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\result\result.html"*/'<!--\n\n  Generated template for the ResultPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-center>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Your alchohol test\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barCanvas></canvas> \n\n      <!--<p style="font-weight: bold; font-size: 20px;">Warning! You are in no condition to drive. Use another means of transportation. You might want to consider drinking less.</p>\n\n      <p>Your Promile level is 2, you need to wait 13,5 hours before driving </p> -->\n\n      <p>Voltage: {{voltage}}</p>\n\n      <p>Promille: {{promilleLevel}}</p>\n\n      <p>Country: {{country}}</p>\n\n      <!--<p>max Pro: {{maxPro}}</p>-->\n\n      <button ion-button (click)="Random()"> Test </button>\n\n\n\n    </ion-card-content>\n\n    \n\n    \n\n  </ion-card>\n\n  <google></google>\n\n</ion-content>\n\n<call-for-help>\n\n</call-for-help>\n\n\n\n'/*ion-inline-end:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\result\result.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_geocode_geocode__["a" /* GeocodeProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_geocode_geocode__["a" /* GeocodeProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__["a" /* AndroidPermissions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__["a" /* AndroidPermissions */]) === "function" && _f || Object])
    ], ResultPage);
    return ResultPage;
    var _a, _b, _c, _d, _e, _f;
}());

function getMax() {
}
//# sourceMappingURL=result.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/result/result.module": [
		699,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 220;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocodeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GeocodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeocodeProvider = (function () {
    function GeocodeProvider(http) {
        this.http = http;
        this.APIUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
        this.APIKey = 'AIzaSyBpIJHzo06e1bzOQS-FCmz75r9xmD5z-NY';
        console.log('Hello GeocodeProvider Provider');
    }
    GeocodeProvider.prototype.getCountry = function (lat, long) {
        return this.http.get(this.APIUrl + 'latlng=' + lat + ',' + long + '&result_type=country&key=' + this.APIKey + '&language=en');
    };
    GeocodeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GeocodeProvider);
    return GeocodeProvider;
}());

//# sourceMappingURL=geocode.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_firebase_firebase__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(nav, firebaseProvider, auth) {
        this.nav = nav;
        this.firebaseProvider = firebaseProvider;
        this.auth = auth;
        this.rs = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        //rs = RegisterPage;
        this.ct = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        if (this.userId) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
        }
    }
    HomePage.prototype.ionViewDidLoad = function () {
        if (__WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser != null) {
            this.userId = __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid;
        }
    };
    HomePage.prototype.login = function () {
        console.log(this.user, this.pass);
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().signInWithEmailAndPassword(this.user, this.pass).then(function (response) {
            console.log(__WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser);
        })
            .catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
        if (__WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser != null) {
            this.userId = __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid;
        }
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.gLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"].GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().signInWithRedirect(provider);
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().getRedirectResult().then(function (result) {
            if (result.credential) {
                var token = result.credential.accessToken;
                alert("Logged in with google!");
            }
            var user = result.user;
        }).catch(function (error) {
            var errorMessage = error.message;
            alert("connection with google failed");
        });
    };
    HomePage.prototype.fbLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"].FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().signInWithPopup(provider).then(function (result) {
            alert("fbLog worked");
            var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function (error) {
            var errorMessage = error.message;
            alert("connection with facebook failed");
        });
    };
    HomePage.prototype.navRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\home\home.html"*/'<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-input required type="email" [(ngModel)]="user" placeholder="E-mail"></ion-input>\n\n    <ion-input required type="password" [(ngModel)]="pass" placeholder="Password Input"></ion-input>\n\n    <button ion-button full (click)="login()">Login</button>\n\n    <!--\n\n        <button ion-button full (click)="fbLogin()">facebook</button>\n\n        <button ion-button full (click)="gLogin()">Google+</button>\n\n    -->\n\n    <button ion-button full class="content" [navPush]="rs">Register</button>\n\n    <!--\n\n    <button ion-button full class="content" [navPush]="ct">Ga verder zonder registratie</button>\n\n    -->\n\n  </ion-content>\n\n  \n\n  <call-for-help>\n\n  </call-for-help>\n\n\n\n\n\n'/*ion-inline-end:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(221);
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



var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["DangerZone", "Blue", "Yellow", "SafeZone", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ContactPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], ContactPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], ContactPage.prototype, "lineCanvas", void 0);
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\contact\contact.html"*/'<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n \n\n  <ion-card>\n\n    <ion-card-header>\n\n      Bar Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Doughnut Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #doughnutCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <call-for-help>\n\n  </call-for-help>\n\n\n\n'/*ion-inline-end:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(68);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.mail = "";
        this.pass = "";
        this.height = 50;
    }
    RegisterPage.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signOut();
            }
        });
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().createUserWithEmailAndPassword(this.mail, this.pass).then(function (response) {
            var userID = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.uid;
            var date = _this.birthDate;
            var datestring = date.replace(/-/g, "");
            var year = datestring.substr(0, 4);
            var month = datestring.substr(4, 2);
            var day = datestring.substr(6, 2);
            _this.firebaseProvider.addUser(userID, day, month, year, _this.gender, _this.firstName, _this.lastName, _this.mail, ".");
            console.log("email");
            console.log(_this.mail);
            console.log("pass");
            console.log(_this.pass);
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(_this.mail, _this.pass).then(function (response) {
                console.log("nextPage worked!");
                console.log(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser);
            })
                .catch(function (error) {
                var errorMessage = error.message;
                alert(errorMessage);
            });
        })
            .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    };
    RegisterPage.prototype.log = function () {
        var date = this.birthDate;
        var datestring = date.replace(/-/g, "");
        var year = datestring.substr(0, 4);
        var month = datestring.substr(4, 2);
        var day = datestring.substr(6, 2);
        console.log("Year: " + year + " Month: " + month + " Day: " + day);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\register\register.html"*/'<ion-header>\n\n  <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n      <ion-label color="primary" stacked>E-mail</ion-label>\n\n      <ion-input [(ngModel)]="mail" type="email" placeholder="E-mail"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Password</ion-label>\n\n      <ion-input [(ngModel)]="pass" type="password" placeholder="Password"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>First Name</ion-label>\n\n      <ion-input [(ngModel)]="firstName" type="text" placeholder="First name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Last Name</ion-label>\n\n      <ion-input [(ngModel)]="lastName" type="text" placeholder="Last name"></ion-input>\n\n    </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Birth date</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="birthDate" placeholder="day/month/year" pickerFormat="DD MMMM YYYY"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item>\n\n      <ion-label color="primary" stacked>Gender</ion-label>\n\n      <ion-select placeholder="Choose your gender" [(ngModel)]="gender">\n\n        <ion-option value="Female">Female</ion-option>\n\n        <ion-option value="Male">Male</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n      <button ion-button full (click)="register()">Register</button>\n\n      <button ion-button full (click)="log()">log</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = (function () {
    function AuthProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.userId = user.uid;
            }
        });
    }
    AuthProvider.prototype.checkIfLoggedIn = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid != null) {
            this.logged = true;
            return true;
        }
        else {
            this.logged = false;
            return false;
        }
    };
    AuthProvider.prototype.getCurrentUserId = function () {
        if (this.checkIfLoggedIn()) {
            this.userId = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
            return __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
        }
    };
    AuthProvider.prototype.logOut = function () {
        if (this.checkIfLoggedIn()) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut();
        }
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(478);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_custom_navbar_custom_navbar__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_call_for_help_call_for_help__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_firebase_firebase__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_android_permissions__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_settings_settings__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_result_result__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_google_google__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_auth__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_call_number__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_geocode_geocode__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var config = {
    apiKey: "AIzaSyDp_N4w_BjClGfW9ZNmMOy3PZQL28WLTyI",
    authDomain: "alcometer-abfbf.firebaseapp.com",
    databaseURL: "https://alcometer-abfbf.firebaseio.com",
    projectId: "alcometer-abfbf",
    storageBucket: "alcometer-abfbf.appspot.com",
    messagingSenderId: "1031304897035"
};
__WEBPACK_IMPORTED_MODULE_7_firebase_app__["initializeApp"](config);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_23__components_google_google__["a" /* GoogleComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__components_custom_navbar_custom_navbar__["a" /* CustomNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_call_for_help_call_for_help__["a" /* CallForHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_firebase_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_26__providers_geocode_geocode__["a" /* GeocodeProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_android_permissions__["a" /* AndroidPermissions */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 228,
	"./af.js": 228,
	"./ar": 229,
	"./ar-dz": 230,
	"./ar-dz.js": 230,
	"./ar-kw": 231,
	"./ar-kw.js": 231,
	"./ar-ly": 232,
	"./ar-ly.js": 232,
	"./ar-ma": 233,
	"./ar-ma.js": 233,
	"./ar-sa": 234,
	"./ar-sa.js": 234,
	"./ar-tn": 235,
	"./ar-tn.js": 235,
	"./ar.js": 229,
	"./az": 236,
	"./az.js": 236,
	"./be": 237,
	"./be.js": 237,
	"./bg": 238,
	"./bg.js": 238,
	"./bm": 239,
	"./bm.js": 239,
	"./bn": 240,
	"./bn.js": 240,
	"./bo": 241,
	"./bo.js": 241,
	"./br": 242,
	"./br.js": 242,
	"./bs": 243,
	"./bs.js": 243,
	"./ca": 244,
	"./ca.js": 244,
	"./cs": 245,
	"./cs.js": 245,
	"./cv": 246,
	"./cv.js": 246,
	"./cy": 247,
	"./cy.js": 247,
	"./da": 248,
	"./da.js": 248,
	"./de": 249,
	"./de-at": 250,
	"./de-at.js": 250,
	"./de-ch": 251,
	"./de-ch.js": 251,
	"./de.js": 249,
	"./dv": 252,
	"./dv.js": 252,
	"./el": 253,
	"./el.js": 253,
	"./en-au": 254,
	"./en-au.js": 254,
	"./en-ca": 255,
	"./en-ca.js": 255,
	"./en-gb": 256,
	"./en-gb.js": 256,
	"./en-ie": 257,
	"./en-ie.js": 257,
	"./en-il": 258,
	"./en-il.js": 258,
	"./en-nz": 259,
	"./en-nz.js": 259,
	"./eo": 260,
	"./eo.js": 260,
	"./es": 261,
	"./es-do": 262,
	"./es-do.js": 262,
	"./es-us": 263,
	"./es-us.js": 263,
	"./es.js": 261,
	"./et": 264,
	"./et.js": 264,
	"./eu": 265,
	"./eu.js": 265,
	"./fa": 266,
	"./fa.js": 266,
	"./fi": 267,
	"./fi.js": 267,
	"./fo": 268,
	"./fo.js": 268,
	"./fr": 269,
	"./fr-ca": 270,
	"./fr-ca.js": 270,
	"./fr-ch": 271,
	"./fr-ch.js": 271,
	"./fr.js": 269,
	"./fy": 272,
	"./fy.js": 272,
	"./gd": 273,
	"./gd.js": 273,
	"./gl": 274,
	"./gl.js": 274,
	"./gom-latn": 275,
	"./gom-latn.js": 275,
	"./gu": 276,
	"./gu.js": 276,
	"./he": 277,
	"./he.js": 277,
	"./hi": 278,
	"./hi.js": 278,
	"./hr": 279,
	"./hr.js": 279,
	"./hu": 280,
	"./hu.js": 280,
	"./hy-am": 281,
	"./hy-am.js": 281,
	"./id": 282,
	"./id.js": 282,
	"./is": 283,
	"./is.js": 283,
	"./it": 284,
	"./it.js": 284,
	"./ja": 285,
	"./ja.js": 285,
	"./jv": 286,
	"./jv.js": 286,
	"./ka": 287,
	"./ka.js": 287,
	"./kk": 288,
	"./kk.js": 288,
	"./km": 289,
	"./km.js": 289,
	"./kn": 290,
	"./kn.js": 290,
	"./ko": 291,
	"./ko.js": 291,
	"./ky": 292,
	"./ky.js": 292,
	"./lb": 293,
	"./lb.js": 293,
	"./lo": 294,
	"./lo.js": 294,
	"./lt": 295,
	"./lt.js": 295,
	"./lv": 296,
	"./lv.js": 296,
	"./me": 297,
	"./me.js": 297,
	"./mi": 298,
	"./mi.js": 298,
	"./mk": 299,
	"./mk.js": 299,
	"./ml": 300,
	"./ml.js": 300,
	"./mr": 301,
	"./mr.js": 301,
	"./ms": 302,
	"./ms-my": 303,
	"./ms-my.js": 303,
	"./ms.js": 302,
	"./mt": 304,
	"./mt.js": 304,
	"./my": 305,
	"./my.js": 305,
	"./nb": 306,
	"./nb.js": 306,
	"./ne": 307,
	"./ne.js": 307,
	"./nl": 308,
	"./nl-be": 309,
	"./nl-be.js": 309,
	"./nl.js": 308,
	"./nn": 310,
	"./nn.js": 310,
	"./pa-in": 311,
	"./pa-in.js": 311,
	"./pl": 312,
	"./pl.js": 312,
	"./pt": 313,
	"./pt-br": 314,
	"./pt-br.js": 314,
	"./pt.js": 313,
	"./ro": 315,
	"./ro.js": 315,
	"./ru": 316,
	"./ru.js": 316,
	"./sd": 317,
	"./sd.js": 317,
	"./se": 318,
	"./se.js": 318,
	"./si": 319,
	"./si.js": 319,
	"./sk": 320,
	"./sk.js": 320,
	"./sl": 321,
	"./sl.js": 321,
	"./sq": 322,
	"./sq.js": 322,
	"./sr": 323,
	"./sr-cyrl": 324,
	"./sr-cyrl.js": 324,
	"./sr.js": 323,
	"./ss": 325,
	"./ss.js": 325,
	"./sv": 326,
	"./sv.js": 326,
	"./sw": 327,
	"./sw.js": 327,
	"./ta": 328,
	"./ta.js": 328,
	"./te": 329,
	"./te.js": 329,
	"./tet": 330,
	"./tet.js": 330,
	"./tg": 331,
	"./tg.js": 331,
	"./th": 332,
	"./th.js": 332,
	"./tl-ph": 333,
	"./tl-ph.js": 333,
	"./tlh": 334,
	"./tlh.js": 334,
	"./tr": 335,
	"./tr.js": 335,
	"./tzl": 336,
	"./tzl.js": 336,
	"./tzm": 337,
	"./tzm-latn": 338,
	"./tzm-latn.js": 338,
	"./tzm.js": 337,
	"./ug-cn": 339,
	"./ug-cn.js": 339,
	"./uk": 340,
	"./uk.js": 340,
	"./ur": 341,
	"./ur.js": 341,
	"./uz": 342,
	"./uz-latn": 343,
	"./uz-latn.js": 343,
	"./uz.js": 342,
	"./vi": 344,
	"./vi.js": 344,
	"./x-pseudo": 345,
	"./x-pseudo.js": 345,
	"./yo": 346,
	"./yo.js": 346,
	"./zh-cn": 347,
	"./zh-cn.js": 347,
	"./zh-hk": 348,
	"./zh-hk.js": 348,
	"./zh-tw": 349,
	"./zh-tw.js": 349
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 529;

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, androidPermissions, geo) {
        this.androidPermissions = androidPermissions;
        this.geo = geo;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', page: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */] },
            { title: 'About', page: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */] },
            { title: 'Settings', page: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */] }
        ];
        if (__WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().currentUser != null) {
            this.userId = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().currentUser.uid;
        }
    }
    MyApp.prototype.openPage = function (page) {
        this.rootPage = page.page;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\app\app.html"*/'<ion-menu [content]="content">\n\n        <ion-toolbar>\n\n          <ion-title>Navigatie</ion-title>\n\n        </ion-toolbar>\n\n      \n\n        <ion-content>\n\n          <ion-list class="navList">\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              {{p.title}}\n\n            </button>\n\n            <button menuClose ion-item>Sluit menu</button>\n\n          </ion-list>\n\n        </ion-content>\n\n      </ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n\n\n'/*ion-inline-end:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__["a" /* AndroidPermissions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__["a" /* AndroidPermissions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseProvider = (function () {
    function FirebaseProvider(db) {
        this.db = db;
        console.log('Hello FirebaseProvider Provider');
        var userCount;
        this.db.database.ref('UserDatabase/Users/UserCount').on('value', function (snapshot) {
            userCount = snapshot.val();
        });
    }
    FirebaseProvider.prototype.addItem = function (userID, age, gender, location, alcoholLevel, datestring, timestring, sortingms) {
        var itemRef = this.db.database.ref('ReadingDatabase/Readings/').push().set({
            date: datestring, time: timestring, age: age, gender: gender,
            location: location, alcoholLevel: alcoholLevel, sortingms: sortingms //  
        }); //
        var itemRef2 = this.db.database.ref('ReadingDatabase/Users/' + userID + '/').push().set({
            date: datestring, time: timestring, location: location, alcoholLevel: alcoholLevel, sortingms: sortingms // adds Reading into user specific database
        }); //
    };
    FirebaseProvider.prototype.addUser = function (userID, birthDay, birthMonth, birthYear, gender, firstName, lastName, email, phoneNumber) {
        var userCount;
        this.db.database.ref('UserDatabase/Users/UserCount').on('value', function (snapshot) {
            userCount = snapshot.val();
        });
        var itemRef = this.db.database.ref('UserDatabase/Users/' + userID).set({
            firstName: firstName, lastName: lastName, gender: gender,
            birthDay: birthDay, birthMonth: birthMonth, birthYear: birthYear, email: email,
            phoneNumber: phoneNumber
        }); //
        userCount++; // this is number of users 
        var itemRef2 = this.db.database.ref('UserDatabase/Users').update({ UserCount: userCount }); //
    };
    FirebaseProvider.prototype.updateUser = function (userID, phoneNumber) {
        var userRef = this.db.database.ref('UserDatabase/Users'); //
        var specificRef = userRef.child(userID); //git
        /*if (height != -1) {                                                //
          specificRef.update({height:height})                                //
        }                                                                    //  Updates user with UserID:userID
        if (weight != -1) {                                                  //  Updates the email,height and/or weight
          specificRef.update({weight:weight})                                //  If value doesn't need to change use values:
        }  */ //       gender: "."
        if (phoneNumber != ".") {
            specificRef.update({ phoneNumber: phoneNumber }); //
        } //
    }; //
    FirebaseProvider.prototype.getList = function () {
        var items;
        items = this.db.list('Readings').valueChanges();
        return items;
    };
    //Get user vars
    //Subscriben anders krijg je observable
    //#region "getUserVars"
    /*getWeight(userID){
      var weight;
      weight = this.db.object('UserDatabase/Users/' + userID + '/weight').valueChanges();
      return weight;
    }*/
    FirebaseProvider.prototype.getFirstName = function (userID) {
        var firstName;
        firstName = this.db.object('UserDatabase/Users/' + userID + '/firstName').valueChanges();
        return firstName;
    };
    FirebaseProvider.prototype.getLastName = function (userID) {
        var lastName;
        lastName = this.db.object('UserDatabase/Users/' + userID + '/lastName').valueChanges();
        return lastName;
    };
    FirebaseProvider.prototype.getGender = function (userID) {
        var gender;
        gender = this.db.object('UserDatabase/Users/' + userID + '/gender').valueChanges();
        return gender;
    }; /*
    getHeight(userID){
      var height;
      height = this.db.object('UserDatabase/Users/' + userID + '/height').valueChanges();
      return height;
    }*/
    FirebaseProvider.prototype.getBirthDay = function (userID) {
        var birthDay;
        birthDay = this.db.object('UserDatabase/Users/' + userID + '/birthDay').valueChanges();
        return birthDay;
    };
    FirebaseProvider.prototype.getBirthMonth = function (userID) {
        var birthMonth;
        birthMonth = this.db.object('UserDatabase/Users/' + userID + '/birthMonth').valueChanges();
        return birthMonth;
    };
    FirebaseProvider.prototype.getBirthYear = function (userID) {
        var birthYear;
        birthYear = this.db.object('UserDatabase/Users/' + userID + '/birthYear').valueChanges();
        return birthYear;
    };
    FirebaseProvider.prototype.getEmail = function (userID) {
        var email;
        email = this.db.object('UserDatabase/Users/' + userID + '/email').valueChanges();
        return email;
    };
    FirebaseProvider.prototype.getPhone = function (userID) {
        var phone;
        phone = this.db.object('UserDatabase/Users/' + userID + '/phoneNumber').valueChanges();
        return phone;
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
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
 * Generated class for the CustomNavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomNavbarComponent = (function () {
    function CustomNavbarComponent(menuCtrl, nav) {
        this.menuCtrl = menuCtrl;
        this.nav = nav;
        if (__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser != null) {
            this.userId = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser.uid;
        }
    }
    CustomNavbarComponent.prototype.ionViewDidLoad = function () {
        this.checkUserId();
    };
    CustomNavbarComponent.prototype.checkUserId = function () {
        if (__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser != null) {
            this.userId = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser.uid;
        }
    };
    CustomNavbarComponent.prototype.openSettings = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */]);
    };
    CustomNavbarComponent.prototype.openNavigation = function () {
        this.menuCtrl.open();
    };
    CustomNavbarComponent.prototype.openPage = function (p) {
        this.rootPage = p;
    };
    CustomNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-navbar',template:/*ion-inline-start:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\custom-navbar\custom-navbar.html"*/'<ion-navbar hideBackButton>\n\n    <ion-buttons start *ngIf="userId">\n\n      <button ion-button icon-only (click)="openNavigation()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      {{pageTitle}}\n\n    </ion-title>\n\n    <ion-buttons end *ngIf="userId">\n\n      <button ion-button icon-only (click)="openSettings()">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n\n\n \n\n\n\n'/*ion-inline-end:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\custom-navbar\custom-navbar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CustomNavbarComponent);
    return CustomNavbarComponent;
}());

//# sourceMappingURL=custom-navbar.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallForHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the CallForHelpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CallForHelpComponent = (function () {
    function CallForHelpComponent(firebaseProvider, callNumber, alertCtrl) {
        var _this = this;
        this.firebaseProvider = firebaseProvider;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        console.log('Hello CallForHelpComponent Component');
        if (__WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().currentUser != null) {
            this.userId = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().currentUser.uid;
            this.firebaseProvider.getPhone(this.userId).subscribe(function (val) { _this.phone = val; });
            //console.log(this.phone);
            if (this.phone == ".") {
                this.isValid = false;
            }
            else {
                this.isValid = true;
            }
        }
        console.log("callforhelp isvalid");
        console.log(this.isValid);
        //console.log("callforhelp phone")
    }
    CallForHelpComponent.prototype.callMyNumber = function () {
        if (this.phone != ".") {
            this.callNumber.callNumber(this.phone, true)
                .then(function (res) { return console.log('Launched dialer!', res); })
                .catch(function (err) { return console.log('Error launching dialer', err); });
            console.log("call success");
        }
        else {
            this.showMessage();
        }
    };
    CallForHelpComponent.prototype.showMessage = function () {
        var alert = this.alertCtrl.create({
            title: 'Telefoon nummer',
            subTitle: 'Er is nog geen telefoonnummer toegevoegd aan uw account!',
            buttons: ['OK']
        });
        alert.present();
        console.log("call failed");
    };
    CallForHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'call-for-help',template:/*ion-inline-start:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\call-for-help\call-for-help.html"*/'<ion-footer *ngIf="userId">\n\n  <ion-toolbar>\n\n          <button *ngIf="isValid" ion-button full (click)="callMyNumber()">\n\n            <ion-icon name="call"></ion-icon>\n\n            <!-- {{phone}} !-->\n\n          </button>\n\n          <button *ngIf="!isValid" ion-button full (click)="showMessage()">\n\n            <ion-icon name="alert"></ion-icon>\n\n          </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\call-for-help\call-for-help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], CallForHelpComponent);
    return CallForHelpComponent;
}());

//# sourceMappingURL=call-for-help.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(125);
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
 * Generated class for the GoogleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GoogleComponent = (function () {
    function GoogleComponent(geo, platform) {
        this.geo = geo;
        this.platform = platform;
    }
    GoogleComponent.prototype.ngOnInit = function () {
    };
    GoogleComponent.prototype.initMap = function () {
        var coords = new google.maps.LatLng(this.lat, this.long);
        var mapOptions = {
            center: coords,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            position: coords
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", Object)
    ], GoogleComponent.prototype, "mapElement", void 0);
    GoogleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'google',template:/*ion-inline-start:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\google\google.html"*/'<div #map id ="map"></div>'/*ion-inline-end:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\google\google.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object])
    ], GoogleComponent);
    return GoogleComponent;
    var _a, _b;
}());

//# sourceMappingURL=google.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(127);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(http, firebaseProvider, alertCtrl) {
        var _this = this;
        this.http = http;
        this.firebaseProvider = firebaseProvider;
        this.alertCtrl = alertCtrl;
        this.firebaseProvider.getPhone(this.userId).subscribe(function (val) { _this.phoneInput = val; });
        if (__WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser != null) {
            this.userId = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.uid;
            this.getUserData(this.userId);
        }
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.getUserData = function (id) {
        var _this = this;
        this.firebaseProvider.getPhone(id).subscribe(function (val) { return _this.phone = val; });
    };
    SettingsPage.prototype.updateSettings = function () {
        if (this.phoneInput != null) {
            this.firebaseProvider.updateUser(this.userId, this.phoneInput);
            this.showAlert();
        }
    };
    SettingsPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Wijziging',
            subTitle: 'Telefoonnummer opgeslagen!',
            buttons: ['OK']
        });
        alert.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <ion-label color="primary" stacked>Terugbel nummer</ion-label>\n\n        <ion-input [(ngModel)]="phoneInput" type="number"></ion-input>\n\n    </ion-item>\n\n        <ion-buttons>\n\n            <button ion-button full (click)="updateSettings()">Sla mijn telefoonnummer op</button>\n\n        </ion-buttons>\n\n</ion-content>\n\n<call-for-help>\n\n</call-for-help>\n\n'/*ion-inline-end:"E:\Users\robin\Desktop\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[458]);
//# sourceMappingURL=main.js.map