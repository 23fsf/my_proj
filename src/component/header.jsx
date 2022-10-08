import React from "react";
import { Component } from "react";
import Home from "./home";
import Active from "./active"
import AboutUs from "./aboutUs";
import Settings from "./settings";

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            x:<Home/>,
            color:"white",
            BColor:"headerDiv"
        }
    }
    buttonHead(i){
        this.setState({
            x:i
        })
    }
    Color(i){
        i==="white"?this.setState({color:"black",BColor:"headerDiv2"})
        :this.setState({color:"white",BColor:"headerDiv"})
    }
    render(){
        return(
            <div>
                <div className={this.state.BColor}>
                    <h1 className="headerH1">IT <span className="headerSpan">LIVE</span></h1>
                    <button className="headerButton" onClick={()=>this.buttonHead(<Home/>)}>Home</button>
                    <button className="headerButton" onClick={()=>this.buttonHead(<Active/>)}>Activites</button>
                    <button className="headerButton" onClick={()=>this.buttonHead(<AboutUs/>)}>About us</button>
                    <button className="headerButton" onClick={()=>this.buttonHead(<Settings/>)}>Setting</button>
                    <button className="headerButtonColorL" onClick={()=>this.Color()}>W</button>
                    <button className="headerButtonColorR" onClick={()=>this.Color()}>B</button><hr/>
                </div>
            {this.state.x}
            </div>
        )
    }
}
export default Header;