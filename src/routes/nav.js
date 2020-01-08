/*
 * @Author: 寒嫣
 * @Date: 2019-12-27 09:17:32
 * @Description: file content
 * 
 */
import * as React from 'react'
import { Link } from 'dva/router';
export default class Nav extends React.Component{
    render(){
        return(
                <div>
                    <Link to='/'>首页</Link>
                    <Link to='/home'>主页</Link>
                    <Link to='/list'>列表</Link>
                </div>
        )
    }
}