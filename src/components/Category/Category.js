import React, { Component } from "react";
export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
    };
  }
  componentDidMount() {
    this.setState({
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
      ],
    });
    console.log("category did mount");
  }

  render() {
    const { category } = this.state;
    const listofCategory = category.map((cat) => (
      <li className="col-md-3 col-sm-6 col-xs-6" key={cat.id}>
        <div className="jobsWrp">
          <div className="job-icon">
            <i className="fa fa-line-chart" aria-hidden="true"></i>
          </div>
          <div className="categoryName">
            <button
              onClick={() => {
                this.props.categoryFilter(`${cat.name}`);
              }}
            >
              {cat.name}
            </button>
          </div>
        </div>
      </li>
    ));

    return (
      <div className="category">
        <ul className="category-list">{listofCategory}</ul>
      </div>
    );
  }
}
