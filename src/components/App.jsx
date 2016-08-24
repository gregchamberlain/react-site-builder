import React, { Component } from 'react';
import GridLayout from './GridLayout';
import { connect } from 'react-redux';
import { saveLayout } from '../actions/LayoutActions';
import { addItem } from '../actions/ItemsActions';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Square Space</h1>
        <button onClick={this.props.addItem}>Add New Item</button>
        <button onClick={this.props.saveLayout}>Save</button>
        <GridLayout />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  saveLayout: () => dispatch(saveLayout()),
  addItem: () => dispatch(addItem()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);