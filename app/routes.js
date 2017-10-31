const express = require('express');
const router = express.Router();
const questions = require('./controllers/questions');
const categories = require('./controllers/categories');

router.get('/questions', questions.readQuestions);
router.post('/questions', questions.createQuestion);
router.put('/questions/:id', questions.updateQuestion);
router.delete('/questions/:id', questions.deleteQuestion);

router.get('/categories', categories.readCategories);
router.post('/categories', categories.createCategory);
router.put('/categories/:id', categories.updateCategory);
router.delete('/categories/:id', categories.deleteCategory);

router.all('/*', function (req, res) {
    res.status(404).json({message: 'Not Found!'})
});

module.exports = router;