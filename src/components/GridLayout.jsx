import React, { Component } from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import { connect } from 'react-redux';
import { changeLayout } from '../actions/LayoutActions';
import { removeItem } from '../actions/ItemsActions';
import { openEditor } from '../actions/EditorActions';
import Header from './Header';
import Paragraph from './Paragraph';
import _ from 'lodash';
const Grid = WidthProvider(ReactGridLayout);
import Wrapper from './Wrapper';
import Article from './Article';

window.Header = Header;
window.Article = Article;

let compMap = {
  Header,
  Paragraph,
};

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
    let Comp = compMap[el.component];
    return (
      <div key={i} data-grid={el}>
        <Wrapper
          openEditor={this.props.openEditor.bind(null, i, Comp.inputTypes)}
          onRemove={this.props.removeItem.bind(this, i)}>
          <Comp {...el.props}/>
        </Wrapper>
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
  openEditor: (i, inputTypes) => dispatch(openEditor(i, inputTypes)),
});

export default connect(
  mapSateToProps,
  mapDispatchToProps
)(GridLayout);