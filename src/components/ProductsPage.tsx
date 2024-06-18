import { Component } from "react";
import { constructorStyle, didMountringStyle, renderStyle } from "../assets/styles";

export interface IProductsPageProps {}
interface IHomePageState {
  products: [];
}
export default class ProductsPage extends Component<
  IProductsPageProps,
  IHomePageState
> {
  constructor(props: IProductsPageProps) {
    console.log("%cConstructor Function Products #1", constructorStyle);
    super(props);
    this.state = {
      products: [],
    }; //* Groups of States
  }
  componentDidMount(): void {
    //* Execute third method propaply used to store data from API
    console.log(
      "%cComponent Did Mount Products #3 - Fetching Data From API",
      didMountringStyle
    );

    //* Fetching Data From API
    const getProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        this.setState({ products: data.products});
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }

  public render() {
    console.log("%cRender | Re-render Function  Products #2", renderStyle);
    return (
      <div>
        {this.state.products.map((product: { id: number; title: string }) => {
          return <p key={product.id}>{product.title}</p>;
        })}
      </div>
    );
  }
}
