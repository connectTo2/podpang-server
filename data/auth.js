const data = [
  {
    id: 12345,
    username: '지짐이',
    name: '장현우',
    password: '12345',
    residence: '인천광역시 계양구 아나지로 미도아파트 2동',
    ponenumber: '01094564029',
  },
  {
    id: 6142,
    username: '반반',
    name: '민국',
    password: '12345',
    residence: '인천광역시 부평',
    ponenumber: '01094564029',
  },
  {
    id: 1235,
    username: 'ellie',
    name: '대한',
    password: '12345',
    residence: '충남 공주시',
    ponenumber: '01094564029',
  },
];

export async function findById(id) {
  return data.find(({ _id }) => _id === id);
}

export async function findByUsername(username) {
  return data.find(({ _username }) => _username === username);
}

export async function createUser(user) {
  data.push(user);
}
