import { useState } from "react";
import "./App.css";
import AboutusPage from "./components/AboutusPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ProductsPage from "./components/ProductsPage";

function App() {
  const [page, setPage] = useState<string>("HomePage");
  return (
    <>
      <h1 className="bg-white text-slate-800 p-2 rounded-md w-fit text-center font-bold text-4xl">
        Component Life Cycle (In React)
      </h1>
      <Navbar setpage={setPage} />
      {page === "HomePage" && <HomePage />}
      {page === "ProductsPage" && <ProductsPage />}
      {page === "AboutPage" && <AboutusPage />}
    </>
  );
}

export default App;
