const { Router } = require('express');
const router = Router();

const {organizations} = require("../data");

router.post('/', (req, res) => {
    const { id } = req.body

    const organizationInfo = organizations.find(el => el.id === id);
    res.json(organizationInfo)
});

module.exports = router;
