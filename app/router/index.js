const router = require('express').Router();
const index = require('../controller/index')

router.post('/search', index.search)

module.exports = router;