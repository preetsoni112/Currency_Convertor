import {React, useEffect, useState, useId} from "react";
import "./App.css";
import useCurrency from "../../currency/src/hook/useCurrency";

function App() {
  const uniqueId = useId();
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("usd");
  const [convertedAmt, setConvertedAmt] = useState(0);

  const currencies = useCurrency(from);
  const currencyOptions = Object.keys(currencies || {});



  const result = () => {
    if (currencies[to]) {
      setConvertedAmt(amount * currencies[to]);
    } else {
      setConvertedAmt(0);
    }
  };

  console.log("Currency Options:", currencyOptions);

  return (
    <div
      id="page"
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/421927/pexels-photo-421927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div
        style={{ backgroundColor: "rgba(173, 216, 230, 0.7)" }}
        className=" max-w-2xl h-72 flex flex-col justify-between p-4 border border-gray-200 rounded-lg mx-auto mt-10"
      >
        <div
          id="From"
          className=" text-blue-700 font-semibold w-96 p-2 h-28 mb-2 rounded-lg bg-white flex flex-col"
        >
          <div>
            <span className="text-gray-500 relative float-left">From</span>
            <span className="text-gray-500 relative float-right">
              Currency Type
            </span>
          </div>
          <div>
            <input
              type="number"
              id={uniqueId}
              value={amount}
              placeholder="Enter Amt.."
              onChange={(e) =>
                setAmount(Number(e.target.value))
              }
              className="p-1 mt-4 font-semibold text-lg text-blue-800 relative float-left"
            />
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="bg-blue-600 cursor-pointer ml-5 mt-5  w-20 text-white p-1 text-lg"
            >
              {currencyOptions.map((currency, index) => (
                <option
                  class="FromOptions"
                  value={currencies}
                  id={`${currency}-${index}`}
                  key={index}
                >
                  {currency}
                </option>
              
              ))}
            </select>
          </div>
        </div>

        <div
          id="To"
          className=" text-blue-700 font-semibold w-96 p-2 h-28 mb-2 rounded-lg bg-white flex flex-col"
        >
          <div>
            <span className="text-gray-500 relative float-left">To</span>
            <span className="text-gray-500 relative float-right">
              Currency Type
            </span>
          </div>
          <div>
            <input
              type="number"
              id={uniqueId}
              value={convertedAmt}
              readOnly
              className="mt-4 p-1 font-semibold text-lg text-blue-800 relative float-left"
            />
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className=" cursor-pointer bg-blue-600 ml-5 mt-5  w-20 text-white p-1 text-lg"
            >
              {currencyOptions.map((currency, index) => (
                <option
                  value={currency}
                  id={`${currency}-${index}`}
                  key={index}
                >
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full font-semibold text-lg bg-blue-800 rounded-lg text-white cursor-pointer p-3">
          <button onClick={result}>Convert</button>
        </div>
      </div>
    </div>
  );
}

export default App;
