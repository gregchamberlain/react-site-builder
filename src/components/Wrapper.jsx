import React, { Component } from 'react';

export default class Wrapper extends Component {

  render() {
    const { inputTypes, i} = this.props;
    return (
      <div style={styles.container}>
        {this.props.children}
        <div style={styles.overlay}>
          <span style={styles.remove} onClick={this.props.onRemove}>&times;</span>
          <span style={styles.settings} onClick={this.props.openEditor}>Settings</span>
          <span className="react-resizable-handle" />
        </div>
      </div>
    );
  }
}

const styles = {
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.3)'
  },
  remove: {
    position: "absolute",
    top: 5,
    right: 10,
    color: "#ccc",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 20
  },
  settings: {
    position: "absolute",
    top: 5,
    left: 10,
    color: "#ccc",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 20
  },
};