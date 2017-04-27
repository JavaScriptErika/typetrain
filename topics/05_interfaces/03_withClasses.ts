interface Soldier {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

class Private implements Soldier {
    firstName: string;
    greet(lastName: string) {
        console.log('Private ' + this.firstName + ' ready!');
    }
}