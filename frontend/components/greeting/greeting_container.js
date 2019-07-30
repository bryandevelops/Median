import { connect } from 'react-redux';

import { logout } from '../../actions/sessions_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return ({
    currentUser: users[session.id],
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
