import { Request,Response,NextFunction } from "express";
import { Controller } from "../decorators/controller";
import { Route } from "../decorators/route";
import { crypto } from "../models/cryptoStocks";


@Controller()
class MainController{

    @Route('get','/api/token/:name')
    async getTokenValue(req:Request,res:Response,next:NextFunction){
        try{
            let name=req.params.name;
            const data=await crypto.find({name:`${name}`}).sort({$natural:1}).limit(20)            
            return res.status(200).json({data})
        }
        catch(err)
        {
            logging.error(err)
            return res.status(503).json("Wrong")
        }
    }

}

export default MainController;