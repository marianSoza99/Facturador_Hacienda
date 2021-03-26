const router = require('express').Router();
const adapter = require('../Adapter');

router.route('/new').get((req, res) => {
    console.log('New Bill');
    var sessionKey;
    adapter.APILogin({userName:'dennisangulo',pwd:'23'}, 
        function(success){
            sessionKey = success.resp.sessionKey;
            console.log(sessionKey);
        },
        function(error){
            console.log(error);
        }
    );
});

module.exports = router;