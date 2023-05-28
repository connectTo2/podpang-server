import * as schema from '../utils/schema.js';

const signupItem = ['email', 'username', 'name', 'password', 'confirmPassword', 'residence', 'ponenumber'];
const loginItem = ['email', 'password'];

const auth = (req, res, next) => {
  const user = req.body;
  const isSignup = req.url === '/signup';
  const checked = checkInpomaionAndTrim(user, isSignup ? signupItem : loginItem);

  if (checked !== 'success') return res.status(400).json({ type: checked, message: `${checked}을 입력해주세요.` });

  if (!schema.emailValid(user.email))
    return res.status(400).json({ type: 'email', message: `이메일 형식에 맞게 입력해주세요.` });

  if (!schema.passwordValid(user.password))
    return res
      .status(400)
      .json({ type: 'password', message: '비밀번호를 정확히 입력해주세요. ex) 최소 8글자 및 특수문자 포함' });

  if (isSignup) {
    if (user.password !== user.confirmPassword)
      return res.status(400).json({ type: 'confirmPassword', message: '비밀번호가 일치하지 않습니다.' });
  }
  next();
};

// 반드시 입력해야할 정보를 검사하는 함수
function checkInpomaionAndTrim(info, essential) {
  for (const type of essential) {
    info[type] = info[type]?.trim();
    if (info[type] == null || info[type] === '') return type;
  }
  return 'success';
}

export { auth };
