const router = require('express').Router();
const adapter = require('../Model/Adapter');

router.route('/').get((req, res) => {
    var sessionKey;
    adapter.APILogin({userName:'dennisangulo',pwd:'123'}, 
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

module.exports = router;