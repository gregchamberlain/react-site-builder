import React, { Component } from 'react';
import GridLayout from './GridLayout';
import { connect } from 'react-redux';
import { saveLayout } from '../actions/LayoutActions';
import { addItem } from '../actions/ItemsActions';
import Header from './Header';
import Paragraph from './Paragraph';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locked: false,
    };
  }

  addHeader() {
    const props = {
      content: this.refs.header.value,
    };
    this.props.addItem(Header, props);
    this.refs.header.value = "";
  }

  addParagraph() {
    const props = {
      content: this.refs.paragraph.value,
    };
    this.props.addItem(Paragraph, props);
    this.refs.paragraph.value = "";
  }

  lockGrid() {
    this.setState({locked: !this.state.locked});
  }

  render() {
    return (
      <div>
        <h1>Square Space</h1>
        <button onClick={this.lockGrid.bind(this)}>{this.state.locked ? "Unlock" : "Lock"}</button>
        <button onClick={this.addHeader.bind(this)}>Add New Header</button>
        <input type="text" ref="header"/>
        <button onClick={this.addParagraph.bind(this)}>Add New Paragraph</button>
        <textarea ref="paragraph"/>
        <button onClick={this.props.saveLayout}>Save</button>
        <GridLayout locked={this.state.locked}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  saveLayout: () => dispatch(saveLayout()),
  addItem: (c, p) => dispatch(addItem(c, p)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);