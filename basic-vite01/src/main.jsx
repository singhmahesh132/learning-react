import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <h1>My react App</h1>
    )
}

const MyLink = (
    <a href='https://google.com' target='_blank'>visit google</a>
) 

const reactElement = React.createElement(
    //Here the order is fixed like 1.Type, 2.Props, 3.Children
    'a',
    {href:'https://www.google.com', target:'_blank'},
    'visit google'
)

createRoot(document.getElementById('root')).render(
    //Calling other jsx file
    //<App />
    
    //Calling a javascript function
    //<MyApp /> 
    
    //Calling a javascript constant
    //MyLink  

    //Calling a react constant of type element link we created in custom-react/customreact.js using javascript
    //Here since it a react element and not javascript it will not give camelCase error
    reactElement
)
