// Method Decorator (WORK IN PROGRESS)

function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

class CoffeeBean {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @editable(false)
    calcPrice() {
        console.log(1000);
    }
    /*
     @editable(true)
    calcYourBudget() {
        console.log(2000);
    }
    */
}

const coffee = new CoffeeBean('Kenyan');
coffee.calcPrice();
coffee.calcPrice = function() {
    console.log(111);
}
/*
coffee.calcYourBudget = function() {
    console.log(111);
}
*/

// Property Decorator

