const { Router } = require('express');
const router = Router();

const {projectsListInfo} = require("../data");

router.post('/', (req, res) => {
    const { id } = req.body

    const projectInfo = projectsListInfo.find(el => el.id === id);
    res.json(projectInfo)
});

module.exports = router;
