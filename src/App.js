import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>


      <div>
        <Navbar/>

        <Routes>
        

        <Route  path="/*" element={<News key="home" country="in" pageSize={9} category="general" />} />

        <Route path="/business/*" element={<News  key="business" country="in" pageSize={9} category="business" />} />

        <Route   path="/sports/*" element={<News key="sports" country="in" pageSize={9} category="sports" />} />

        <Route  path="/science/*" element={<News key="science" country="in" pageSize={9} category="science" />} />

        <Route  path="/technology/*" element={<News key="technology" country="in" pageSize={9} category="technology" />} />

        <Route  path="/entertainment/*" element={<News key="entertainment" country="in" pageSize={9} category="entertainment" />} />

        <Route  path="/health/*" element={<News key="health" country="in" pageSize={9} category="health" />} />

        <Route  path="/general/*" element={<News key="general" country="in" pageSize={9} category="general" />} />
    

        </Routes>

      </div>

      </BrowserRouter>
    )
  }
}

