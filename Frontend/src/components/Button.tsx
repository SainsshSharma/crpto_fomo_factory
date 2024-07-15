import { useEffect } from "react";
import { getFirst, coinList } from "../utils/coinListEnum";
import { useSearchParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import { setData } from "../store/dataSlice";


const ButtonComponent = () => {
  
  const [param, setParams] = useSearchParams();
  const dispath = useDispatch();  

  useEffect(() => {
    setParams({ token: getFirst() });
  }, []);

  useEffect(() => {
    getData();
    const interval=setInterval(()=>{
      getData();
    },5000)
    
    return ()=>clearInterval(interval);

  }, [param.get('token')]);


  async function ChangeUrl(path: string) {
    setParams({ token: path });
  }

  async function getData() {
    
    const response = await fetch(      
      import.meta.env.VITE_APP_API_ENDPOINT +
        coinList[param.get("token") as keyof typeof coinList]
    );
    const data = await response.json();

    dispath(setData(data.data));
  }

  return (
    <div className="w-full flex justify-center items-center p-5">
    <div className="w-1/4 flex justify-around items-center">
      {(Object.keys(coinList) as Array<keyof typeof coinList>).map((k, i) => {
        return (
          <button className="btn btn-active"
            key={i}
            onClick={() => {
              ChangeUrl(k);
            }}
          >
            {k}
          </button>
        );
      })}
    </div>
    </div>
  );
};

export default ButtonComponent;
