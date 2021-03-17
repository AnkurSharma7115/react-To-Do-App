import React, { Component } from "react";
import Header from "./components/Header";
import Addtodo from "./components/Addtodo";

import uuid from "react-uuid";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }
    componentDidMount(){
        // const listItems = JSON.parse(localStorage.getItem('list-items'))
        //  this.setState( (prevState) =>   ({todos : prevState.todos=listItems})  )
        const documentData =localStorage.getItem('list-items');
 
        if (documentData) {
            const items = JSON.parse(documentData)
            this.setState((prevState) =>({todos : prevState.todos = items}))
     }
    }
     componentDidUpdate() {
         localStorage.setItem("list-items", JSON.stringify(this.state.todos));
     }
    markComplete = (id) => {
        this.setState({
            todos:this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.complete = !todo.complete;
                }
                return todo;
            }),
        });
    };

    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
    };
    addTodo = (title, editMode, id) => {
        if(editMode === true){
            this.setState({
                todos: this.state.todos.map((todo) => {
                    if (todo.id === id) {
                        todo.title = title;
                    }
                    return todo;
                }),
            });
        }else{
            const newTodo = {
                id: uuid(),
                title: title,
                complete: false,
            };
            this.setState({
                todos: [...this.state.todos, newTodo],
            });
        }
       
    };
    render() {
         return (
               <div className="App">
                   <div className="container">
                       <Header />
                       <Addtodo
                           todos={this.state.todos}
                           addTodo={this.addTodo}
                           markComplete={this.markComplete}
                           delTodo={this.delTodo}
                       />
                   </div>
               </div>
           );
    }
}

export default App;
