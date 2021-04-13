/*const router = require('express').Router();
const cabysAdapter = require('../Model/CABySAdapter');*/

import express from 'express'
const router = express.Router();
import { getCategory1, getCategory2, getCategory3, getCategory4, getCategory5, getCategory6, getCategory7, getCategory8 } from '../Model/CABySAdapter.js'

router.route('/cats').get((req, res) => {
    var resp = []
    getCategory1(resp);
    res.send(resp[0]);
});


// { codigo: "" }

router.route('/cat1/:code').get((req, res) => {
    var resp = [];
    getCategory2(req.params.code, resp);
    res.send(resp[0]);
});

router.route('/cat2').get((req, res) => {
    var resp = [];
    getCategory3(req.codigo, resp);
    res.send(resp[0]);
});

router.route('/cat3').get((req, res) => {
    var resp = [];
    getCategory4(req.codigo, resp);
    res.send(resp[0]);
});

router.route('/cat4').get((req, res) => {
    var resp = [];
    getCategory5(req.codigo, resp);
    res.send(resp[0]);
});

router.route('/cat5').get((req, res) => {
    var resp = [];
    getCategory6(req.codigo, resp);
    res.send(resp[0]);
});

router.route('/cat6').get((req, res) => {
    var resp = [];
    getCategory7(req.codigo, resp);
    res.send(resp[0]);
});

router.route('/cat7').get((req, res) => {
    var resp = [];
    getCategory8(req.codigo, resp);
    res.send(resp[0]);
});

export default router;