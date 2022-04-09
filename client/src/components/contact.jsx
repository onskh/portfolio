import React from "react";
import axios from "axios";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      name: "",
      data: [],
      a: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.postData = this.postData.bind(this);
  }
  componentDidMount() {
    this.fetchdata();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  postData() {
    var data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    axios.post("http://localhost:3000/api/", data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }
  deleteone(id) {
    axios.delete(`http://localhost:3000/api/delete/${id}`).then((res) => {
      console.log(res, "deleted ?");
      this.setState({ a: 1 });
      this.componentDidMount();
    });
  }

  fetchdata() {
    axios.get("http://localhost:3000/api/message").then((res) => {
      console.log(res);
      this.setState({ data: res.data });
    });
  }

  render() {
    console.log(this.props.loggedIn);
    return (
      <div>
        {!this.props.loggedIn ? (
          <div class="container" style={{ marginTop: 150 }}>
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title">contact ons</h3>
                  </div>
                  <div class="panel-body">
                    <form accept-charset="UTF-8" role="form">
                      <fieldset>
                        <div class="form-group">
                          <input
                            class="form-control"
                            placeholder="name"
                            name="name"
                            type="text"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            class="form-control"
                            placeholder="E-mail"
                            name="email"
                            type="text"
                            onChange={this.handleChange}
                          />
                        </div>

                        <div class="form-group">
                          <input
                            id="msg"
                            class="form-control"
                            placeholder="Message"
                            name="message"
                            type="text"
                            onChange={this.handleChange}
                          />
                        </div>
                        <input
                          class="btn btn-lg btn-success btn-block"
                          id="btn"
                          type="submit"
                          value="send"
                          onClick={this.postData}
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: "20%", marginLeft: "20%", color: "white" }}>
            {this.state.data.map((elem, i) => {
              return (
                <div id="cd">
                  <div className="card">
                    <h5 className="card-header">{elem.name}</h5>
                    <div className="card-body">
                      <h5 className="card-title">{elem.email}</h5>
                      <p className="card-text">{elem.message}</p>
                      <input
                        className="btn btn-lg btn-success btn-block"
                        type="submit"
                        value="delete"
                        onClick={() => this.deleteone(elem.id)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default Contact;