import React, { PropTypes } from 'react'
import "./css.css"

class Item extends React.Component {
  render () {
    let Style={
      ItemEditor:{
        color:'red',
        fontSize:'20px',
      }
    }
    return(
        <li className="list-group-item">{this.props.value} 
          <a href="#" className="right glyphicon glyphicon-edit" style={Style.ItemEditor}></a>
          <a href="#" className="right glyphicon glyphicon-remove"></a>
        </li>
        // <li className="list-group-item">
        //   <input className="item-edit"/>
        //   <a href="#" className="glyphicon glyphicon-ok"></a>
        //   <a href="#" className="glyphicon glyphicon-remove"></a>
        // </li>
    )
  }
}

export default Item;
