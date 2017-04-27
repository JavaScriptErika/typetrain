// define contract with methods

interface Soldier {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}


const soldier: Soldier = {
    firstName: 'Johnny',
    hobbies: ['Archery', 'Swimming'],
    greet(lastName: string) {
        console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    }
}

soldier.greet('Smith');