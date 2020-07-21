import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./JobPostForm.css";

export default class JobPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitle: "",
      company: "",
      category: "",
      experience: "",
      address: "",
      stateName: "",
      jobDescription: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, e.target.value);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    // Api call
    // console.log(this.state);
  };

  componentDidMount() {
      console.log("Job Post Mounted")
  }

  render() {
    //   if(localStorage.getItem("access-token") ===null){
    //       return <Redirect to="login" />
    //   }
    // if (!this.props.loggedInStatus) {
    //   return <Redirect to="login" />;
    // }
    const {
      jobTitle,
      company,
      category,
      experience,
      address,
      stateName,
      jobDescription,
    } = this.state;
    return (
      <div>
        <form className="jobPostForm">
          <div className="form-group col-md-6">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={jobTitle}
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
              name="company"
              value={company}
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
              name="jobDescription"
              value={jobDescription}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCategory">Category</label>
            <select
              id="inputCategory"
              className="form-control"
              value={category}
              name="category"
              onChange={this.handleChange}
              // required
            >
              <option>Choose...</option>
              <option>IT And Telecommunication</option>
              <option>Business Administration</option>
              <option>Civing Engineering</option>
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
            <label htmlFor="inputState">State</label>
            <select
              id="inputState"
              className="form-control"
              value={stateName}
              name="stateName"
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
