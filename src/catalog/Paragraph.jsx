import React, { PropTypes } from 'react';

const Paragraph = ({ content }) => (
  <p>{content}</p>
);

export default Paragraph;

Paragraph.inputTypes = {
  content: 'text',
};

Paragraph.propTypes = {
  content: PropTypes.string
};

Paragraph.defaultProps = {
  content: ""
};
