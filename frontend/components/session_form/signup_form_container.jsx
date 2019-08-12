import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/sessions_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.sessions,
    formType: 'Sign up',
    formHeading: "Join Median.",
    formDescription: "Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.",
    formFooter: "Already have an account?",
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button className="small-footer-link" onClick={() => dispatch(openModal('Log in'))}>
        Sign in
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
