import React from "react";
import axios from "axios";
class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        }

    this.getProjects = this.getProjects.bind(this);

    }
    componentDidMount() {
        this.getProjects();
      }
      getProjects() {
        axios.get("/projects").then((response) => {
          this.setState({ projects: response.data });
        });
      }
    render() {
        {console.log('hi there');}
        return (
          <div  id="cad">
              <h3 className="title">Projects</h3>
              <p>
                These are some of my projects check my GitHub for more.
              </p>
              <div className="card">
               <img src="https://analyticsindiamag.com/wp-content/uploads/2020/01/top-10-DS-projects.png" />
                <div className="card__content">
                  <span className="card__title">project title</span>
                  <p>description</p>
                 </div>
          </div>
          </div>

        )
    }
}
export default Portfolio;