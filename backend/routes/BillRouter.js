const router = require('express').Router();
const adapter = require('../Model/Adapter');
const cabysAdapter = require('../Model/CABySAdapter');

var temp;

router.route('/new').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory1(resp);
    temp = resp;
    res.send(resp);
});

router.route('/test').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory2(temp[0], resp);
    res.send(resp);
});

module.exports = router;