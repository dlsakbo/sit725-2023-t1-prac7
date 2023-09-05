
let client = require('../dbConnection');
let collection;

const db = client.db("Cluster0");
collection = db.collection("fairway");


function insertProduct(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllProduct(callback) {
    collection.find({}).toArray(callback);
}

module.exports = { insertProduct, getAllProduct }