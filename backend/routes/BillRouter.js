const router = require('express').Router();
const cabysAdapter = require('../Model/CABySAdapter');

router.route('/cats').get((req, res) => {
    var resp = []
    cabysAdapter.getCategory1(resp);
    cat1 = resp;
    res.send(resp);
});

router.route('/cat1').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory2(cat1[0].codigo, resp);
    cat2 = resp[0].categories;
    pro1 = resp[0].products;
    res.send(resp[0]);
});

router.route('/cat2').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory3(cat2[0].codigo, pro1, resp);
    cat3 = resp[0].categories;
    pro2 = resp[0].products;
    res.send(resp[0]);
});

router.route('/cat3').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory4(cat3[0].codigo, pro2, resp);
    cat4 = resp[0].categories;
    pro3 = resp[0].products;
    res.send(resp[0]);
});

router.route('/cat4').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory5(cat4[0].codigo, pro3, resp);
    cat5 = resp[0].categories;
    pro4 = resp[0].products;
    res.send(resp[0]);
});

router.route('/cat5').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory6(cat5[0].codigo, pro4, resp);
    cat6 = resp[0].categories;
    pro5 = resp[0].products;
    res.send(resp[0]);
});

module.exports = router;