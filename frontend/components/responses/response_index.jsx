import React from 'react';
import ResponseIndexItem from './response_index_item';
import ResponseIndexForm from './response_index_form';

class ResponseIndex extends React.Component {

  componentDidMount() {
    this.props.fetchResponses(this.props.story.id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.storyId != this.props.match.params.storyId) {
      this.props.fetchResponses(this.props.story.id);
    }
  }

  render() {
    const { fetchResponses, createResponse, 
      updateResponse, deleteResponse, 
      responses, story, currentUser } = this.props;

    const storyResponses = responses ? responses.reverse().map(response => {
      return(
        <ResponseIndexItem 
          key={response.id}
          response={response}
          currentUser={currentUser}
          deleteResponse={deleteResponse} />
      )}
    ) : ""

    const storyResponseForm = currentUser ? 
      <ResponseIndexForm
        story={story}
        storyId={story.id}
        createResponse={createResponse}
        currentUser={currentUser} />
    : ""

    return (
      <div className="response-index-container">
      <section className="response-index-feed">
        <h3 className="response-index-heading">Responses</h3>

        <div className="response-index-form-container">
          {storyResponseForm}
        </div>

        <div className="response-index-item-container">
          {storyResponses}
        </div>
      </section>
      </div>
    )
  }
}

export default ResponseIndex;