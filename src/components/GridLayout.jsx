import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import { connect } from 'react-redux';
import { changeLayout } from '../actions/LayoutActions';
import { removeItem } from '../actions/ItemsActions';
import Header from './Header';
import _ from 'lodash';
const Grid = WidthProvider(ReactGridLayout);

class GridLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [0, 1, 2, 3, 4].map(function(i, key, list) {
        return {i: i.toString(), x: i * 2, y: 0, w: 2, h: 2, add: i === (list.length - 1).toString()};
      }),
      counter: 0,
    };
  }

  createElement(el) {
    let removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };
    let i = el.i;
    return (
      <div key={i} data-grid={el}>
        <el.component {...el.props}/>
        <span className="remove" style={removeStyle} onClick={this.props.removeItem.bind(this, i)}>x</span>
      </div>
    );
  }
  
  layoutChange(layout) {
    this.props.changeLayout(layout);
  }

  render() {

    return (
      <Grid
        isDraggable={!this.props.locked}
        isResizable={!this.props.locked}
        onLayoutChange={this.layoutChange.bind(this)}
        className="layout"
        cols={12}
        rowHeight={30}
        width={1200}>
        {_.map(this.props.items, this.createElement.bind(this))}
      </Grid>
    );
  }
}

const mapSateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  changeLayout: layout => dispatch(changeLayout(layout)),
  removeItem: i => dispatch(removeItem(i)),
});

export default connect(
  mapSateToProps,
  mapDispatchToProps
)(GridLayout);