import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
// import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=5;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        {/* <News setProgress={this.setProgress} pageSize={9} category={'health'} country="in" /> */}
          {/* <Route path="/registrationStudent" element={<RegistrationStudent />} /> */}
        <BrowserRouter>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <NavBar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={9} category='general' country="in" />} />
         
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={9} category='business' country="in" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={9} category='entertainment' country="in" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={9} category='general' country="in" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={9} category='health' country="in" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={9} category='science' country="in" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={9} category='sports' country="in" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={9} category='technology' country="in" />} />
          </Routes>
        </BrowserRouter>

      </div>
      // businessentertainmentgeneralhealthsciencesportstechnology
    )
  }
}
