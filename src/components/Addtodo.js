import React, { Component } from 'react'
import Todos from './Todos'

 class Addtodo extends Component {
     state = {
         title: "",
         editMode: false,
         eID : null
     };
     editTodo = (id, title) => {
         this.setState({
             editMode: true,
             title: title,
             eID : id
         });
     };

     addItem = (e) => {
         this.setState({
             title: e.target.value,
         });
     };
     handleSubmit = (e) => {
         
         const item = this.state.title;
         console.log(typeof(item))
         e.preventDefault();
         if (item.length <= 0 || item.trim().length === 0 || item === "") {
             return false;
         } else {
             this.props.addTodo(this.state.title, this.state.editMode, this.state.eID);
             this.setState({
                 editMode : false
             })
         }

         this.setState({ title: "" });
     };
     render() {
         return (
             <>
                 <form
                     onSubmit={this.handleSubmit}
                     style={{ display: "flex", margin: "10px 0px" }}
                 >
                     <input
                         type="text"
                         name="title"
                         placeholder="Add a ToDo Item ...."
                         style={{ flex: "10", padding: "10px", fontSize:'16px'}}
                         value={this.state.title}
                         onChange={this.addItem}
                     />
                     <input
                         type="submit"
                         value="Submit"
                         className="btn"
                         style={{ flex: "1", padding: "10px 20px", fontSize:'16px'}}
                     />
                 </form>
                 <Todos
                     todos={this.props.todos}
                     markComplete={this.props.markComplete}
                     delTodo={this.props.delTodo}
                     editTodo={this.editTodo}
                 />
             </>
         );
     }
 }

export default Addtodo
