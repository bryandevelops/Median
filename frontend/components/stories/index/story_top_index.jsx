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

const StoryTopIndex = ({ stories }) => {
  const topics = ["Arts & Entertainment", "Art", "Beauty", "Books", "Comics", "Culture", "Fiction", "Film", "Innovation & Tech", "Accessibility", "Android Dev", "Artificial Intelligence", "Blockchain", "Cryptocurrency", "Cybersecurity", "Data Science", "Life", "Addiction", "Cannabis", "Creativity", "Disability", "Family", "Fitness", "Society", "Basic Income", "Cities"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"]
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]

  // if (stories.length < 5 || stories.every(story => typeof story === "undefined")) {
  //   return (
  //     <div className="story-index-loading"><GridLoader css={override} sizeUnit={"px"} size={20} /></div>
  //   )
  // }

  if (stories.length === 0) return null

  return(



    <>
    <header className="top-index-header">
        <a id="selected" href="#">HOME</a>
        <a href="#">ONEZERO</a>
        <a href="#">ELEMENTAL</a>
        <a href="#">GEN</a>
        <a href="#">ZORA</a>
        <a href="#">FORGE</a>
        <a href="#">HUMAN PARTS</a>
        <a href="#">STARTUPS</a>
        <a href="#">SELF</a>
        <a href="#">TECH</a>
        <a href="#">HEATED</a>
        <a href="#">MODUS</a>
        <a href="#">MORE</a>
    </header>

    <div className="story-top-index-container">

      <article className="top-index-left">
        <Link to={`/stories/${stories[0].id}`}>
          <figure className="top-index-left-image-container">
            <img src={`${stories[0].photo_url}`} alt="Photo" className="top-index-left-image" /> 
          </figure>
        </Link>

        <div className="top-index-left-content">
          <Link to={`/stories/${stories[0].id}`}>
            <h2 className="top-index-left-title">{stories[0].title}</h2>
            <h3 className="top-index-left-body">{stories[0].body}</h3>
          </Link>

          <Link to={`/users/${stories[0].author_id}`}>
            <small className="top-index-author">{stories[0].author.fullname}&nbsp;in&nbsp;{topics[Math.floor(Math.random() * topics.length)]}</small>
          </Link>

          <small className="top-index-date">
            {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}&nbsp;&#183;&nbsp;{nums[Math.floor(Math.random() * nums.length)]}&nbsp;min&nbsp;read&nbsp;&#9733;
          </small>
        </div>
      </article>

      <article className="top-index-middle">
        <section className="top-index-middle-1">
          <Link to={`/stories/${stories[1].id}`}>
            <figure className="top-index-middle-image-container">
              <img src={`${stories[1].photo_url}`} alt="Photo" className="top-index-middle-image" />
            </figure>
          </Link>

        <div className="top-index-content">
          <Link to={`/stories/${stories[1].id}`}>
            <h2 className="top-index-middle-title">{stories[1].title}</h2>
            {/* <h3 className="top-index-middle-body">{stories[1].body}</h3> */}
          </Link>

          <Link to={`/users/${stories[1].author_id}`}>
            <small className="top-index-author">{stories[1].author.fullname}&nbsp;in&nbsp;{topics[Math.floor(Math.random() * topics.length)]}</small>
          </Link>

          <small className="top-index-date">
              {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}&nbsp;&#183;&nbsp;{nums[Math.floor(Math.random() * nums.length)]}&nbsp;min&nbsp;read&nbsp;&#9733;
          </small>
        </div>
        </section>

        <section className="top-index-middle-2">
          <Link to={`/stories/${stories[2].id}`}>
            <figure className="top-index-middle-image-container">
              <img src={`${stories[2].photo_url}`} alt="Photo" className="top-index-middle-image" />
            </figure>
          </Link>
    
        <div className="top-index-content">
          <Link to={`/stories/${stories[2].id}`}>
            <h2 className="top-index-middle-title">{stories[2].title}</h2>
            {/* <h3 className="top-index-middle-body">{stories[2].body}</h3> */}
          </Link>

          <Link to={`/users/${stories[2].author_id}`}>
            <small className="top-index-author">{stories[2].author.fullname}&nbsp;in&nbsp;{topics[Math.floor(Math.random() * topics.length)]}</small>
          </Link>

          <small className="top-index-date">
              {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}&nbsp;&#183;&nbsp;{nums[Math.floor(Math.random() * nums.length)]}&nbsp;min&nbsp;read&nbsp;&#9733;
          </small>
        </div>
        </section>

        <section className="top-index-middle-3">
          <Link to={`/stories/${stories[3].id}`}>
            <figure className="top-index-middle-image-container">
              <img src={`${stories[3].photo_url}`} alt="Photo" className="top-index-middle-image" />
            </figure>
          </Link>

          <div className="top-index-content">
          <Link to={`/stories/${stories[3].id}`}>
            <h2 className="top-index-middle-title">{stories[3].title}</h2>
            {/* <h3 className="top-index-middle-body">{stories[3].body}</h3> */}
          </Link>

          <Link to={`/users/${stories[3].author_id}`}>
            <small className="top-index-author">{stories[3].author.fullname}&nbsp;in&nbsp;{topics[Math.floor(Math.random() * topics.length)]}</small>
          </Link>

          <small className="top-index-date">
              {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}&nbsp;&#183;&nbsp;{nums[Math.floor(Math.random() * nums.length)]}&nbsp;min&nbsp;read&nbsp;&#9733;
          </small>
        </div>
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
           <small className="top-index-author">{stories[4].author.fullname}&nbsp;in&nbsp;{topics[Math.floor(Math.random() * topics.length)]}</small>
         </Link>

         <small className="top-index-date">
          {months[Math.floor(Math.random() * months.length)]}&nbsp;{days[Math.floor(Math.random() * days.length)]}&nbsp;&#183;&nbsp;{nums[Math.floor(Math.random() * nums.length)]}&nbsp;min&nbsp;read&nbsp;&#9733;
         </small>
       </article>

    </div>
    </>
  )
}

export default StoryTopIndex;