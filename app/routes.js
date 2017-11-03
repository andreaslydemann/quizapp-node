const express = require('express');
const router = express.Router();
const questions = require('./controllers/questions');
const quizzes = require('./controllers/quizzes');

router.get('/questions/:id', questions.readQuestions);
router.post('/questions', questions.createQuestion);
router.put('/questions/:id', questions.updateQuestion);
router.delete('/questions/:id', questions.deleteQuestion);

router.get('/quizzes', quizzes.readQuizzes);
router.post('/quizzes', quizzes.createQuiz);
router.put('/quizzes/:id', quizzes.updateQuiz);
router.delete('/quizzes/:id', quizzes.deleteQuiz);

router.all('/*', function (req, res) {
    res.status(404).json({message: 'Not Found!'})
});

module.exports = router;