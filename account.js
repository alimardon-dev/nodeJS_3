const moment = require("moment");

class Account{
    #amount
    #account_id
    constructor(name, amount, account_id){
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }

    tellMeBalance(){
        console.log(`Sizdagi mablag'${this.#amount}`);
        this.#amount;
    };

    withdraw(amount){
        if (this.#amount > amount) {
            this.#amount-= amount;
            console.log("Soqqa yechildi jigar");
        }else{
            console.log("Ishlasen bolmedimi jigar. Poor guy huh");
        };
    }

    deposit(amount){
        this.#amount += amount;
        console.log("Jigar pulizni bankka berib qoydigu endi riboga ishlatishadi uni. ");
        console.log(`Jigar sizda shuncha pul bor: ${this.#amount}`)
    }
    details(){
        console.log(`Salom ${this.name} sizda ${this.#amount} pul bor`);
        console.log(`hisob raqamiz jigar birovga berib qoymen jigar ${this.#account_id}`);
    };
    static tellMeAboutClass(){
        console.log("Bu class bank tizimi uchun ishlaydi");
    };
    static tellMeTime(){
        const time = moment().format();
        console.log("The time now is ", time);
    }
}

module.exports = Account;