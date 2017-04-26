class Human {
    public name: string;
    private occupation: string;
    protected age: number = 30;
    
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

class GoodFella extends Human {
    constructor(username: string, age: number) {
        super('Robert', username);
        this.age = age;
    }
}

const goodGuy = new GoodFella("robbie_44", 44);
console.log(goodGuy);

