import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./JobPostForm.css";
import { CategoryContext } from "../ContexProviders/CategoryProvider";

export default class JobPostForm extends Component {
  static contextType = CategoryContext;
  constructor(props) {
    super(props);

    this.state = {
      job_title: "",
      company_name: "",
      job_description: "",
      category: "",
      experience: "",
      address: "",
      state: "",
      deadline: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access-token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const data = { ...this.state };
    data["posted_by"] = Number(localStorage.getItem("user_id"));
    console.log("data to be posted", data);
    axios
      .post("http://localhost:8000/api/post_job/", data, config)
      .then((respone) => {
        console.log("posted", respone.data);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  render() {
    if (!this.props.loggedInStatus) {
      return <Redirect to="login" />;
    }
    const category_list = this.context.category.map((cat) => (
      <option key={cat.id} value={parseInt(cat.id)}>
        {cat.job_category}
      </option>
    ));
    const {
      job_title,
      company_name,
      job_description,
      category,
      experience,
      address,
      state,
      deadline,
    } = this.state;
    return (
      <div>
        <form className="jobPostForm">
          <div className="form-group col-md-6">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              name="job_title"
              value={job_title}
              onChange={this.handleChange}
              className="form-control"
              id="jobTitle"
              placeholder="Job Title"
              // required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCompany">Company</label>
            <input
              type="text"
              name="company_name"
              value={company_name}
              onChange={this.handleChange}
              className="form-control"
              id="inputCompany"
              placeholder="Company Name"
              // required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="jobDescription">Job Description</label>

            <textarea
              className="form-control"
              id="jobDescription"
              rows="3"
              name="job_description"
              value={job_description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCategory">Category</label>
            <select
              id="inputCategory"
              className="form-control"
              name="category"
              value={category.id}
              onChange={this.handleChange}
              // required
            >
              <option>Choose...</option>
              {category_list}
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputExperience">Experience</label>
            <input
              type="number"
              name="experience"
              value={experience}
              onChange={this.handleChange}
              className="form-control"
              id="inputExperience"
              // required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={this.handleChange}
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputDeadline">Deadline</label>
            <input
              type="datetime-local"
              name="deadline"
              value={deadline}
              onChange={this.handleChange}
              className="form-control"
              id="inputDeadline"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputState">State</label>
            <select
              id="inputState"
              className="form-control"
              value={state}
              name="state"
              onChange={this.handleChange}
              // required
            >
              <option>Choose...</option>
              <option>Dhaka</option>
              <option>Chitagong</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <button className="btn btn-primary" onClick={this.handleFormSubmit}>
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}
