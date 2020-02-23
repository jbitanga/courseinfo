import React from 'react';
import ReactDOM from 'react-dom';

//Renders Header
const Header = (props) => {
    
    return (
        <div>
            <p>{props.course}</p>
        </div>
    )

}

//Renders the parts and the number exercises
const Content = (props) => {
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    return (
        <div>
          <p><Part part={part1} exercises={exercises1} /></p>
           <p><Part part={part2} exercises={exercises2} /></p>
           <p><Part part={part3} exercises={exercises3} /></p>
        </div>
        
    )
}

const Part = (props) => {
    
    
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
        {props.exercises}
        </div>
    )
}


//Main component
const App = () => {
    const course = 'Half Stack application development'


return (
    <div>
        <h1><Header course={course} /></h1>
        <Content />
        
    </div>

)


}

ReactDOM.render(<App />, document.getElementById('root'));


