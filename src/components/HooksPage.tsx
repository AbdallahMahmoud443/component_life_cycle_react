import { useEffect, useState } from "react";

interface IProps {}

const HooksPage = ({}: IProps) => {
  const [counter, setcounter] = useState(0);
  const [products,setProducts]= useState([]);
  useEffect(() => {
    console.log("Use Effet Hook ❤");
    //* Fetching Data From API
    const controller = new AbortController();
    const signal = controller.signal; //! Important to cancel request from API
    const getProduct = async () => {
      try {
        const response = await (await fetch("https://dummyjson.com/products",{signal})).json(); // IIEF
        setProducts(response.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
    return ()=>{ //* cleanup method
        controller.abort(); //! Important to cancel request from API 
    }
  }, []); //* work as (ComponentDidMount) because dependency list is empty (work only one)
/*
  useEffect(() => {
    console.log("Use Effet Hook ❤");
    return ()=>{ //* Return cleanUp Component work as ComponentWillUnMounted method in class component use when (Abort Controller) search for this concept
        console.log("ComponentUnMounted")
    }
  }, [counter]); //* work when counter state is changing work as (ComponentDidUpdate) and one 
*/
  console.log("Render | Re-render"); //* anything before return in component is equally with render function in class component
  console.log(products);
  return (
    <>
      <div className="mt-3">
        <h2>Use Effect Hook</h2>
        <h4>Counter : {counter}</h4>
        <button onClick={() => setcounter((prev) => prev + 1)}>
          Increament
        </button>
        <div>
            {products.length ? products.map((product:{id:number,title:string}) =>{
                return(
                    <div key={product.id}>
                        <p>{product.title}</p>
                    </div>
                );
            }):"No Products"}
        </div>
      </div>
    </>
  );
};

export default HooksPage;
