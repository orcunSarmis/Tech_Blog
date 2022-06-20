const router = require('express').Router();
const { Article, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const articleData = await Article.findAll({
            include: [
                {
                    model: Comment,
                    attributes: ['content'],
                },
                {
                    model: User,
                    attributtes: ['username'],
                },
            ],
        });

        const articles = articleData.map((article) => article.get({ palin: true }));

        res.render('homepage', {
            articles,
            logged_id: req.session.logged_id
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/signin', (req, res) => {
    if (req.session.logged_id) {
        res.redirect('/');
        return;
    }
});

router.get('/signup', (req, res) => {
    if (req.session.logged_id) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

router.get('/articles/:id', async (req, res) => {
    try {
        const articleData = await Article.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'content', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    }
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const articleSingle = articleData.get({ palin: true });

        res.render('')
    } catch (err) {
        
    }
})