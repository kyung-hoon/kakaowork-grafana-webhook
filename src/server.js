import fs  from "fs";
import express  from "express";
import {parse}  from "./parser.js"
import {send} from "./sender.js"

let server ={}; 

async function defineOrg(body){
    const org
    //org를 통해 url 확인하기
    return org;
}

server.initServer = function(){
    const app = express();
    // configmap 으로 부터 읽어오기
    // 웹훅서버 추가시에 컨피그맵만 변경하도록
    const servers = JSON.parse(fs.readFileSync("etc/config/webhookServer.json"))
    console.log(servers);
    app.use(express.json())

    app.post( '/', ( req, res ) => {
        console.log( 'received webhook', req.body );
        const parsedOutput=  await parse(req.body)
        await send(await defineOrg(req.body),parsedOutput);
        res.sendStatus( 200 );
});

    app.listen( 9000, () => console.log( 'Node.js server started on port 9000.' ) );
}
export default server ;