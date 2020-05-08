(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _layout_search_shows_search_shows_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/search-shows/search-shows.component */ "./src/app/layout/search-shows/search-shows.component.ts");
/* harmony import */ var _layout_show_details_show_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/show-details/show-details.component */ "./src/app/layout/show-details/show-details.component.ts");
/* harmony import */ var _layout_show_episodes_show_episodes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/show-episodes/show-episodes.component */ "./src/app/layout/show-episodes/show-episodes.component.ts");
/* harmony import */ var _layout_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/login/login.component */ "./src/app/layout/login/login.component.ts");









var routes = [
    { path: 'login', component: _layout_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'search', component: _layout_search_shows_search_shows_component__WEBPACK_IMPORTED_MODULE_3__["SearchShowsComponent"] },
    { path: 'details/:id', component: _layout_show_details_show_details_component__WEBPACK_IMPORTED_MODULE_4__["ShowDetailsComponent"] },
    { path: ':id/episodes/:season', component: _layout_show_episodes_show_episodes_component__WEBPACK_IMPORTED_MODULE_5__["ShowEpisodesComponent"] },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ "./src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'lynx';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        } }, directives: [_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _layout_search_shows_search_shows_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/search-shows/search-shows.module */ "./src/app/layout/search-shows/search-shows.module.ts");
/* harmony import */ var _layout_show_details_show_details_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/show-details/show-details.module */ "./src/app/layout/show-details/show-details.module.ts");
/* harmony import */ var _layout_show_episodes_show_episodes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/show-episodes/show-episodes.module */ "./src/app/layout/show-episodes/show-episodes.module.ts");
/* harmony import */ var _layout_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/navbar/navbar.module */ "./src/app/layout/navbar/navbar.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/token.interceptor */ "./src/app/shared/token.interceptor.ts");
/* harmony import */ var _layout_login_login_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/login/login.module */ "./src/app/layout/login/login.module.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _shared_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"], multi: true },
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _layout_search_shows_search_shows_module__WEBPACK_IMPORTED_MODULE_5__["SearchShowsModule"],
                _layout_show_details_show_details_module__WEBPACK_IMPORTED_MODULE_6__["ShowDetailsModule"],
                _layout_show_episodes_show_episodes_module__WEBPACK_IMPORTED_MODULE_7__["ShowEpisodesModule"],
                _layout_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
                _layout_login_login_module__WEBPACK_IMPORTED_MODULE_11__["LoginModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _layout_search_shows_search_shows_module__WEBPACK_IMPORTED_MODULE_5__["SearchShowsModule"],
        _layout_show_details_show_details_module__WEBPACK_IMPORTED_MODULE_6__["ShowDetailsModule"],
        _layout_show_episodes_show_episodes_module__WEBPACK_IMPORTED_MODULE_7__["ShowEpisodesModule"],
        _layout_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
        _layout_login_login_module__WEBPACK_IMPORTED_MODULE_11__["LoginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _layout_search_shows_search_shows_module__WEBPACK_IMPORTED_MODULE_5__["SearchShowsModule"],
                    _layout_show_details_show_details_module__WEBPACK_IMPORTED_MODULE_6__["ShowDetailsModule"],
                    _layout_show_episodes_show_episodes_module__WEBPACK_IMPORTED_MODULE_7__["ShowEpisodesModule"],
                    _layout_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
                    _layout_login_login_module__WEBPACK_IMPORTED_MODULE_11__["LoginModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _shared_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"], multi: true },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/login/login-backend.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/login/login-backend.service.ts ***!
  \*******************************************************/
/*! exports provided: LoginBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackendService", function() { return LoginBackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_handleError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/handleError */ "./src/app/shared/handleError.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");






