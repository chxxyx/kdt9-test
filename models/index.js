'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};


const sequelize =   new Sequelize(config.database, config.username, config.password, config);

  // model을 가져오는 코드
// const a = require('./Visitor')
// const b = a(sequelize, Sequelize)
// db.Visitor = b; 이 코드들을 아래와 같이 한 줄로 축약할 수 있다.
db.User = require('./User')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
