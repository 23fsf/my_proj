import React from "react";
import Header from "./component/header";
import Footer from "./component/footer"

function App(){
  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  )}

export default App;
/*
import React, { Component } from "react";
import "./index.css";
    const list=[
      {
        title:'react',
        owner:'facebook',
        url: 'www.ract.org',
        Id:0
      },
      {
        title:'angular2',
        owner:'google',
        url: 'www.andular.org',
        Id:1
      },
      {
        title:'vuejs',
        owner:'evan',
        url: 'www.vuejs.org',
        Id:2
      }]
      function isSearched(val){
        return function(item){
          return (item.title.toLowerCase().includes(val.toLowerCase()));
        }
      }
  class App extends Component{
    constructor(props){
      super(props);
      this.state={
        list , // list:list , list, i=i+1 , i+=1
        searchValue : '',
        x:<h1>w</h1>
      }
      //this.onClick=this.onClick.bind(this);
      this.onChanged=this.onChanged.bind(this);
    }
  onDelete(i){
    const newList=this.state.list.filter(function(item){
      return item.Id !== i;
    })
    this.setState({
      list: newList
    })
  }
  onClick(){
    console.log(this)
  }
  onhear(){
    this.setState({
      x:<h1>ww</h1>
    })
  }
  onChanged(event){
    this.setState({
      searchValue: event.target.value
    })
  }
  render(){
    return(
      <div className="App">
        <form>
          <input type="text"
          onChange ={this.onChanged}
          ></input>
        </form>
        <hr/>
        {this.state.list.filter(isSearched(this.state.searchValue)).map(item =>
          <div key={item.Id}>
            <span>
              <a href={item.url}>{item.title}</a></span>
            &nbsp; By: <span>{item.owner}</span>
            &nbsp; <button 
            onClick={()=> this.onDelete(item.Id)} 
            type="button">
            Delete</button>
          </div>
        )}
        <button 
        onClick={()=> this.onClick()}
        type="button">click me</button>
        <button 
            onClick={()=> this.onhear()} 
            type="button">
            Delete</button>
        {this.state.x}
      </div>
    )
  }
}

export default App;
*/