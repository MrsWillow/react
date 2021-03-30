import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	// 状态在哪里 操作状态的方法就在哪里
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '敲代码', done: false },
    ]
  }
	render() {
    const { todos } = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo = { this.addTodo }/>
					<List todos = { todos }
								updateTodo = { this.updateTodo }
								deleteTodo = { this.deleteTodo }/>
					<Footer todos = { todos } checkAllTodo={ this.checkAllTodo }/>
				</div>
			</div>
		)
	}
	// 用于添加一个todo 接收的参数是todo对象
	addTodo = (todoObj) => {
		// console.log('APP',todoObj)
		let { todos } = this.state
		let newTodos = [todoObj,...todos]
		this.setState({ todos: newTodos })
	}
	// 更新todo对象
	updateTodo = (id,done) => {
		let { todos } = this.state
		let newTodos = todos.map(item => {
			if (item.id === id) {
				return {...item,done: done}
			}
			else return item
		})
		this.setState({ todos: newTodos})
	}
  // 删除todo
	deleteTodo = (id) => {
		let { todos } = this.state
		let newTodos = todos.filter(item => {
			return item.id !== id
		})
		this.setState({ todos: newTodos})
	}
	checkAllTodo = (done) => {
		let { todos } = this.state
		let newTodos = todos.map(item => {
			return {...item,done: done}
		})
		this.setState({ todos: newTodos})
	}
}
