import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import A from "./components/admin.jsx";
import Login from "./components/Login.jsx";
import Contact from "./components/Contact.jsx";
import Portfolio from "./components/portfolio.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      view: "home",
      loggedIn: false,
      email: "",
      password: "",
    };
    this.fetchdata = this.fetchdata.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  changeView(e) {
    this.setState({
      view: e,
    });
  }

  componentDidMount() {
    this.fetchdata();
  }
  fetchdata() {
    axios.get("/api/").then((response) => {
      this.setState({ items: response.data });
    });
  }

  loggedIn() {
    if (
      this.state.loggedIn === false &&
      this.state.email === "ons" &&
      this.state.password === "123"
    ) {
      this.setState({ loggedIn: true });
      this.changeView("home");
    } else if (this.state.loggedIn === true) {
      this.setState({ loggedIn: false });
      this.changeView("home");
    } else {
      alert("incorrect password");
    }
  }

  render() {
    let view = this.state.view;
    if (view === "home") {
      return (
        <div id="grid">
          <A
            login={this.state.loggedIn}
            logout={this.loggedIn.bind(this)}
            changeView={this.changeView}
          />
          <div class="parent">
            <div>
              <img
                id="img"
                src="https://media.discordapp.net/attachments/885469950200938496/962220871467016253/68747470733a2f2f692e70696e696d-unscreen.gif"
              />
            </div>
            <div id="test">
              <h1 id="ons">
                I am a freshly graduated full stack developer, I am a fast
                learner, hard worker, and a team player in my gurney at Rbk.
                I have worked on many projects that have allowed me to 
                develop my knowledge techniques.
              </h1>
            </div>
          </div>
        </div>
      );
    } else if (view === "speciality") {
      return (
        <div>
          <A
            login={this.state.loggedIn}
            logout={this.loggedIn.bind(this)}
            changeView={this.changeView}
          />
        </div>
      );
    } else if (view === "portfolio") {
      return (
        <div>
          <A
            login={this.state.loggedIn}
            logout={this.loggedIn.bind(this)}
            changeView={this.changeView}
          />
          <Portfolio />
        </div>
      );
    } else if (view === "Skill") {
      return (
        <div>
          <A
            login={this.state.loggedIn}
            logout={this.loggedIn.bind(this)}
            changeView={this.changeView}
          />
        </div>
      );
    } else if (view === "Contact") {
      return (
        <div>
          <A
            login={this.state.loggedIn}
            logout={this.loggedIn.bind(this)}
            changeView={this.changeView}
          />
          <Contact loggedIn={this.state.loggedIn} />
        </div>
      );
    } else if (view === "Admin") {
      return (
        <div>
          <A
            login={this.state.loggedIn}
            logout={this.loggedIn.bind(this)}
            changeView={this.changeView}
          />
          <Login
            loggedIn={this.loggedIn.bind(this)}
            password={this.state.password}
            email={this.state.email}
            handleChange={this.handleChange.bind(this)}
          />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));