var LoginBackendService = /** @class */ (function () {
    function LoginBackendService(http) {
        this.http = http;
    }
    LoginBackendService.prototype.getToken = function (apikey, userkey, username) {
        var item = {
            apikey: apikey,
            userkey: userkey,
            username: username
        };
        return this.http.post(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["apiBaseUrl"] + "/login", item, _shared_constants__WEBPACK_IMPORTED_MODULE_1__["httpPostOptions"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return console.log("token requested"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_shared_handleError__WEBPACK_IMPORTED_MODULE_3__["handleError"])('getToken')));
    };
    LoginBackendService.ɵfac = function LoginBackendService_Factory(t) { return new (t || LoginBackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
    LoginBackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginBackendService, factory: LoginBackendService.ɵfac, providedIn: 'root' });
    return LoginBackendService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginBackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/layout/login/login.service.ts");



// TODO this in not properly implemted. Neither the logic, nor the design
var LoginComponent = /** @class */ (function () {
    function LoginComponent(service) {
        this.service = service;
    }
    LoginComponent.prototype.login = function () {
        this.service.loadToken();
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 10, vars: 0, consts: [[1, "h-100", "d-flex", "justify-content-center", "align-items-center"], [1, "login-form"], [1, "d-flex", "justify-content-center", "align-items-center", "h-25"], [1, "h2"], [1, "d-flex", "justify-content-center", "align-items-center", "h-75"], [1, "w-75"], [1, "btn", "w-100", "btn-success", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Login to TV Shows ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_8_listener() { return ctx.login(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Login as guest");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".login-form[_ngcontent-%COMP%] {\n  width: 360px;\n  height: 400px;\n  background: #444;\n  box-shadow: 4px 5px 5px #333;\n  color: #808080;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xvZ2luL0Q6XFxwcm9qZWN0c1xcdGVjaG5pY2FsLWNoYWxsZW5nZS9zcmNcXGFwcFxcbGF5b3V0XFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIHtcclxuICB3aWR0aDogMzYwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjNDQ0O1xyXG4gIGJveC1zaGFkb3c6IDRweCA1cHggNXB4ICMzMzM7XHJcbiAgY29sb3I6ICM4MDgwODA7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiIsIi5sb2dpbi1mb3JtIHtcbiAgd2lkdGg6IDM2MHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICBib3gtc2hhZG93OiA0cHggNXB4IDVweCAjMzMzO1xuICBjb2xvcjogIzgwODA4MDtcbn0iXX0= */"] });
    return LoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/layout/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
    LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]] });
    return LoginModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ],
                exports: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/login/login.service.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/login/login.service.ts ***!
  \***********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _login_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-backend.service */ "./src/app/layout/login/login-backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var LoginService = /** @class */ (function () {
    function LoginService(backendService, router) {
        this.backendService = backendService;
        this.router = router;
        this.token$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    // todo fetch actual values from user inputs, this is a temporary workaround to be able to log in
    LoginService.prototype.loadToken = function () {
        var _this = this;
        this.backendService.getToken('8d78281694597960adbbfa53723e6587', '5EA69128B1BD67.52508310', 'Maximilian Both')
            .subscribe(function (result) {
            _this.setToken(result.token);
            _this.router.navigate(['/search']);
        });
    };
    LoginService.prototype.setToken = function (token) {
        this.token$.next(token);
    };
    Object.defineProperty(LoginService.prototype, "token", {
        get: function () {
            return this.token$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginService.prototype, "_token", {
        get: function () {
            return this.token$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_backend_service__WEBPACK_IMPORTED_MODULE_2__["LoginBackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
    return LoginService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _login_backend_service__WEBPACK_IMPORTED_MODULE_2__["LoginBackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _search_shows_search_shows_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-shows/search-shows.service */ "./src/app/layout/search-shows/search-shows.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm5/angular-fontawesome.js");
/* harmony import */ var _search_shows_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search-shows/search-form/search-form.component */ "./src/app/layout/search-shows/search-form/search-form.component.ts");










function NavbarComponent_nav_0_app_search_form_3_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchValueChange", function NavbarComponent_nav_0_app_search_form_3_Template_app_search_form_searchValueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.onSearchValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_nav_0_app_search_form_3_Template, 1, 0, "app-search-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_nav_0_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.displaySearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faSignOutAlt);
} }
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(searchShowsService, router) {
        var _this = this;
        this.searchShowsService = searchShowsService;
        this.router = router;
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignOutAlt"];
        this.router.events.subscribe(function (value) {
            if (value instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                console.log(value.url); // your current route
                if (value.url === '/search') {
                    _this.displaySearch = true;
                }
                else {
                    _this.displaySearch = false;
                }
                if (value.url === '/login') {
                    _this.displayNavbar = false;
                }
                else {
                    _this.displayNavbar = true;
                }
            }
        });
    }
    NavbarComponent.prototype.onSearchValueChange = function (value) {
        this.searchShowsService.searchShows(value);
    };
    NavbarComponent.prototype.logout = function () {
        this.searchShowsService.setShowList(null);
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_shows_search_shows_service__WEBPACK_IMPORTED_MODULE_3__["SearchShowsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 1, vars: 1, consts: [["class", "navbar navbar-dark bg-dark sticky-top", 4, "ngIf"], [1, "navbar", "navbar-dark", "bg-dark", "sticky-top"], ["routerLink", "/search", 1, "navbar-brand", "mr-auto"], ["alt", "logo", "src", "./assets/img/television-icon.png", 1, "img-fluid", "logo"], [3, "searchValueChange", 4, "ngIf"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link", "text-success", "pl-3", 3, "click"], [1, "text-success"], [3, "icon"], [3, "searchValueChange"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_nav_0_Template, 9, 2, "nav", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayNavbar);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _search_shows_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_7__["SearchFormComponent"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdmJhci9EOlxccHJvamVjdHNcXHRlY2huaWNhbC1jaGFsbGVuZ2Uvc3JjXFxhcHBcXGxheW91dFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG4iLCIubG9nbyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59Il19 */"] });
    return NavbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _search_shows_search_shows_service__WEBPACK_IMPORTED_MODULE_3__["SearchShowsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component */ "./src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _search_shows_search_shows_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-shows/search-shows.module */ "./src/app/layout/search-shows/search-shows.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");







var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavbarModule });
    NavbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavbarModule_Factory(t) { return new (t || NavbarModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _search_shows_search_shows_module__WEBPACK_IMPORTED_MODULE_4__["SearchShowsModule"],
            ]] });
    return NavbarModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavbarModule, { declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _search_shows_search_shows_module__WEBPACK_IMPORTED_MODULE_4__["SearchShowsModule"]], exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _search_shows_search_shows_module__WEBPACK_IMPORTED_MODULE_4__["SearchShowsModule"],
                ],
                exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/search-shows/search-form/search-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/search-shows/search-form/search-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm5/angular-fontawesome.js");





var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent() {
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.searchValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent.prototype.onSubmit = function () {
        this.searchValueChange.emit(this.searchValue);
    };
    SearchFormComponent.ɵfac = function SearchFormComponent_Factory(t) { return new (t || SearchFormComponent)(); };
    SearchFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchFormComponent, selectors: [["app-search-form"]], outputs: { searchValueChange: "searchValueChange" }, decls: 10, vars: 4, consts: [[1, ""], [1, "d-flex", "flex-row", "border", "border-light", 3, "ngSubmit"], ["searchShows", "ngForm"], ["type", "text", "placeholder", "Search for TV Shows", "required", "", "name", "shows", 1, "form-control", "form-control-sm", "text-white", "bg-dark", "flex-grow-1", "border-0", 3, "ngModel", "ngModelChange"], ["shows", "ngModel"], ["type", "submit", "title", "Clear Input", 1, "btn-success", 3, "disabled"], [1, "d-flex", "justify-content-center"], [3, "icon"], [1, "alert", "bg-transparent", "text-danger", "small", 3, "hidden"]], template: function SearchFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchFormComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchFormComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchValue = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Description is required ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZWFyY2gtc2hvd3Mvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });
    return SearchFormComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-form',
                templateUrl: './search-form.component.html',
                styleUrls: ['./search-form.component.scss']
            }]
    }], function () { return []; }, { searchValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/layout/search-shows/search-shows-backend.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/search-shows/search-shows-backend.service.ts ***!
  \*********************************************************************/
/*! exports provided: SearchShowsBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchShowsBackendService", function() { return SearchShowsBackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_handleError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/handleError */ "./src/app/shared/handleError.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");






var SearchShowsBackendService = /** @class */ (function () {
    function SearchShowsBackendService(http) {
        this.http = http;
    }
    SearchShowsBackendService.prototype.getShowsList = function (searchValue) {
        return this.http.get(_shared_constants__WEBPACK_IMPORTED_MODULE_3__["apiBaseUrl"] + "/search/series?name=" + searchValue)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) { return console.log('fetched shows'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(Object(_shared_handleError__WEBPACK_IMPORTED_MODULE_2__["handleError"])('getShowsList', { data: [] })));
    };
    SearchShowsBackendService.ɵfac = function SearchShowsBackendService_Factory(t) { return new (t || SearchShowsBackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
    SearchShowsBackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchShowsBackendService, factory: SearchShowsBackendService.ɵfac, providedIn: 'root' });
    return SearchShowsBackendService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchShowsBackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/search-shows/search-shows.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/search-shows/search-shows.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchShowsComponent", function() { return SearchShowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _search_shows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-shows.service */ "./src/app/layout/search-shows/search-shows.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.service */ "./src/app/layout/login/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _show_card_show_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-card/show-card.component */ "./src/app/layout/search-shows/show-card/show-card.component.ts");









function SearchShowsComponent_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-show-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var show_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tvShow", show_r4);
} }
function SearchShowsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchShowsComponent_div_1_li_2_Template, 2, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-pagination", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function SearchShowsComponent_div_1_Template_ngb_pagination_pageChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 7, ctx_r0.tvShows, (ctx_r0.page - 1) * ctx_r0.pageSize, (ctx_r0.page - 1) * ctx_r0.pageSize + ctx_r0.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx_r0.tvShows.length)("page", ctx_r0.page)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", false);
} }
function SearchShowsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Welcome! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "This page is created with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " and powered by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The TvDb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search for your favourite shows, by simply typing the name in top bar and hitting enter or clicking the search button with the mouse. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var SearchShowsComponent = /** @class */ (function () {
    function SearchShowsComponent(service, router, loginService) {
        this.service = service;
        this.router = router;
        this.loginService = loginService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.page = 1;
        this.pageSize = 10;
    }
    SearchShowsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.add(this.service.showsList
            .subscribe(function (result) {
            _this.tvShows = result;
        }));
        this.subscriptions.add(this.loginService._token
            .subscribe(function (result) {
            if (!result) {
                _this.router.navigate(['/login']);
            }
        }));
    };
    SearchShowsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    SearchShowsComponent.ɵfac = function SearchShowsComponent_Factory(t) { return new (t || SearchShowsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_shows_service__WEBPACK_IMPORTED_MODULE_2__["SearchShowsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"])); };
    SearchShowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchShowsComponent, selectors: [["app-search-shows"]], decls: 4, vars: 2, consts: [[1, "container"], [4, "ngIf", "ngIfElse"], ["noSearchValue", ""], [1, "list-group"], ["class", "list-group-item bg-transparent ", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", 3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"], [1, "list-group-item", "bg-transparent"], [3, "tvShow"], [1, "mt-5", "position-relative"], ["alt", "My image name", "src", "./assets/img/main_page.jpg", 1, "img-fluid"], [1, "position-absolute", "logo-title-caption", "h2"], [1, "position-absolute", "logo-caption"], ["href", "https://angular.io/", "target", "_blank"], ["href", "https://www.thetvdb.com/", "target", "_blank"]], template: function SearchShowsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchShowsComponent_div_1_Template, 5, 11, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchShowsComponent_ng_template_2_Template, 16, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tvShows)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"], _show_card_show_card_component__WEBPACK_IMPORTED_MODULE_7__["ShowCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: ["ul.pagination li.page-item a.page-link {\n  background: #000000;\n  border-color: #28a745;\n}\n\n.logo-title-caption {\n  top: 15px;\n  left: 15px;\n  color: #ccffcc;\n}\n\n.logo-caption {\n  bottom: 15px;\n  left: 15px;\n  color: #ccffcc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NlYXJjaC1zaG93cy9EOlxccHJvamVjdHNcXHRlY2huaWNhbC1jaGFsbGVuZ2Uvc3JjXFxhcHBcXGxheW91dFxcc2VhcmNoLXNob3dzXFxzZWFyY2gtc2hvd3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZWFyY2gtc2hvd3Mvc2VhcmNoLXNob3dzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ0ROOztBRE1BO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZWFyY2gtc2hvd3Mvc2VhcmNoLXNob3dzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwucGFnaW5hdGlvbiB7XHJcbiAgbGkucGFnZS1pdGVte1xyXG4gICAgYS5wYWdlLWxpbmsge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nby10aXRsZS1jYXB0aW9uIHtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICBjb2xvcjogI2NjZmZjYztcclxufVxyXG5cclxuLmxvZ28tY2FwdGlvbiB7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgY29sb3I6ICNjY2ZmY2M7XHJcbn1cclxuIiwidWwucGFnaW5hdGlvbiBsaS5wYWdlLWl0ZW0gYS5wYWdlLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG59XG5cbi5sb2dvLXRpdGxlLWNhcHRpb24ge1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGNvbG9yOiAjY2NmZmNjO1xufVxuXG4ubG9nby1jYXB0aW9uIHtcbiAgYm90dG9tOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICBjb2xvcjogI2NjZmZjYztcbn0iXX0= */"], encapsulation: 2 });
    return SearchShowsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchShowsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-shows',
                templateUrl: './search-shows.component.html',
                styleUrls: ['./search-shows.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _search_shows_service__WEBPACK_IMPORTED_MODULE_2__["SearchShowsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/search-shows/search-shows.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/search-shows/search-shows.module.ts ***!
  \************************************************************/
/*! exports provided: SearchShowsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchShowsModule", function() { return SearchShowsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _search_shows_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-shows.component */ "./src/app/layout/search-shows/search-shows.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/layout/search-shows/search-form/search-form.component.ts");
/* harmony import */ var _show_card_show_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-card/show-card.component */ "./src/app/layout/search-shows/show-card/show-card.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");










