import React, { Component } from "react";
import "./HomePage.css";
import Category from "../Category/Category";
import { Link } from "react-router-dom";
import axios from "axios";

class HomePage extends Component {
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
    .then(response => {
      console.log(response.data)
      this.setState({job_list: response.data})
    })
    .catch(e => {
      console.log(e)
    })
  }

  filterByCategory(category_name) {
    console.log(`filter by category ${category_name}`);
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
        <Category categoryFilter={this.filterByCategory} />
        <ul className="job-list">{listofJobs}</ul>
      </div>
    );
  }
}

export default HomePage;
