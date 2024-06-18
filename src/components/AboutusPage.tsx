import { Component } from "react";

export interface IAboutusPageProps {}

export default class AboutusPage extends Component<IAboutusPageProps> {
  constructor(props:IAboutusPageProps){
    super(props);
  }
  render() {
    return <div className="mt-3">AboutUs Page</div>;
  }
}
