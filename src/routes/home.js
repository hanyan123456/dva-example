/*
 * @Author: 寒嫣
 * @Date: 2019-12-27 09:17:32
 * @Description: file content
 * 
 */
import * as React from 'react'
import Basic from './basic'
import style from './home.css'

export default class Home extends Basic {
    state={
        Color:'red' 
    }
    handleColor=()=>{
        this.setState({
            Color:'pink'
        })
    }
    Content=()=>{
        return(
            <div>内容</div>
        )
    }
    contentHeader = () => {
        return(
            <div className={style.home}>
                <div style={{color:this.state.Color}}>home</div>
                <span onClick={this.handleColor} className={style.home_button}>换色</span>
            </div>
            
        )
    }
}