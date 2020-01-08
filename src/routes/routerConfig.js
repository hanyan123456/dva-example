/*
 * @Author: 寒嫣
 * @Date: 2020-01-02 18:16:59
 * @Description: file content
 */
export default basicRoute=[
  {
    name: '首页',
    path: '/',
    component: () => import(/* webpackChunkName: "Dashboard" */'../routes/IndexPage.js'),
    exact: true
  },{
    name: '主页',
    path: '/home',
    component: () => import(/* webpackChunkName: "Dashboard" */'../routes/home.js'),
    exact: true
  },
]