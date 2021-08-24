import {Component} from 'react'
import TodoListItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class TodoListContainer extends Component {
  state = {todoList: initialTodosList}

  onDeleteTodo = id => {
    const {todoList} = this.state
    const filterUserData = todoList.filter(eachItem => eachItem.id !== id)

    this.setState({todoList: filterUserData})
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="bg-container">
        <div className="todo-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="unorder-list">
            <ul className="unorder">
              {todoList.map(eachItem => (
                <TodoListItem
                  eachTodo={eachItem}
                  key={eachItem.id}
                  onDeleteTodo={this.onDeleteTodo}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoListContainer
