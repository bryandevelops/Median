import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout, login } from '../../actions/sessions_actions';
import Greeting from './greeting';

const mapStateToProps = ({ sessions, entities: { users } }) => {
  return ({
    currentUser: users[sessions.id],
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    demoLogin: () => dispatch(login({ email: "guestuser@test.com", password: "password" })),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
