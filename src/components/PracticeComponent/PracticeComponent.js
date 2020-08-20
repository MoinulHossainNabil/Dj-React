import React, { Component } from "react";
import { CategoryContext } from "../ContexProviders/CategoryProvider";

export class PracticeComponent extends Component {
  static contextType = CategoryContext;
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      job_list: [],
    };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
    console.log(this.context.jobs);
    const filterdJobs = this.context.jobs.filter((job) =>
      job.job_title
        .toLowerCase()
        .includes(this.state.search.toLocaleLowerCase())
    );
    console.log("filtered jobs: ", filterdJobs);
    this.setState({ job_list: filterdJobs });
  };

  render() {
    const { search, job_list } = this.state;
    let jobList = [];
    if (search === "") {
      jobList = this.context.jobs.map((job) => (
        <li key={job.id}>{job.job_title}</li>
      ));
    } else {
      jobList = job_list.map((job) => <li key={job.id}>{job.job_title}</li>);
    }

    return (
      <div>
        <form>
          <input
            name="search"
            value={search}
            placeholder="search"
            onChange={this.handleChange}
          ></input>
        </form>
        <ul>{jobList}</ul>
      </div>
    );
  }
}

export default PracticeComponent;