var SearchShowsModule = /** @class */ (function () {
    function SearchShowsModule() {
    }
    SearchShowsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchShowsModule });
    SearchShowsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchShowsModule_Factory(t) { return new (t || SearchShowsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ]] });
    return SearchShowsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchShowsModule, { declarations: [_search_shows_component__WEBPACK_IMPORTED_MODULE_2__["SearchShowsComponent"], _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_4__["SearchFormComponent"], _show_card_show_card_component__WEBPACK_IMPORTED_MODULE_5__["ShowCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], exports: [_search_shows_component__WEBPACK_IMPORTED_MODULE_2__["SearchShowsComponent"], _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_4__["SearchFormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchShowsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_search_shows_component__WEBPACK_IMPORTED_MODULE_2__["SearchShowsComponent"], _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_4__["SearchFormComponent"], _show_card_show_card_component__WEBPACK_IMPORTED_MODULE_5__["ShowCardComponent"]],
                exports: [_search_shows_component__WEBPACK_IMPORTED_MODULE_2__["SearchShowsComponent"], _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_4__["SearchFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/search-shows/search-shows.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/search-shows/search-shows.service.ts ***!
  \*************************************************************/
/*! exports provided: SearchShowsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchShowsService", function() { return SearchShowsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _search_shows_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-shows-backend.service */ "./src/app/layout/search-shows/search-shows-backend.service.ts");




var SearchShowsService = /** @class */ (function () {
    function SearchShowsService(backendService) {
        this.backendService = backendService;
        this.showsList$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    SearchShowsService.prototype.searchShows = function (searchValue) {
        var _this = this;
        this.backendService.getShowsList(searchValue)
            .subscribe(function (result) {
            _this.setShowList(result.data);
        });
    };
    SearchShowsService.prototype.setShowList = function (value) {
        this.showsList$.next(value);
    };
    Object.defineProperty(SearchShowsService.prototype, "showsList", {
        get: function () {
            return this.showsList$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SearchShowsService.ɵfac = function SearchShowsService_Factory(t) { return new (t || SearchShowsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_search_shows_backend_service__WEBPACK_IMPORTED_MODULE_2__["SearchShowsBackendService"])); };
    SearchShowsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchShowsService, factory: SearchShowsService.ɵfac, providedIn: 'root' });
    return SearchShowsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchShowsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _search_shows_backend_service__WEBPACK_IMPORTED_MODULE_2__["SearchShowsBackendService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/search-shows/show-card/show-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/search-shows/show-card/show-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: ShowCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCardComponent", function() { return ShowCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _show_details_show_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../show-details/show-details.service */ "./src/app/layout/show-details/show-details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





function ShowCardComponent_p_13_span_3_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowCardComponent_p_13_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.showMore = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show More...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowCardComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShowCardComponent_p_13_span_3_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.showMore ? ctx_r0.tvShow.overview : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx_r0.tvShow.overview, 0, 600), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showMore);
} }
var ShowCardComponent = /** @class */ (function () {
    function ShowCardComponent(showDetailsService) {
        this.showDetailsService = showDetailsService;
        this.showMore = false;
    }
    ShowCardComponent.prototype.navigateToDetails = function (showId) {
        this.showDetailsService.loadDetails(showId);
        this.showDetailsService.loadSeasons(showId);
    };
    ShowCardComponent.ɵfac = function ShowCardComponent_Factory(t) { return new (t || ShowCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_show_details_show_details_service__WEBPACK_IMPORTED_MODULE_1__["ShowDetailsService"])); };
    ShowCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowCardComponent, selectors: [["app-show-card"]], inputs: { tvShow: "tvShow" }, decls: 14, vars: 7, consts: [[1, "bg-transparent", "border", "border-dark", "p-2", "d-flex", "flex-row", "align-items-stretch"], [1, "flex-grow-0", "px-2"], [3, "routerLink", "click"], ["alt", "logo", 1, "img-fluid", "show-card-image", 3, "src"], [1, "flex-grow-1", "px-2"], [1, "h4", 3, "routerLink", "click"], [1, "h6", "text-muted"], [1, ""], [4, "ngIf"], ["class", "text-muted cursor-pointer", 3, "click", 4, "ngIf"], [1, "text-muted", "cursor-pointer", 3, "click"]], template: function ShowCardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowCardComponent_Template_a_click_2_listener() { return ctx.navigateToDetails(ctx.tvShow.id); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowCardComponent_Template_a_click_6_listener() { return ctx.navigateToDetails(ctx.tvShow.id); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ShowCardComponent_p_13_Template, 4, 6, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/details/" + ctx.tvShow.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://artworks.thetvdb.com" + ctx.tvShow.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/details/" + ctx.tvShow.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tvShow.seriesName, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tvShow.network ? ctx.tvShow.network : "N/A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](",\u00A0", ctx.tvShow.firstAired ? ctx.tvShow.firstAired : "N/A", "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tvShow.overview);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".show-card-image[_ngcontent-%COMP%] {\n  max-height: 220px;\n  max-width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NlYXJjaC1zaG93cy9zaG93LWNhcmQvRDpcXHByb2plY3RzXFx0ZWNobmljYWwtY2hhbGxlbmdlL3NyY1xcYXBwXFxsYXlvdXRcXHNlYXJjaC1zaG93c1xcc2hvdy1jYXJkXFxzaG93LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZWFyY2gtc2hvd3Mvc2hvdy1jYXJkL3Nob3ctY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZWFyY2gtc2hvd3Mvc2hvdy1jYXJkL3Nob3ctY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93LWNhcmQtaW1hZ2Uge1xyXG4gIG1heC1oZWlnaHQ6IDIyMHB4O1xyXG4gIG1heC13aWR0aDogMTYwcHhcclxufVxyXG4iLCIuc2hvdy1jYXJkLWltYWdlIHtcbiAgbWF4LWhlaWdodDogMjIwcHg7XG4gIG1heC13aWR0aDogMTYwcHg7XG59Il19 */"] });
    return ShowCardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-card',
                templateUrl: './show-card.component.html',
                styleUrls: ['./show-card.component.scss']
            }]
    }], function () { return [{ type: _show_details_show_details_service__WEBPACK_IMPORTED_MODULE_1__["ShowDetailsService"] }]; }, { tvShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/layout/show-details/show-details-backend.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/show-details/show-details-backend.service.ts ***!
  \*********************************************************************/
/*! exports provided: ShowDetailsBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsBackendService", function() { return ShowDetailsBackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_handleError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/handleError */ "./src/app/shared/handleError.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");






var ShowDetailsBackendService = /** @class */ (function () {
    function ShowDetailsBackendService(http) {
        this.http = http;
    }
    ShowDetailsBackendService.prototype.getDetails = function (id) {
        return this.http.get(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["apiBaseUrl"] + "/series/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return console.log('fetched details'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_shared_handleError__WEBPACK_IMPORTED_MODULE_3__["handleError"])('getDetails', { data: [] })));
    };
    ShowDetailsBackendService.prototype.getSeasons = function (id) {
        return this.http.get(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["apiBaseUrl"] + "/series/" + id + "/episodes/summary")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return console.log('fetched seasons'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_shared_handleError__WEBPACK_IMPORTED_MODULE_3__["handleError"])('getSeasons', { data: [] })));
    };
    ShowDetailsBackendService.ɵfac = function ShowDetailsBackendService_Factory(t) { return new (t || ShowDetailsBackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
    ShowDetailsBackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowDetailsBackendService, factory: ShowDetailsBackendService.ɵfac, providedIn: 'root' });
    return ShowDetailsBackendService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowDetailsBackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/show-details/show-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/show-details/show-details.component.ts ***!
  \***************************************************************/
/*! exports provided: ShowDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsComponent", function() { return ShowDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _show_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-details.service */ "./src/app/layout/show-details/show-details.service.ts");
/* harmony import */ var _show_episodes_show_episodes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../show-episodes/show-episodes.service */ "./src/app/layout/show-episodes/show-episodes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.service */ "./src/app/layout/login/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_custom_rating_custom_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/custom-rating/custom-rating.component */ "./src/app/shared/custom-rating/custom-rating.component.ts");









function ShowDetailsComponent_div_0_div_35_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowDetailsComponent_div_0_div_35_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var season_r3 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r4.showEpisodes(ctx_r4.details.id, season_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var season_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Season ", season_r3, " ");
} }
function ShowDetailsComponent_div_0_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowDetailsComponent_div_0_div_35_li_2_Template, 2, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.seasonsList.airedSeasons);
} }
function ShowDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Airs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Air Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Genre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Rating: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-custom-rating", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ShowDetailsComponent_div_0_div_35_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.details.seriesName ? ctx_r0.details.seriesName : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.details.status ? ctx_r0.details.status : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.details.airsDayOfWeek ? ctx_r0.details.airsDayOfWeek : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.details.airsTime ? ctx_r0.details.airsTime : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.details.genre ? ctx_r0.details.genre : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r0.details.siteRating / 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r0.details.siteRating ? ctx_r0.details.siteRating : "N/A", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.details.overview ? ctx_r0.details.overview : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://artworks.thetvdb.com/banners/" + ctx_r0.details.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.seasonsList);
} }
var ShowDetailsComponent = /** @class */ (function () {
    function ShowDetailsComponent(service, episodesService, router, loginService) {
        this.service = service;
        this.episodesService = episodesService;
        this.router = router;
        this.loginService = loginService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ShowDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.add(this.service.details
            .subscribe(function (result) {
            _this.details = result;
        }));
        this.subscriptions.add(this.service.seasonsList
            .subscribe(function (result) {
            _this.seasonsList = result;
        }));
        // todo check if token exists with an guard and redirect to the main page based on that
        this.subscriptions.add(this.loginService._token
            .subscribe(function (result) {
            if (!result) {
                _this.router.navigate(['/login']);
            }
        }));
    };
    ShowDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    ShowDetailsComponent.prototype.showEpisodes = function (id, season) {
        this.router.navigate([id + "/episodes/" + season]);
        this.episodesService.loadEpisodes(season, this.details.id);
    };
    ShowDetailsComponent.ɵfac = function ShowDetailsComponent_Factory(t) { return new (t || ShowDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_show_details_service__WEBPACK_IMPORTED_MODULE_2__["ShowDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_show_episodes_show_episodes_service__WEBPACK_IMPORTED_MODULE_3__["ShowEpisodesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"])); };
    ShowDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowDetailsComponent, selectors: [["app-tv-shows-details"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "row", "p-3"], [1, "col-8", "card", "bg-transparent"], [1, "row"], [1, "col-9"], [1, "py-3"], [1, "h3"], [1, "font-weight-bold"], [3, "rate"], [1, "rating-text"], [1, "col-3"], ["alt", "logo", 1, "img-fluid", 3, "src"], ["class", "col-4 card bg-transparent seasons-list-wrapper", 4, "ngIf"], [1, "col-4", "card", "bg-transparent", "seasons-list-wrapper"], [1, "list-group"], ["class", "list-group-item bg-dark m-1 cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "bg-dark", "m-1", "cursor-pointer", 3, "click"]], template: function ShowDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowDetailsComponent_div_0_Template, 36, 10, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.details);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_custom_rating_custom_rating_component__WEBPACK_IMPORTED_MODULE_7__["CustomRatingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".seasons-list-wrapper[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 100px);\n  overflow-y: auto;\n  scrollbar-width: none;\n}\n.seasons-list-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 0;\n}\n.rating-text[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Nob3ctZGV0YWlscy9EOlxccHJvamVjdHNcXHRlY2huaWNhbC1jaGFsbGVuZ2Uvc3JjXFxhcHBcXGxheW91dFxcc2hvdy1kZXRhaWxzXFxzaG93LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zaG93LWRldGFpbHMvc2hvdy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURBSTtFQUF1QixXQUFBO0VBQ2xCLFFBQUE7QUNHVDtBRENBO0VBQ0ksaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaG93LWRldGFpbHMvc2hvdy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXNvbnMtbGlzdC13cmFwcGVyIHtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyAvKiBXZWJLaXQgKi9cclxuICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yYXRpbmctdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4iLCIuc2Vhc29ucy1saXN0LXdyYXBwZXIge1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG4uc2Vhc29ucy1saXN0LXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLyogV2ViS2l0ICovXG4gIHdpZHRoOiAwO1xufVxuXG4ucmF0aW5nLXRleHQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn0iXX0= */"] });
    return ShowDetailsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tv-shows-details',
                templateUrl: './show-details.component.html',
                styleUrls: ['./show-details.component.scss']
            }]
    }], function () { return [{ type: _show_details_service__WEBPACK_IMPORTED_MODULE_2__["ShowDetailsService"] }, { type: _show_episodes_show_episodes_service__WEBPACK_IMPORTED_MODULE_3__["ShowEpisodesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/show-details/show-details.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/show-details/show-details.module.ts ***!
  \************************************************************/
/*! exports provided: ShowDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsModule", function() { return ShowDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _show_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-details.component */ "./src/app/layout/show-details/show-details.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var ShowDetailsModule = /** @class */ (function () {
    function ShowDetailsModule() {
    }
    ShowDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowDetailsModule });
    ShowDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowDetailsModule_Factory(t) { return new (t || ShowDetailsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]] });
    return ShowDetailsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowDetailsModule, { declarations: [_show_details_component__WEBPACK_IMPORTED_MODULE_2__["ShowDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_show_details_component__WEBPACK_IMPORTED_MODULE_2__["ShowDetailsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowDetailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_show_details_component__WEBPACK_IMPORTED_MODULE_2__["ShowDetailsComponent"]],
                exports: [_show_details_component__WEBPACK_IMPORTED_MODULE_2__["ShowDetailsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/show-details/show-details.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/show-details/show-details.service.ts ***!
  \*************************************************************/
/*! exports provided: ShowDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsService", function() { return ShowDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _search_shows_search_shows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-shows/search-shows.service */ "./src/app/layout/search-shows/search-shows.service.ts");
/* harmony import */ var _show_details_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-details-backend.service */ "./src/app/layout/show-details/show-details-backend.service.ts");





var ShowDetailsService = /** @class */ (function () {
    function ShowDetailsService(searchShowsService, backendService) {
        this.searchShowsService = searchShowsService;
        this.backendService = backendService;
        this.details$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.seasonsList$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    ShowDetailsService.prototype.loadDetails = function (id) {
        // alert(id + this.searchShowsService.token);
        var _this = this;
        this.backendService.getDetails(id)
            .subscribe(function (result) {
            _this.setDetails(result.data);
        });
    };
    ShowDetailsService.prototype.setDetails = function (value) {
        this.details$.next(value);
    };
    Object.defineProperty(ShowDetailsService.prototype, "details", {
        get: function () {
            return this.details$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ShowDetailsService.prototype.loadSeasons = function (id) {
        var _this = this;
        this.backendService.getSeasons(id)
            .subscribe(function (result) {
            // this.setDetails(result.data);
            _this.setSeasons(result.data);
        });
    };
    ShowDetailsService.prototype.setSeasons = function (value) {
        this.seasonsList$.next(value);
    };
    Object.defineProperty(ShowDetailsService.prototype, "seasonsList", {
        get: function () {
            return this.seasonsList$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ShowDetailsService.ɵfac = function ShowDetailsService_Factory(t) { return new (t || ShowDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_search_shows_search_shows_service__WEBPACK_IMPORTED_MODULE_2__["SearchShowsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_show_details_backend_service__WEBPACK_IMPORTED_MODULE_3__["ShowDetailsBackendService"])); };
    ShowDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowDetailsService, factory: ShowDetailsService.ɵfac, providedIn: 'root' });
    return ShowDetailsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _search_shows_search_shows_service__WEBPACK_IMPORTED_MODULE_2__["SearchShowsService"] }, { type: _show_details_backend_service__WEBPACK_IMPORTED_MODULE_3__["ShowDetailsBackendService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/show-episodes/episodes-dialog/episodes-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/show-episodes/episodes-dialog/episodes-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EpisodesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesDialogComponent", function() { return EpisodesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");



var EpisodesDialogComponent = /** @class */ (function () {
    function EpisodesDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EpisodesDialogComponent.ɵfac = function EpisodesDialogComponent_Factory(t) { return new (t || EpisodesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
    EpisodesDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EpisodesDialogComponent, selectors: [["app-episodes-dialog"]], inputs: { episode: "episode" }, decls: 19, vars: 4, consts: [[1, "modal-header", "bg-dark"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "bg-dark"], [1, "d-flex", "justify-content-center"], ["alt", "banner", 1, "img-fluid", "w-100", 3, "src"], [1, "font-weight-bold"], [1, "modal-footer", "bg-dark"], ["type", "button", 1, "btn", "btn-success", 3, "click"]], template: function EpisodesDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EpisodesDialogComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Directors: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EpisodesDialogComponent_Template_button_click_17_listener() { return ctx.activeModal.close("Close click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.episode.episodeName ? ctx.episode.episodeName : "N/A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://artworks.thetvdb.com/banners/" + ctx.episode.filename, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.episode.directors ? ctx.episode.directors : "N/A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.episode.overview ? ctx.episode.overview : "N/A", " ");
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaG93LWVwaXNvZGVzL2VwaXNvZGVzLWRpYWxvZy9lcGlzb2Rlcy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });
    return EpisodesDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EpisodesDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-episodes-dialog',
                templateUrl: './episodes-dialog.component.html',
                styleUrls: ['./episodes-dialog.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { episode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/layout/show-episodes/show-episodes-backend.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/show-episodes/show-episodes-backend.service.ts ***!
  \***********************************************************************/
/*! exports provided: ShowEpisodesBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowEpisodesBackendService", function() { return ShowEpisodesBackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_handleError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/handleError */ "./src/app/shared/handleError.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");






var ShowEpisodesBackendService = /** @class */ (function () {
    function ShowEpisodesBackendService(http) {
        this.http = http;
    }
    ShowEpisodesBackendService.prototype.getEpisodes = function (id, season) {
        return this.http.get(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["apiBaseUrl"] + "/series/" + id + "/episodes/query?airedSeason=" + season)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return console.log('fetched seasons'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_shared_handleError__WEBPACK_IMPORTED_MODULE_3__["handleError"])('getSeasons', { data: [] })));
    };
    ShowEpisodesBackendService.ɵfac = function ShowEpisodesBackendService_Factory(t) { return new (t || ShowEpisodesBackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
    ShowEpisodesBackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowEpisodesBackendService, factory: ShowEpisodesBackendService.ɵfac, providedIn: 'root' });
    return ShowEpisodesBackendService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowEpisodesBackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/show-episodes/show-episodes.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/show-episodes/show-episodes.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowEpisodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowEpisodesComponent", function() { return ShowEpisodesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _episodes_dialog_episodes_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./episodes-dialog/episodes-dialog.component */ "./src/app/layout/show-episodes/episodes-dialog/episodes-dialog.component.ts");
/* harmony import */ var _show_episodes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-episodes.service */ "./src/app/layout/show-episodes/show-episodes.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.service */ "./src/app/layout/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_custom_rating_custom_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/custom-rating/custom-rating.component */ "./src/app/shared/custom-rating/custom-rating.component.ts");










function ShowEpisodesComponent_div_0_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First aired ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rating: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-custom-rating", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowEpisodesComponent_div_0_li_2_Template_p_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var episode_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.openDialog(episode_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Show more.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](episode_r2.episodeName ? episode_r2.episodeName : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, episode_r2.firstAired, "fullDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", episode_r2.siteRating / 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", episode_r2.siteRating ? episode_r2.siteRating : "N/A", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://artworks.thetvdb.com/banners/" + episode_r2.filename, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ShowEpisodesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowEpisodesComponent_div_0_li_2_Template, 21, 8, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-pagination", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ShowEpisodesComponent_div_0_Template_ngb_pagination_pageChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 7, ctx_r0.episodesList, (ctx_r0.page - 1) * ctx_r0.pageSize, (ctx_r0.page - 1) * ctx_r0.pageSize + ctx_r0.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx_r0.episodesList.length)("page", ctx_r0.page)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", false);
} }
var ShowEpisodesComponent = /** @class */ (function () {
    function ShowEpisodesComponent(service, modalService, loginService, router) {
        this.service = service;
        this.modalService = modalService;
        this.loginService = loginService;
        this.router = router;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.page = 1;
        this.pageSize = 10;
    }
    ShowEpisodesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.add(this.service.episodesList
            .subscribe(function (result) {
            _this.episodesList = result;
        }));
        // todo check if token exists with an guard and redirect to the main page based on that
        this.subscriptions.add(this.loginService._token
            .subscribe(function (result) {
            if (!result) {
                _this.router.navigate(['/login']);
            }
        }));
    };
    ShowEpisodesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    ShowEpisodesComponent.prototype.openDialog = function (episode) {
        var modalRef = this.modalService.open(_episodes_dialog_episodes_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EpisodesDialogComponent"]);
        modalRef.componentInstance.episode = episode;
    };
    ShowEpisodesComponent.ɵfac = function ShowEpisodesComponent_Factory(t) { return new (t || ShowEpisodesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_show_episodes_service__WEBPACK_IMPORTED_MODULE_3__["ShowEpisodesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
    ShowEpisodesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowEpisodesComponent, selectors: [["app-show-episodes"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "list-group", "m-2", "p-2"], ["class", "list-group-item bg-transparent", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", 3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"], [1, "list-group-item", "bg-transparent"], [1, "bg-transparent", "border", "border-dark", "p-2", "row"], [1, "col-md-8", "col-lg-8", "col-xl-8"], [1, "h3"], [1, "font-weight-bold"], [3, "rate"], [1, "rating-text"], [1, "text-muted", "cursor-pointer", 3, "click"], [1, "col-md-4", "col-lg-4", "col-xl-4"], ["alt", "banner", 1, "img-fluid", 3, "src"]], template: function ShowEpisodesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowEpisodesComponent_div_0_Template, 5, 11, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.episodesList);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPagination"], _shared_custom_rating_custom_rating_component__WEBPACK_IMPORTED_MODULE_8__["CustomRatingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".rating-text {\n  font-size: 1.5rem;\n}\n\nul.pagination li.page-item a.page-link {\n  background: #000000;\n  border-color: #28a745;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Nob3ctZXBpc29kZXMvRDpcXHByb2plY3RzXFx0ZWNobmljYWwtY2hhbGxlbmdlL3NyY1xcYXBwXFxsYXlvdXRcXHNob3ctZXBpc29kZXNcXHNob3ctZXBpc29kZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zaG93LWVwaXNvZGVzL3Nob3ctZXBpc29kZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREdJO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Nob3ctZXBpc29kZXMvc2hvdy1lcGlzb2Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYXRpbmctdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxudWwucGFnaW5hdGlvbiB7XHJcbiAgbGkucGFnZS1pdGVte1xyXG4gICAgYS5wYWdlLWxpbmsge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5yYXRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG51bC5wYWdpbmF0aW9uIGxpLnBhZ2UtaXRlbSBhLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbn0iXX0= */"], encapsulation: 2 });
    return ShowEpisodesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowEpisodesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-episodes',
                templateUrl: './show-episodes.component.html',
                styleUrls: ['./show-episodes.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _show_episodes_service__WEBPACK_IMPORTED_MODULE_3__["ShowEpisodesService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/show-episodes/show-episodes.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/show-episodes/show-episodes.module.ts ***!
  \**************************************************************/
/*! exports provided: ShowEpisodesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowEpisodesModule", function() { return ShowEpisodesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _show_episodes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-episodes.component */ "./src/app/layout/show-episodes/show-episodes.component.ts");
/* harmony import */ var _episodes_dialog_episodes_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episodes-dialog/episodes-dialog.component */ "./src/app/layout/show-episodes/episodes-dialog/episodes-dialog.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var ShowEpisodesModule = /** @class */ (function () {
    function ShowEpisodesModule() {
    }
    ShowEpisodesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowEpisodesModule });
    ShowEpisodesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowEpisodesModule_Factory(t) { return new (t || ShowEpisodesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]] });
    return ShowEpisodesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowEpisodesModule, { declarations: [_show_episodes_component__WEBPACK_IMPORTED_MODULE_2__["ShowEpisodesComponent"], _episodes_dialog_episodes_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EpisodesDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_show_episodes_component__WEBPACK_IMPORTED_MODULE_2__["ShowEpisodesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowEpisodesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_show_episodes_component__WEBPACK_IMPORTED_MODULE_2__["ShowEpisodesComponent"], _episodes_dialog_episodes_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EpisodesDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                exports: [_show_episodes_component__WEBPACK_IMPORTED_MODULE_2__["ShowEpisodesComponent"]],
                entryComponents: [_episodes_dialog_episodes_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EpisodesDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/show-episodes/show-episodes.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/show-episodes/show-episodes.service.ts ***!
  \***************************************************************/
/*! exports provided: ShowEpisodesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowEpisodesService", function() { return ShowEpisodesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _search_shows_search_shows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-shows/search-shows.service */ "./src/app/layout/search-shows/search-shows.service.ts");
/* harmony import */ var _show_episodes_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-episodes-backend.service */ "./src/app/layout/show-episodes/show-episodes-backend.service.ts");





var ShowEpisodesService = /** @class */ (function () {
    function ShowEpisodesService(searchShowsService, backendService) {
        this.searchShowsService = searchShowsService;
        this.backendService = backendService;
        this.episodesList$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    ShowEpisodesService.prototype.loadEpisodes = function (season, id) {
        var _this = this;
        this.backendService.getEpisodes(id, season)
            .subscribe(function (result) {
            _this.setEpisodes(result.data);
        });
    };
    ShowEpisodesService.prototype.setEpisodes = function (value) {
        this.episodesList$.next(value);
    };
    Object.defineProperty(ShowEpisodesService.prototype, "episodesList", {
        get: function () {
            return this.episodesList$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ShowEpisodesService.ɵfac = function ShowEpisodesService_Factory(t) { return new (t || ShowEpisodesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_search_shows_search_shows_service__WEBPACK_IMPORTED_MODULE_2__["SearchShowsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_show_episodes_backend_service__WEBPACK_IMPORTED_MODULE_3__["ShowEpisodesBackendService"])); };
    ShowEpisodesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowEpisodesService, factory: ShowEpisodesService.ɵfac, providedIn: 'root' });
    return ShowEpisodesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowEpisodesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _search_shows_search_shows_service__WEBPACK_IMPORTED_MODULE_2__["SearchShowsService"] }, { type: _show_episodes_backend_service__WEBPACK_IMPORTED_MODULE_3__["ShowEpisodesBackendService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/constants.ts":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: httpPostOptions, apiBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpPostOptions", function() { return httpPostOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiBaseUrl", function() { return apiBaseUrl; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");

var httpPostOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var apiBaseUrl = '/api';


/***/ }),

/***/ "./src/app/shared/custom-rating/custom-rating.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/custom-rating/custom-rating.component.ts ***!
  \*****************************************************************/
/*! exports provided: CustomRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRatingComponent", function() { return CustomRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");



function CustomRatingComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2605 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var fill_r2 = ctx.fill;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full", fill_r2 === 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", fill_r2, "%");
} }
var CustomRatingComponent = /** @class */ (function () {
    function CustomRatingComponent() {
    }
    CustomRatingComponent.ɵfac = function CustomRatingComponent_Factory(t) { return new (t || CustomRatingComponent)(); };
    CustomRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomRatingComponent, selectors: [["app-custom-rating"]], inputs: { rate: "rate" }, decls: 3, vars: 4, consts: [[3, "rate", "starTemplate", "readonly", "max", "rateChange"], ["ratingTemplate", ""], [1, "star"], [1, "half"]], template: function CustomRatingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-rating", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function CustomRatingComponent_Template_ngb_rating_rateChange_0_listener($event) { return ctx.rate = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomRatingComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.rate)("starTemplate", _r0)("readonly", true)("max", 5);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRating"]], styles: [".star[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 1.5rem;\n  color: #d3d3d3;\n}\n\n.full[_ngcontent-%COMP%] {\n  color: yellow;\n}\n\n.half[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: yellow;\n}\n\n.numeric-rate[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N1c3RvbS1yYXRpbmcvRDpcXHByb2plY3RzXFx0ZWNobmljYWwtY2hhbGxlbmdlL3NyY1xcYXBwXFxzaGFyZWRcXGN1c3RvbS1yYXRpbmdcXGN1c3RvbS1yYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jdXN0b20tcmF0aW5nL2N1c3RvbS1yYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDR0Y7O0FEQUE7RUFDRSxpQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2N1c3RvbS1yYXRpbmcvY3VzdG9tLXJhdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiAjZDNkM2QzO1xyXG59XHJcbi5mdWxsIHtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcbi5oYWxmIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLm51bWVyaWMtcmF0ZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG59XHJcbiIsIi5zdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2QzZDNkMztcbn1cblxuLmZ1bGwge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG4uaGFsZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogeWVsbG93O1xufVxuXG4ubnVtZXJpYy1yYXRlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59Il19 */"] });
    return CustomRatingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-rating',
                templateUrl: './custom-rating.component.html',
                styleUrls: ['./custom-rating.component.scss']
            }]
    }], function () { return []; }, { rate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/handleError.ts":
/*!***************************************!*\
  !*** ./src/app/shared/handleError.ts ***!
  \***************************************/
/*! exports provided: handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

function handleError(operation, result) {
    if (operation === void 0) { operation = 'operation'; }
    return function (error) {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
    };
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _custom_rating_custom_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-rating/custom-rating.component */ "./src/app/shared/custom-rating/custom-rating.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm5/angular-fontawesome.js");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
            ],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_custom_rating_custom_rating_component__WEBPACK_IMPORTED_MODULE_2__["CustomRatingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]], exports: [_custom_rating_custom_rating_component__WEBPACK_IMPORTED_MODULE_2__["CustomRatingComponent"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_custom_rating_custom_rating_component__WEBPACK_IMPORTED_MODULE_2__["CustomRatingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
                ],
                exports: [
                    _custom_rating_custom_rating_component__WEBPACK_IMPORTED_MODULE_2__["CustomRatingComponent"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/token.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/token.interceptor.ts ***!
  \*********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _layout_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/login/login.service */ "./src/app/layout/login/login.service.ts");



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(loginService) {
        this.loginService = loginService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var token = this.loginService.token;
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_layout_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
    TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
    return TokenInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _layout_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\technical-challenge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map