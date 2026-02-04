const { Router } = require('express');
const router = Router();

const {organizations} = require("../data");

router.get('/', (req, res) => {
    res.json(organizations)
});

module.exports = router;
