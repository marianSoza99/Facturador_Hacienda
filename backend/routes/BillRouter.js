const router = require('express').Router();
const cabysAdapter = require('../Model/CABySAdapter');

router.route('/cats').get((req, res) => {
    var resp = []
    cabysAdapter.getCategory1(resp);
    cat1 = resp[0].categories;
    res.send(resp[0]);
});

router.route('/cat1').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory2(cat1[1].codigo, resp);
    cat2 = resp[0].categories;
    res.send(resp[0]);
});

router.route('/cat2').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory3(cat2[0].codigo, resp);
    cat3 = resp[0].categories;
    res.send(resp[0]);
});

router.route('/cat3').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory4(cat3[0].codigo, resp);
    cat4 = resp[0].categories;
    res.send(resp[0]);
});

router.route('/cat4').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory5(cat4[0].codigo, resp);
    cat5 = resp[0].categories;
    res.send(resp[0]);
});

router.route('/cat5').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory6(cat5[0].codigo, resp);
    cat6 = resp[0].categories;
    res.send(resp[0]);
});

router.route('/cat6').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory7(cat6[0].codigo, resp);
    cat7 = resp[0].categories;
    res.send(resp[0]);
});

router.route('/cat7').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory8(cat7[0].codigo, resp);
    cat8 = resp[0].categories;
    res.send(resp[0]);
});

module.exports = router;