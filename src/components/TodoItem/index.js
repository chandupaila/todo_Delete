import {Component} from 'react'

import './index.css'

class TodoListItem extends Component {
  render() {
    const {eachTodo, onDeleteTodo} = this.props
    const {title, id} = eachTodo
    const onDelete = () => {
      onDeleteTodo(id)
    }

    return (
      <li className="listItem">
        <p className="para">{title}</p>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoListItem
