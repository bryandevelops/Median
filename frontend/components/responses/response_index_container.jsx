import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchResponses, fetchResponse, createResponse, updateResponse, deleteResponse } from '../../actions/response_actions';
import ResponseIndex from './response_index';

const mapStateToProps = ({ sessions, entities: { users, stories, responses } }, ownProps) => {
  return({
    responses: Object.values(responses) || {},
    response: { body: "", story_id: ownProps.match.params.storyId },
    story: stories[ownProps.match.params.storyId],
    currentUser: users[sessions.id],
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchResponses: storyId => dispatch(fetchResponses(storyId)),
    createResponse: response => dispatch(createResponse(response)),
    updateResponse: response => dispatch(updateResponse(response)),
    deleteResponse: id => dispatch(deleteResponse(id)),
  })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResponseIndex))