import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class SearchPosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          // searchBy: "",
          jobs: []
        }
    }

    componentDidMount() {
        const searchBy = this.props.match.params.key
        // this.setState({searchBy: searchBy})
        axios.get(`http://localhost:8000/api/search_by_key/${searchBy}/`)
        .then(response => {
            this.setState({jobs: response.data})
            console.log(`called api : http://localhost:8000/api/search_by_key/${searchBy}/`)
        })
        .catch(e => {
            console.log(e)
        })
    }
    
    render() {
        const {jobs} = this.state
        const listofJobs = jobs.map((job) => (
            <li className="single-job" key={job.id}>
              <div>
                <Link to={`/job/${job.id}`}>
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
            <div>
                <ul>
                    {listofJobs}
                </ul>
            </div>
        )
    }
}

export default SearchPosts
