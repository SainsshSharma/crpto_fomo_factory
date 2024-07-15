import mongoose from "mongoose"

const cryptoSchema=new mongoose.Schema({
    name:{type:String,required:true},    
    rank:{type:Number,required:true},
    color:{type:String,required:true},
    png:{type:String,required:true},    
    market:{type:Number,required:true},    
    allTimeHighUSD:{type:Number,required:true},
    circulationSupply:{type:Number,required:true},
})

export const crypto=mongoose.models.cryptoSchema || mongoose.model("Stock",cryptoSchema);