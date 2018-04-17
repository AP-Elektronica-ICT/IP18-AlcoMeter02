webpackJsonp([0],{

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 188:
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
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bluetooth_bluetooth__ = __webpack_require__(283);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rs = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */];
        this.bs = __WEBPACK_IMPORTED_MODULE_4__bluetooth_bluetooth__["a" /* BluetoothPage */];
        this.user = "";
        this.pass = "";
    }
    HomePage.prototype.nextPage = function () {
        console.log("nextPage worked!");
    };
    HomePage.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(this.user, this.pass).then(function (response) {
            alert("hello");
            _this.nextPage();
        })
            .catch(function (error) {
            var errorMessage = error.message;
            alert("invalid username/password");
        });
    };
    HomePage.prototype.gLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithRedirect(provider);
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().getRedirectResult().then(function (result) {
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
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithPopup(provider).then(function (result) {
            alert("fbLog worked");
            var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function (error) {
            var errorMessage = error.message;
            alert("connection with facebook failed");
        });
    };
    HomePage.prototype.navRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Koen Backup\Documenten\School\2017-2018\International Project\AlcoMeter02\IP18-AlcoMeter02\AlcoMeter\src\pages\home\home.html"*/'<ion-content padding>\n  <ion-input type="email" placeholder="E-mail"></ion-input>\n  <ion-input type="password" placeholder="Password Input"></ion-input>\n  <button ion-button full (click)="login()">Login</button>\n  <button ion-button full (click)="fbLogin()">facebook</button>\n  <button ion-button full (click)="gLogin()">Google+</button>\n  <button ion-button [navPush]="bs">bluetooth</button>\n  <button ion-button class="content" [navPush]="rs">Register</button>\n</ion-content>\n'/*ion-inline-end:"E:\Koen Backup\Documenten\School\2017-2018\International Project\AlcoMeter02\IP18-AlcoMeter02\AlcoMeter\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
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
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mail = "";
        this.pass = "";
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        if (this.agreement == true) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().createUserWithEmailAndPassword(this.mail, this.pass).then(function (response) {
                alert("hello");
                alert("thanks for agreeing");
            })
                .catch(function (error) {
                alert("thanks for agreeing, unfortunatly something went wrong!");
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        }
        else {
            alert("You have to agree to send data to register to this service!");
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\Koen Backup\Documenten\School\2017-2018\International Project\AlcoMeter02\IP18-AlcoMeter02\AlcoMeter\src\pages\register\register.html"*/'<ion-content padding>\n    <ion-item>\n        <ion-label color="primary" stacked>E-mail</ion-label>\n        <ion-input [(ngModel)]="mail" type="email" placeholder="E-mail"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Password</ion-label>\n        <ion-input [(ngModel)]="pass" type="password" placeholder="Password"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color="primary" stacked>Weight (kg)</ion-label>\n          <ion-input placeholder="Weight"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Birth date</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="myDate" placeholder="dd/mm/yyyy"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Gender</ion-label>\n        <ion-select placeholder="Choose your gender" [(ngModel)]="gender">\n          <ion-option value="f">Female</ion-option>\n          <ion-option value="m">Male</ion-option>\n        </ion-select>\n      </ion-item>\n      <button ion-button full (click)="register()">Register</button>\n      <ion-list>\n          <ion-item>\n            <ion-label>I agree to send data</ion-label>\n            <ion-checkbox [(ngModel)]="agreement" placeholder="Data"></ion-checkbox>\n          </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Koen Backup\Documenten\School\2017-2018\International Project\AlcoMeter02\IP18-AlcoMeter02\AlcoMeter\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BluetoothPage = (function () {
    function BluetoothPage(bluetoothSerial, alertCtrl) {
        this.bluetoothSerial = bluetoothSerial;
        this.alertCtrl = alertCtrl;
        this.success = function (data) { return alert(data); };
        this.fail = function (error) { return alert(error); };
        bluetoothSerial.enable();
    }
    BluetoothPage.prototype.startScanning = function () {
        var _this = this;
        this.pairedDevices = null;
        this.unpairedDevices = null;
        this.gettingDevices = true;
        this.bluetoothSerial.discoverUnpaired().then(function (success) {
            _this.unpairedDevices = success;
            _this.gettingDevices = false;
            success.forEach(function (element) {
                // alert(element.name);
            });
        }, function (err) {
            console.log(err);
        });
        this.bluetoothSerial.list().then(function (success) {
            _this.pairedDevices = success;
        }, function (err) {
        });
    };
    BluetoothPage.prototype.selectDevice = function (address) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Connect',
            message: 'Do you want to connect with?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Connect',
                    handler: function () {
                        _this.bluetoothSerial.connect(address).subscribe(_this.success, _this.fail);
                    }
                }
            ]
        });
        alert.present();
    };
    BluetoothPage.prototype.disconnect = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Disconnect?',
            message: 'Do you want to Disconnect?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Disconnect',
                    handler: function () {
                        _this.bluetoothSerial.disconnect();
                    }
                }
            ]
        });
        alert.present();
    };
    BluetoothPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bluetooth',template:/*ion-inline-start:"E:\Koen Backup\Documenten\School\2017-2018\International Project\AlcoMeter02\IP18-AlcoMeter02\AlcoMeter\src\pages\bluetooth\bluetooth.html"*/'<ion-list padding>\n  <button ion-button block (click)="startScanning()">scan</button>\n  <ion-list-header>\n    Paired Devices\n  </ion-list-header>\n  <ion-item *ngFor="let device of pairedDevices">\n    {{device.name}}\n  </ion-item>\n  <button ion-button block (click)="disconnect()">Disconnect</button>\n  <ion-list-header>\n    availlable Devices\n  </ion-list-header>\n  <ion-item *ngFor=\'let device of unpairedDevices\'>\n    <span (click)="selectDevice(device.address)">\n      {{device.name}}\n    </span>\n  </ion-item>\n  <ion-spinner name="crescent" *ngIf="gettingDevices"></ion-spinner>\n</ion-list>\n'/*ion-inline-end:"E:\Koen Backup\Documenten\School\2017-2018\International Project\AlcoMeter02\IP18-AlcoMeter02\AlcoMeter\src\pages\bluetooth\bluetooth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], BluetoothPage);
    return BluetoothPage;
}());

//# sourceMappingURL=bluetooth.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_bluetooth_serial__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_app__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_bluetooth_bluetooth__ = __webpack_require__(283);
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
__WEBPACK_IMPORTED_MODULE_9_firebase_app__["initializeApp"](firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bluetooth_bluetooth__["a" /* BluetoothPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bluetooth_bluetooth__["a" /* BluetoothPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(281);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Koen Backup\Documenten\School\2017-2018\International Project\AlcoMeter02\IP18-AlcoMeter02\AlcoMeter\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Koen Backup\Documenten\School\2017-2018\International Project\AlcoMeter02\IP18-AlcoMeter02\AlcoMeter\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map