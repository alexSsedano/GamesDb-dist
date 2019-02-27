(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");





var routes = [
    { path: '', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
    { path: 'ps4', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
    { path: 'xbox', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
    { path: 'pc', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
    { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"] },
    { path: '**', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footrer></app-footrer>\n\n    \n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FST';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _second_comp_second_comp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./second-comp/second-comp.component */ "./src/app/second-comp/second-comp.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _footrer_footrer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footrer/footrer.component */ "./src/app/footrer/footrer.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _filtro_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filtro.pipe */ "./src/app/filtro.pipe.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _second_comp_second_comp_component__WEBPACK_IMPORTED_MODULE_6__["SecondCompComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"],
                _footrer_footrer_component__WEBPACK_IMPORTED_MODULE_10__["FootrerComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"],
                _filtro_pipe__WEBPACK_IMPORTED_MODULE_12__["FiltroPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main [ngStyle]=style>\n    \n  <div class=\"container\" >\n      <button class=\"btn btn-secondary\" (click)=\"mode()\">Style</button>\n    <div class=\"row card-contain text-center m-auto\">\n        \n        <div *ngFor=\"let game of gamesApi.games\" class=\"card col-md-4 col-24 text-center mt-4\" style=\"width: 18rem;\">    \n          <img class=\"card-img-top\" src=\"{{game.image.medium_url}}\" alt=\"Card image cap\" style=\"height: 18rem;\">\n          \n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ game.name }}</h5>\n            <p class=\"card-text\">{{game.original_release_date }}</p>\n            <button routerLink=\"/info\" type=\"button\"(click)=\"gamesApi.setGame( game.name );\" class=\"btn btn-primary\">Info</button>\n          </div>\n        </div>\n      </div>\n  </div> \n\n\n</main>"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selector.service */ "./src/app/selector.service.ts");




var ContentComponent = /** @class */ (function () {
    function ContentComponent(gamesApi, activatedRoute) {
        this.gamesApi = gamesApi;
        this.activatedRoute = activatedRoute;
        this.night = false;
    }
    ContentComponent.prototype.mode = function () {
        if (this.night == false) {
            this.night = true;
            console.log(this.night);
            this.style = {
                backgroundColor: 'black'
            };
        }
        else {
            this.night = false;
            console.log(this.night);
            this.style = {
                backgroundColor: 'white'
            };
        }
    };
    ContentComponent.prototype.ngOnInit = function () {
        var url = this.activatedRoute.snapshot['_routerState'].url;
        switch (url) {
            case '/ps4':
                this.gamesApi.getPs4();
                break;
            case '/xbox':
                this.gamesApi.getXbox();
                break;
            case '/pc':
                this.gamesApi.getPc();
                break;
            default:
                this.gamesApi.getPs4();
        }
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_selector_service__WEBPACK_IMPORTED_MODULE_3__["SelectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/datos.service.ts":
/*!**********************************!*\
  !*** ./src/app/datos.service.ts ***!
  \**********************************/
/*! exports provided: DatosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosService", function() { return DatosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatosService = /** @class */ (function () {
    function DatosService() {
        this.datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    DatosService.prototype.getDatos = function () {
        return this.datos;
    };
    DatosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatosService);
    return DatosService;
}());



/***/ }),

/***/ "./src/app/filtro.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filtro.pipe.ts ***!
  \********************************/
/*! exports provided: FiltroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroPipe", function() { return FiltroPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FiltroPipe = /** @class */ (function () {
    function FiltroPipe() {
    }
    FiltroPipe.prototype.transform = function (value) {
        var newStr = "";
        for (var i = 0; i <= value.length - 9; i++) {
            newStr += value.charAt(i);
        }
        return newStr;
    };
    FiltroPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filtro'
        })
    ], FiltroPipe);
    return FiltroPipe;
}());



/***/ }),

/***/ "./src/app/footrer/footrer.component.css":
/*!***********************************************!*\
  !*** ./src/app/footrer/footrer.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3RyZXIvZm9vdHJlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/footrer/footrer.component.html":
/*!************************************************!*\
  !*** ./src/app/footrer/footrer.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between\">\n  <div class=\"container\">\n  \n    <p><small >Developed by Alejandro Sesano Sanchez</small></p>\n    <p><small>Code available on </small><small style=\"color:#00bc8c\" >GitHub </small></p>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/footrer/footrer.component.ts":
/*!**********************************************!*\
  !*** ./src/app/footrer/footrer.component.ts ***!
  \**********************************************/
/*! exports provided: FootrerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootrerComponent", function() { return FootrerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FootrerComponent = /** @class */ (function () {
    function FootrerComponent() {
    }
    FootrerComponent.prototype.ngOnInit = function () {
    };
    FootrerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footrer',
            template: __webpack_require__(/*! ./footrer.component.html */ "./src/app/footrer/footrer.component.html"),
            styles: [__webpack_require__(/*! ./footrer.component.css */ "./src/app/footrer/footrer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FootrerComponent);
    return FootrerComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">Game DB</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/ps4\" class=\"nav-link\">PS4</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"/xbox\" class=\"nav-link\">Xbox</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"/pc\" class=\"nav-link\">Pc</a>\n      </li>\n    </ul>\n  </div>\n \n      \n      \n   \n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n          <img class=\"card-img-top\" src=\"{{gamesApi.gameInfo.image.super_url}}\" alt=\"Card image cap\" > \n      </div>\n      <div class=\"col\">\n        <h1>Name: {{gamesApi.gameInfo.name}}</h1>\n        <p class=\"mb-0\">Release date: {{gamesApi.gameInfo.original_release_date | filtro}}</p>\n        <h1>Platfoms:</h1>\n        <ul>\n        <li *ngFor=\"let platform of gamesApi.gameInfo.platforms\">   \n            <p class=\"mb-0\"> {{platform.name}}</p> \n        </li>\n      </ul>\n      </div>\n    </div>\n    \n  </div>\n\n\n \n\n\n"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selector.service */ "./src/app/selector.service.ts");




var InfoComponent = /** @class */ (function () {
    function InfoComponent(gamesApi, activatedRoute) {
        this.gamesApi = gamesApi;
        this.activatedRoute = activatedRoute;
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_selector_service__WEBPACK_IMPORTED_MODULE_3__["SelectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/second-comp/second-comp.component.css":
/*!*******************************************************!*\
  !*** ./src/app/second-comp/second-comp.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY29uZC1jb21wL3NlY29uZC1jb21wLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/second-comp/second-comp.component.html":
/*!********************************************************!*\
  !*** ./src/app/second-comp/second-comp.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div *ngIf=\"hero\" >{{hero.name}}</div>\n  <ul>\n    <li *ngFor=\"let element of elements\">{{element}}</li>\n  </ul>\n  <button (click)=\"sayHi()\">Say hi</button>\n\n  <input [(ngModel)]=\"name\">\n  {{name}}\n  <a routerLink=\"/second\">aaaaaaaaaaaaaaaaaaaaaaaang</a>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/second-comp/second-comp.component.ts":
/*!******************************************************!*\
  !*** ./src/app/second-comp/second-comp.component.ts ***!
  \******************************************************/
/*! exports provided: SecondCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondCompComponent", function() { return SecondCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datos.service */ "./src/app/datos.service.ts");



var SecondCompComponent = /** @class */ (function () {
    function SecondCompComponent(datos) {
        this.datos = datos;
        this.elements = [];
        this.datito = 'miDato';
        this.name = "";
        this.hero = {
            name: "megapoIIon"
        };
        this.elements = datos.getDatos();
    }
    SecondCompComponent.prototype.sayHi = function () {
        console.log("hi");
    };
    SecondCompComponent.prototype.ngOnInit = function () {
    };
    SecondCompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second-comp',
            template: __webpack_require__(/*! ./second-comp.component.html */ "./src/app/second-comp/second-comp.component.html"),
            styles: [__webpack_require__(/*! ./second-comp.component.css */ "./src/app/second-comp/second-comp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_datos_service__WEBPACK_IMPORTED_MODULE_2__["DatosService"]])
    ], SecondCompComponent);
    return SecondCompComponent;
}());



/***/ }),

/***/ "./src/app/selector.service.ts":
/*!*************************************!*\
  !*** ./src/app/selector.service.ts ***!
  \*************************************/
/*! exports provided: SelectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorService", function() { return SelectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SelectorService = /** @class */ (function () {
    function SelectorService(http) {
        this.http = http;
        this.games = [];
        this.gameInfo = [];
    }
    SelectorService.prototype.getPs4 = function () {
        var _this = this;
        this.http.get('https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?format=json&api_key=ef0df76d8cf4a0ceecaac46879b4fc3a0c103436&filter=platforms:146&limit=10')
            .subscribe(function (data) {
            _this.games = (data['results']);
        });
    };
    SelectorService.prototype.getPc = function () {
        var _this = this;
        this.http.get('https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?format=json&api_key=ef0df76d8cf4a0ceecaac46879b4fc3a0c103436&filter=platforms:75&limit=10')
            .subscribe(function (data) {
            _this.games = (data['results']);
        });
    };
    SelectorService.prototype.getXbox = function () {
        var _this = this;
        this.http.get('https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?format=json&api_key=ef0df76d8cf4a0ceecaac46879b4fc3a0c103436&filter=platforms:145&limit=10')
            .subscribe(function (data) {
            _this.games = (data['results']);
        });
    };
    SelectorService.prototype.setGame = function (name) {
        for (var i = 0; i <= this.games.length - 1; i++) {
            if (this.games[i].name == name) {
                this.gameInfo = this.games[i];
            }
        }
    };
    SelectorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SelectorService);
    return SelectorService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\arcai\OneDrive\2 DAW\DWEC\Angular\GamesDb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map