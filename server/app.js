const express = require('express');
const cors = require('cors')
const {projects, projectsListInfo} = require("./data");


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res) => {
    res.json(projects)
})

app.post('/projectsInfo', (req, res) => {
    const { id } = req.body

    const projectInfo = projectsListInfo.find(el => el.id === id);
    res.json(projectInfo)
});

app.listen(PORT, () => {
    console.log('server work >>>', PORT)
})