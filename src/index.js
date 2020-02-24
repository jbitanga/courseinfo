import React from 'react';
import ReactDOM from 'react-dom';

//Renders Header
const Header = (props) => {
    
    return (
        <div>
            <p>{props.course.name}</p>
        </div>
    )

}

//Renders the parts and the number exercises
const Content = (props) => {
   console.log(props)
    return (
        <div>
           <p><Part part={props.exercises[0].name} exercises={props.exercises[0].exercises}  /></p>
           <p><Part part={props.exercises[1].name} exercises={props.exercises[1].exercises}  /></p>
           <p><Part part={props.exercises[2].name} exercises={props.exercises[2].exercises}  /></p>
         
        </div>
        
    )
}

//Formats content and total exercises together
const Part = (props) => {
    console.log(props)
    return (
        <div>
        {props.part} {props.exercises}
        </div>
    )
}

//Renders total amount of exercises
const Total = (props) => {
    return (

        <div>
        <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
        </div>
    )
}

//Main component
const App = () => {
    
const course = {
    name: 'Half Stack application development',
 parts: [
    {
        name: 'Fundamentals of React',
        exercises: 10
    },

    {
        name: 'Using props to pass data',
        exercises: 7
    },
  
    {

        name: 'State of a component',
        exercises: 14

        }
    ]
}

return (
    <div>
        <h1><Header course={course} /></h1>
        <Content exercises={course.parts}   />
        <Total total={course.parts} />
      
    </div>

)

}

ReactDOM.render(<App />, document.getElementById('root'));


