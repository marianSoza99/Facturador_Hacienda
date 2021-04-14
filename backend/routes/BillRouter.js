/*const router = require('express').Router();
const cabysAdapter = require('../Model/CABySAdapter');*/

import express from 'express';
const router = express.Router();
import {    getCategory1, getCategory2, getCategory3, 
            getCategory4, getCategory5, getCategory6, 
            getCategory7, getCategory8 } from '../Model/CABySAdapter.js'

import { generateXML, singXML, sendXML, checkXML } from '../Model/XMLModule.js'
import Bill from '../Model/Bill.js';
import Emitter from '../Model/Emitter.js';
import Receiver from '../Model/Receiver.js';
import Calculator from '../Model/Calculator.js';
import { APIUploadCertificate, APIGetConsecutive, APIGetToken } from '../Model/HaciendaAPIAdapter.js';

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

router.route('/getToken').post((req, res) => {
    var request = {
        grant_type: "password",
        client_id: "api-prod",
        username: "cpf-08-0076-0098@prod.comprobanteselectronicos.go.cr",
        password: "no*?c*._!U($YSP@T^Yn"
    };
    APIGetToken(request, 
        (data) =>{
            res.send(data);
        },
        (data) =>{
            res.status(400).json(data);
        }
    );
});

router.route('/signXML').post((req, res) => {
    var request = {
        p12Url: req.body.p12,
        inXml: req.body.SignedXML,
        pinP12: req.body.pinP12,
        tipodoc: "FE"
    };
    singXML(request, 
        (data) =>{
            res.send(data);
        },
        (data) =>{
            res.status(400).json(data);
        }
    );
});

router.route('/sendXML').post((req, res) => {
    var request = {
        token: req.body.token,
        clave: req.body.key,
        fecha: req.body.date,
        emi_tipoIdentificacion: req.body.emitterIDType,
        emi_numeroIdentificacion: req.body.emitterID,
        recp_tipoIdentificacion: req.body.receptorIDType,
        recp_numeroIdentificacion: req.body.receptorID,
        comprobanteXml: req.body.xml,
        client_id: "api-stag"
    };
    sendXML(request, 
        (data) =>{
            res.send(data);
        },
        (data) =>{
            res.status(400).json(data);
        }
    );
});

router.route('/checkXML').post((req, res) => {
    var request = {
        token: req.body.token,
        clave: req.body.key,
        client_id: "api-stag"
    };
    checkXML(request, 
        (data) =>{
            res.send(data);
        },
        (data) =>{
            res.status(400).json(data);
        }
    );
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