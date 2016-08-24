import React, { Component } from 'react';
import GridLayout from './GridLayout';
import { connect } from 'react-redux';
import { saveLayout } from '../actions/LayoutActions';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Square Space</h1>
        <button onClick={this.props.saveLayout}>Save</button>
        <GridLayout />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  saveLayout: () => dispatch(saveLayout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);