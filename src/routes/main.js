/*
 * @Author: 寒嫣
 * @Date: 2020-01-03 10:34:50
 * @Description: file content
 */
import * as React from 'react'
import Nav from './nav.js'
export default class Main extends React.Component{
  render(){
    return(
      <div>
        <Nav></Nav>
        {this.props.children}
      </div>
    )
  }
}