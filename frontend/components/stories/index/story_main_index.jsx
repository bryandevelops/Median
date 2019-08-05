import React from 'react';
import StoryIndexItem from './story_index_item';
import StoryTopIndex from './story_top_index'
import StorySideIndex from './story_side_index';
import GridLoader from 'react-spinners/GridLoader';
import { css } from '@emotion/core';

const override = css`
    position: relative;
    display: block;
    margin: auto;
    top: 180px;
`;

class StoryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
    window.scrollTo(0, 0);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.storyId != this.props.match.params.storyId) {
      this.props.fetchStory(this.props.match.params.storyId);
    }
    window.scrollTo(0, 0);
  }
  render() {
    const { stories } = this.props; 
    
    if (stories.length < 20) {
      return( 
        <div className="story-index-loading"><GridLoader css={override} sizeUnit={"px"} size={20} /></div>
      )
    }
    const mainStories = stories.slice(5).map(story => <StoryIndexItem key={story.id} story={story}/>);
    const topStories = <StoryTopIndex stories={stories.slice(0, 5)}/>
    const sideStories = <StorySideIndex stories={[stories[5], stories[14], stories[16], stories[18]]}/>


    return(
      <div className="story-index-container">
        {topStories}
        
      <section className="parent">
        <div className="bottom-left">
          {mainStories}
        </div> 

        <div className="bottom-right">
          {sideStories}
        </div> 
      </section>
      </div>
    );
  }
}

export default StoryIndex;