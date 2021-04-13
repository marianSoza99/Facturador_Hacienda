/*const router = require('express').Router();
const adapter = require('../Model/Adapter');*/
import express from 'express';
const router = express.Router();
import {APILogin} from '../Model/HaciendaAPIAdapter.js'

router.route('/').get((req, res) => {
    var sessionKey;
    APILogin({userName:'dennisangulo',pwd:'123'}, 
        function(success){
            sessionKey = success.resp.sessionKey;
            console.log(sessionKey);
            res.send(success)
        },
        function(error){
            res.send(error)
            console.log(error);
        }
    );
});

export default router;