"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var catagories = (function () {
    function catagories() {
    }
    return catagories;
}());
exports.catagories = catagories;
var pages = (function () {
    function pages() {
    }
    return pages;
}());
exports.pages = pages;
var CAT = [
    { id: 1, name: 'Bedding' },
    { id: 2, name: 'Bath' },
    { id: 3, name: 'Rooms' },
    { id: 4, name: 'Kitchens' },
    { id: 5, name: 'Living' },
    { id: 6, name: 'Cars' },
    { id: 7, name: 'Birds' },
    { id: 8, name: 'Planes' }
];
var PGS = [
    { id: 9, name: 'Bedding' },
    { id: 10, name: 'Bath' },
    { id: 11, name: 'Rooms' },
    { id: 12, name: 'Kitchens' },
    { id: 13, name: 'Living' },
    { id: 14, name: 'Cars' },
    { id: 15, name: 'Birds' },
    { id: 16, name: 'Planes' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.pages = PGS;
        this.catagories = CAT;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './template/tabset-config.html',
            template: "\n        \n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-3 col-md-2 sidebar\">\n                    <h4>Catagories</h4>\n                    <ul class=\"nav nav-sidebar\">\n                        <li *ngFor=\"let catagory of catagories\">{{catagory.name}}</li>\n                    </ul>\n                    <h4>Pages</h4>\n                    <ul class=\"nav nav-sidebar\">\n                        <li *ngFor=\"let page of pages\">{{page.name}}</li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 main\">\n                    <ngbd-tabset-config></ngbd-tabset-config>\n                </div>\n            </div>\n        </div>\n " }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map