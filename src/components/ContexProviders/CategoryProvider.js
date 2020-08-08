import React, { Component } from "react";
import axios from 'axios'

export const CategoryContext = React.createContext();

class CategoryProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      jobs: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8000/api/list_category/")
    .then(response => {
      console.log("category list", response.data)
      this.setState({category: response.data})
    })
    .catch(e => {
      console.log(e)
    })
    axios.get("http://localhost:8000/api/list_job/")
    .then(response => {
      this.setState({jobs: response.data})
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
