const router = require('express').Router();
const adapter = require('../Adapter');

router.route('/new').get((req, res) => {
    console.log('New Bill');
});

module.exports = router;