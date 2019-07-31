import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullname: "", email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  };

  handleClose(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
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
      <>
        <label className="login-label">Full Name</label> 
        <input type="text" value={this.state.fullname} onChange={this.update('fullname')} className="login-input" />
      </>
      : ""

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <button className='modal-button-close' onClick={this.handleClose}>{String.fromCharCode(10005)}</button>

          <h1 className="form-heading">{this.props.formHeading}</h1>
        
          <p className="form-description">{this.props.formDescription}</p>
        
          {this.renderErrors()}

          <div className="login-form">
            {nameInput}

            <label className="login-label">Email</label>
            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" />
            

            <label className="login-label">Password</label>
            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
            
            <div id="submit"><input className="sessions-submit" type="submit" value={this.props.formType} /></div>
          </div>
          <footer className="small-footer">
            <small className="small-footer-words">{this.props.formFooter}</small>
            &nbsp;
            <small>{this.props.otherForm}</small>
          </footer>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
