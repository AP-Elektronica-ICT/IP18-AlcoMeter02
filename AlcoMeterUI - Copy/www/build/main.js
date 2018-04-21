webpackJsonp([1],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(448);
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
        this.firebaseProvider.getPhone(this.userId).subscribe(function (val) { _this.phone = val; });
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
        if (this.phone != null) {
            this.firebaseProvider.updateUser(this.userId, this.phone);
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
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <ion-label color="primary" stacked>Terugbel nummer</ion-label>\n\n        <ion-input [(ngModel)]="phone" type="number"></ion-input>\n\n    </ion-item>\n\n        <ion-buttons>\n\n            <button ion-button full (click)="updateSettings()">Sla mijn telefoonnummer op</button>\n\n        </ion-buttons>\n\n</ion-content>\n\n<call-for-help>\n\n</call-for-help>\n\n'/*ion-inline-end:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], SettingsPage);
    return SettingsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 175:
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
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/result/result.module": [
		697,
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
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_firebase_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var HomePage = (function () {
    function HomePage(nav, firebaseProvider, auth, formBuilder, alertCtr) {
        this.nav = nav;
        this.firebaseProvider = firebaseProvider;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.alertCtr = alertCtr;
        this.rs = __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */];
        this.ct = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        this.loginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required]
        });
    }
    HomePage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var me, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        me = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().signInWithEmailAndPassword(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
                                .catch(function (error) {
                                console.log("Login failed!");
                                alert(error.message);
                            })];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            console.log(user);
                            this.auth.loginState = true;
                            me.nav.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
                        }
                        if (__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser != null) {
                            this.userId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.gLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"].GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().signInWithRedirect(provider);
        __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().getRedirectResult().then(function (result) {
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
        var provider = new __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"].FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().signInWithPopup(provider).then(function (result) {
            alert("fbLog worked");
            var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function (error) {
            var errorMessage = error.message;
            alert("connection with facebook failed");
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\home\home.html"*/'<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n        <form [formGroup]="loginForm">\n\n            <ion-item>\n\n                <ion-label color="primary" stacked>E-mail</ion-label>\n\n                <ion-input [formControl]="loginForm.controls[\'email\']" type="email" placeholder="E-mail"></ion-input>\n\n            </ion-item>\n\n                <div *ngIf="!loginForm.controls.email.valid && loginForm.controls.email.dirty"  class="validator-error">\n\n                        Please enter a valid email.\n\n                </div>\n\n            <ion-item>\n\n                <ion-label color="primary" stacked>Password</ion-label>\n\n                <ion-input [formControl]="loginForm.controls[\'password\']" [(ngModel)]="pass" type="password" placeholder="Password"></ion-input>\n\n            </ion-item>\n\n                <div *ngIf="!loginForm.controls.password.valid && loginForm.controls.password.dirty" class="validator-error">\n\n                    Please enter a valid password.\n\n                </div>\n\n            <button ion-button full [disabled]="!loginForm.valid" (click)="login()">Login</button>\n\n            <button ion-button full class="content" [navPush]="rs">Register</button>\n\n        </form>\n\n  </ion-content>\n\n  \n\n  <call-for-help>\n\n  </call-for-help>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(218);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\contact\contact.html"*/'<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n \n\n  <ion-card>\n\n    <ion-card-header>\n\n      Bar Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Doughnut Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #doughnutCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <call-for-help>\n\n  </call-for-help>\n\n\n\n'/*ion-inline-end:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about__ = __webpack_require__(86);
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
    function RegisterPage(navCtrl, navParams, firebaseProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.formBuilder = formBuilder;
        this.registerForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])],
            firstname: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            birthdate: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    RegisterPage.prototype.onSignIn = function () {
        //this.logger.info('SignInPage: onSignIn()');
    };
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
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().createUserWithEmailAndPassword(this.registerForm.controls['email'].value, this.registerForm.controls['password'].value).then(function (response) {
            var userID = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.uid;
            var date = _this.registerForm.controls['birthdate'].value;
            var datestring = date.replace(/-/g, "");
            var year = datestring.substr(0, 4);
            var month = datestring.substr(4, 2);
            var day = datestring.substr(6, 2);
            _this.firebaseProvider.addUser(userID, day, month, year, _this.registerForm.controls['gender'].value, _this.registerForm.controls['firstname'].value, _this.registerForm.controls['lastname'].value, _this.registerForm.controls['email'].value, ".");
            console.log("email");
            console.log(_this.registerForm.controls['email'].value);
            console.log("pass");
            console.log(_this.registerForm.controls['password'].value);
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(_this.registerForm.controls['email'].value, _this.registerForm.controls['password'].value).then(function (response) {
                console.log("nextPage worked!");
            })
                .catch(function (error) {
                var errorMessage = error.message;
                alert(errorMessage);
            });
        })
            .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* AboutPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\register\register.html"*/'<ion-header>\n\n  <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form [formGroup]="registerForm">\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>E-mail</ion-label>\n\n      <ion-input [formControl]="registerForm.controls[\'email\']" type="email" placeholder="E-mail"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="!registerForm.controls.email.valid && registerForm.controls.email.dirty"  class="validator-error">\n\n              Please enter a valid email.\n\n    </div>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Password</ion-label>\n\n      <ion-input [formControl]="registerForm.controls[\'password\']" [(ngModel)]="pass" type="password" placeholder="Password"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="!registerForm.controls.password.valid && registerForm.controls.password.dirty" class="validator-error">\n\n      Please enter a valid password, with at least 6 characters\n\n    </div><ion-item>\n\n      <ion-label color="primary" stacked>E-mail</ion-label>\n\n      <ion-input [formControl]="registerForm.controls[\'email\']" type="email" placeholder="E-mail"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="!registerForm.controls.email.valid && registerForm.controls.email.dirty"  class="validator-error">\n\n              Please enter a valid email.\n\n    </div>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Password</ion-label>\n\n      <ion-input [formControl]="registerForm.controls[\'password\']" [(ngModel)]="pass" type="password" placeholder="Password"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="!registerForm.controls.password.valid && registerForm.controls.password.dirty" class="validator-error">\n\n      Please enter a valid password, with at least 6 characters\n\n    </div>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>First Name</ion-label>\n\n      <ion-input [formControl]="registerForm.controls[\'firstname\']" [(ngModel)]="firstName" type="text" placeholder="First name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>Last Name</ion-label>\n\n      <ion-input [formControl]="registerForm.controls[\'lastname\']" [(ngModel)]="lastName" type="text" placeholder="Last name"></ion-input>\n\n    </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Birth date</ion-label>\n\n        <ion-datetime [formControl]="registerForm.controls[\'birthdate\']" displayFormat="DD/MM/YYYY" [(ngModel)]="birthDate" placeholder="day/month/year" pickerFormat="DD MMMM YYYY"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item>\n\n      <ion-label color="primary" stacked>Gender</ion-label>\n\n      <ion-select [formControl]="registerForm.controls[\'gender\']" placeholder="Choose your gender" [(ngModel)]="gender">\n\n        <ion-option value="Female">Female</ion-option>\n\n        <ion-option value="Male">Male</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <button ion-button full [disabled]="!registerForm.valid" (click)="register()">Register</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
    function AuthProvider(firebaseProvider) {
        this.firebaseProvider = firebaseProvider;
        this.loginState = false;
        if (this.loginState) {
            this.UID = this.getLoggedUID();
            this.phone = this.getPhoneNumber();
        }
    }
    AuthProvider.prototype.getLoggedUID = function () {
        this.UID = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.uid;
        return this.UID;
    };
    AuthProvider.prototype.getPhoneNumber = function () {
        var _this = this;
        this.phone = this.firebaseProvider.getPhone(this.UID).subscribe(function (val) { return _this.phone = val; });
        return this.phone;
    };
    AuthProvider.prototype.logout = function () {
        if (this.loginState == true) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signOut();
            this.loginState = false;
            this.UID = null;
        }
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _a || Object])
    ], AuthProvider);
    return AuthProvider;
    var _a;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(476);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_custom_navbar_custom_navbar__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_call_for_help_call_for_help__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_firebase_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_result_result__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_google_google__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(455);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_21__components_google_google__["a" /* GoogleComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__components_custom_navbar_custom_navbar__["a" /* CustomNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_call_for_help_call_for_help__["a" /* CallForHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */]
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
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_firebase_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 225,
	"./af.js": 225,
	"./ar": 226,
	"./ar-dz": 227,
	"./ar-dz.js": 227,
	"./ar-kw": 228,
	"./ar-kw.js": 228,
	"./ar-ly": 229,
	"./ar-ly.js": 229,
	"./ar-ma": 230,
	"./ar-ma.js": 230,
	"./ar-sa": 231,
	"./ar-sa.js": 231,
	"./ar-tn": 232,
	"./ar-tn.js": 232,
	"./ar.js": 226,
	"./az": 233,
	"./az.js": 233,
	"./be": 234,
	"./be.js": 234,
	"./bg": 235,
	"./bg.js": 235,
	"./bm": 236,
	"./bm.js": 236,
	"./bn": 237,
	"./bn.js": 237,
	"./bo": 238,
	"./bo.js": 238,
	"./br": 239,
	"./br.js": 239,
	"./bs": 240,
	"./bs.js": 240,
	"./ca": 241,
	"./ca.js": 241,
	"./cs": 242,
	"./cs.js": 242,
	"./cv": 243,
	"./cv.js": 243,
	"./cy": 244,
	"./cy.js": 244,
	"./da": 245,
	"./da.js": 245,
	"./de": 246,
	"./de-at": 247,
	"./de-at.js": 247,
	"./de-ch": 248,
	"./de-ch.js": 248,
	"./de.js": 246,
	"./dv": 249,
	"./dv.js": 249,
	"./el": 250,
	"./el.js": 250,
	"./en-au": 251,
	"./en-au.js": 251,
	"./en-ca": 252,
	"./en-ca.js": 252,
	"./en-gb": 253,
	"./en-gb.js": 253,
	"./en-ie": 254,
	"./en-ie.js": 254,
	"./en-il": 255,
	"./en-il.js": 255,
	"./en-nz": 256,
	"./en-nz.js": 256,
	"./eo": 257,
	"./eo.js": 257,
	"./es": 258,
	"./es-do": 259,
	"./es-do.js": 259,
	"./es-us": 260,
	"./es-us.js": 260,
	"./es.js": 258,
	"./et": 261,
	"./et.js": 261,
	"./eu": 262,
	"./eu.js": 262,
	"./fa": 263,
	"./fa.js": 263,
	"./fi": 264,
	"./fi.js": 264,
	"./fo": 265,
	"./fo.js": 265,
	"./fr": 266,
	"./fr-ca": 267,
	"./fr-ca.js": 267,
	"./fr-ch": 268,
	"./fr-ch.js": 268,
	"./fr.js": 266,
	"./fy": 269,
	"./fy.js": 269,
	"./gd": 270,
	"./gd.js": 270,
	"./gl": 271,
	"./gl.js": 271,
	"./gom-latn": 272,
	"./gom-latn.js": 272,
	"./gu": 273,
	"./gu.js": 273,
	"./he": 274,
	"./he.js": 274,
	"./hi": 275,
	"./hi.js": 275,
	"./hr": 276,
	"./hr.js": 276,
	"./hu": 277,
	"./hu.js": 277,
	"./hy-am": 278,
	"./hy-am.js": 278,
	"./id": 279,
	"./id.js": 279,
	"./is": 280,
	"./is.js": 280,
	"./it": 281,
	"./it.js": 281,
	"./ja": 282,
	"./ja.js": 282,
	"./jv": 283,
	"./jv.js": 283,
	"./ka": 284,
	"./ka.js": 284,
	"./kk": 285,
	"./kk.js": 285,
	"./km": 286,
	"./km.js": 286,
	"./kn": 287,
	"./kn.js": 287,
	"./ko": 288,
	"./ko.js": 288,
	"./ky": 289,
	"./ky.js": 289,
	"./lb": 290,
	"./lb.js": 290,
	"./lo": 291,
	"./lo.js": 291,
	"./lt": 292,
	"./lt.js": 292,
	"./lv": 293,
	"./lv.js": 293,
	"./me": 294,
	"./me.js": 294,
	"./mi": 295,
	"./mi.js": 295,
	"./mk": 296,
	"./mk.js": 296,
	"./ml": 297,
	"./ml.js": 297,
	"./mr": 298,
	"./mr.js": 298,
	"./ms": 299,
	"./ms-my": 300,
	"./ms-my.js": 300,
	"./ms.js": 299,
	"./mt": 301,
	"./mt.js": 301,
	"./my": 302,
	"./my.js": 302,
	"./nb": 303,
	"./nb.js": 303,
	"./ne": 304,
	"./ne.js": 304,
	"./nl": 305,
	"./nl-be": 306,
	"./nl-be.js": 306,
	"./nl.js": 305,
	"./nn": 307,
	"./nn.js": 307,
	"./pa-in": 308,
	"./pa-in.js": 308,
	"./pl": 309,
	"./pl.js": 309,
	"./pt": 310,
	"./pt-br": 311,
	"./pt-br.js": 311,
	"./pt.js": 310,
	"./ro": 312,
	"./ro.js": 312,
	"./ru": 313,
	"./ru.js": 313,
	"./sd": 314,
	"./sd.js": 314,
	"./se": 315,
	"./se.js": 315,
	"./si": 316,
	"./si.js": 316,
	"./sk": 317,
	"./sk.js": 317,
	"./sl": 318,
	"./sl.js": 318,
	"./sq": 319,
	"./sq.js": 319,
	"./sr": 320,
	"./sr-cyrl": 321,
	"./sr-cyrl.js": 321,
	"./sr.js": 320,
	"./ss": 322,
	"./ss.js": 322,
	"./sv": 323,
	"./sv.js": 323,
	"./sw": 324,
	"./sw.js": 324,
	"./ta": 325,
	"./ta.js": 325,
	"./te": 326,
	"./te.js": 326,
	"./tet": 327,
	"./tet.js": 327,
	"./tg": 328,
	"./tg.js": 328,
	"./th": 329,
	"./th.js": 329,
	"./tl-ph": 330,
	"./tl-ph.js": 330,
	"./tlh": 331,
	"./tlh.js": 331,
	"./tr": 332,
	"./tr.js": 332,
	"./tzl": 333,
	"./tzl.js": 333,
	"./tzm": 334,
	"./tzm-latn": 335,
	"./tzm-latn.js": 335,
	"./tzm.js": 334,
	"./ug-cn": 336,
	"./ug-cn.js": 336,
	"./uk": 337,
	"./uk.js": 337,
	"./ur": 338,
	"./ur.js": 338,
	"./uz": 339,
	"./uz-latn": 340,
	"./uz-latn.js": 340,
	"./uz.js": 339,
	"./vi": 341,
	"./vi.js": 341,
	"./x-pseudo": 342,
	"./x-pseudo.js": 342,
	"./yo": 343,
	"./yo.js": 343,
	"./zh-cn": 344,
	"./zh-cn.js": 344,
	"./zh-hk": 345,
	"./zh-hk.js": 345,
	"./zh-tw": 346,
	"./zh-tw.js": 346
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
webpackContext.id = 527;

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_result_result__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(449);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', page: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */] },
            { title: 'Result', page: __WEBPACK_IMPORTED_MODULE_6__pages_result_result__["a" /* ResultPage */] },
            { title: 'About', page: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */] },
            { title: 'Settings', page: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */] }
        ];
        if (__WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser != null) {
            this.userId = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser.uid;
        }
    }
    MyApp.prototype.openPage = function (page) {
        this.rootPage = page.page;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\app\app.html"*/'<ion-menu [content]="content">\n\n        <ion-toolbar>\n\n          <ion-title>Navigatie</ion-title>\n\n        </ion-toolbar>\n\n      \n\n        <ion-content>\n\n          <ion-list class="navList">\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              {{p.title}}\n\n            </button>\n\n            <button menuClose ion-item>Sluit menu</button>\n\n          </ion-list>\n\n        </ion-content>\n\n      </ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n\n\n'/*ion-inline-end:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(658);
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

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_settings_settings__ = __webpack_require__(148);
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
    function CustomNavbarComponent(menuCtrl, nav, auth) {
        this.menuCtrl = menuCtrl;
        this.nav = nav;
        this.auth = auth;
    }
    CustomNavbarComponent.prototype.openSettings = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_settings_settings__["a" /* SettingsPage */]);
    };
    CustomNavbarComponent.prototype.openNavigation = function () {
        this.menuCtrl.open();
    };
    CustomNavbarComponent.prototype.openPage = function (p) {
        this.rootPage = p;
    };
    CustomNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-navbar',template:/*ion-inline-start:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\custom-navbar\custom-navbar.html"*/'<ion-navbar hideBackButton *ngIf="auth.loginState">\n\n    <ion-buttons start >\n\n      <button ion-button icon-only (click)="openNavigation()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      {{pageTitle}}\n\n    </ion-title>\n\n    <ion-buttons end >\n\n      <button ion-button icon-only (click)="openSettings()">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n\n\n \n\n\n\n'/*ion-inline-end:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\custom-navbar\custom-navbar.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object])
    ], CustomNavbarComponent);
    return CustomNavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=custom-navbar.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallForHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the CallForHelpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CallForHelpComponent = (function () {
    function CallForHelpComponent(firebaseProvider, auth, callNumber, alertCtrl) {
        var _this = this;
        this.firebaseProvider = firebaseProvider;
        this.auth = auth;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        console.log('Hello CallForHelpComponent Component');
        if (this.auth.loginState) {
            this.userId = this.auth.getLoggedUID();
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.firebaseProvider.getPhone(this.userId).subscribe(function (val) { _this.phone = val; })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            //console.log(this.phone);
            if (this.phone == "." && this.phone != null) {
                this.isValid = false;
            }
            else {
                this.isValid = true;
            }
        }
        console.log("callforhelp isvalid");
        console.log(this.isValid);
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
            selector: 'call-for-help',template:/*ion-inline-start:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\call-for-help\call-for-help.html"*/'<ion-footer *ngIf="userId">\n\n  <ion-toolbar>\n\n          <button *ngIf="isValid" ion-button full (click)="callMyNumber()">\n\n            <ion-icon name="call"></ion-icon>\n\n            <!-- {{phone}} !-->\n\n          </button>\n\n          <button *ngIf="!isValid" ion-button full (click)="showMessage()">\n\n            <ion-icon name="alert"></ion-icon>\n\n          </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\call-for-help\call-for-help.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], CallForHelpComponent);
    return CallForHelpComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=call-for-help.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
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
    function GoogleComponent(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    GoogleComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    GoogleComponent.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    GoogleComponent.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    GoogleComponent.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            /*
            let coords = new google.maps.LatLng(51.2300507,4.41608839);
            let mapOptions: google.maps.MapOptions = {
              center: coords,
              zoom: 12,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            */
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", Object)
    ], GoogleComponent.prototype, "mapElement", void 0);
    GoogleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'google',template:/*ion-inline-start:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\google\google.html"*/'<div #map id ="map"></div>'/*ion-inline-end:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\google\google.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], GoogleComponent);
    return GoogleComponent;
}());

//# sourceMappingURL=google.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(98);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\about\about.html"*/'<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n  <ion-content padding>\n\n    <ion-card>\n\n        <img src="https://images.unsplash.com/photo-1474500257816-6f941168c7e7?ixlib=rb-0.3.5&s=15cfd4b2ed2bf9afeead872f17e39749&auto=format&fit=crop&w=1050&q=80"/>\n\n    </ion-card>\n\n    \n\n    \n\n  <button [navPush]="rs" ion-button full>Tutorial</button>\n\n  <button (click)="Load()" [navPush]="GoResult" ion-button full>Start Test</button>\n\n  \n\n\n\n</ion-content>\n\n\n\n<call-for-help>\n\n</call-for-help>\n\n'/*ion-inline-end:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
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
 */
var ResultPage = (function () {
    function ResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.BACLevels = [0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.002, 0.003, 0.004, 0.005, 0.006, 0.006, 0.007, 0.008, 0.008, 0.009, 0.010, 0.010, 0.011, 0.011, 0.012, 0.013, 0.013, 0.014, 0.014, 0.015, 0.015, 0.016, 0.016, 0.017, 0.017, 0.017, 0.018, 0.018, 0.019, 0.019, 0.019, 0.020, 0.020, 0.020, 0.021, 0.021, 0.021, 0.022, 0.022, 0.022, 0.022, 0.023, 0.023, 0.023, 0.023, 0.024, 0.024, 0.024, 0.024, 0.024, 0.024, 0.025, 0.025, 0.025, 0.025, 0.025, 0.025, 0.026, 0.026, 0.026, 0.026, 0.026, 0.026, 0.026, 0.026, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.027, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.029, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.030, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.031, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.033, 0.034, 0.034, 0.034, 0.034, 0.034, 0.034, 0.034, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.035, 0.036, 0.036, 0.036, 0.036, 0.036, 0.036, 0.037, 0.037, 0.037, 0.037, 0.037, 0.037, 0.037, 0.038, 0.038, 0.038, 0.038, 0.038, 0.038, 0.039, 0.039, 0.039, 0.039, 0.039, 0.039, 0.040, 0.040, 0.040, 0.040, 0.040, 0.040, 0.041, 0.041, 0.041, 0.041, 0.041, 0.041, 0.042, 0.042, 0.042, 0.042, 0.042, 0.043, 0.043, 0.043, 0.043, 0.043, 0.043, 0.044, 0.044, 0.044, 0.044, 0.044, 0.044, 0.045, 0.045, 0.045, 0.045, 0.045, 0.046, 0.046, 0.046, 0.046, 0.046, 0.046, 0.047, 0.047, 0.047, 0.047, 0.047, 0.048, 0.048, 0.048, 0.048, 0.048, 0.048, 0.049, 0.049, 0.049, 0.049, 0.049, 0.050, 0.050, 0.050, 0.050, 0.050, 0.050, 0.051, 0.051, 0.051, 0.051, 0.051, 0.052, 0.052, 0.052, 0.052, 0.052, 0.052, 0.053, 0.053, 0.053, 0.053, 0.053, 0.054, 0.054, 0.054, 0.054, 0.054, 0.054, 0.055, 0.055, 0.055, 0.055, 0.055, 0.056, 0.056, 0.056, 0.056, 0.056, 0.057, 0.057, 0.057, 0.057, 0.058, 0.058, 0.058, 0.058, 0.058, 0.059, 0.059, 0.059, 0.059, 0.060, 0.060, 0.060, 0.060, 0.061, 0.061, 0.061, 0.061, 0.062, 0.062, 0.062, 0.062, 0.063, 0.063, 0.063, 0.064, 0.064, 0.064, 0.064, 0.065, 0.065, 0.065, 0.066, 0.066, 0.066, 0.067, 0.067, 0.067, 0.068, 0.068, 0.069, 0.069, 0.069, 0.070, 0.070, 0.071, 0.071, 0.071, 0.072, 0.072, 0.073, 0.073, 0.074, 0.074, 0.075, 0.075, 0.076, 0.076, 0.077, 0.077, 0.078, 0.078, 0.079, 0.080, 0.080, 0.081, 0.081, 0.082, 0.083, 0.083, 0.084, 0.085, 0.085, 0.086, 0.087, 0.088, 0.088, 0.089, 0.090, 0.091, 0.092, 0.093, 0.093, 0.094, 0.095, 0.096, 0.097, 0.098, 0.099, 0.100, 0.101, 0.102, 0.103, 0.104, 0.105, 0.106, 0.107, 0.109, 0.110, 0.111, 0.112, 0.113, 0.115, 0.116, 0.117, 0.119, 0.120, 0.121, 0.123, 0.124, 0.126, 0.127, 0.129, 0.130, 0.132, 0.134, 0.135, 0.137, 0.139, 0.140, 0.142, 0.144, 0.146, 0.148, 0.150, 0.151, 0.153, 0.155, 0.157, 0.160, 0.162, 0.164, 0.166, 0.168, 0.170, 0.173, 0.175, 0.177, 0.180, 0.182, 0.185, 0.187, 0.190, 0.193, 0.195, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250, 0.250];
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        this.allowedPromilleLevel = 0.4;
        __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"].pluginService.register({
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
            selector: 'page-result',template:/*ion-inline-start:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\result\result.html"*/'<!--\n\n  Generated template for the ResultPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-center>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Your alchohol test\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barCanvas></canvas> \n\n      <!--<p style="font-weight: bold; font-size: 20px;">Warning! You are in no condition to drive. Use another means of transportation. You might want to consider drinking less.</p>\n\n      <p>Your Promile level is 2, you need to wait 13,5 hours before driving </p> -->\n\n      <p>Voltage: {{voltage}}</p>\n\n      <p>Promille: {{promilleLevel}}</p>\n\n      <button ion-button (click)="Random()"> Test </button>\n\n\n\n    </ion-card-content>\n\n    \n\n    \n\n  </ion-card>\n\n  <google></google>\n\n</ion-content>\n\n<call-for-help>\n\n</call-for-help>\n\n\n\n'/*ion-inline-end:"C:\Users\Bas\Dropbox\2EA\Internationaal Project\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\result\result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */]])
    ], ResultPage);
    return ResultPage;
}());

function getMax() {
    return 0.4;
}
//# sourceMappingURL=result.js.map

/***/ })

},[456]);
//# sourceMappingURL=main.js.map