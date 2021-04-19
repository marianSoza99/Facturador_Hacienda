const router = require('express').Router();
const cabysAdapter = require('../Model/CABySAdapter');

router.route('/cats').get((req, res) => {
    var resp = []
    cabysAdapter.getCategory1(resp);
    cat1 = resp[0].categories;
    res.send(resp[0]);
});


// { codigo: "" }

router.route('/cat1').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory2(req.body.codigo, resp);
    res.send(resp[0]);
});

router.route('/cat2').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory3(req.codigo, resp);
    res.send(resp[0]);
});

router.route('/cat3').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory4(req.codigo, resp);
    res.send(resp[0]);
});

router.route('/cat4').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory5(req.codigo, resp);
    res.send(resp[0]);
});

router.route('/cat5').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory6(req.codigo, resp);
    res.send(resp[0]);
});

router.route('/cat6').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory7(req.codigo, resp);
    res.send(resp[0]);
});

router.route('/cat7').get((req, res) => {
    var resp = [];
    cabysAdapter.getCategory8(req.codigo, resp);
    res.send(resp[0]);
});

module.exports = router;