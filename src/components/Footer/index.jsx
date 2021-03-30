import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
	render() {
		let { todos } = this.props
		//  pre  上一次调用回调返回的值，或者是提供的初始值
		//  current  数组中当前被处理的元素
		let doneCount = todos.reduce((pre,current) => {
			return pre + (current.done ? 1 : 0)   // 返回的值会作为下一次循环的pre
		},0)  // 0为初始值 传入之后作为pre的初始值
					// 没有传值 循环从数组第二项开始  pre 初始值为数组第一项值
		let total = todos.length
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" onChange={ this.handleCheckAll } checked={ doneCount === total ? true : false }/>
				</label>
				<span>
					<span>已完成{ doneCount }</span> / 全部{ total }
				</span>
				<button className="btn btn-danger">清除已完成任务</button>
			</div>
		)
	}
	handleCheckAll = () => {
		this.props.checkAllTodo()
	}
}
