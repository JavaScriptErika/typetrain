/* 
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
}

myself.bankAccount.deposit(3000);
console.log(myself);
*/

// Add types and be explicit as possible

type Bank = {
    money: number,
    deposit: (value: number) => void
}

type Me = {
    name: string,
    bankAccount: Bank,
    hobbies: string[]
}

let myBankAccount :Bank = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
}

let mySelf :Me = {
    name: "John",
    bankAccount: myBankAccount,
    hobbies: ["Fencing", "Running"]
}

mySelf.bankAccount.deposit(3000);
console.log(mySelf);
