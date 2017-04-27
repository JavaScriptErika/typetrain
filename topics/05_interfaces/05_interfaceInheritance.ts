// Interface inheritance

interface Soldier {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

const private: Soldier = {
    firstName: 'Ivan',
    greet(lastName: string) {
        console.log('Pvt. ' + this.firstName + ' ' + lastName + ' ready for your orders!');
    }
}
// making the age required and adding experience

interface Captain extends Soldier {
    age: number;
    experience: string;
}

const captain: Captain = {
    age: 33,
    firstName: 'Brad',
    experience: 'Field',
    greet(lastName: string) {
        console.log('Captain ' + this.firstName + ' ' + lastName + ' reporting!');
    }
}

console.log(captain);
private.greet('Vaternik');


