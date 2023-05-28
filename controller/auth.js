import {} from 'express-async-errors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as authRepository from '../data/auth.js';
import config from '../config.js';

export async function signup(req, res) {
  const user = req.body;
  const found = await authRepository.findByEmail(user.email);
  if (found) {
    return res.status(409).json({ message: `${user.email}은 이미 존재하는 이메일입니다.` });
  }
  const hash = await bcrypt.hash(user.password, 12);
  const userId = await authRepository.createUser({ ...user, password: hash });

  const token = createJwtToken(userId);

  res.status(201).json({ token, email: user.email });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await authRepository.findByEmail(email);
  if (!user) {
    return res.status(401).json({ message: '존재하지 않는 이메일입니다.' });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: '잘못된 이메일과 비밀번호입니다.' });
  }

  const token = createJwtToken(user.id);

  res.status(200).json({ token, email: user.email });
}
export async function logout(req, res) {}

function createJwtToken(id) {
  return jwt.sign({ id }, config.jwt.key, {
    expiresIn: config.jwt.expiresInSec,
  });
}
