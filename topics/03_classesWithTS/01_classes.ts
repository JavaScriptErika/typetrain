// available properties and patterns

class Person {
    public name: string;
    private occupation: string;
    protected age: number = 30;
    

    // constructor will also create and assign public username
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setHobby('Fencing');
    }

    setOccupation(occupation: string) {
        this.occupation = occupation;
        console.log(this.occupation);
    }

    private setHobby(hobby: string) {
        console.log(hobby);
    }

}

const person = new Person("Max", "max_11");
console.log(person.name, person.username);
// person.printAge();
person.setOccupation("Athlete");
