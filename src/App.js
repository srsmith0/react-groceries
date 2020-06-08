import React, { Component } from 'react';
import './App.css';
import List from "./GList";
import AddGro from "./AddGro"


class App extends Component {
  state = {
    groceryList: [
      { id: 1, name:"Beans", inCart: false },
      { id: 2, name:"Spinach", inCart: true },
      { id: 3, name:"Sweet Potatoes", inCart: false },
      { id: 4, name:"Garlic", inCart: true },
      { id: 5, name:"Peaches", inCart: false },
    ]
  }


  handleClick = (id) => {
    const { groceryList } = this.state;
    this.setState({
      groceryList: groceryList.map( gro => {
        if (gro.id === id)  { 
         return { ...gro, inCart: !gro.inCart}
      } 
      return gro
    })
  })
}
  addItem = (grocName) => {
    const { groceryList } = this.state;
    const todo  = { name: grocName, id: `${Math.random()}` , inCart: false }
    this.setState({ groceryList: [todo, ...groceryList] }); 
  }

  render () { 
    const { groceryList } = this.state;
  return (
    <div>
      <ul>
     <AddGro addItem={this.addItem} />
     <List name={"Grocery List"} groceries= { groceryList } grocClick={this.handleClick} />
     </ul>
    </div>
    );
  }
}


export default App;
