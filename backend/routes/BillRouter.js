const router = require('express').Router();
router.route('/new').get((req, res) => {
    console.log('New Bill');
});

module.exports = router;