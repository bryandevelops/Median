import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullname: "", email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/"));
  }

  renderErrors() {
    let errors = this.props.errors.map((error, idx) => {
      return <li key={`error-${idx}`}>{error}</li>
    });
    

    return (
      <ul>
        {errors}
      </ul>
    );
  }

  render() {
    const nameInput = this.props.formType === "Sign up" ? 
      <label>Full Name:
              <input type="text" value={this.state.fullname} onChange={this.update('fullname')} className="login-input" />
              <br/>
      </label> : ""

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Median!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}

          <div className="login-form">
            {nameInput}

            

            <label>Email:
              <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" />
            </label>

            <br />

            <label>Password:
              <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
            </label>

            <br />
            <input className="session-submit" type="submit" value={this.props.formType}/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
