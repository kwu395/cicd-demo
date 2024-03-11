import express, {json}  from 'express'
import dotenv from 'dotenv';

dotenv.config();

const server = express();
const port = process.env.PORT || 8089;

server.use(json());

server.listen('port', () => {
    console.log('listening to port 8989');
})
