const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(`${process.env.DB_URL}`);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('user', {
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  experience: { type: Sequelize.STRING }
});

const isUsernameUnique = ({ username, password, experience }) => {
    return User.find({where: {username: username}})
      .then((data) => {
        if (data === null) {
          return createUser({ username, password, experience });
        } else {
          throw 'That username is already taken.';
        }
      })
};

const createUser = ({ username, password, experience }) => {
  return User.sync({ alter: false })
    .then((data) => {
      return User.create({ username, password, experience })
    })
    .catch((err) => {
      console.log('Could not add user to database.', err)
    })
};

const verifyUser = ({ username, password }, callback) => {
  return User.findOne({ where: {username: username, password: password} });
};

exports.isUsernameUnique =isUsernameUnique;
exports.createUser = createUser;
exports.verifyUser = verifyUser;
