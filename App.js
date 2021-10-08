import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Trivia from './Trivia'

const App = ()=>{
  return(
    <BrowserRouter>
    {/* <p>Hello</p> */}
    <div className = "container col-md-6">
      <h2 className = "text-center fw bold text-info"> Welcome </h2><br/>
      <h4 className = "text-center fw-normal">Click below to start the game</h4>
      <Link to = "/questions"><p  className = "text-center">click!</p></Link>
    </div>
    
    <Route path = "/questions" component = {Trivia} exact = {true}/>
    </BrowserRouter>
  )
}

export default App