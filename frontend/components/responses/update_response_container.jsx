import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchResponse, updateResponse, deleteResponse } from '../../actions/response_actions';
import ResponseForm from './response_form';
import GridLoader from 'react-spinners/GridLoader';
import { css } from '@emotion/core';

const override = css`
    position: relative;
    display: block;
    margin: auto;
    top: 180px;
`;

const mapStateToProps = ({ sessions, entities: { users, stories, responses } }, ownProps) => {
  return({
    response: responses[ownProps.match.params.responseId],
    formType: "Edit response",
    currentUser: users[sessions.id],
    story: stories[ownProps.match.params.storyId],
  })
};

const mapDispatchToProps = dispatch => {
  return({
    fetchResponse: id => dispatch(fetchResponse(id)),
    processForm: response => dispatch(updateResponse(response)),
    deleteResponse: response => dispatch(deleteResponse(response)),
  })
};

class UpdateResponseForm extends React.Component {
  componentDidMount() {
    this.props.fetchResponse(this.props.match.params.responseId);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.responseId != this.props.match.params.responseId) {
      this.props.fetchResponse(this.props.match.params.responseId);
    }
    window.scrollTo(0, 0);
  }

  render() {
    const { response, formType, processForm, currentUser, deleteResponse, story } = this.props;
    
    if (!response) {
      return (
        <div className="story-index-loading"><GridLoader css={override} sizeUnit={"px"} size={20} /></div>
      )
    }

    return(
      <ResponseForm
        response={response}
        formType={formType}
        processForm={processForm}
        deleteResponse={deleteResponse}
        currentUser={currentUser}
        story={story} />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateResponseForm));