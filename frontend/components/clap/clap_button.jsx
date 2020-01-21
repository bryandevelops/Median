import React from 'react';
import { connect } from 'react-redux';
import { clapStory, unclapStory } from '../../actions/story_actions';

const mapStateToProps = ({ sessions, entities: { users } }) => {
  return({
    currentUser: users[sessions.id]
  });
};

const mapDispatchToProps = dispatch => {
  return {
    clapStory: id => dispatch(clapStory(id)),
    unclapStory: id => dispatch(unclapStory(id)),
  };
};

class ClapButton extends React.Component {
  constructor(props) {
    super(props);
    this.clapHandler = this.clapHandler.bind(this);
    this.clapStatus = this.clapStatus.bind(this);
  }

  clapHandler(e) {
    e.stopPropagation();
    if (this.props.story.clapped) {
      this.props.unclapStory(this.props.story.id);
    } else {
      this.props.clapStory(this.props.story.id);
    }
  }

  clapStatus() {
    if (this.props.story.clapped) {
      return "Unfollow";
    } else {
      return "Follow";
    }
  }

  render() {
    if (!this.props.currentUser ||
      this.props.story.author_id === this.props.currentUser.id) {
      return <div></div>;
    }

    return (
      <>
      <button
        className={this.clapStatus()}
        onClick={this.clapHandler}>
        {this.clapStatus()}
      </button>
      <h1>yurrrr</h1>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClapButton);