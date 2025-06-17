import express from 'express';
import cors from 'cors';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import apiRouter from './routes/index.js';

import { PORT } from './config/serverConfig.js';

const app = express();
const server = createServer(app);
const io = new Server(server,{
  cors: {
    origin: '*',
    method: ['GET','POST'],
  }
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.use('/api',apiRouter);

app.get('/ping',(req,res) => {
    return res.json({ message: 'ping'});
})

server.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})