import SQ from 'sequelize';
import config from '../config.js';

const { database, user, password, host } = config.db;

const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
  logging: false,
});

export default sequelize;
