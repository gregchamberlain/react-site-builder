import React, { Component } from 'react';
import { connect } from 'react-redux';
import Catalog from '../../catalog';
import { updateProps } from '../../actions/ItemsActions';
import { closeEditor } from '../../actions/EditorActions';
import Close from 'react-icons/lib/fa/close';

class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = props.props;
  }

  componentWillReceiveProps(newProps) {
    if (newProps.props) {
      this.setState(newProps.props);
    }
  }

  update = (name) => {
    return (e) => {
      this.setState({[name]: e.target.value}, () => {
        this.props.update(this.props.id, this.state);
      });
    }
  }

  render() {

    const inputs = Object.keys(this.props.inputTypes).map(label => (
      <label key={label} style={{textAlign: 'center'}}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
        {this.props.inputTypes[label] === "string" ?
        <input type="text" value={this.state[label]} onChange={this.update(label)}/> :
        <textarea value={this.state[label]} onChange={this.update(label)} />}
      </label>
    ));

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={{flex: 1, textAlign: 'center'}}>Editor</div>
          <Close onClick={this.props.close} style={{cursor: 'pointer'}}/>
        </div>
        <h3>{this.props.item && this.props.item.component}</h3>
        {inputs}
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 300,
    background: 'rgba(100,100,100,0.8)',
    boxShadow: '0 0 10px black'
  },
  header: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.3)',
    fontSize: 24,
    padding: 5
  }
};

const mapStateToProps = state => ({
  item: state.items[state.editor],
  id: state.editor,
  props: state.items[state.editor] && state.items[state.editor].props,
  inputTypes: state.items[state.editor] && Catalog[state.items[state.editor].component].inputTypes || {},
});

const mapDispatchToProps = dispatch => ({
  update: (i, props) => dispatch(updateProps(i, props)),
  close: () => dispatch(closeEditor()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
