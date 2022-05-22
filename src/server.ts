import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mustache from 'mustache-express';
import IndexRoutes from './routes';

dotenv.config();

const server = express();


server.set('view engine','mustache');
server.engine('mustache',mustache());


server.set('views',path.join(__dirname,'./views'));
server.use(express.static(path.join(__dirname,'../public')));

server.use(IndexRoutes);

server.use((req:Request,res:Response)=>{
    res.status(404);
    res.send("Página não encontrada");
});

server.listen(process.env.SERVER_PORT);