import './Header.css';
import React, { Component } from "react";

class Header extends Component{
    constructor(){
        super();

        this.state={
            menuToggle: false
        }
    }

    handleButton = () =>{
      if(window.screen.width > 1000){
        this.setState({
          menuToggle: false
        })
      }
      else{
        this.setState({
            menuToggle: !this.state.menuToggle 
        })
      } 
    }


  render(){
    return(
      <header className='header'>
        <div className="navBar">

            <h1 className="title">Start Bootstrap</h1>
          
            <button className="menuButton" onClick={this.handleButton}>MENU</button>

            <ul className="menuList">
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>

        </div>

          <ul className={`menuList dropMenu ${this.state.menuToggle ? 'displayDropDown' : ""}`}>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>

          <div className="welcome">
            <h3>Welcome To Our Studio!</h3>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button>TELL ME MORE</button>
          </div>

      </header>
    )
  }
}

export default Header;