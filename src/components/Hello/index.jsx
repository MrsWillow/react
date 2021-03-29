// rcc 快速类式组件   rfc  快速函数式组件
import React,{ Component } from 'react'
// 样式模块化
import hello from './index.module.css'
export default  class Index extends Component{
  render() {
    return (
        <h2 className={ hello.title }>
          Hello React
        </h2>
    )
  }
}
