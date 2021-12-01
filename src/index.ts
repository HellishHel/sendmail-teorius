import 'dotenv/config';
import router from './router';
import express from 'express';
import cors from 'cors';

import errorMiddleware from './middlewares/errorMiddleware';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));
app.use('/api', router);
app.use(errorMiddleware);

const run = async (): Promise<void> => {
    try {
        app.listen(PORT, () => console.log(`Server stared on PORT = ${PORT}`));
    } catch (e) {
        console.error(e);
    }
}

run();
