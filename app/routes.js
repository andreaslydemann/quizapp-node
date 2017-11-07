const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});
const express = require('express');
const router = express.Router();
const questions = require('./controllers/questions');
const quizzes = require('./controllers/quizzes');
const authentication = require('./controllers/authentication');

router.post('/register', authentication.register);
router.post('/login', authentication.login);

router.get('/questions', questions.readQuestions);
router.get('/questions/:id', questions.readQuestionsOfQuiz);
router.post('/questions', questions.createQuestion);
router.post('/questions/:id', questions.createQuestionOfQuiz);
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