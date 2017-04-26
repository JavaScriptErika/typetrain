// a private constructor
class TheOnlyOne {
    private static instance: TheOnlyOne;

    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!TheOnlyOne.instance) {
            TheOnlyOne.instance = new TheOnlyOne('Neo');
        }
        return TheOnlyOne.instance;
    }
}

let someone = TheOnlyOne.getInstance();

// read-only will protect name: 
// someone.name = 'Lionel';
