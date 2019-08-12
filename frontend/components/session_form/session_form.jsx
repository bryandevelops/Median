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
    
    if (this.props.formType !== "Sign up") {
      return (
        <ul className="ul-errors">
          {errors}
        </ul>
      );
    };
  }

  render() {
    let fullnameInput;
    if (this.props.formType === "Sign up") {
      fullnameInput = this.props.errors.includes("Fullname can't be blank") ?
        <>
          <label className="login-label-error">{this.props.errors[this.props.errors.indexOf("Fullname can't be blank")]}</label>
          <input type="text" value={this.state.fullname} onChange={this.update('fullname')} className="login-input-error" />
        </>
        :
        <>
          <label className="login-label">Full Name</label>
          <input type="text" value={this.state.fullname} onChange={this.update('fullname')} className="login-input" />
        </> 
    } else {
      fullnameInput = ""
    }
    
    const emailInput = this.props.errors.includes("Email can't be blank") && this.props.formType === "Sign up" ?
      <>
        <label className="login-label-error">{this.props.errors[this.props.errors.indexOf("Email can't be blank")]}</label>
        <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input-error" />
      </>
      :
      <>
        <label className="login-label">Email</label>
        <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" />
      </>

    const passwordInput = this.props.errors.includes("Password is too short (minimum is 6 characters)") ?
      <>
        <label className="login-label-error">{this.props.errors[this.props.errors.indexOf("Password is too short (minimum is 6 characters)")]}</label>
        <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input-error" />
      </>
      :
      <>
        <label className="login-label">Password</label>
        <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
      </>
    
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <a className='modal-button-close' onClick={this.handleClose}>{String.fromCharCode(10005)}</a>

          <h1 className="form-heading">{this.props.formHeading}</h1>
        
          <p className="form-description">{this.props.formDescription}</p>
        
          {this.renderErrors()} 

          <div className="login-form">
            {fullnameInput}
            {emailInput}
            {passwordInput}
            <div id="modal-submit"><input className="sessions-submit" type="submit" value={this.props.formType} /></div>
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
