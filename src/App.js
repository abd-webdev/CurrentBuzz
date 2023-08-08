import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NewsItem from './components/NewsItem';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      Mode: "light"
    }
  }
  
  HandleToggleMode = ()=>{
    console.log(this.state.Mode + " Mode Clicked");
    console.log(this.state.Mode);

    if(this.state.Mode === "light"){
      this.setState({Mode: "dark"});
      document.body.style.backgroundColor = 'black';
    }
    else{
      this.setState({Mode: "light"});
      document.body.style.backgroundColor = 'white';
    }
  }
  
state = {
  progress: 0
}

setProgress = (progress) =>{
  this.setState({progress: progress});
}

pageSize = 20;
  render() {
    return (
      <div>
        <Router>
          <Navbar Mode={this.state.Mode} handleMode = {this.HandleToggleMode}/>
          <LoadingBar
          height={3}
        color='#f11946'
        progress={this.state.progress}

      />
          <Routes>
            <Route exact path='/' element={<News setProgress = {this.setProgress}  key="general" pageSize={this.pageSize} country="us" category="general" Mode={this.state.Mode}/>}></Route>
            <Route exact path='/business' element={<News setProgress = {this.setProgress}  key="business" pageSize={this.pageSize} country="us" category="business" Mode={this.state.Mode}/>}></Route>
            <Route exact path='/entertainment' element={<News setProgress = {this.setProgress}  key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"Mode={this.state.Mode} />}></Route>
            <Route exact path='/health' element={<News setProgress = {this.setProgress}  key="health" pageSize={this.pageSize} country="us" category="health" Mode={this.state.Mode}/>}></Route>
            <Route exact path='/science' element={<News setProgress = {this.setProgress}  key="science" pageSize={this.pageSize} country="us" category="science"Mode={this.state.Mode} />}></Route>
            <Route exact path='/sports' element={<News setProgress = {this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="sports" Mode={this.state.Mode}/>}></Route>
            <Route exact path='/technology' element={<News setProgress = {this.setProgress}  key="technology" pageSize={this.pageSize} country="us" category="technology"Mode={this.state.Mode} />}></Route>
            {/* <Route exact path='/general' element={<News setProgress = {this.setProgress}  key="general" pageSize={this.pageSize} country="us" category="general"Mode={this.state.Mode} />}></Route> */}
            <Route exact path='/' element={<NewsItem Mode={this.state.Mode}/>}></Route>
            
          </Routes>
        </Router>
      </div>
    )
  }
}
