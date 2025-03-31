function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`
} 

const getFullName2 = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`
}

interface IUser {
  firstName: string,
  lastName: string,
  city: string,
  age: number,
  skills: {
    dev?: boolean,
    devops?: boolean,
    cicd?: boolean,
  }
}

const user: IUser = {
  firstName: 'Nata',
  lastName: 'U',
  city: 'Moscow',
  age: 32,
  skills: {
    dev: true,
    devops: true,
  }
}

interface iRes {
  officeId: number,
  isOpened: boolean,
  contacts: {
    phone: string,
    email: string,
    address: {
      city: string
    }
  }
}


const res: iRes = {
  "officeId": 45,
  "isOpened": false,
  "contacts": {
    "phone": "+79100000000",
      "email": "my@email.ru",
      "address": {
        "city": "Москва"
      }
  }
}

const skills: string[] = ['Dev', 'DevOps']

skills.filter(s => s !== 'DevOps')

for (const skill of skills) {
  console.log(skill)
}

const skills2: readonly [number, string] = [1, 'Dev']
const [id, skillName] = skills2;

const arr: [number, string, ...boolean[]] = [1, 'sdsd', true, false]

const enum statusCode {
  SUCCESS = 1,
  IN_PROGRESS = 2,
  FAILED = 3,
} 

const res2: {message: string, statusCode: statusCode} = {
  message: 'Payment Success',
  statusCode: statusCode.SUCCESS
}

enum requestStatus {
  Published = "published",
  Draft = "draft",
  Deleted = "deleted",
}

interface request {
  topicId: number,
  status?: requestStatus
}

interface Ires3 {
  question: string,
  answer: string,
  tags: string[],
  likes: number,
  status?: requestStatus
}

const res3: Ires3[] = [
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
]


async function getFaqs(req: request): Promise<Ires3[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}

