import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { setUser, resetUser } from "../../actions/userAction";
import LoginForm from "../../LoginForm";
import LogoutForm from "../../LogoutForm";
import NotFound from "../../NotFound";
import Home from "../../Home";
import About from "../../About";

class App extends React.Component {
  componentDidMount() {
    this._login("canine", "quddkfl1");
  }

  _login = (username, password) => {
    const response = fetch("http://localhost:8000/rest-auth/login/", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        this.store.dispatch(setUser(username, password, json.token));
      });
  };

  _logout = (username, password) => {
    console.log("before logout", this.store.getState().user);
    const response = fetch("http://localhost:8000/rest-auth/logout/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      this.store.dispatch.resetUser();
      console.log("after logout", this.store.getState().user);
    });
  };

  _handleLoginSubmit = (event) => {
    event.preventDefault();
    const {
      target: { username, password },
    } = event;
    this._login(username.value, password.value);
  };

  _handleLogoutSubmit = (event) => {
    event.preventDefault();
    const isTokenValid = this.store.getState().user.token;
    if (isTokenValid) {
      const userState = this.store.getState().user;
      this._logout(userState.username, userState.password);
    }
  };

  render() {
    return (
      <Router>
        <header>
          <Link to="/">
            <button>Home 홈버트은</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </header>
        <hr />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/login" exact component={LoginForm} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
