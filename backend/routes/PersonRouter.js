/*const router = require('express').Router();
const adapter = require('../Model/Adapter');*/
import express from 'express';
const router = express.Router();
import {APILogin} from '../Model/HaciendaAPIAdapter.js'

router.route('/').get((req, res) => {
    APILogin({userName:'magnaloracruz',pwd:'1234'}, 
        function(success){
            res.send(success.resp)
        },
        function(error){
            res.send(error)
        }
    );
});

export default router;