/*
 * @Author: 寒嫣
 * @Date: 2019-12-26 11:43:31
 * @Description: file content
 */
import React, { Component } from "react";
import { connect } from "dva";
import Nav from "./nav";

class List extends Component {
  state={
    name:""
  }
  getInput=(e)=>{
    console.log(e.target.value)
    this.setState({
      name:e.target.value
    })
  }
  addInput=()=>{
    let name=this.state.name
    this.props.dispatch({
      type:'lists/addList',
      payLoad:name
    })
  }
  render() {
    const {name} =this.state
    const { list } = this.props.lists
    return ( 
      <div>
        <Nav></Nav>
        <input placeholder='输入' type='text' value={name} onChange={(e)=>this.getInput(e)}/><button onClick={this.addInput}>添加</button>
        <ul>
          {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({lists}) => {
  return{lists}
};


export default connect(mapStateToProps)(List);