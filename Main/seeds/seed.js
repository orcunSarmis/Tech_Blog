const sequelize = require('../config/connection');
const { User, Article, Comment } = require('../models');

const userData = require('./user-seed.json');
const articleData = require('./article-seed.json');
const commentData = require('./comment-seed.json');

