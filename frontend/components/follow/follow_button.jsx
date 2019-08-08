import React from 'react';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/user_actions';

const mapStateToProps = ({ sessions, entities: { users } }) => {
  return ({
    currentUser: users[sessions.id],
  });
};

const mapDispatchToProps = dispatch => {
  return {
    followUser: id => dispatch(followUser(id)),
    unfollowUser: id => dispatch(unfollowUser(id)),
  };
};

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.followHandler = this.followHandler.bind(this);
    this.followStatus = this.followStatus.bind(this);
  }

  followHandler(e) {
    e.stopPropagation();
    if (this.props.user.following) {
      this.props.unfollowUser(this.props.user.id);
    } else {
      this.props.followUser(this.props.user.id);
    }
  }

  followStatus() {
    if (this.props.user.following) {
      return "Unfollow";
    } else {
      return "Follow";
    }
  }

  render() {
    if (!this.props.currentUser ||
      this.props.user.id === this.props.currentUser.id) {
      return <div></div>;
    }
    return (
      <button
        className={this.followStatus()}
        onClick={this.followHandler}>
        {this.followStatus()}
      </button>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);