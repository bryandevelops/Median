import React from 'react';
import { Link } from 'react-router-dom';
import UserShowItem from './user_show_item';
import GridLoader from 'react-spinners/GridLoader';
import { css } from '@emotion/core';

const override = css`
    position: relative;
    display: block;
    margin: auto;
    top: 180px;
`;

class UserShow extends React.Component {
  
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId).fail(err => this.props.history.push("/"));
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId).fail(err => this.props.history.push("/"));
    }
    // if (prevProps.user.storyIds != this.props.user.storyIds) {
    //   this.props.user.storyIds.forEach(id => this.props.fetchStory(id));
    // }
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.value !== this.props.value) {
      this.props.fetchUser(nextProps.match.params.userId).fail(err => this.props.history.push("/"));
    }
  }

  userContent() {
    const { user, stories } = this.props;

    const userStories = stories.map(story => {
      if (user.id === story.author_id) {
        return <UserShowItem key={story.id} story={story} />
      }
    })

    if (userStories.length > 0) {
      return(
        <div className="user-show-content">
          <h2 className="user-show-content-heading">Latest</h2>
          {userStories}
        </div>
      )
    } else {
      return(
        <div className="user-show-no-content">
          <h1 className="user-show-no-content-heading">What will your story be?</h1>
          <img className="user-show-no-content-image" src="https://median-aa-seeds.s3.amazonaws.com/splash.png" alt="Splash Image"/>
        </div>
      )
    }
  }

  render() {
    const { user, stories } = this.props;
    const quotes = [
      '“The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney',
      '“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill',
      '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
      '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Bryan Santos',
      '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi',
      '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs',
      '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen',
      '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino',
      '“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou',
      '“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe'
    ]

    if (!user) {
      return (
        <div className="story-index-loading"><GridLoader css={override} sizeUnit={"px"} size={20} /></div>
      )
    }

    return(
      <div className="user-show-container">

        <header className="user-show-header">
          <div className="user-show-header-left">
            <h1>{user.fullname}</h1>
            <Link to="/"><button className="user-show-follow">Follow</button></Link>
            <div className="user-show-header-quote">
              Quote of the Day: {quotes[Math.floor(Math.random() * quotes.length)]}
            </div>
          </div>

          <div className="user-show-header-right">
            <Link to={`/users/${user.id}`}>
              <img className="profile-pic" src="https://median-aa-seeds.s3.amazonaws.com/profile_pic.jpg" alt="Photo" width="48" height="48" />
            </Link>
          </div>
        </header>

        {this.userContent()}
      </div>
     
    )
  }
}

export default UserShow;