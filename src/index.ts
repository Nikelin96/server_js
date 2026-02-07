import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import usersRouter from './routes/users.ts';

const app = express();
app.use('/api/users', usersRouter);

app.get('/api/users', (request: Request, response: Response, next: NextFunction) => {
    response.send([]);
});


// app.get('/api/users', (req, resp) => {
// });

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Running on Port: [${PORT}]`)
});