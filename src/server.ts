import express from 'express';
import { json } from 'body-parser';
import { submissionsRouter } from './routes/submissions';
import { indexRouter } from './routes';

const app = express();
const PORT = 3000;

app.use(json());

app.use('/', indexRouter);
app.use('/submissions', submissionsRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
