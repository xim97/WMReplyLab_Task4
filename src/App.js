import React, { Component } from 'react';
import LeftPart from "./components/LeftPart";

import './App.css';
import RightPart from './components/RightPart';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: []
    }

    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.handleAddPoduct = this.handleAddPoduct.bind(this);
  }

  handleAddCategory(category) {
    let categories = this.state.categories;
    categories.push(category);
    this.setState({
      categories: categories
    });
  }

  handleAddPoduct(product) {
    let products = this.state.products;
    products.push({
      product: product,
      id: products.length
    });
    this.setState({
      products: products
    });
  }

  render() {
    return (
      <div className="App">
        <LeftPart
          products={this.state.products}
          categories={this.state.categories}
          handleAddCategory={this.handleAddCategory}
          handleAddPoduct={this.handleAddPoduct}
        />
        <RightPart
          products={this.state.products}
        />
      </div>
    );
  }
}