import React, { Component } from "react";

export const CategoryContext = React.createContext();

class CategoryProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [
        {
          id: 1,
          name: "IT And Telecommunication",
        },
        {
          id: 2,
          name: "Business Administration",
        },
        {
          id: 3,
          name: "Civil Engineering",
        },
        {
          id: 4,
          name: "Mechanical Civil Engineering",
        },
      ],
    };
  }
  componentDidMount() {
    console.log("Provider called");
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
