import React from 'react';
import './AddPanel.css';
import axios from 'axios';

class AddPanel extends React.Component {

    state = {
        category: '',
        description: '',
        deadline: '',
        hidden: true
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
        this.hidePanel();
         window.location.reload();
    }

    hidePanel() {
        if(this.state.hidden) {
            document.getElementById("add-panel-box").classList.remove("hidden-add-panel");
            document.getElementById("add-panel-box").classList.add("visible-add-panel");
        } else {
            document.getElementById("add-panel-box").classList.add("hidden-add-panel");
            document.getElementById("add-panel-box").classList.remove("visible-add-panel");
        }
        this.setState({hidden : !this.state.hidden})
    }

    render() {
        return (
            <div id="add-panel-box" className="hidden-add-panel">
                <form onSubmit={this.submitHandler}>
                    <p className="add-title">New task</p>
                    <input  className="category-add input-add" 
                            onChange={this.changeHandler} 
                            type="text" name="category" 
                            placeholder="Category" />
                    <input  className="description-add input-add" 
                            onChange={this.changeHandler} 
                            type="text" 
                            name="description" 
                            placeholder="Description" />
                    <input  className="deadline-add input-add" 
                            onChange={this.changeHandler} 
                            defaultValue="2020-09-12"
                            type="date" 
                            min="2020-01-01" max="2032-12-31"
                             />
                    <button className="add-button" 
                    type="submit">Add task</button>
                </form>
                <div className="plus-button" onClick={() => this.hidePanel()}>+</div>
            </div>
        );
    }
}

export default AddPanel;