import React from 'react';
import ResponseIndexItem from './response_index_item';

class ResponseIndex extends React.Component {

  componentDidMount() {
    this.props.fetchResponses(this.props.story.id)
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
    

    return (
      <div className="response-index-container">
        {storyResponses}


      </div>
    )
  }
}

export default ResponseIndex;