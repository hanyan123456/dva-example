/*
 * @Author: 寒嫣
 * @Date: 2020-01-03 10:51:50
 * @Description: file content
 */
import * as React from 'react'
import Main from './main'
import { Card, Modal } from 'antd';
import style from './basic.css'

export default class Basic extends React.Component {
  state = {
    // color: 'red'
    visible: false
  }
  handleClick = () => {
    this.setState({
      visible:true
    })
  }
  handleOk=()=>{
    this.setState({
      visible:false
    })
    this.props.history.push('/home')
  }
  handleCancel=()=>{
    this.setState({
      visible:false
    })
  }
  render() {
    let Header = this.contentHeader()
    return (
      <Main>
        <div className='basic-heaer'>
          <div >继承部分{Header}</div>
          <span onClick={this.handleClick}>弹窗</span>
        </div>
        

        <Modal visible={this.state.visible} onOk={this.handleOk}
          onCancel={this.handleCancel}>Modal content
        </Modal>

        <div className={style.basic_content}>{this.Content()}</div>
      </Main>
    )
  }
}