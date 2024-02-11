import express from 'express';
import cors from 'cors';
import projects from './routes/projects';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use('/projects', projects);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port);