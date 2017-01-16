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
var thumbs = (function () {
    function thumbs() {
    }
    return thumbs;
}());
exports.thumbs = thumbs;
var Thumb = [
    { id: 20, source: 'http://placehold.it/150x150' },
    { id: 21, source: 'http://placehold.it/150x150' },
    { id: 22, source: 'http://placehold.it/150x150' },
    { id: 23, source: 'http://placehold.it/150x150' }
];
var ThumbsConfig = (function () {
    function ThumbsConfig() {
        this.thumbs = Thumb;
    }
    ThumbsConfig = __decorate([
        core_1.Component({
            selector: 'thumbs',
            templateUrl: './template/thumbs.html',
            providers: [ThumbsConfig]
        }), 
        __metadata('design:paramtypes', [])
    ], ThumbsConfig);
    return ThumbsConfig;
}());
exports.ThumbsConfig = ThumbsConfig;
//# sourceMappingURL=app.thumbs-config.js.map