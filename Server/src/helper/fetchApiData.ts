import { crypto } from "../models/cryptoStocks";
export async function fetchApiData(coin:string){
    let apiData=await fetch(new Request("https://api.livecoinwatch.com/coins/single"), {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json",
          "x-api-key": "e084e928-43a8-4919-9aed-d4e12631c3f6",
        }),
        body: JSON.stringify({
          currency: "USD",
          code: coin,
          meta: true,
        }),
      });
    
    return await apiData.json()
}

export async function storeData(coin:string){

    try{
        const data=await fetchApiData(coin)
        const document=new crypto({
            name:data.name,            
            rank:data.rank,
            color:data.color,
            png:data.png32,            
            market:data.markets,            
            allTimeHighUSD:data.allTimeHighUSD,
            circulationSupply:data.circulatingSupply
        })

        await document.save()

        
    }
    catch(err)
    {
        logging.error(err)
    }
    
}