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
    let i = el.add ? '+' : el.i;
    return (
      <div key={i} data-grid={el}>
        {el.add ?
          <span className="add text" onClick={this.onAddItem} title="You can add an item by clicking here, too.">Add +</span>
        : <span className="text">{i}</span>}
        <span className="remove" style={removeStyle} onClick={this.props.removeItem.bind(this, i)}>x</span>
      </div>
    );
  }
  
  layoutChange(layout) {
    this.props.changeLayout(layout);
  }

  render() {

    const layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];

    return (
      <Grid
        layout={layout}
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
  layout: state.layout,
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