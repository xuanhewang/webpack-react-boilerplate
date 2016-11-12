import React, { PropTypes } from 'react'

class ItemEditor extends React.Component {
  render () {
    return(
      <li className="list-group-item">
        <input className="item-edit"/>
        <a href="#" className="glyphicon glyphicon-ok"></a>
        <a href="#" className="glyphicon glyphicon-remove"></a>
      </li>
    )
  }
}

export default ItemEditor;
