import React from 'react';
import './AddPanel.css';
import axios from 'axios';

class AddPanel extends React.Component {

    state = {
        category: '',
        description: '',
        deadline: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8080/entries', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
         window.location.reload();
    }

    render() {
        return (
            <div id="add-panel-box">
                <form onSubmit={this.submitHandler}>
                    <p className="add-title">Add task</p>
                    <input className="category-add" onChange={this.changeHandler} type="text" name="category" placeholder="Category" />
                    <input className="description-add" onChange={this.changeHandler} type="text" name="description" placeholder="Description" />
                    <input className="deadline-add" onChange={this.changeHandler} type="text" name="deadline" placeholder="Deadline" />
                    <button className="add-button" type="submit">Add task</button>
                </form>
            </div>
        );
    }
}

export default AddPanel;