import { Component } from "react";
import {
  constructorStyle,
  didMountringStyle,
  didUpdatingStyle,
  renderStyle,
  unmMountingStyle,
} from "../assets/styles";

interface IHomePageProps {}

interface IHomePageState {
  counter: number;
}

class HomePage extends Component<IHomePageProps, IHomePageState> {
  constructor(props: IHomePageProps) {
    //* execute one time when component insert in DOM
    super(props);
    this.state = {
      counter: 0,
    }; //* Groups of States
    console.log("%cConstructor Function Home #1", constructorStyle);
  }
  componentDidMount(): void {
    //* Execute third method propaply used to store data from API
    console.log(
      "%cComponent Did Mount Home #3 -  Fetching Data From API",
      didMountringStyle
    );
  }
  componentDidUpdate(): void {
    //* Execute After render while change in state or props (not everytime work) 
    //! Not Used To Fetch Data From API Cause Infinity Loop 
    console.log("%cComponent Did Update (Home)", didUpdatingStyle);
  }
  componentWillUnmount(): void { //* execute when component disappear from DOM
    console.log("%ccomponent Will Unmount (Home)", unmMountingStyle);
  }
  render() {
    //* execute everytime when rendering component in 2 state => changing in (props | state) inside component
    console.log("%cRender | Re-render Function Home #2", renderStyle);
    return (
      <div className="mt-3">
        <h2>Home Page</h2>
        <h4>Counter : {this.state.counter}</h4>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increament
        </button>
      </div>
    ); //* JSX Content
  }
}

export default HomePage;
