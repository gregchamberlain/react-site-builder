import React, { Component } from 'react';
import Gear from 'react-icons/lib/fa/cog';
import Close from 'react-icons/lib/fa/close';

export default class Wrapper extends Component {

  render() {
    const { onRemove, openEditor, children, name } = this.props;
    return (
      <div style={styles.container}>
        {children}
        <div style={styles.overlay}>
          <div style={styles.header}>
            <Gear style={styles.icon} onClick={openEditor} />
            <div style={{flex: 1, marginLeft: 10}}>{name}</div>
            <Close style={styles.icon} onClick={onRemove}/>
          </div>
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
  header: {
    position: "absolute",
    display: "flex",
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    height: 30,
    padding: 10,
    background: 'rgba(0, 0, 0, 0.6)',
    color: "#ccc",
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    fontSize: 20,
    cursor: 'pointer',
  }
};