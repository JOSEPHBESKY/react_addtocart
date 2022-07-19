import React, { Component } from 'react'
import products from './products.json'
export default class App extends Component {
  constructor (){
    super();
    this.state={
      name:'josephbesky',
      cartidems:[]
    }
  }
  addtocart(pro){
    var prod=this.state.cartidems;
    console.log(prod);
    products.find((e)=>e.qty+=1)
    this.setState({cartidems:[...prod,pro]});
  }
  render() {
    return (
      <div>
        {
          products.map((products,index)=>{return <div key={index} >
            <h1>{products.name}</h1>
            <button onClick={()=>this.addtocart(products)}>Add to cart</button>
          </div>})
          }
        <h1>cartidems</h1>{
          this.state.cartidems.map((products,index)=>{return <div key={index}><h1>{products.name}</h1></div>})
        }
      </div>
    )
  }
}
