const Quiz = require('../models/quiz');

const timeout = process.env.API_DELAY;

function createQuiz(req, res) {
    setTimeout(() => {

        const quiz = new Quiz(req.body);
        quiz.save()
            .then((quiz) => res.status(201).json(quiz))
            .catch((err) => res.status(400).send())

    }, timeout)
}

function readQuizzes(req, res) {
    setTimeout(() => {

        Quiz.find({})
            .populate('questions')
            .then((quizzes) => res.status(200).json(quizzes))
            .catch((err) => res.status(404).send())

    }, timeout)
}

function updateQuiz(req, res) {
    setTimeout(() => {

        Quiz.findByIdAndUpdate(req.params.id, req.body)
            .then((quiz) => res.status(200).json(quiz))
            .catch((err) => res.status(404).send())

    }, timeout)
}

function deleteQuiz(req, res) {
    setTimeout(() => {

        Quiz.findByIdAndRemove(req.params.id)
            .then((quiz) => res.status(200).json(quiz))
            .catch((err) => res.status(404).send())

    }, timeout)
}

module.exports = {
    createQuiz,
    readQuizzes,
    updateQuiz,
    deleteQuiz
};