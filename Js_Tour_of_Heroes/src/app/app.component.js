"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HEROES = [
    { id: 11, name: 'Ferium' },
    { id: 12, name: 'Pythonic' },
    { id: 13, name: 'Relastic' },
    { id: 14, name: 'Celebrium' },
    { id: 15, name: 'Magneto' },
    { id: 16, name: 'Telekuta' },
    { id: 17, name: 'Jasonian' },
    { id: 18, name: 'Dynamico' },
    { id: 19, name: 'Soulstealer' },
    { id: 20, name: 'Fang' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1 class=\"title\">{{title}}</h1>\n    <h2 class=\"myheroes\">My Heroes</h2>\n\n    <hero-detail [hero]=\"selectedHero\"></hero-detail>\n\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map