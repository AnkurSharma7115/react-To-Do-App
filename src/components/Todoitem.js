import React, { Component } from 'react'

 class Todoitem extends Component {
     getStyle = () =>{
         return {
             background : '#f4f4f4',
             padding : '20px',
             borderBottom : '1px #ccc solid',
             marginTop: '10px',
             fontSize:'20px',
             textDecoration : this.props.todo.complete ?'line-through':'none'
         }
     }
    render() {
        const {id, title, complete} = this.props.todo
        return (
            <div style={this.getStyle()}> 
                <p>
                <label>
                <input type = "checkbox" checked = {complete} onChange ={this.props.markComplete.bind(this, id)}/>
                 {''} {title}
                </label>
               
                 
                 <button onClick = {this.props.delTodo.bind(this,id)} style = {delBtn}>x</button>
                 <button onClick = {this.props.editTodo.bind(this,id,title)} style={editBtn}>Edit</button>
                </p>
            </div>
        );
    }
} 
const delBtn= {
    background : 'red',
    color : '#fff',
    border : 'none',
    padding : '5px 8px',
    borderRadius : '50%',
    cursor : 'ponter',
    float :'right',
    marginLeft: '10px'
    
}
const editBtn={
    background : 'green',
    color : '#fff',
    border : 'none',
    padding : '6px 10px',
    borderRadius : '10px',
    cursor : 'ponter',
    float :'right',
    marginTop : '-2px'
   
}

export default Todoitem
