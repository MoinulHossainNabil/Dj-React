import React, { Component } from "react";
export default class Category extends Component {
  render() {
    const listofCategory = this.props.category_list.map((cat) => (
      <li className="col-md-3 col-sm-6 col-xs-6" key={cat.id}>
        <div className="jobsWrp">
          <div className="job-icon">
            <i className="fa fa-line-chart" aria-hidden="true"></i>
          </div>
          <div className="categoryName">
            <button
              onClick={() => {
                this.props.categoryFilter(`${cat.id}`);
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
