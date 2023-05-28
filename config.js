import dotenv from 'dotenv';

dotenv.config();

const required = (key, defaultValue = undefined) => {
  const value = process.env[key] || defaultValue;
  if (value === null) {
    throw new Error(`${key} is undefined`);
  }
  return value;
};

const config = {
  jwt: {
    key: required('JWT_SECRET'),
    expiresInSec: required('JWT_EXPIRES_SEC', 86400),
  },
};

export default config;
