const router = require('express').Router();

router.route('/new').get((req, res) => {
    console.log('newBill');
});

module.exports = router;