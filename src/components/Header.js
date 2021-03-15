import React from 'react'

 function Header() {
    return (
        <header style={headerStyle}>
            <h1>ToDoList</h1>
        </header>
    )
}
const headerStyle = {
    backgroundColor : 'teal',
    color : 'white',
    textAlign : 'center',
    padding : '10px',
    marginTop :'20px'
   
}
export default Header