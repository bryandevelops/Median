import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createResponse } from '../../actions/response_actions'
import ResponseForm from './response_form';

const mapStateToProps = ({ sessions, entities: { } }) => {
  return({
    response: { body: "" },
    formType: "Write response",
    currentUser: users[sessions.id],
  })
};

const mapDispatchToProps = dispatch => {
  return({
    processForm: response => dispatch(createResponse(response)),
  })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResponseForm));