import React, { Component } from "react";
import axios from 'axios'

export const CategoryContext = React.createContext();

class CategoryProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      dummy: "this is dummy"
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8000/api/list_category/")
    .then(response => {
      this.setState({category: response.data})
    })
    .catch(e => {
      console.log(e)
    })
  }

  render() {
    return (
      <CategoryContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </CategoryContext.Provider>
    );
  }
}

export default CategoryProvider;
