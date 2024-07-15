import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const Table = () => {
  const stockData = useSelector((state: RootState) => state.data.data);

  return (
    <div className="flex justify-center items-center max-w-full">
      <div className="overflow-x-auto w-1/2">
        <table className="table table-xs table-pin-rows table-pin-cols ">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg"> SNo.</th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Rank</th>
              <th className="text-lg">Market</th>
              <th className="text-lg">all Time High USD</th>
              <th className="text-lg">circulation Supply</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((items, index) => (
              <tr key={index} className="hover">
                <th className="text-lg">{index + 1}</th>
                <th className="text-lg">{items.name}</th>
                <th className="text-lg">{items.rank}</th>
                <th className="text-lg">{items.market}</th>
                <th className="text-lg">{items.allTimeHighUSD}</th>
                <th className="text-lg">{items.circulationSupply}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
