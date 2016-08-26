import React from 'react';

const Paragraph = ({ content }) => (
  <p>{content}</p>
);

export default Paragraph;

Paragraph.inputTypes = {
  content: 'text',
};