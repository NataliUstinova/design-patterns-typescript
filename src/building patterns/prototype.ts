interface Prototype<T> {
  clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date;
  constructor(public email: string, public name: string) {
    this.createdAt = new Date();
  }
  
  clone(): UserHistory {
    let target = new UserHistory(this.email, this.name);
    target.createdAt = this.createdAt;
    return target;
  }
}

let userHistoryInstance = new UserHistory('a@a.ru', 'Nata')
console.log(userHistoryInstance);
let userHistoryInstance2 = userHistoryInstance.clone()
userHistoryInstance2.email = "nata@purple.studio"
console.log(userHistoryInstance2)