/*
 * @Author: 寒嫣
 * @Date: 2019-12-26 11:43:31
 * @Description: file content
 */
import React, { Component } from "react";
import { connect } from "dva";
import Nav from "./nav";

class IndexPage extends Component {
 

  clickBtn = () => {
    // console.log(this.props);
    this.props.dispatch({
      type: "add/addCount"
    });
  };

  clickBtn2 = () => {
    this.props.dispatch({
      type: 'add/reduceCount'
    })
  }
  render() {
    const { add } = this.props;
    // console.log(this.props);
    return (
      <div>
        <Nav></Nav>
        <div>{add.count}</div>
        <button  onClick={this.clickBtn}>+</button>
        <button  onClick={this.clickBtn2}>-</button>
      </div>
    );
  }
}

const mapStateToProps = ({ add }) => {
  // console.log(add);
  return {
    add
  };
};


export default connect(mapStateToProps)(IndexPage);
