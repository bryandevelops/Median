import React from 'react';
import { Link } from 'react-router-dom';

const StorySideIndex = ({ stories }) => {
  const topics = ["Arts & Entertainment", "Art", "Beauty", "Books", "Comics", "Culture", "Fiction", "Film", "Innovation & Tech", "Accessibility", "Android Dev", "Artificial Intelligence", "Blockchain", "Cryptocurrency", "Cybersecurity", "Data Science", "Life", "Addiction", "Cannabis", "Creativity", "Disability", "Family", "Fitness", "Society", "Basic Income", "Cities"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
  let date = new Date()
  let month = date.getMonth()
  let day = date.getUTCDate()

  return(
    <div className="story-side-index-container">
      <h3 className="side-index-heading">Popular on Median</h3>

      <article className="side-index-1">
        <div className="side-index-number">01</div>

        <div className="side-index-content">
          <Link to={`/stories/${stories[0].id}`}>
            <h1 className="side-index-title">{stories[0].title}</h1>
          </Link>

          <Link to={`/users/${stories[0].author_id}`}>
            <small className="side-index-author">{stories[0].author.fullname}&nbsp;in&nbsp;{topics[5]}</small>
          </Link>

          <small className="side-index-date">
            {months[month]}&nbsp;{day}&nbsp;&#183;&nbsp;{nums[13]}&nbsp;min&nbsp;read&nbsp;&#9733;
          </small>
        </div>
      </article>

      <article className="side-index-2">
        <div className="side-index-number">02</div>

        <div className="side-index-content">
          <Link to={`/stories/${stories[1].id}`}>
            <h1 className="side-index-title">{stories[1].title}</h1>
          </Link>

          <Link to={`/users/${stories[1].author_id}`}>
            <small className="side-index-author">{stories[1].author.fullname}&nbsp;in&nbsp;{topics[6]}</small>
          </Link>
          
          <small className="side-index-date">
            {months[month]}&nbsp;{day}&nbsp;&#183;&nbsp;{nums[5]}&nbsp;min&nbsp;read&nbsp;&#9733;
          </small>
        </div>
      </article>

      <article className="side-index-3">
        <div className="side-index-number">03</div>

        <div className="side-index-content">
          <Link to={`/stories/${stories[2].id}`}>
            <h1 className="side-index-title">{stories[2].title}</h1>
          </Link>

          <Link to={`/users/${stories[2].author_id}`}>
            <small className="side-index-author">{stories[2].author.fullname}&nbsp;in&nbsp;{topics[7]}</small>
          </Link>

          <small className="side-index-date">
            {months[month]}&nbsp;{day}&nbsp;&#183;&nbsp;{nums[9]}&nbsp;min&nbsp;read&nbsp;&#9733;
          </small>
        </div>
      </article>

      <article className="side-index-4">
        <div className="side-index-number">04</div>

        <div className="side-index-content">
          <Link to={`/stories/${stories[3].id}`}>
            <h1 className="side-index-title">{stories[3].title}</h1>
          </Link>

          <Link to={`/users/${stories[3].author_id}`}>
            <small className="side-index-author">{stories[3].author.fullname}&nbsp;in&nbsp;{topics[8]}</small>
          </Link>

          <small className="side-index-date">
            {months[month]}&nbsp;{day}&nbsp;&#183;&nbsp;{nums[6]}&nbsp;min&nbsp;read&nbsp;&#9733;
          </small>
        </div>
      </article>

      <footer className="side-index-footer">
        <a className="footer-links" href="#">Help</a>
        <a className="footer-links" href="#">Status</a>
        <a className="footer-links" href="#">Writers</a>
        <a className="footer-links" href="#">Blog</a>
        <br/>
        <a className="footer-links" href="#">Careers</a>
        <a className="footer-links" href="#">Privacy</a>
        <a className="footer-links" href="#">Terms</a>
        <a className="footer-links" href="#">About</a>
      </footer>
    </div>
  )
}

export default StorySideIndex;