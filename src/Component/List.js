import React, { PropTypes } from 'react'
import Item from './Item.js';
import ItemEditor from './ItemEditor.js';

class List extends React.Component {
  render () {
    return(
      <div id="container" className="container">
        <button className="btn btn-default">ADD</button>
        <ul className="list-group">
          <Item value="123456"/>
          <ItemEditor value="124"/>
        </ul>
      </div>
    )
  }
}

export default List;
