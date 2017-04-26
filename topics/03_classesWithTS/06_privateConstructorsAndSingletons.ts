// a private constructor
class ChosenOne {
    private static instance: ChosenOne;

    private constructor(public name: string) {}

    static getInstance() {
        if (!ChosenOne.instance) {
            ChosenOne.instance = new ChosenOne('Neo');
        }
        return ChosenOne.instance;
    }
}

// let wrong = new ChosenOne('Neo');
let right = ChosenOne.getInstance();
