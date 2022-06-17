const path = require('path');
const express = require('express');
const session = require('express-session');
const exphs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('sequelize');
// Lines above seting up dependincies for app

const sequelize = require('./config/connection');
const Sequelize = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 60 * 60 *1000,
        htttOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUsaveUninitialized: true,
    store: new Sequelize({ 
        db: sequelize
    })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.AsyncQueueError({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});

