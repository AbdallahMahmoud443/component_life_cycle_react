import { useEffect, useState } from "react";

interface IProps {}

const HooksPage = ({}: IProps) => {
  useEffect(() => {
    console.log("Use Effet Hook ❤");
    //* Fetching Data From API
    const getProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []); //* work as (ComponentDidMount) because dependency list is empty (work only one)
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    console.log("Use Effet Hook ❤");
    return ()=>{ //* Return cleanUp Component work as ComponentWillUnMounted method in class component use when (Abort cancelation) search for this concept
        console.log("ComponentUnMounted")
    }
  }, [counter]); //* work when counter state is changing work as (ComponentDidUpdate)
  console.log("Render | Re-render"); //* anything before return in component is equally with render function in class component
  return (
    <>
      <div className="mt-3">
        <h2>Use Effect Hook</h2>
        <h4>Counter : {counter}</h4>
        <button onClick={() => setcounter((prev) => prev + 1)}>
          Increament
        </button>
      </div>
    </>
  );
};

export default HooksPage;
