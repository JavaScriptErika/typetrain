// Method Decorator (WORK IN PROGRESS)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
var CoffeeBean = (function () {
    function CoffeeBean(name) {
        this.name = name;
    }
    CoffeeBean.prototype.calcPrice = function () {
        console.log(1000);
    };
    return CoffeeBean;
}());
__decorate([
    editable(false)
], CoffeeBean.prototype, "calcPrice");
var coffee = new CoffeeBean('Kenyan');
coffee.calcPrice();
coffee.calcPrice = function () {
    console.log(111);
};
/*
coffee.calcYourBudget = function() {
    console.log(111);
}
*/
// Property Decorator
