import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	state = {
		mouse: false,  // 鼠标移入移出
	}
	render() {
	  let { id,name,done } = this.props
		let { mouse } = this.state
		return (
			<li style={{ backgroundColor: mouse ? '#ddd' : 'white'}}
					onMouseLeave={ this.handleMouse(false) }
					onMouseEnter={ this.handleMouse(true) }>
				<label>
					<input type="checkbox" checked={ done }
								 onChange={ this.handleCheck(id) }/>
					<span>{ name }</span>
				</label>
				<button onClick={ () => this.handleDelete(id) } className="btn btn-danger" style={{ display: mouse ? '' : 'none'}}>删除</button>
			</li>
		)
	}
	handleMouse = (flag) => {
		return () => {
			this.setState({ mouse: flag })
		}
	}
	handleCheck = (id) => {
		return (event) => {
			this.props.updateTodo(id,event.target.checked)
		}
	}
	handleDelete = (id) => {
		if (window.confirm('确定删除吗?')) {
			this.props.deleteTodo(id)
		}
	}
}
