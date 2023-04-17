import React, { Component } from 'react'


export default class NavBar extends Component {



  


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/"><h3 className='mx-3'> Taaza Khabar</h3></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active"><a className='nav-link' href='/Business'> Business</a></li>
          <li className="nav-item active"><a className='nav-link' href='/Entertainment'> Entertainment</a></li>
          
          <li className="nav-item active"><a className='nav-link' href='/Health'>Health</a></li>
          <li className="nav-item active"><a className='nav-link' href='/Science'>Science</a></li>
          <li className="nav-item active"><a className='nav-link' href='/sports'>Sports</a></li>
          <li className="nav-item active"><a className='nav-link' href='/Technology'>Technology</a></li>
          
         
          
        </ul>
      </div>
    </nav>
    )
  }
}
