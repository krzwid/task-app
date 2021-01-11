import React from 'react';
import './TodoItems.css';

  class TodoItems extends React.Component {

   deleteTask(todoID) {
     fetch('http://localhost:8080/entries/' + todoID, {
       method: 'DELETE',
       header: {'Accept': 'application/json',
       'Content-Type' : 'application/json'
      }
     }).then(() => this.update())
   }

   componentDidMount() {
     this.update()
   }

  update() {
    fetch('http://localhost:8080/entries')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todoitems : data })
      console.log(data)
    })
    .catch(console.log)
  }

   doneTask(todoID) {
    document.getElementById(todoID).classList.remove("not-done-task");
    document.getElementById(todoID).classList.add("done-task");
   }

   state = { 
    todoitems: []
  }
  
    render () {
      return(
        <div>
          <center><h1 className="app-title">TODO List</h1></center>
          {this.state.todoitems.map((todoitem) => (
            <div className="todo-element not-done-task" key={todoitem.id} id={todoitem.id}>
                <h3 className="category">Category: {todoitem.category}</h3>
                <h3 className="description">{todoitem.description}</h3>
                <h3 className="deadline">Deadline: {todoitem.deadline}</h3>
                <button className="button done-button" onClick={() => this.doneTask(todoitem.id)}>Done</button>
                <button className="button delete-button" onClick={ () => this.deleteTask(todoitem.id)}>Delete task</button>
              </div>
          ))}
        </div>
    )
  }
}

export default TodoItems