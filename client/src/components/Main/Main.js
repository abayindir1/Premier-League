import React, {useState} from 'react'
import Matches from '../Matches/Matches'

function Main() {
    
    return (
        <>
        <div className="main">
               <img src={require("../../images/logo.png")} id="logo" alt="logo"/>
           <h1 className="title">Get the latest news of Premier League football</h1>

        </div>

        <div className="page-content">
        <div className="left-col">
               <h1>left col</h1>
           </div>
           <div className="right-col">
               <Matches/>
           </div>
        </div>
           </>
    )
}



export default Main

