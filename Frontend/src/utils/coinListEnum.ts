export enum coinList{
    BTC="Bitcoin",
    ETH="Ethereum",
    USDT="Tether",
    BNB="BNB",
    SOL="Solana"
}

export const getFirst=()=>{
    return Object.keys(coinList)[0]
}