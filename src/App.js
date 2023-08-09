import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NewsItem from './components/NewsItem';
import LoadingBar from 'react-top-loading-bar'


const App = (props) => {

  const [Mode, setMode] = useState("light");
  
  
  const HandleToggleMode = ()=> {
    console.log(Mode + " Mode Clicked");
    console.log(Mode);

    if(Mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = 'black';
    }
    else{
     setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }
  
const [progress, setProgress] = useState(0);

const pageSize = 20;
  
    return (
      <div>
        <Router>
          <Navbar Mode={Mode} handleMode = {HandleToggleMode}/>
          <LoadingBar
        color='#f11946'
        progress={progress}
setProgress
      />
          <Routes>
            <Route exact path='/' element={<News setProgress = {setProgress}  key="general" pageSize={pageSize} country="us" category="general" Mode={Mode}/>}></Route>
            <Route exact path='/business' element={<News setProgress = {setProgress}  key="business" pageSize={pageSize} country="us" category="business" Mode={Mode}/>}></Route>
            <Route exact path='/entertainment' element={<News setProgress = {setProgress}  key="entertainment" pageSize={pageSize} country="us" category="entertainment"Mode={Mode} />}></Route>
            <Route exact path='/health' element={<News setProgress = {setProgress}  key="health" pageSize={pageSize} country="us" category="health" Mode={Mode}/>}></Route>
            <Route exact path='/science' element={<News setProgress = {setProgress}  key="science" pageSize={pageSize} country="us" category="science"Mode={Mode} />}></Route>
            <Route exact path='/sports' element={<News setProgress = {setProgress}  key="sports" pageSize={pageSize} country="in" category="sports" Mode={Mode}/>}></Route>
            <Route exact path='/technology' element={<News setProgress = {setProgress}  key="technology" pageSize={pageSize} country="us" category="technology"Mode={Mode} />}></Route>
            {/* <Route exact path='/general' element={<News setProgress = {setProgress}  key="general" pageSize={pageSize} country="us" category="general"Mode={Mode} />}></Route> */}
            <Route exact path='/' element={<NewsItem Mode={Mode}/>}></Route>
            
          </Routes>
        </Router>
      </div>
    )
  
}
export default App;