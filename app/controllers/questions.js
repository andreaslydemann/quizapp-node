const Question = require('../models/question');
const Quiz = require('../models/quiz');

const timeout = process.env.API_DELAY;

function createQuestion(req, res) {
    setTimeout(() => {

        const question = new Question(req.body);
        question.save()
            .then((question) => res.status(201).json(question))
            .catch((err) => res.status(400).send())

    }, timeout)
}

function readQuestions(req, res) {
    setTimeout(() => {

        Quiz.findById(req.params.id).select('questions -_id').populate('questions')
            .then((questions) => res.status(200).json(questions))
            .catch((err) => res.status(404).send())
/*
        Question.find({})
            .then((questions) => res.status(200).json(questions))
            .catch((err) => res.status(404).send())*/

    }, timeout)
}

function updateQuestion(req, res) {
    setTimeout(() => {

        Question.findByIdAndUpdate(req.params.id, req.body)
            .then((question) => res.status(200).json(question))
            .catch((err) => res.status(404).send())

    }, timeout)
}

function deleteQuestion(req, res) {
    setTimeout(() => {

        Question.findByIdAndRemove(req.params.id)
            .then((question) => res.status(200).json(question))
            .catch((err) => res.status(404).send())

    }, timeout)
}

module.exports = {
    createQuestion,
    readQuestions,
    updateQuestion,
    deleteQuestion
};