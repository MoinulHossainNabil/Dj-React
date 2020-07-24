import React, { Component } from "react";
import "./HomePage.css";
import Category from "../Category/Category";
import { Link } from "react-router-dom";
import axios from "axios";
import { CategoryContext } from "../ContexProviders/CategoryProvider";

class HomePage extends Component {
  static contextType = CategoryContext;

  constructor(props) {
    super(props);

    this.state = {
      job_list: [],
      category: [],
    };
    this.filterByCategory = this.filterByCategory.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/list_job/")
      .then((response) => {
        console.log(response.data);
        this.setState({ job_list: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  filterByCategory(category_id) {
    axios
      .get(`http://localhost:8000/api/filter_jobs_by_category/${category_id}/`)
      .then((respone) => {
        this.setState({ job_list: respone.data });
        document.getElementById(
          "filtered_jobs"
        ).innerHTML = `Total ${respone.data.length}`;
      })
      .catch((e) => {
        console.log("filter error", e);
      });
  }
  render() {
    const { job_list } = this.state;
    const listofJobs = job_list.map((job) => (
      <li className="single-job" key={job.id}>
        <div>
          <Link to={`job/${job.id}`}>
            <h3>{job.job_title}</h3>
          </Link>
        </div>
        <div>
          <h4>Company: {job.company_name}</h4>
        </div>
        <div>
          <p>
            <strong>Experience: </strong>
            {job.experience}
          </p>
        </div>
        <div>
          <p>
            <strong>Posted On: </strong>
            {new Date(job.posted_on).toDateString()}
          </p>
        </div>
        <div>
          <p>
            <strong>Deadline: </strong>
            {new Date(job.deadline).toDateString()}
          </p>
        </div>
      </li>
    ));

    return (
      <div className="main-container">
        <Category
          categoryFilter={this.filterByCategory}
          category_list={this.context.category}
        />

        <ul className="job-list">
          <div>
            <h3 id="filtered_jobs"></h3>
          </div>
          {listofJobs}
        </ul>
      </div>
    );
  }
}

export default HomePage;
