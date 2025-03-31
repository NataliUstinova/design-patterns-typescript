"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
const getFullName2 = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
const user = {
    firstName: 'Nata',
    lastName: 'U',
    city: 'Moscow',
    age: 32,
    skills: {
        dev: true,
        devops: true,
    }
};
const res = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
};
const skills = ['Dev', 'DevOps'];
skills.filter(s => s !== 'DevOps');
for (const skill of skills) {
    console.log(skill);
}
const skills2 = [1, 'Dev'];
const [id, skillName] = skills2;
const arr = [1, 'sdsd', true, false];
const res2 = {
    message: 'Payment Success',
    statusCode: 1 /* statusCode.SUCCESS */
};
var requestStatus;
(function (requestStatus) {
    requestStatus["Published"] = "published";
    requestStatus["Draft"] = "draft";
    requestStatus["Deleted"] = "deleted";
})(requestStatus || (requestStatus = {}));
const res3 = [
    {
        "question": "Как осуществляется доставка?",
        "answer": "быстро!",
        "tags": [
            "popular",
            "new"
        ],
        "likes": 3,
        "status": requestStatus.Published
    }
];
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        return data;
    });
}
