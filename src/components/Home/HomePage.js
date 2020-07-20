import React, { Component } from "react";
import "./HomePage.css";
import Category from "../Category/Category";
import { Link } from "react-router-dom";

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
    const data = [
      {
        job_id: 1,
        post_name: "Software Engineer",
        company: "Google Inc",
        experiecne: 2,
        posted: new Date().toDateString(),
        deadline: new Date(
          new Date().setMonth(new Date().getMonth() + 1)
        ).toDateString(),
      },
      {
        job_id: 2,
        post_name: "Software Developer",
        company: "Mozila Corp",
        experiecne: 1,
        posted: new Date().toDateString(),
        deadline: new Date(
          new Date().setMonth(new Date().getMonth() + 1)
        ).toDateString(),
      },
      {
        job_id: 3,
        post_name: "Database Administrator",
        company: "Microsoft",
        experiecne: 5,
        posted: new Date().toDateString(),
        deadline: new Date(
          new Date().setMonth(new Date().getMonth() + 1)
        ).toDateString(),
      },
    ];
    this.setState({ job_list: data });
    console.log("homepage did mount");
  }

  filterByCategory(category_name) {
    console.log(`filter by category ${category_name}`);
  }
  render() {
    const { job_list } = this.state;
    const listofJobs = job_list.map((job) => (
      <li className="single-job" key={job.job_id}>
        <div>
          <Link to={`job/${job.job_id}`}>
            <h3>{job.post_name}</h3>
          </Link>
        </div>
        <div>
          <h4>Company: {job.company}</h4>
        </div>
        <div>
          <p>
            <strong>Experience: </strong>
            {job.experiecne}
          </p>
        </div>
        <div>
          <p>
            <strong>Posted On: </strong>
            {job.posted}
          </p>
        </div>
        <div>
          <p>
            <strong>Deadline: </strong>
            {job.deadline}
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
