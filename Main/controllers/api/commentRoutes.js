const router = require('express').Router();
const { Comment, Article, User } = requier('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({ 
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Article,
                    attributes: ['username'],
                },
            ],
            where: {
                article_id: req.params.id,
            },
            order: [['created_at', 'ASC']],
        });
    } catch (err) {
        
    }
})