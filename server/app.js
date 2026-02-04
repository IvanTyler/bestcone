const express = require('express');
const cors = require('cors')
const path = require('path');

const indexRouter = require('./routes/indexRouter');
const projectInfoRouter = require('./routes/projectsInfoRouter');
const organizationsRouter = require('./routes/organizationsRouter');
const organizationsInfoRouter = require('./routes/organizationInfoRouter');


const app = express();
const PORT = 3005;

app.use(cors({
    // origin: ['http://localhost:3000', 'http://localhost:3001'], // все возможные порты
    // credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

app.use('/', indexRouter);
app.use('/projectsInfo', projectInfoRouter);
app.use('/organizations', organizationsRouter);
app.use('/organizationsInfo', organizationsInfoRouter);



app.listen(PORT, () => {
    console.log('server work >>>', PORT)
})