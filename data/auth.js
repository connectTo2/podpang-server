import SQ from 'sequelize';
import sequelize from '../db/database.js';

/**
 * "email":"rmxhak@naver.com",
    "username":"bob",
    "name":"수달",
    "password":"@s12345678",
    "confirmPassword": "@s12345678",
    "residence":"충남 계룡",
    "ponenumber":"0101424051"
 */
const { DataTypes } = SQ;

export const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER, // 데이터의 타입은 정수이다.
      autoIncrement: true, // 자동으로 값이 증가한다.
      allowNull: false, // 값이 반드시 존재해야한다. 기본값은 true
      primaryKey: true, // 테이블마다 하나가 반드시 존재해야 한다.
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    residence: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    ponenumber: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export async function findByEmail(email) {
  return User.findOne({ where: { email } });
}
export async function findById(id) {
  return User.findByPk(id);
}

export async function createUser(user) {
  return User.create(user).then(data => data.dataValues.id);
}
