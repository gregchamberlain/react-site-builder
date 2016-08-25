import React, { PropTypes, Component } from 'react';

// const Article = ({ title, content }) => (
//   <div>
//     <h1>{title}</h1>
//     <p>{content}</p>
//   </div>
// );

class Article extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Article.defaultProps = {
  title: "Sample Title",
  content: "Content goes here...",
};

export default Article;