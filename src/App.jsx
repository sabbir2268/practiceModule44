import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Charts from "./components/Charts/Charts";
import axios from "axios";
import MarksChart from "./components/Charts/MarksChart";

const pricingPromise = fetch("/Data/pricingData.json").then((res) =>
  res.json()
);

// hanlding promise with Axois
const marksPromise = axios.get("Data/studentData.json");

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <div className="flex justify-center min-h-screen">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-64">
                <span className="loading loading-bars loading-lg text-primary"></span>
              </div>
            }
          >
            <Pricing pricingPromise={pricingPromise} />
          </Suspense>
        </div>
        <Charts></Charts>

        <Suspense
          fallback={
            <div className="flex justify-center items-center h-64">
              <span className="loading loading-bars loading-lg text-primary"></span>
            </div>
          }
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>
    </>
  );
}

export default App;
