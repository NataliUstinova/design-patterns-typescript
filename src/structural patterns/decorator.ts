//Декораторы позволяют добавить синтаксис для аннотаций и мета программированию в Typescript для классов, 
// методов, свойств и параметров методов
// декоратор это вызов функции

//Паттерн декоратора
interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}
class UserService implements IUserService {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

function nullUser(target: Function) {
  target.prototype.users = 0;
  return target
}

function logUsers(obj: IUserService) {
  console.log('Users', + obj.users)
  return obj;
}

console.log(new UserService().getUsersInDatabase());//1000
