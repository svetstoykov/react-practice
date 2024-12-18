import calculatorIcon from "./assets/images/icon-calculator.svg"

function App() {
  return (
    <div className="h-screen flex items-center justify-center font-jakarta">
      <div className="flex md:flex-row flex-col md:min-h-[450px]">
        <div className="bg-white text-results md:p-10 p-4 md:min-w-[450px] rounded-l-xl">
          <div className="grid grid-rows-5 grid-cols-2 flex-grow md:gap-4 gap-2">
            <div className="col-span-2 flex justify-between items-start">
              <h1 className="text-2xl font-bold">Mortgage Calculator</h1>
              <button className="text-sm text-gray-500 underline">
                Clear all
              </button>
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="text-sm text-gray-500 mb-2">
                Mortgage Amount
              </label>
              <input className="border border-gray-600 rounded-md"></input>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-2">
                Mortgage Term
              </label>
              <input className="border border-gray-600 rounded-md"></input>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-2">Intrest Rate</label>
              <input className="border border-gray-600 rounded-md"></input>
            </div>
            <div className="col-span-2 row-span-2">
              <label className="text-sm text-gray-500">Mortgage Type</label>
              <ul className="flex flex-col gap-2 mt-2">
                <li className="border border-gray-600 rounded-md font-bold p-1">
                  <input className="mx-2" type="radio" name="mortgage-type" />
                  <label>Repayment</label>
                </li>
                <li className="border border-gray-600 rounded-md font-bold p-1">
                  <input className="mx-2" type="radio" name="mortgage-type" />
                  <label>Interest Only</label>
                </li>
              </ul>
            </div>
          </div>
          <button className="bg-lime py-3 px-6 rounded-3xl mt-4 flex items-center justify-center">
            <img src={calculatorIcon}/>
            <label className="ml-2">Calculate Repayments</label>
          </button>
        </div>
        <div className="bg-results text-white md:min-w-[300px] rounded-r-xl">
          Results
        </div>
      </div>
    </div>
  );
}

export default App;
