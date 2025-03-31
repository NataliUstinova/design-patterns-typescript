"use strict";
class UserHistory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date();
    }
    clone() {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}
let userHistoryInstance = new UserHistory('a@a.ru', 'Nata');
console.log(userHistoryInstance);
let userHistoryInstance2 = userHistoryInstance.clone();
userHistoryInstance2.email = "nata@purple.studio";
console.log(userHistoryInstance2);
