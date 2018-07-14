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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\t<app-header></app-header>\n\t<app-alerts></app-alerts>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  width: 100%; }\n\n.container-fluid {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n\n.alertsContainer .alertsRow {\n  border: 1px solid #ffc549; }\n\n.alertsContainer .alertsRow .iconpanel {\n  background: #ffc549;\n  color: #fff; }\n\n::ng-deep .alertsContainer .alertsRow .messagepanel {\n  color: #000;\n  background: #fff;\n  height: 51px !important; }\n\n.alertsContainer .alertsRow .closeicon {\n  color: #000; }\n\n.alertsContainer .alertsRow .closeicon a {\n  color: #000;\n  text-decoration: none;\n  font-size: 12px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { BootstrapAlertService } from 'ngx-bootstrap-alert-service';
// import { ToastMessageModel } from 'ngx-bootstrap-alert-service';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        // messageList: ToastMessageModel[] = [];
        // constructor(private bootstrapAlertService: BootstrapAlertService) {}
        // ngOnInit() {
        // 	this.bootstrapAlertService.getAlertEvent().subscribe(r => {
        // 		this.messageList.push(r);
        // 	});
        // }
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _my_recipes_my_recipes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-recipes/my-recipes.component */ "./src/app/my-recipes/my-recipes.component.ts");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ "./src/app/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _favorite_list_favorite_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./favorite-list/favorite-list.component */ "./src/app/favorite-list/favorite-list.component.ts");
/* harmony import */ var _favorite_detail_favorite_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./favorite-detail/favorite-detail.component */ "./src/app/favorite-detail/favorite-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    { path: 'my-favorites', component: _favorite_list_favorite_list_component__WEBPACK_IMPORTED_MODULE_16__["FavoriteListComponent"] },
    { path: 'my-recipes', component: _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_12__["RecipeListComponent"] },
    { path: 'my-recipes/:recipeId', component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_13__["RecipeDetailComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _my_recipes_my_recipes_component__WEBPACK_IMPORTED_MODULE_11__["MyRecipesComponent"],
                _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_12__["RecipeListComponent"],
                _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_13__["RecipeDetailComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _favorite_list_favorite_list_component__WEBPACK_IMPORTED_MODULE_16__["FavoriteListComponent"],
                _favorite_detail_favorite_detail_component__WEBPACK_IMPORTED_MODULE_17__["FavoriteDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
                angular_alert_module__WEBPACK_IMPORTED_MODULE_5__["AlertsModule"].forRoot()
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/favorite-detail/favorite-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/favorite-detail/favorite-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  favorite-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/favorite-detail/favorite-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/favorite-detail/favorite-detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/favorite-detail/favorite-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/favorite-detail/favorite-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: FavoriteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteDetailComponent", function() { return FavoriteDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavoriteDetailComponent = /** @class */ (function () {
    function FavoriteDetailComponent() {
    }
    FavoriteDetailComponent.prototype.ngOnInit = function () {
    };
    FavoriteDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorite-detail',
            template: __webpack_require__(/*! ./favorite-detail.component.html */ "./src/app/favorite-detail/favorite-detail.component.html"),
            styles: [__webpack_require__(/*! ./favorite-detail.component.scss */ "./src/app/favorite-detail/favorite-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FavoriteDetailComponent);
    return FavoriteDetailComponent;
}());



/***/ }),

/***/ "./src/app/favorite-list/favorite-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/favorite-list/favorite-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid my-recipes my-recipes-header\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<p class=\"sub-title\">Oh come on,<br> its your favorite.</p>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<table class=\"table table-hover\">\n\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t<tr class=\"text-center\">\n\t\t\t\t\t\t<th>Total Time</th>\n\t\t\t\t\t\t<th>Recipe</th>\n\t\t\t\t\t\t<th>Recipe Type</th>\n\t\t\t\t\t\t<!-- <th></th> -->\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr class=\"text-center\" *ngFor=\"let recipe of recipes\" [routerLink]=\"['/my-recipes',recipe._id]\">\n\t\t\t\t\t\t<td>{{recipe.time}}</td>\n\t\t\t\t\t\t<td>{{recipe.name}}</td>\n\t\t\t\t\t\t<td>{{recipe.type}}</td>\n\t\t\t\t\t\t<!-- <td></td> -->\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<p class=\"no-data\" *ngIf=\"!recipes || !recipes.length\">No Recipes</p>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/favorite-list/favorite-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/favorite-list/favorite-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-recipes {\n  background-image: url('veggies-cook.jpg');\n  background-position: top;\n  background-repeat: repeat; }\n  .my-recipes .sub-title {\n    padding-top: 80px;\n    padding-bottom: 80px;\n    text-align: center;\n    font-size: 30px;\n    font-weight: bold;\n    color: black;\n    padding-right: 80px; }\n"

/***/ }),

/***/ "./src/app/favorite-list/favorite-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/favorite-list/favorite-list.component.ts ***!
  \**********************************************************/
/*! exports provided: FavoriteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteListComponent", function() { return FavoriteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoriteListComponent = /** @class */ (function () {
    function FavoriteListComponent(api, router) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.api.searchRecipes({ favorite: true }).then(function (recipes) {
            _this.recipes = recipes;
        });
    }
    FavoriteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorite-list',
            template: __webpack_require__(/*! ./favorite-list.component.html */ "./src/app/favorite-list/favorite-list.component.html"),
            styles: [__webpack_require__(/*! ./favorite-list.component.scss */ "./src/app/favorite-list/favorite-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FavoriteListComponent);
    return FavoriteListComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\t<a class=\"navbar-brand logo\" href=\"#\">Get Cooking.</a>\n\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t</button>\n\t<div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n\t\t<ul class=\"navbar-nav\">\n\t\t\t<!-- <li class=\"nav-item active\">\n\t\t\t\t<a [routerLink]=\"''\"class=\"nav-link\" href=\"#\">Home<span class=\"sr-only\">(current)</span></a>\n\t\t\t</li> -->\n\t\t\t<!-- <li class=\"nav-item active\">\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"'my-recipes'\" href=\"#\">Recipes<span class=\"sr-only\">(current)</span></a>\n\t\t\t</li> -->\n\t\t\t<li class=\"nav-item active dropdown\">\n\t\t\t\t<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\tRecipes\n\t\t\t\t</a>\n\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n\t\t\t\t\t<a class=\"dropdown-item\" nav-item active [routerLink]=\"'my-recipes'\">All Recipes</a>\n\t\t\t\t\t<a class=\"dropdown-item\" [routerLink]=\"'my-favorites'\">Favorites</a>\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">Import</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t\t<ul class=\"navbar-nav position-right\">\n\t\t\t<li class=\"nav-item active\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/login\">Login</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item active\">\n\t\t\t\t<a class=\"nav-link\" href=\"#\">Sign Up</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding-left: 30px;\n  padding-right: 30px;\n  font-weight: bold; }\n\n.navbar-nav {\n  padding-left: 30px;\n  padding-right: 30px;\n  font-weight: bold; }\n\n.nav-right {\n  padding-right: 500px; }\n\n.position-right {\n  right: 30px;\n  position: absolute; }\n\n.logo {\n  color: maroon; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid hero-header\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12 title\">\n\t\t\t<h1><strong>GET BETTER,<br> AT WHAT YOU SUCK AT.</strong></h1>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero-header {\n  background-image: url('cooking-hero.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 400px; }\n  .hero-header .title {\n    text-align: center;\n    padding-top: 150px;\n    padding-bottom: 150px; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid section2\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12 title-login\">\n\t\t\t(Do yourself a favor)\n\t\t</div>\n\t\t<div class=\"col-sm-12 main-login\">\n\t\t\tlogin to get started.\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12 login\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-5\"></div>\n\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t<input placeholder=\"Username\" type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t<input placeholder=\"Password\" type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-5\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12 login-button text-center\">\n\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"login()\">Login</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  height: 900px;\n  padding-top: 280px;\n  padding-bottom: 280px;\n  background-image: url('cooking-hero.png');\n  background-position: center;\n  background-repeat: no-repeat; }\n  .container-fluid .title-login {\n    font-size: 25px;\n    text-align: center;\n    font-weight: bold; }\n  .container-fluid .main-login {\n    font-size: 35px;\n    text-align: center;\n    padding-bottom: 30px;\n    font-weight: bold; }\n  .container-fluid .login {\n    text-align: center; }\n  .container-fluid .btn-success {\n    background-color: maroon;\n    border: maroon; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, alerts) {
        this.router = router;
        this.alerts = alerts;
        // this.alerts.setDefaults('timeout',0);
    }
    LoginComponent.prototype.login = function () {
        this.alerts.setMessage('Successfully logged in!', 'success');
        this.router.navigate(['my-recipes']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular_alert_module__WEBPACK_IMPORTED_MODULE_2__["AlertsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-recipes/my-recipes.component.html":
/*!******************************************************!*\
  !*** ./src/app/my-recipes/my-recipes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid my-recipes my-recipes-header\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<h1 class=\"title\">All Recipes</h1>\n\t\t\t<p class=\"sub-title\">What will you create today?</p>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead class=\"thead-dark\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">Total Time</th>\n\t\t\t\t\t\t<th scope=\"col\">Recipe</th>\n\t\t\t\t\t\t<th scope=\"col\">Recipe Type</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>30 minutes</td>\n\t\t\t\t\t\t<td>Tomato & Cucumber Salad</td>\n\t\t\t\t\t\t<td>Appetizer</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>2 hours</td>\n\t\t\t\t\t\t<td>Apple Pie</td>\n\t\t\t\t\t\t<td>Dessert</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>8 hours</td>\n\t\t\t\t\t\t<td>Plov</td>\n\t\t\t\t\t\t<td>Main Dish</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/my-recipes/my-recipes.component.scss":
/*!******************************************************!*\
  !*** ./src/app/my-recipes/my-recipes.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-recipes {\n  height: 200px;\n  background-image: url('veggies.jpg');\n  padding-top: 50px; }\n  .my-recipes .title {\n    text-align: center;\n    font-weight: bold;\n    color: white; }\n  .my-recipes .sub-title {\n    text-align: center;\n    font-size: 30px;\n    font-weight: 500;\n    color: white; }\n  .container-fluid {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n"

/***/ }),

/***/ "./src/app/my-recipes/my-recipes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-recipes/my-recipes.component.ts ***!
  \****************************************************/
/*! exports provided: MyRecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRecipesComponent", function() { return MyRecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyRecipesComponent = /** @class */ (function () {
    function MyRecipesComponent() {
    }
    MyRecipesComponent.prototype.ngOnInit = function () {
    };
    MyRecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-recipes',
            template: __webpack_require__(/*! ./my-recipes.component.html */ "./src/app/my-recipes/my-recipes.component.html"),
            styles: [__webpack_require__(/*! ./my-recipes.component.scss */ "./src/app/my-recipes/my-recipes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyRecipesComponent);
    return MyRecipesComponent;
}());



/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/recipe-detail/recipe-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid my-recipes my-recipes-header\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<p class=\"sub-title\">Make it freakin' delicious.</p>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"container-fluid padding\">\n\t<div *ngIf=\"recipe\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>Favorite</label>\n\t\t\t\t\t\t\t<i class=\"star far fa-star\" *ngIf=\"!recipe.favorite\" (click)=\"favorite()\"></i>\n\t\t\t\t\t\t\t<i class=\"star fas fa-star\" *ngIf=\"recipe.favorite\" (click)=\"unFavorite()\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" [(ngModel)]=\"recipe.name\" name=\"name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>Type</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" [(ngModel)]=\"recipe.type\" name=\"type\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>Cook Time</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" [(ngModel)]=\"recipe.time\" name=\"time\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t<textarea class=\"form-control\" [(ngModel)]=\"recipe.description\" name=\"desc\" rows=\"11\"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"actions\">\n\t\t\t<button class=\"save btn btn-primary\" (click)=\"save()\">Save</button>\n\t\t\t<button *ngIf=\"recipe._id\" class=\"delete btn btn-danger\" (click)=\"delete()\">Delete</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/recipe-detail/recipe-detail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-recipes {\n  background-image: url('veggies-cook.jpg');\n  background-position: top;\n  background-repeat: repeat; }\n  .my-recipes .sub-title {\n    padding-top: 80px;\n    padding-bottom: 80px;\n    text-align: center;\n    font-size: 30px;\n    font-weight: bold;\n    color: black;\n    padding-right: 30px; }\n  .container-fluid {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n  .padding {\n  margin-top: 20px;\n  padding-left: 15px !important;\n  padding-right: 15px !important; }\n  .delete {\n  float: right; }\n  .star {\n  color: maroon;\n  font-size: 25px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/recipe-detail/recipe-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(api, router, route, alerts) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
        var recipeId = this.route.snapshot.paramMap.get('recipeId');
        console.log('recipeId: %o', recipeId);
        if (recipeId === 'new') {
            console.log('new recipe');
            this.recipe = {};
        }
        else {
            this.api.getRecipe(recipeId).then(function (recipe) {
                _this.recipe = recipe;
            });
        }
    }
    RecipeDetailComponent.prototype.favorite = function () {
        this.recipe.favorite = true;
    };
    RecipeDetailComponent.prototype.unFavorite = function () {
        this.recipe.favorite = false;
    };
    RecipeDetailComponent.prototype.delete = function () {
        this.recipe.delete = true;
        this.api.saveRecipe(this.recipe);
        this.alerts.setMessage('Recipe delete!', 'success');
        this.router.navigate(['my-recipes']);
    };
    RecipeDetailComponent.prototype.save = function () {
        this.alerts.setMessage('Recipe saved!', 'success');
        this.api.saveRecipe(this.recipe);
        this.router.navigate(['my-recipes']);
    };
    RecipeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! ./recipe-detail.component.html */ "./src/app/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.scss */ "./src/app/recipe-detail/recipe-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], angular_alert_module__WEBPACK_IMPORTED_MODULE_2__["AlertsService"]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipe-list/recipe-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/recipe-list/recipe-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid my-recipes my-recipes-header\">\n\t<div class=\"row\">\n\t\t<!-- <div class=\"col-sm-12\">\n\t\t\t<p class=\"title\">Recipes</p>\n\t\t</div> -->\n\t\t<div class=\"col-sm-12 title\">\n\t\t\t<p>GET BETTER,<br> AT WHAT YOU SUCK AT.</p>\n\t\t</div>\n\t\t<div class=\"col-sm-12 sub-title\">\n\t\t\t<p>(because sucking less rocks)</p>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<table class=\"table table-hover\">\n\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t<tr class=\"text-center\">\n\t\t\t\t\t\t<th>Total Time</th>\n\t\t\t\t\t\t<th>Recipe</th>\n\t\t\t\t\t\t<th>Recipe Type</th>\n\t\t\t\t\t\t<th>Favorite</th>\n\t\t\t\t\t\t<th><button class=\"add btn btn-info\" (click)=\"addRecipe()\">Add</button></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr class=\"text-center\" *ngFor=\"let recipe of recipes\" [routerLink]=\"['/my-recipes',recipe._id]\">\n\t\t\t\t\t\t<td>{{recipe.time}}</td>\n\t\t\t\t\t\t<td>{{recipe.name}}</td>\n\t\t\t\t\t\t<td>{{recipe.type}}</td>\n\t\t\t\t\t\t<td>{{recipe.favorite ? 'Yes' : 'No'}}</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<p class=\"no-data\" *ngIf=\"!recipes || !recipes.length\">No Recipes</p>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/recipe-list/recipe-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/recipe-list/recipe-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-recipes {\n  background-image: url('Cooking_Background.jpg');\n  background-position: center;\n  background-repeat: no-repeat; }\n  .my-recipes .title {\n    text-align: center;\n    font-size: 28px;\n    font-weight: bold;\n    color: black;\n    padding-top: 80px; }\n  .my-recipes .sub-title {\n    text-align: center;\n    font-size: 13px;\n    font-weight: bold;\n    color: black;\n    padding-bottom: 80px; }\n  .container-fluid {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n  .no-data {\n  text-align: center; }\n  .btn-info {\n  border-radius: 20px;\n  background-color: maroon;\n  border: maroon; }\n"

/***/ }),

/***/ "./src/app/recipe-list/recipe-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/recipe-list/recipe-list.component.ts ***!
  \******************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(api, router) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.api.searchRecipes({}).then(function (recipes) {
            _this.recipes = recipes;
        });
    }
    RecipeListComponent.prototype.addRecipe = function () {
        return this.router.navigate(['my-recipes/', 'new']);
    };
    RecipeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! ./recipe-list.component.html */ "./src/app/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.scss */ "./src/app/recipe-list/recipe-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.searchRecipes = function (params) {
        return this.http.post("/api/recipe/search", params).toPromise();
    };
    ApiService.prototype.getRecipe = function (id) {
        return this.http.get("/api/recipe/" + id).toPromise();
    };
    ApiService.prototype.saveRecipe = function (recipe) {
        return this.http.post("/api/recipe/", recipe).toPromise();
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/preston/projects/cookbook/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map