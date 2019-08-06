import React from 'react';
import { Link } from 'react-router-dom';
import GridLoader from 'react-spinners/GridLoader';
import { css } from '@emotion/core';

const override = css`
    position: relative;
    display: block;
    margin: auto;
    top: 180px;
`;

const StorySideIndex = ({ stories }) => {
  const topics = ["Arts & Entertainment", "Art", "Beauty", "Books", "Comics", "Culture", "Fiction", "Film", "Innovation & Tech", "Accessibility", "Android Dev", "Artificial Intelligence", "Blockchain", "Cryptocurrency", "Cybersecurity", "Data Science", "Life", "Addiction", "Cannabis", "Creativity", "Disability", "Family", "Fitness", "Society", "Basic Income", "Cities"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"]
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]

  if (stories.length < 4 || stories.every(story => typeof story === "undefined")) {
    return (
      <div className="story-index-loading"><GridLoader css={override} sizeUnit={"px"} size={1} /></div>
    )
  }

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