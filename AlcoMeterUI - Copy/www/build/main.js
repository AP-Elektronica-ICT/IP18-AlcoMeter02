webpackJsonp([1],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(523);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\contact\contact.html"*/'<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n \n\n  <ion-card>\n\n    <ion-card-header>\n\n      Bar Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Doughnut Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #doughnutCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <call-for-help>\n\n  </call-for-help>\n\n\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\about\about.html"*/'<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-slides pager>\n\n\n\n  <ion-slide  style="background-image: url(../assets/imgs/Slide1.png)">\n\n  </ion-slide>\n\n\n\n  <ion-slide  style="background-image: url(../assets/imgs/Slide2.png)">\n\n  </ion-slide>\n\n\n\n  <ion-slide  style="background-image: url(../assets/imgs/Slide3.png)">\n\n  </ion-slide>\n\n\n\n</ion-slides>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n<call-for-help>\n\n</call-for-help>\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 174:
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
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/result/result.module": [
		694,
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
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_about_about__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_register_register__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(85);
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
        this.rs = __WEBPACK_IMPORTED_MODULE_3__pages_register_register__["a" /* RegisterPage */];
        this.ct = __WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* ContactPage */];
        if (this.userId) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
        }
    }
    HomePage.prototype.ionViewDidLoad = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser != null) {
            this.userId = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.uid;
        }
    };
    HomePage.prototype.login = function () {
        console.log(this.user, this.pass);
        __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithEmailAndPassword(this.user, this.pass).then(function (response) {
            console.log(__WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser);
        })
            .catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
        if (__WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser != null) {
            this.userId = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.uid;
        }
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.gLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithRedirect(provider);
        __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().getRedirectResult().then(function (result) {
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
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithPopup(provider).then(function (result) {
            alert("fbLog worked");
            var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function (error) {
            var errorMessage = error.message;
            alert("connection with facebook failed");
        });
    };
    HomePage.prototype.navRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\home\home.html"*/'<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-input required type="email" [(ngModel)]="user" placeholder="E-mail"></ion-input>\n\n    <ion-input required type="password" [(ngModel)]="pass" placeholder="Password Input"></ion-input>\n\n    <button ion-button full (click)="login()">Login</button>\n\n    <!--\n\n        <button ion-button full (click)="fbLogin()">facebook</button>\n\n        <button ion-button full (click)="gLogin()">Google+</button>\n\n    -->\n\n    <button ion-button full class="content" [navPush]="rs">Register</button>\n\n    <!--\n\n    <button ion-button full class="content" [navPush]="ct">Ga verder zonder registratie</button>\n\n    -->\n\n  </ion-content>\n\n  \n\n  <call-for-help>\n\n  </call-for-help>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(67);
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
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\register\register.html"*/'<ion-header>\n  <custom-navbar></custom-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n      <ion-label color="primary" stacked>E-mail</ion-label>\n      <ion-input [(ngModel)]="mail" type="email" placeholder="E-mail"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Password</ion-label>\n      <ion-input [(ngModel)]="pass" type="password" placeholder="Password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>First Name</ion-label>\n      <ion-input [(ngModel)]="firstName" type="text" placeholder="First name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Last Name</ion-label>\n      <ion-input [(ngModel)]="lastName" type="text" placeholder="Last name"></ion-input>\n    </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Birth date</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="birthDate" placeholder="day/month/year" pickerFormat="DD MMMM YYYY"></ion-datetime>\n      </ion-item>\n      <ion-item>\n      <ion-label color="primary" stacked>Gender</ion-label>\n      <ion-select placeholder="Choose your gender" [(ngModel)]="gender">\n        <ion-option value="Female">Female</ion-option>\n        <ion-option value="Male">Male</ion-option>\n      </ion-select>\n    </ion-item>\n      <button ion-button full (click)="register()">Register</button>\n      <button ion-button full (click)="log()">log</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(437);
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

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(473);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_custom_navbar_custom_navbar__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_call_for_help_call_for_help__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_firebase_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__ = __webpack_require__(450);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_custom_navbar_custom_navbar__["a" /* CustomNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_call_for_help_call_for_help__["a" /* CallForHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_firebase_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(448);
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
            { title: 'Results', page: __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'About', page: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] },
            { title: 'Settings', page: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */] }
        ];
        if (__WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser != null) {
            this.userId = __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().currentUser.uid;
        }
    }
    MyApp.prototype.openPage = function (page) {
        this.rootPage = page.page;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\app\app.html"*/'<ion-menu [content]="content">\n\n        <ion-toolbar>\n\n          <ion-title>Navigatie</ion-title>\n\n        </ion-toolbar>\n\n      \n\n        <ion-content>\n\n          <ion-list class="navList">\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              {{p.title}}\n\n            </button>\n\n            <button menuClose ion-item>Sluit menu</button>\n\n          </ion-list>\n\n        </ion-content>\n\n      </ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 265,
	"./af.js": 265,
	"./ar": 266,
	"./ar-dz": 267,
	"./ar-dz.js": 267,
	"./ar-kw": 268,
	"./ar-kw.js": 268,
	"./ar-ly": 269,
	"./ar-ly.js": 269,
	"./ar-ma": 270,
	"./ar-ma.js": 270,
	"./ar-sa": 271,
	"./ar-sa.js": 271,
	"./ar-tn": 272,
	"./ar-tn.js": 272,
	"./ar.js": 266,
	"./az": 273,
	"./az.js": 273,
	"./be": 274,
	"./be.js": 274,
	"./bg": 275,
	"./bg.js": 275,
	"./bm": 276,
	"./bm.js": 276,
	"./bn": 277,
	"./bn.js": 277,
	"./bo": 278,
	"./bo.js": 278,
	"./br": 279,
	"./br.js": 279,
	"./bs": 280,
	"./bs.js": 280,
	"./ca": 281,
	"./ca.js": 281,
	"./cs": 282,
	"./cs.js": 282,
	"./cv": 283,
	"./cv.js": 283,
	"./cy": 284,
	"./cy.js": 284,
	"./da": 285,
	"./da.js": 285,
	"./de": 286,
	"./de-at": 287,
	"./de-at.js": 287,
	"./de-ch": 288,
	"./de-ch.js": 288,
	"./de.js": 286,
	"./dv": 289,
	"./dv.js": 289,
	"./el": 290,
	"./el.js": 290,
	"./en-au": 291,
	"./en-au.js": 291,
	"./en-ca": 292,
	"./en-ca.js": 292,
	"./en-gb": 293,
	"./en-gb.js": 293,
	"./en-ie": 294,
	"./en-ie.js": 294,
	"./en-il": 295,
	"./en-il.js": 295,
	"./en-nz": 296,
	"./en-nz.js": 296,
	"./eo": 297,
	"./eo.js": 297,
	"./es": 298,
	"./es-do": 299,
	"./es-do.js": 299,
	"./es-us": 300,
	"./es-us.js": 300,
	"./es.js": 298,
	"./et": 301,
	"./et.js": 301,
	"./eu": 302,
	"./eu.js": 302,
	"./fa": 303,
	"./fa.js": 303,
	"./fi": 304,
	"./fi.js": 304,
	"./fo": 305,
	"./fo.js": 305,
	"./fr": 306,
	"./fr-ca": 307,
	"./fr-ca.js": 307,
	"./fr-ch": 308,
	"./fr-ch.js": 308,
	"./fr.js": 306,
	"./fy": 309,
	"./fy.js": 309,
	"./gd": 310,
	"./gd.js": 310,
	"./gl": 311,
	"./gl.js": 311,
	"./gom-latn": 312,
	"./gom-latn.js": 312,
	"./gu": 313,
	"./gu.js": 313,
	"./he": 314,
	"./he.js": 314,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 316,
	"./hr.js": 316,
	"./hu": 317,
	"./hu.js": 317,
	"./hy-am": 318,
	"./hy-am.js": 318,
	"./id": 319,
	"./id.js": 319,
	"./is": 320,
	"./is.js": 320,
	"./it": 321,
	"./it.js": 321,
	"./ja": 322,
	"./ja.js": 322,
	"./jv": 323,
	"./jv.js": 323,
	"./ka": 324,
	"./ka.js": 324,
	"./kk": 325,
	"./kk.js": 325,
	"./km": 326,
	"./km.js": 326,
	"./kn": 327,
	"./kn.js": 327,
	"./ko": 328,
	"./ko.js": 328,
	"./ky": 329,
	"./ky.js": 329,
	"./lb": 330,
	"./lb.js": 330,
	"./lo": 331,
	"./lo.js": 331,
	"./lt": 332,
	"./lt.js": 332,
	"./lv": 333,
	"./lv.js": 333,
	"./me": 334,
	"./me.js": 334,
	"./mi": 335,
	"./mi.js": 335,
	"./mk": 336,
	"./mk.js": 336,
	"./ml": 337,
	"./ml.js": 337,
	"./mr": 338,
	"./mr.js": 338,
	"./ms": 339,
	"./ms-my": 340,
	"./ms-my.js": 340,
	"./ms.js": 339,
	"./mt": 341,
	"./mt.js": 341,
	"./my": 342,
	"./my.js": 342,
	"./nb": 343,
	"./nb.js": 343,
	"./ne": 344,
	"./ne.js": 344,
	"./nl": 345,
	"./nl-be": 346,
	"./nl-be.js": 346,
	"./nl.js": 345,
	"./nn": 347,
	"./nn.js": 347,
	"./pa-in": 348,
	"./pa-in.js": 348,
	"./pl": 349,
	"./pl.js": 349,
	"./pt": 350,
	"./pt-br": 351,
	"./pt-br.js": 351,
	"./pt.js": 350,
	"./ro": 352,
	"./ro.js": 352,
	"./ru": 353,
	"./ru.js": 353,
	"./sd": 354,
	"./sd.js": 354,
	"./se": 355,
	"./se.js": 355,
	"./si": 356,
	"./si.js": 356,
	"./sk": 357,
	"./sk.js": 357,
	"./sl": 358,
	"./sl.js": 358,
	"./sq": 359,
	"./sq.js": 359,
	"./sr": 360,
	"./sr-cyrl": 361,
	"./sr-cyrl.js": 361,
	"./sr.js": 360,
	"./ss": 362,
	"./ss.js": 362,
	"./sv": 363,
	"./sv.js": 363,
	"./sw": 364,
	"./sw.js": 364,
	"./ta": 365,
	"./ta.js": 365,
	"./te": 366,
	"./te.js": 366,
	"./tet": 367,
	"./tet.js": 367,
	"./tg": 368,
	"./tg.js": 368,
	"./th": 369,
	"./th.js": 369,
	"./tl-ph": 370,
	"./tl-ph.js": 370,
	"./tlh": 371,
	"./tlh.js": 371,
	"./tr": 372,
	"./tr.js": 372,
	"./tzl": 373,
	"./tzl.js": 373,
	"./tzm": 374,
	"./tzm-latn": 375,
	"./tzm-latn.js": 375,
	"./tzm.js": 374,
	"./ug-cn": 376,
	"./ug-cn.js": 376,
	"./uk": 377,
	"./uk.js": 377,
	"./ur": 378,
	"./ur.js": 378,
	"./uz": 379,
	"./uz-latn": 380,
	"./uz-latn.js": 380,
	"./uz.js": 379,
	"./vi": 381,
	"./vi.js": 381,
	"./x-pseudo": 382,
	"./x-pseudo.js": 382,
	"./yo": 383,
	"./yo.js": 383,
	"./zh-cn": 384,
	"./zh-cn.js": 384,
	"./zh-hk": 385,
	"./zh-hk.js": 385,
	"./zh-tw": 386,
	"./zh-tw.js": 386
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
webpackContext.id = 551;

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(656);
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

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(41);
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
            selector: 'custom-navbar',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\custom-navbar\custom-navbar.html"*/'<ion-navbar hideBackButton>\n\n    <ion-buttons start *ngIf="userId">\n\n      <button ion-button icon-only (click)="openNavigation()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      {{pageTitle}}\n\n    </ion-title>\n\n    <ion-buttons end *ngIf="userId">\n\n      <button ion-button icon-only (click)="openSettings()">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n\n\n \n\n\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\custom-navbar\custom-navbar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CustomNavbarComponent);
    return CustomNavbarComponent;
}());

//# sourceMappingURL=custom-navbar.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallForHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
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
            selector: 'call-for-help',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\call-for-help\call-for-help.html"*/'<ion-footer *ngIf="userId">\n  <ion-toolbar>\n          <button *ngIf="isValid" ion-button full (click)="callMyNumber()">\n            <ion-icon name="call"></ion-icon>\n            <!-- {{phone}} !-->\n          </button>\n          <button *ngIf="!isValid" ion-button full (click)="showMessage()">\n            <ion-icon name="alert"></ion-icon>\n          </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\call-for-help\call-for-help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], CallForHelpComponent);
    return CallForHelpComponent;
}());

//# sourceMappingURL=call-for-help.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(447);
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
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <ion-label color="primary" stacked>Terugbel nummer</ion-label>\n\n        <ion-input [(ngModel)]="phoneInput" type="number"></ion-input>\n\n    </ion-item>\n\n        <ion-buttons>\n\n            <button ion-button full (click)="updateSettings()">Sla mijn telefoonnummer op</button>\n\n        </ion-buttons>\n\n</ion-content>\n\n<call-for-help>\n\n</call-for-help>\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[453]);
//# sourceMappingURL=main.js.map