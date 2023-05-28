const data = [
  {
    id: 12345,
    email: 'rmakxh@efef.wf',
    username: '지짐이',
    name: '장현우',
    password: '12345',
    residence: '인천광역시 계양구 아나지로 미도아파트 2동',
    ponenumber: '01094564029',
  },
  {
    id: 6142,
    email: 'rmakxh@efef.wf',
    username: '반반',
    name: '민국',
    password: '12345',
    residence: '인천광역시 부평',
    ponenumber: '01094564029',
  },
  {
    id: 1235,
    email: 'rmakxh@efef.wf',
    username: 'ellie',
    name: '대한',
    password: '12345',
    residence: '충남 공주시',
    ponenumber: '01094564029',
  },
];

export async function findById(id) {
  return data.find(user => user.id === id);
}

export async function findByEmail(email) {
  return data.find(user => user.email === email);
}

export async function createUser(user) {
  const id = Date.now();
  data.push({ ...user, id });
  return id;
}