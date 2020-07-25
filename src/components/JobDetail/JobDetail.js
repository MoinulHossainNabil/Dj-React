import React, { Component } from "react";
import axios from "axios";
import './JobDetail.css'

export default class JobDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      job_title: "",
      company_name: "",
      job_description: "",
      experience: "",
      address: "",
      state: "",
      posted_on: "",
      deadline: "",
      posted_by: "",
      category: "",
    };

    this.getJobDetail = this.getJobDetail.bind(this);
  }

  componentDidMount() {
    const jobId = this.props.match["params"].job_id;
    this.getJobDetail(jobId);
  }
  getJobDetail(jobId) {
    axios
      .get(`http://localhost:8000/api/view_single_job/${jobId}/`)
      .then((response) => {
        this.setState(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    const {
      id,
      job_title,
      company_name,
      job_description,
      experience,
      address,
      state,
      posted_on,
      deadline,
      posted_by,
      category,
    } = this.state;
    const jobDetail = (
      <li className="single-job">
        <div>
          <h3>{job_title}</h3>
        </div>
        <div>
          <h4>Company: {company_name}</h4>
        </div>
        <div>
          <p>
            <strong>Experience: </strong>
            {experience}
          </p>
        </div>
        <div>
          <p>
            <strong>Posted On: </strong>
            {new Date(posted_on).toDateString()}
          </p>
        </div>
        <div>
          <p>
            <strong>Deadline: </strong>
            {new Date(deadline).toDateString()}
          </p>
        </div>
      </li>
    );
    return (
      <div className="main-container">
        <ul className="job-list">
          <div>
            <h3>Detail</h3>
          </div>
          {jobDetail}
        </ul>
      </div>
    );
  }
}
