/*const router = require('express').Router();
const cabysAdapter = require('../Model/CABySAdapter');*/

import express from 'express'
const router = express.Router();
import { getCategory1, getCategory2, getCategory3, getCategory4, getCategory5, getCategory6, getCategory7, getCategory8 } from '../Model/CABySAdapter.js'

router.route('/cat/:category/:code').get((req, res) => {
    var resp = []
    switch(req.params.category){
        case '1':
            getCategory1(resp);
        case '2':
            getCategory2(req.params.code,resp);
        case '3':
            getCategory3(req.params.code,resp);
        case '4':
            getCategory4(req.params.code,resp);
        case '5':
            getCategory5(req.params.code,resp);
        case '6':
            getCategory6(req.params.code,resp);
        case '7':
            getCategory7(req.params.code,resp);
        case '8':
            getCategory8(req.params.code,resp);
    }
    res.send(resp[0]);
});

export default router;