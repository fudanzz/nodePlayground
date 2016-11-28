var router = require('express').Router();

router.get('/', (req, res) => res.send('this is relative root'));

router.get('/bak', (req, res) => res.send('bak,bak'))

module.exports = router;
