import dotenv from 'dotenv';
import express from 'express';

import MasterRouter from './routers/MasterRouter';

dotenv.config({
    path: '.env'
});

class Server {
    public app = express();
    public router = MasterRouter;
}

const server = new Server();
server.app.use('/', server.router);

((port = process.env.APP_PORT || 8000) => {
    server.app.listen(port, () => {
        console.log(`Server is listening on Port : ${port}`);
    })

})();