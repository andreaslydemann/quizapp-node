const Category = require('../models/category');

const timeout = process.env.API_DELAY;

function createCategory (req, res) {
    setTimeout(() => {

        const category = new Category(req.body);
        category.save()
            .then((category) => res.status(201).json(category))
            .catch((err) => res.status(400).send())

    }, timeout)
}

function readCategories (req, res) {
    setTimeout(() => {

        Category.find({})
            .populate('questions')
            .then((categories) => res.status(200).json(categories))
            .catch((err) => res.status(404).send())

    }, timeout)
}

function updateCategory (req, res) {
    setTimeout(() => {

        Category.findByIdAndUpdate(req.params.id, req.body)
            .then((category) => res.status(200).json(category))
            .catch((err) => res.status(404).send())

    }, timeout)
}

function deleteCategory (req, res) {
    setTimeout(() => {

        Category.findByIdAndRemove(req.params.id)
            .then((category) => res.status(200).json(category))
            .catch((err) => res.status(404).send())

    }, timeout)
}

module.exports = {
    createCategory,
    readCategories,
    updateCategory,
    deleteCategory
};