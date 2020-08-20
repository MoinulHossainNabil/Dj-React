import React, { Component } from "react";
import "./HomePage.css";
import Category from "../Category/Category";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import axios from "axios";
import { CategoryContext } from "../ContexProviders/CategoryProvider";

class HomePage extends Component {
  static contextType = CategoryContext;

  constructor(props) {
    super(props);

    this.state = {
      job_list: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 3,
    };
    this.filterByCategory = this.filterByCategory.bind(this);
    this.paginate = this.paginate.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/list_job/")
      .then((response) => {
        this.setState({ loading: true });
        this.setState({ job_list: response.data });
        this.setState({ loading: false });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  filterByCategory(category_id) {
    let url = "";
    if (category_id == "-1") {
      url = "http://localhost:8000/api/list_job/";
    } else {
      url = `http://localhost:8000/api/filter_jobs_by_category/${category_id}/`;
    }
    axios
      .get(url)
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

  paginate(page) {
    this.setState({ currentPage: page });
  }

  render() {
    const { job_list, loading, currentPage, postsPerPage } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = job_list.slice(indexOfFirstPost, indexOfLastPost);

    const listofJobs = currentPosts.map((job) => (
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
            <p id="filtered_jobs"></p>
          </div>
          {listofJobs}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={job_list.length}
            paginate={this.paginate}
          />
        </ul>
      </div>
    );
  }
}

export default HomePage;
