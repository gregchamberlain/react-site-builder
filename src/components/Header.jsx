import React from 'react';

const Header = ({ content }) => (
  <h1>{content}</h1>
);

export default Header;

Header.inputTypes = {
  content: "string",
};