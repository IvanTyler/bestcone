const { Router } = require('express');
const router = Router();

const { projects } = require('../data');


router.get('/', (req, res) => {
    res.json(projects)
});


module.exports = router;
