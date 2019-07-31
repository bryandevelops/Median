import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/sessions_actions';
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
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
