import React from 'react';
import { connect } from 'react-redux';

const Editor = (props) => {

  const inputs = Object.keys(props.inputTypes).map(label => (
    <label key={label}>
      {label.charAt(0).toUpperCase() + label.slice(1)}
      {props.inputTypes[label] === "string" ?  <input type="text" /> : <textarea />}
    </label>
  ));

  return (
    <div style={styles.container}>
      {inputs}
    </div>
  );

};

const styles = {
  container: {
    width: 200, 
    background: '#aaa',
  }
};

const mapStateToProps = state => ({
  id: state.editor.i,
  inputTypes: state.editor.inputTypes,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);

