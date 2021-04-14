/*const router = require('express').Router();
const cabysAdapter = require('../Model/CABySAdapter');*/

import express from 'express';
const router = express.Router();
import Bill from '../Model/Bill.js';
import Emitter from '../Model/Emitter.js';
import Receiver from '../Model/Receiver.js';
import Calculator from '../Model/Calculator.js';
import { getCategory1, getCategory2, getCategory3, getCategory4, getCategory5, getCategory6, getCategory7, getCategory8 } from '../Model/CABySAdapter.js';
import { APIUploadCertificate } from '../Model/HaciendaAPIAdapter.js';
import { generateXML } from '../Model/XMLModule.js' 

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

router.route('/uploadCertificate').post((req, res) => {
    var request = {
        sessionKey: req.body.sessionKey,
        fileToUpload: req.body.file,
        iam: req.body.username
    }

    APIUploadCertificate(request, (data) => {
        res.send(data);
    }, (data) => {
        res.status(400).json(data);
    })
});


router.route('/generateXML').post((req, res) => {
    var emitter = new Emitter(
        req.body.name,
        req.body.IDType,
        req.body.ID,
        req.body.province,
        req.body.canton,
        req.body.district,
        req.body.neighborhood,
        req.body.countryCode,
        req.body.fax,
        req.body.email,
        req.body.buisnessName,
        req.body.addressDrescription
    );

    var receiver = new Receiver(
        req.body.name,
        req.body.IDType,
        req.body.ID,
        req.body.province,
        req.body.canton,
        req.body.district,
        req.body.neighborhood,
        req.body.countryCode,
        req.body.fax,
        req.body.email
    );
    
    var bill = new Bill(
        req.body.key,
        req.body.consecutive,
        req.body.emitter,
        req.body.receiver,
        req.body.sellCondition,
        req.body.creditTerm,
        req.body.payMethod,
        req.body.currencyCode,
        req.body.exchangeRate,
        req.body.lines,
        req.body.refDocs,
        req.body.charges
    );

    var calculator = new Calculator();
    calculator.calculateAll(bill);

    generateXML(bill, (data) => {
        res.send(data);
    }, (data) => {
        res.status(400).json(data);
    });
});

export default router;