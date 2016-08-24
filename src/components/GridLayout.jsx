import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import { connect } from 'react-redux';
import { changeLayout } from '../actions/LayoutActions';
// const GridLayout = WidthProvider(ReactGridLayout);

class GridLayout extends Component {
  
  layoutChange(layout) {
    this.props.changeLayout(layout);
  }

  render() {
    return (
      <ReactGridLayout
          onLayoutChange={this.layoutChange.bind(this)}
          className="layout"
          cols={12}
          rowHeight={30}
          width={1200}>
          <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2 }}>
            <span className="text">a</span>
          </div>
          <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>b</div>
          <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>c</div>
      </ReactGridLayout>
    );
  }
}

const mapSateToProps = state => ({
  layout: state.layout
})

const mapDispatchToProps = dispatch => ({
  changeLayout: layout => dispatch(changeLayout(layout))
})

export default connect(
  mapSateToProps,
  mapDispatchToProps
)(GridLayout);