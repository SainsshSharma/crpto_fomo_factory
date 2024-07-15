import { Request,Response,NextFunction } from "express";

export function loggingHandle(req:Request,res:Response,next:NextFunction){
    logging.log(`Incoming Method : [${req.method}] - URL : [${req.url}] - IP: [${req.socket.remoteAddress}]`)

    res.on('finish',()=>{
        logging.log(`Incoming Method : [${req.method}] - URL : [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`)        
    })

    next();
}