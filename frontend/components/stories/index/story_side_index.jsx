import React from 'react';
import { Link } from 'react-router-dom';

const StorySideIndex = ({ stories }) => {
  const topics = ["Arts & Entertainment", "Art", "Beauty", "Books", "Comics", "Culture", "Fiction", "Film", "Innovation & Tech", "Accessibility", "Android Dev", "Artificial Intelligence", "Blockchain", "Cryptocurrency", "Cybersecurity", "Data Science", "Life", "Addiction", "Cannabis", "Creativity", "Disability", "Family", "Fitness", "Society", "Basic Income", "Cities"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"]
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]

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
            <small className="side-index-author">{stories[0].author.fullname}&nbsp;in&nbsp;{topics[Math.floor(Math.random() * topics.length)]}</small>
          </Link>

          <small className="side-index-date">
            {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}&nbsp;&#183;&nbsp;{nums[Math.floor(Math.random() * nums.length)]}&nbsp;min&nbsp;read&nbsp;&#9733;
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
            <small className="side-index-author">{stories[1].author.fullname}&nbsp;in&nbsp;{topics[Math.floor(Math.random() * topics.length)]}</small>
          </Link>
          
          <small className="side-index-date">
            {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}&nbsp;&#183;&nbsp;{nums[Math.floor(Math.random() * nums.length)]}&nbsp;min&nbsp;read&nbsp;&#9733;
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
            <small className="side-index-author">{stories[2].author.fullname}&nbsp;in&nbsp;{topics[Math.floor(Math.random() * topics.length)]}</small>
          </Link>

          <small className="side-index-date">
            {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}&nbsp;&#183;&nbsp;{nums[Math.floor(Math.random() * nums.length)]}&nbsp;min&nbsp;read&nbsp;&#9733;
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
            <small className="side-index-author">{stories[3].author.fullname}&nbsp;in&nbsp;{topics[Math.floor(Math.random() * topics.length)]}</small>
          </Link>

          <small className="side-index-date">
            {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}&nbsp;&#183;&nbsp;{nums[Math.floor(Math.random() * nums.length)]}&nbsp;min&nbsp;read&nbsp;&#9733;
          </small>
        </div>
      </article>

      <footer className="side-index-footer">
        Help&nbsp;&nbsp;&nbsp;&nbsp;
        Status&nbsp;&nbsp;&nbsp;&nbsp;
        Writers&nbsp;&nbsp;&nbsp;&nbsp;
        Blog&nbsp;&nbsp;&nbsp;&nbsp;
        Careers&nbsp;&nbsp;&nbsp;&nbsp;
        Privacy&nbsp;&nbsp;&nbsp;&nbsp;
        Terms&nbsp;&nbsp;&nbsp;&nbsp;
        About
      </footer>

    </div>
  )
}

export default StorySideIndex;