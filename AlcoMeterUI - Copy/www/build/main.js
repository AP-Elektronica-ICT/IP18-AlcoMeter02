webpackJsonp([1],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(498);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\contact\contact.html"*/'<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n \n\n  <ion-card>\n\n    <ion-card-header>\n\n      Bar Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Doughnut Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #doughnutCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Line Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #lineCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_call_number__ = __webpack_require__(423);
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
    function SettingsPage(callNumber) {
        this.callNumber = callNumber;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.callMyNumber = function () {
        this.callNumber.callNumber("0466199015", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-5>\n\n      <ion-item>\n\n          <ion-label color="primary" stacked>Gewicht (kg)</ion-label>\n\n          <ion-input placeholder="Weight"  type="number"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Lengte (cm)</ion-label>\n\n        <ion-input [(ngModel)]="length" placeholder="Lengte"  type="number"></ion-input>\n\n      </ion-item> \n\n    </ion-col>\n\n    <ion-col col-7>\n\n        <ion-buttons>\n\n            <button ion-button icon-only class="callCab" (click)="callMyNumber()">\n\n              <ion-icon name="call"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n    </ion-col>\n\n  </ion-row>\n\n  \n\n  <ion-item>\n\n    <ion-label color="primary" stacked>E-mail</ion-label>\n\n    <ion-input [(ngModel)]="mail" type="email" placeholder="E-mail"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" stacked>Wachtwoord</ion-label>\n\n    <ion-input [(ngModel)]="pass" type="password" placeholder="Wachtwoord"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" stacked>Wachtwoord bevestiging</ion-label>\n\n    <ion-input [(ngModel)]="passconf" type="password" placeholder="Wachtwoord bevestiging"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label color="primary" stacked>Terugbel nummer</ion-label>\n\n      <ion-input [(ngModel)]="length" placeholder="Terugbel nummer"  type="number"></ion-input>\n\n    </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" stacked>Geboortedatum</ion-label>\n\n    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="myDate" placeholder="dd/mm/yyyy"></ion-datetime>\n\n  </ion-item>\n\n  <ion-item>\n\n  <ion-label color="primary" stacked>Gender</ion-label>\n\n  <ion-select placeholder="Choose your gender" [(ngModel)]="gender">\n\n    <ion-option value="f">Female</ion-option>\n\n    <ion-option value="m">Male</ion-option>\n\n  </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label color="grey" >Sla mijn alcoholpromille gegevens op</ion-label>\n\n      <ion-checkbox [(ngModel)]="saveData"></ion-checkbox>\n\n  </ion-item>\n\n        <button ion-button full (click)="saveChanges()">Sla wijzigingen op</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_call_number__["a" /* CallNumber */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/result/result.module": [
		644,
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
webpackAsyncContext.id = 199;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_register_register__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(78);
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




var HomePage = (function () {
    function HomePage(nav) {
        this.nav = nav;
        this.rs = __WEBPACK_IMPORTED_MODULE_2__pages_register_register__["a" /* RegisterPage */];
    }
    HomePage.prototype.nextPage = function () {
        console.log("nextPage worked!");
    };
    HomePage.prototype.login = function () {
        console.log(this.user, this.pass);
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithEmailAndPassword(this.user, this.pass).then(function (response) {
            alert("hello");
            this.nextPage();
        })
            .catch(function (error) {
            var errorMessage = error.message;
            alert("invalid username/password");
        });
    };
    HomePage.prototype.gLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithRedirect(provider);
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().getRedirectResult().then(function (result) {
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
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithPopup(provider).then(function (result) {
            alert("fbLog worked");
            var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function (error) {
            var errorMessage = error.message;
            alert("connection with facebook failed");
        });
    };
    HomePage.prototype.navRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\home\home.html"*/'<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-input type="email" [(ngModel)]="user" placeholder="E-mail"></ion-input>\n\n    <ion-input type="password" [(ngModel)]="pass" placeholder="Password Input"></ion-input>\n\n    <button ion-button full (click)="login()">Login</button>\n\n    <button ion-button full (click)="fbLogin()">facebook</button>\n\n    <button ion-button full (click)="gLogin()">Google+</button>\n\n    <button ion-button class="content" [navPush]="rs">Register</button>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(378);
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
            console.log(_this.gender);
            var date = _this.birthDate;
            var datestring = date.replace(/-/g, "");
            var year = datestring.substr(0, 4);
            var month = datestring.substr(4, 2);
            var day = datestring.substr(6, 2);
            console.log(datestring);
            _this.firebaseProvider.addUser(userID, day, month, year, _this.gender, _this.firstName, _this.lastName, _this.mail, ".");
            // this.nextPage(); 
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(633);
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
    FirebaseProvider.prototype.updateUser = function (userID, phoneNumber, gender) {
        var userRef = this.db.database.ref('UserDatabase/Users'); //
        var specificRef = userRef.child(userID); //
        /*if (height != -1) {                                                //
          specificRef.update({height:height})                                //
        }                                                                    //  Updates user with UserID:userID
        if (weight != -1) {                                                  //  Updates the email,height and/or weight
          specificRef.update({weight:weight})                                //  If value doesn't need to change use values:
        }  */ //       gender: "."
        if (phoneNumber != ".") {
            specificRef.update({ phoneNumber: phoneNumber }); //
        } //
        if (gender != ".") {
            specificRef.update({ gender: gender }); //       
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
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultPage');
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\result\result.html"*/'<!--\n\n  Generated template for the ResultPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\result\result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(448);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_custom_navbar_custom_navbar__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_firebase_firebase__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(643);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var firebaseConfig = {
    apiKey: "AIzaSyDZp1w9Tl7zI1QKTGCpeyqzTrtTyC-bIew",
    authDomain: "alcometer-abfbf.firebaseapp.com",
    databaseURL: "https://alcometer-abfbf.firebaseio.com",
    projectId: "alcometer-abfbf",
    storageBucket: "alcometer-abfbf.appspot.com",
    messagingSenderId: "1031304897035"
};
__WEBPACK_IMPORTED_MODULE_7_firebase_app__["initializeApp"](firebaseConfig);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_custom_navbar_custom_navbar__["a" /* CustomNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_firebase_firebase__["a" /* FirebaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_result_result__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(145);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', page: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */] },
            { title: 'Results', page: __WEBPACK_IMPORTED_MODULE_5__pages_result_result__["a" /* ResultPage */] },
            { title: 'Contact', page: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'About', page: __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */] },
            { title: 'Settings', page: __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.rootPage = page.page;
        this.pageTitle = page.title;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\app\app.html"*/'<ion-menu [content]="content">\n\n        <ion-toolbar>\n\n          <ion-title>Navigatie</ion-title>\n\n        </ion-toolbar>\n\n      \n\n        <ion-content>\n\n          <ion-list class="navList">\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n        </ion-content>\n\n      </ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 249,
	"./af.js": 249,
	"./ar": 250,
	"./ar-dz": 251,
	"./ar-dz.js": 251,
	"./ar-kw": 252,
	"./ar-kw.js": 252,
	"./ar-ly": 253,
	"./ar-ly.js": 253,
	"./ar-ma": 254,
	"./ar-ma.js": 254,
	"./ar-sa": 255,
	"./ar-sa.js": 255,
	"./ar-tn": 256,
	"./ar-tn.js": 256,
	"./ar.js": 250,
	"./az": 257,
	"./az.js": 257,
	"./be": 258,
	"./be.js": 258,
	"./bg": 259,
	"./bg.js": 259,
	"./bm": 260,
	"./bm.js": 260,
	"./bn": 261,
	"./bn.js": 261,
	"./bo": 262,
	"./bo.js": 262,
	"./br": 263,
	"./br.js": 263,
	"./bs": 264,
	"./bs.js": 264,
	"./ca": 265,
	"./ca.js": 265,
	"./cs": 266,
	"./cs.js": 266,
	"./cv": 267,
	"./cv.js": 267,
	"./cy": 268,
	"./cy.js": 268,
	"./da": 269,
	"./da.js": 269,
	"./de": 270,
	"./de-at": 271,
	"./de-at.js": 271,
	"./de-ch": 272,
	"./de-ch.js": 272,
	"./de.js": 270,
	"./dv": 273,
	"./dv.js": 273,
	"./el": 274,
	"./el.js": 274,
	"./en-au": 275,
	"./en-au.js": 275,
	"./en-ca": 276,
	"./en-ca.js": 276,
	"./en-gb": 277,
	"./en-gb.js": 277,
	"./en-ie": 278,
	"./en-ie.js": 278,
	"./en-il": 279,
	"./en-il.js": 279,
	"./en-nz": 280,
	"./en-nz.js": 280,
	"./eo": 281,
	"./eo.js": 281,
	"./es": 282,
	"./es-do": 283,
	"./es-do.js": 283,
	"./es-us": 284,
	"./es-us.js": 284,
	"./es.js": 282,
	"./et": 285,
	"./et.js": 285,
	"./eu": 286,
	"./eu.js": 286,
	"./fa": 287,
	"./fa.js": 287,
	"./fi": 288,
	"./fi.js": 288,
	"./fo": 289,
	"./fo.js": 289,
	"./fr": 290,
	"./fr-ca": 291,
	"./fr-ca.js": 291,
	"./fr-ch": 292,
	"./fr-ch.js": 292,
	"./fr.js": 290,
	"./fy": 293,
	"./fy.js": 293,
	"./gd": 294,
	"./gd.js": 294,
	"./gl": 295,
	"./gl.js": 295,
	"./gom-latn": 296,
	"./gom-latn.js": 296,
	"./gu": 297,
	"./gu.js": 297,
	"./he": 298,
	"./he.js": 298,
	"./hi": 299,
	"./hi.js": 299,
	"./hr": 300,
	"./hr.js": 300,
	"./hu": 301,
	"./hu.js": 301,
	"./hy-am": 302,
	"./hy-am.js": 302,
	"./id": 303,
	"./id.js": 303,
	"./is": 304,
	"./is.js": 304,
	"./it": 305,
	"./it.js": 305,
	"./ja": 306,
	"./ja.js": 306,
	"./jv": 307,
	"./jv.js": 307,
	"./ka": 308,
	"./ka.js": 308,
	"./kk": 309,
	"./kk.js": 309,
	"./km": 310,
	"./km.js": 310,
	"./kn": 311,
	"./kn.js": 311,
	"./ko": 312,
	"./ko.js": 312,
	"./ky": 313,
	"./ky.js": 313,
	"./lb": 314,
	"./lb.js": 314,
	"./lo": 315,
	"./lo.js": 315,
	"./lt": 316,
	"./lt.js": 316,
	"./lv": 317,
	"./lv.js": 317,
	"./me": 318,
	"./me.js": 318,
	"./mi": 319,
	"./mi.js": 319,
	"./mk": 320,
	"./mk.js": 320,
	"./ml": 321,
	"./ml.js": 321,
	"./mr": 322,
	"./mr.js": 322,
	"./ms": 323,
	"./ms-my": 324,
	"./ms-my.js": 324,
	"./ms.js": 323,
	"./mt": 325,
	"./mt.js": 325,
	"./my": 326,
	"./my.js": 326,
	"./nb": 327,
	"./nb.js": 327,
	"./ne": 328,
	"./ne.js": 328,
	"./nl": 329,
	"./nl-be": 330,
	"./nl-be.js": 330,
	"./nl.js": 329,
	"./nn": 331,
	"./nn.js": 331,
	"./pa-in": 332,
	"./pa-in.js": 332,
	"./pl": 333,
	"./pl.js": 333,
	"./pt": 334,
	"./pt-br": 335,
	"./pt-br.js": 335,
	"./pt.js": 334,
	"./ro": 336,
	"./ro.js": 336,
	"./ru": 337,
	"./ru.js": 337,
	"./sd": 338,
	"./sd.js": 338,
	"./se": 339,
	"./se.js": 339,
	"./si": 340,
	"./si.js": 340,
	"./sk": 341,
	"./sk.js": 341,
	"./sl": 342,
	"./sl.js": 342,
	"./sq": 343,
	"./sq.js": 343,
	"./sr": 344,
	"./sr-cyrl": 345,
	"./sr-cyrl.js": 345,
	"./sr.js": 344,
	"./ss": 346,
	"./ss.js": 346,
	"./sv": 347,
	"./sv.js": 347,
	"./sw": 348,
	"./sw.js": 348,
	"./ta": 349,
	"./ta.js": 349,
	"./te": 350,
	"./te.js": 350,
	"./tet": 351,
	"./tet.js": 351,
	"./tg": 352,
	"./tg.js": 352,
	"./th": 353,
	"./th.js": 353,
	"./tl-ph": 354,
	"./tl-ph.js": 354,
	"./tlh": 355,
	"./tlh.js": 355,
	"./tr": 356,
	"./tr.js": 356,
	"./tzl": 357,
	"./tzl.js": 357,
	"./tzm": 358,
	"./tzm-latn": 359,
	"./tzm-latn.js": 359,
	"./tzm.js": 358,
	"./ug-cn": 360,
	"./ug-cn.js": 360,
	"./uk": 361,
	"./uk.js": 361,
	"./ur": 362,
	"./ur.js": 362,
	"./uz": 363,
	"./uz-latn": 364,
	"./uz-latn.js": 364,
	"./uz.js": 363,
	"./vi": 365,
	"./vi.js": 365,
	"./x-pseudo": 366,
	"./x-pseudo.js": 366,
	"./yo": 367,
	"./yo.js": 367,
	"./zh-cn": 368,
	"./zh-cn.js": 368,
	"./zh-hk": 369,
	"./zh-hk.js": 369,
	"./zh-tw": 370,
	"./zh-tw.js": 370
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
webpackContext.id = 526;

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__ = __webpack_require__(145);
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
        this.text = 'Hello World';
    }
    CustomNavbarComponent.prototype.openSettings = function () {
        console.log("openSettings");
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */]);
    };
    CustomNavbarComponent.prototype.openNavigation = function () {
        console.log("openNavigation");
        this.menuCtrl.open();
    };
    CustomNavbarComponent.prototype.openPage = function (p) {
        this.rootPage = p;
    };
    CustomNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-navbar',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\custom-navbar\custom-navbar.html"*/'<ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="openNavigation()">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      {{pageTitle}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openSettings()">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n\n\n \n\n\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\components\custom-navbar\custom-navbar.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object])
    ], CustomNavbarComponent);
    return CustomNavbarComponent;
    var _a, _b;
}());

//# sourceMappingURL=custom-navbar.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\about\about.html"*/'<ion-header>\n\n    <custom-navbar></custom-navbar>\n\n</ion-header>\n\n\n\n<ion-slides pager>\n\n\n\n  <ion-slide  style="background-image: url(../assets/imgs/Slide1.png)">\n\n  </ion-slide>\n\n\n\n  <ion-slide  style="background-image: url(../assets/imgs/Slide2.png)">\n\n  </ion-slide>\n\n\n\n  <ion-slide  style="background-image: url(../assets/imgs/Slide3.png)">\n\n  </ion-slide>\n\n\n\n</ion-slides>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bassie\Documents\School\IP\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

},[427]);
//# sourceMappingURL=main.js.map