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

function createQuestionOfQuiz(req, res) {
    setTimeout(() => {

        const question = new Question(req.body);
        question.save()
            .then((question) => {

                Quiz.update({_id: req.params.id}, {$push: {questions: question}})
                    .then((quiz) => res.status(200).json(quiz))
                    .catch((err) => res.status(404).send())

                res.status(201).json(question)
            })
            .catch((err) => res.status(400).send())

    }, timeout)
}

function readQuestions(req, res) {
    setTimeout(() => {

        Question.find({})
            .then((questions) => res.status(200).json(questions))
            .catch((err) => res.status(404).send())

    }, timeout)
}

function readQuestionsOfQuiz(req, res) {
    setTimeout(() => {

        Quiz.findById(req.params.id).select('questions -_id').populate('questions')
            .then((questions) => res.status(200).json(questions))
            .catch((err) => res.status(404).send())

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
            .then((question) => {

                Quiz.update({questions: {"$in": [req.params.id]}},
                    {$pullAll: {questions: [req.params.id]}}, {multi: true})
                    .then((quiz) => res.status(200).json(quiz))
                    .catch((err) => res.status(404).send())

                res.status(200).json(question);
            })
            .catch((err) => res.status(404).send())

    }, timeout)
}

module.exports = {
    createQuestion,
    createQuestionOfQuiz,
    readQuestions,
    readQuestionsOfQuiz,
    updateQuestion,
    deleteQuestion
};