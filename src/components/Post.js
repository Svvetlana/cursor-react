import React from 'react';
import './Post.css';
const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const Author = ({user, date}) => {
  return (
    <ul className="author_block">
        <li className="author_name">{user.name}</li>
        <li className="author_nickname">{user.nickname}</li>
        <li className="post_date">{date}</li>
    </ul>
  )
}

const Content = (props) => {
  return (
    <div className="content">
      <h3 className="post_content">{props.content}</h3>
      <img className="post_img" src={props.image} alt="content img" />
    </div>
  )
}

const Post = (props) => {
  return (
    <div className="post_card">
      <img className="author_img" src={props.author.photo} alt="avatar" />
      <div className="container">
        <Author user={props.author} date={props.date} />
        <Content content={props.content} image={props.image}/>
        
      </div>
    </div>
  );
}

export default Post;