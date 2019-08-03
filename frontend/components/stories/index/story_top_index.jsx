import React from 'react';
import { Link } from 'react-router-dom';

const StoryTopIndex = ({ stories }) => {
  return(
    <div className="story-top-index-container">

      <article className="top-index-left">
        <Link to={`/stories/${stories[0].id}`}>
          <figure className="top-index-left-image-container">
            <img src={`${stories[0].photo_url}`} alt="Photo" className="top-index-left-image" /> 
          </figure>
        </Link>

        <Link to={`/stories/${stories[0].id}`}>
          <h2 className="top-index-left-title">{stories[0].title}</h2>
          <h3 className="top-index-left-body">{stories[0].body}</h3>
        </Link>

        <Link to={`/users/${stories[0].author_id}`}>
          <small className="top-index-left-author">{stories[0].author}</small>
        </Link>
      </article>

      <article className="top-index-middle">
        <section className="top-index-middle-1">
          <Link to={`/stories/${stories[1].id}`}>
            <figure className="top-index-middle-image-container">
              <img src={`${stories[1].photo_url}`} alt="Photo" className="top-index-middle-image" />
            </figure>
          </Link>

          <Link to={`/stories/${stories[1].id}`}>
            <h2 className="top-index-middle-title">{stories[1].title}</h2>
            <h3 className="top-index-middle-body">{stories[1].body}</h3>
          </Link>

          <Link to={`/users/${stories[1].author_id}`}>
            <small className="top-index-middle-author">{stories[1].author}</small>
          </Link>
        </section>

        <section className="top-index-middle-2">
          <Link to={`/stories/${stories[2].id}`}>
            <figure className="top-index-middle-image-container">
              <img src={`${stories[2].photo_url}`} alt="Photo" className="top-index-middle-image" />
            </figure>
          </Link>

          <Link to={`/stories/${stories[2].id}`}>
            <h2 className="top-index-middle-title">{stories[2].title}</h2>
            <h3 className="top-index-middle-body">{stories[2].body}</h3>
          </Link>

          <Link to={`/users/${stories[2].author_id}`}>
            <small className="top-index-middle-author">{stories[2].author}</small>
          </Link>
        </section>

        <section className="top-index-middle-3">
          <Link to={`/stories/${stories[3].id}`}>
            <figure className="top-index-middle-image-container">
              <img src={`${stories[3].photo_url}`} alt="Photo" className="top-index-middle-image" />
            </figure>
          </Link>

          <Link to={`/stories/${stories[3].id}`}>
            <h2 className="top-index-middle-title">{stories[3].title}</h2>
            <h3 className="top-index-middle-body">{stories[3].body}</h3>
          </Link>

          <Link to={`/users/${stories[3].author_id}`}>
            <small className="top-index-middle-author">{stories[3].author}</small>
          </Link>
        </section>
      </article>

      <article className="top-index-right">
        <Link to={`/stories/${stories[4].id}`}>
          <figure className="top-index-right-image-container">
            <img src={`${stories[4].photo_url}`} alt="Photo" className="top-index-right-image" />
          </figure>
        </Link>

        <Link to={`/stories/${stories[4].id}`}>
          <h2 className="top-index-right-title">{stories[4].title}</h2>
          <h3 className="top-index-right-body">{stories[4].body}</h3>
        </Link>

        <Link to={`/users/${stories[4].author_id}`}>
          <small className="top-index-right-author">{stories[4].author}</small>
        </Link>
      </article>

    </div>
  )
}

export default StoryTopIndex;