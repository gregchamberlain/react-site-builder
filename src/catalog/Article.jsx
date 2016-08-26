import React, { PropTypes, Component } from 'react';

const Article = ({ title, content }) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Article.defaultProps = {
  title: "Sample Title",
  content: "Content goes here...",
};

Article.inputTypes = {
  title: "string",
  content: "text",
};

export default Article;
