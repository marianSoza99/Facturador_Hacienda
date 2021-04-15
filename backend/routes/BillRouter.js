import express from 'express';
const router = express.Router();
import multer from 'multer';
import fetch from 'node-fetch'
import path from 'path'

import {    getCategory1, getCategory2, getCategory3, 
            getCategory4, getCategory5, getCategory6, 
            getCategory7, getCategory8 } from '../Model/CABySAdapter.js'

import { generateXML, singXML, sendXML, checkXML } from '../Model/XMLModule.js'
import Bill from '../Model/Bill.js';
import Emitter from '../Model/Emitter.js';
import Receiver from '../Model/Receiver.js';
import Calculator from '../Model/Calculator.js';
import { APILogin, APIUploadCertificate, APIGetConsecutive, APIGetToken } from '../Model/HaciendaAPIAdapter.js';

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

router.route('/generateXML').post((req, res) => {

    var sysDate = new Date();

    var offset = sysDate.getTimezoneOffset();

    var offsetHours = Math.floor(offset / 60) ;
    var offsetMinutes = offset % 60;

    var date;

    if ((offsetHours * -1) > 0) {
        date = sysDate.getFullYear() +
        '-' + String("0" + sysDate.getMonth() + 1).slice(-2) +
        '-' + String("0" + sysDate.getDate()).slice(-2) +
        'T' + String("0" + sysDate.getHours()).slice(-2) +
        ':' + String("0" + sysDate.getMinutes()).slice(-2) +
        ':' + String("0" + sysDate.getSeconds()).slice(-2) +
        '+' + String("0" + offsetHours).slice(-2) + ':' +  String("0" + offsetMinutes).slice(-2);
    }
    else{
        date = sysDate.getFullYear() +
        '-' + String("0" + sysDate.getMonth() + 1).slice(-2) +
        '-' + String("0" + sysDate.getDate()).slice(-2) +
        'T' + String("0" + sysDate.getHours()).slice(-2) +
        ':' + String("0" + sysDate.getMinutes()).slice(-2) +
        ':' + String("0" + sysDate.getSeconds()).slice(-2) +
        '-'+ String("0" + offsetHours).slice(-2) + ':' + String("0" + offsetMinutes).slice(-2);
    }

    var emitter = new Emitter(
        req.body.emitterName,
        req.body.emitterIDType,
        req.body.emitterID,
        req.body.emitterProvince,
        req.body.emitterCanton,
        req.body.emitterDistrict,
        req.body.emitterNeighborhood,
        req.body.emitterCountryCode,
        req.body.emitterFax,
        req.body.emitterEmail,
        req.body.emitterBuisnessName,
        req.body.emitterAddressDrescription
    );

    var receiver = new Receiver(
        req.body.receiverName,
        req.body.receiverIDType,
        req.body.receiverID,
        req.body.receiverProvince,
        req.body.receiverCanton,
        req.body.receiverDistrict,
        req.body.receiverNeighborhood,
        req.body.receiverCountryCode,
        req.body.receiverFax,
        req.body.receiverEmail
    );
    
    var consecutive;
    var key;

    var request = {
        tipoCedula: req.body.emitterIDType,
        codigoPais: req.body.emitterCountryCode,
        consecutivo: "00000000",
        situacion: "normal",
        codigoSefuridad: "05050505",
        tipoDocumento: "FE",
        terminal: req.body.terminal,
        sucursal: req.body.subsidiary
    }

    APIGetConsecutive(request,
        function(data){
            consecutive = data.resp.consectivo,
            key = data.resp.clave
        }, 
        (data) => {
            res.status(400).json(data);
        }
    );

    var bill = new Bill(
        key,
        consecutive,
        emitter,
        receiver,
        req.body.sellCondition,
        req.body.creditTerm,
        req.body.payMethod,
        req.body.currencyCode,
        req.body.exchangeRate,
        req.body.lines,
        req.body.refDocs,
        req.body.charges
    );

    bill.issueDate = date;

    var calculator = new Calculator();
    calculator.calculateAll(bill);

    generateXML(bill, (data) => {
        data["key"] = key;
        data["date"] = date;
        res.send(data);
    }, (data) => {
        res.status(400).json(data);
    });
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
    var token;

    var request = {
        grant_type: "password",
        client_id: "api-prod",
        username: "cpf-08-0076-0098@prod.comprobanteselectronicos.go.cr",
        password: "no*?c*._!U($YSP@T^Yn"
    };

    APIGetToken(request, 
        (data) =>{
            token = data.resp.access_token;
        },
        (data) =>{
            res.status(400).json(data);
        }
    );

    var request = {
        token: token,
        clave: req.body.key,
        fecha: req.body.date,
        emi_tipoIdentificacion: req.body.emitterIDType,
        emi_numeroIdentificacion: req.body.emitterID,
        recp_tipoIdentificacion: req.body.receptorIDType,
        recp_numeroIdentificacion: req.body.receptorID,
        comprobanteXml: req.body.xml,
        client_id: "api-stag"
    };
    var sendResp;
    sendXML(request, 
        (data) =>{
            sendResp = data;
        },
        (data) =>{
            res.status(400).json(data);
        }
    );

    var request = {
        token: token,
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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
        filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
    },
        path: function (req, file, cb) {
        cb(null, file.path )
    },
        mimetype: function (req, file, cb) {
        cb(null, file.mimetype )
    }
});

const upload = multer({ storage: storage }).single('file')

function blobToFile(theBlob, fileName){
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
}

router.get('/getFile/:file',function(req,res){
    var options = {
        root: path.join(process.env.__dirname+"\\uploads")
    };
      
    var fileName = req.params.file;
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

router.post('/uploadCertificate', (req, res) => {

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        if (!req.file) {
            console.log("No file received");
            return res.send({
                success: false
            });
        } 
        else {
            //userName magnaloracruz
            //pwd 1234
    
            var requestLogin = {
                userName: "magnaloracruz",
                pwd: "1234"
            }

            var p = `http://localhost:${process.env.PORT}/bill/getFile/${req.file.filename}`
            
            fetch(p,
                {
                    method: 'GET',
                }
            ).then(r => {
                return r.blob()
            })
            .then((blob)=>{

                let file = blobToFile(blob, req.file.filename);

                APILogin(requestLogin, 
                    (dataLogin) =>{
                        var request = {
                            sessionKey: dataLogin.resp.sessionKey,
                            fileToUpload: file,
                            iam: dataLogin.resp.userName
                        }
                    
                        APIUploadCertificate(request, (data) => {
                            res.send(data);
                        }, (data) => {
                            res.status(400).json(data);
                        })
                    },
                    (data) =>{
                        res.status(400).json(data);
                    }
                );
            });
        }
    })
});

export default router;