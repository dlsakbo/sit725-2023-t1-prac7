let collection = require('../model/fairway.js');

const postFairway = (req, res) => {
    let cat = req.body;
    collection.insertFairway(fairway, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        }
    });
}


const getAllProduct = (req, res) => {
    collection.getAllProduct((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'success' });
        }
    });
}


module.exports = { postFairway, getAllProduct }
