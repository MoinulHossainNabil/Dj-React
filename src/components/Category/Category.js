import React, { Component } from "react";
import axios from "axios";
export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/list_category/")
      .then((response) => {
        this.setState({ category: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
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
                this.props.categoryFilter(`${cat.job_category}`);
              }}
            >
              {cat.job_category}
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
