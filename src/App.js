import React, { Component } from "react";
import Header from "./components/Header";
import Addtodo from "./components/Addtodo";

import uuid from "react-uuid";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {
                    id:uuid(),
                    title: "Take out the trash",
                    complete: false,
                },
                {
                    id: uuid(),
                    title: "Dinner Tonight",
                    complete: false,
                },
                {
                    id: uuid(),
                    title: "Meeting Console",
                    complete: false,
                },
            ],
        };
    }
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
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
