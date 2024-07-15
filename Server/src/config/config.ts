import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

export const DEVELOPMENT=process.env.NODE_ENV==='development'
export const TEST=process.env.NODE_ENV==='test'


export const MONGO_URI=process.env.MONGO_URI || ''

export const SERVER_HOSTNAME=process.env.SERVER_HOSTNAME || 'localhost'
export const SERVER_PORT=process.env.SERVER_PORT ? Number(process.env.SERVER_PORT):12345




export enum coinList{ 
    BTC="BTC",
    ETH="ETH",
    USDT="USDT",
    BNB="BNB",
    SOL="SOL"
}

export const mongo={
    MONGO_CONNECTION: `${MONGO_URI}`
}


export const SERVER={
    SERVER_HOSTNAME,
    SERVER_PORT
}