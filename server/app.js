const express = require('express');
const cors = require('cors')
const path = require('path');

const indexRouter = require('./routes/indexRouter');
const projectInfoRouter = require('./routes/projectsInfoRouter');
const organizationsRouter = require('./routes/organizationsRouter');
const organizationsInfoRouter = require('./routes/organizationInfoRouter');


const app = express();
const PORT = process.env.PORT || 3005 || 10000;

app.use(cors({
    origin: [
        'https://bestcone.vercel.app',    // Продакшн
        'http://172.17.112.1:3000',       // Vite с IP
        'http://localhost:3000',          // Локальный Vite
        'http://127.0.0.1:3000',          // Альтернативный локальный
        'http://localhost:5173'           // Vite по умолчанию
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
    optionsSuccessStatus: 200
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
