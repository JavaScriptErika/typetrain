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
var myBankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var mySelf = {
    name: "John",
    bankAccount: myBankAccount,
    hobbies: ["Fencing", "Running"]
};
mySelf.bankAccount.deposit(3000);
console.log(mySelf);
