const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// Password .env details and heroku db setup
if (process.env.JAWS_URL) {
    sequelize = new Sequelize(process.env.JAWS_URL);
}else {
    sequelize = new Sequelize(
        process.eventNames.DB_NAME,
        process.eventNames.DB_USER,
        process.eventNames.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;