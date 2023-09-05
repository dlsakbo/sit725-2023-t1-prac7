let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function (req, res) {
    controller.postFairway(req, res);
});

router.get('/', (req, res) => {
    controller.getAllProduct(req, res);
});

module.exports = router;