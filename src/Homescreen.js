import React from 'react'
import "./App.css"
import NavBar from './Components/NavBar/NavBar'
import './App.css';
import {originals,action,comedy,trending,romance,horror,documentaries} from './urls'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
// import Footer from './Components/Footer/Footer'
const Homescreen = () => {
    return (
        <div className="App">
            <NavBar/>
       <Banner/>
    <RowPost  url={originals} title="Netflix Orginals"/>
    <RowPost url={action} title="Action Movies" isSmall/>
    <RowPost url={comedy} title="Comedy Movies" isSmall/>
    <RowPost url={trending} title="Trending Now" isSmall/>
    <RowPost url={horror} title="Horror Movies" isSmall/>
    <RowPost url={romance} title="Romance Movies" isSmall/>
    <RowPost url={documentaries} title="Documentries" isSmall/>
    
    
        </div>
    )
}

export default Homescreen
