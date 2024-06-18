import { useState } from "react";
import "./App.css";
import AboutusPage from "./components/AboutusPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ProductsPage from "./components/ProductsPage";
import HooksPage from "./components/HooksPage";

function App() {
  const [page, setPage] = useState<"HomePage" | "ProductsPage" | "AboutPage"| "UseEffectPage">("HomePage");
  return (
    <>
      <h1 className="bg-white text-slate-800 p-2 rounded-md w-fit text-center font-bold text-4xl">
        Component Life Cycle (In React)
      </h1>
      <Navbar setpage={setPage} />
      {/* {page === "HomePage" && <HomePage />} */}
      {/* {page === "ProductsPage" && <ProductsPage />} */}
      {/* {page === "AboutPage" && <AboutusPage />} */}
      {page === "UseEffectPage" && <HooksPage/>}
    </>
  );
}

export default App;
