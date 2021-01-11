import React, {Component} from 'react';
import AddPanel from './components/AddPanel';
import TodoItems from './components/TodoItems'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-div">
        <AddPanel />
        <TodoItems />
      </div>
    )
  }
}

  export default App

  // state = {
  //   elements: [
  //     {id: '1', isCompleted: true, title: 'Zrobic zadanie'},
  //     {id: '2', isCompleted: false, title: 'Zrobic obiad'},
  //   ],
  //   inputValue: ''
  // };

  // markCompleted(id) {
  //   const index = this.state.elements
  //       .findIndex(x => x.id === id)

  //   const newElements = this.state.elements
  //   newElements[index].isCompleted = true

  //   this.setState({ elements: newElements })}

  // addItem() {
  //   const item = {
  //       id: Math.random(),
  //       title: this.state.inputValue
  //   }


  // inputHandler(event) {
  //     const newValue = event.target.value
  //     this.setState({inputValue: newValue})
  // }

//   render () {
//     const elements = this.state.elements.map (e => {
//       return <TodoItem element={e} markCompleted={this.markCompleted.bind(this)}/>
//     });

//     return (
//       <div>
//         Todo app
//         <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
//         <button onClick={this.addItem.bind(this)}>Dodaj do listy</button>
//         {elements}
//       </div>
//     );
//   }
// }