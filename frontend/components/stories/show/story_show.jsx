import React from 'react';
import { Link } from 'react-router-dom';
import ResponseIndexContainer from '../../responses/response_index_container';
import ClapButton from '../../clap/clap_button';

class StoryShow extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId).fail(err => this.props.history.push("/"))
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.storyId !== this.props.match.params.storyId) {
      this.props.fetchStory(this.props.match.params.storyId).fail(err => this.props.history.push("/"))
    }
    window.scrollTo(0, 0);
  }

  render() {
    if (!this.props.story) {return <></>}
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
    let date = new Date()
    let month = date.getMonth()
    let day = date.getUTCDate()

    const { story, users, currentUser } = this.props;

    const image = story.photo_url ? 
      <img src={`${story.photo_url}`} alt="Photo" className="story-show-image"/> 
      : ""

    let edit;
    if (currentUser && currentUser.id === story.author_id) {
      edit = <button className="story-show-edit"><Link to={`/stories/${story.id}/edit`}>Update</Link></button>
    } else { "" }

    return(
      <>
        <div className="story-box-shadow"></div>
        
        <div className="story-show-container">
          <h1 className="story-show-title">{story.title}</h1>

          <div className="story-show-content">
            <Link to={`/users/${story.author_id}`}>
              <img className="story-show-profile-pic" src="https://median-aa-seeds.s3.amazonaws.com/profile_pic.jpg" alt="Photo" width="48" height="48" />
            </Link>

            <header className="story-show-header">
              <Link to={`/users/${story.author_id}`}>
                <h3 className="story-show-author">{story.author.fullname}</h3>
              </Link>

              <small className="story-show-date">
                {months[month]}&nbsp;{day}&nbsp;&#183;&nbsp;{nums[4]}&nbsp;min&nbsp;read&nbsp;&#9733;
              </small>
            </header>

            {edit}
          </div>

          <figure className="story-show-image-container">{image}</figure>

          <div className="story-show-body-container">
            <p className="story-show-body">{story.body}</p>
            {/* <ClapButton story={story} /> */}
          </div>
        </div>

        <ResponseIndexContainer/>
      </>
    );
  }
}

export default StoryShow;