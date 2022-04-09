import React from "react";

const navbar = (props) => (
    <div>
      {console.log(props)}
      <div>
      <header>
      <a href="#" class="logo"><i class="fas fa-utensils"></i>Ons Khardani</a>
      <div id="menu-bar" class="fas fa-bars"></div>
      <nav class="navbar">
        <a href="#home" onClick={()=>props.changeView("home")}>home</a>
        <a href="#speciality" onClick={()=>props.changeView("speciality")}>speciality</a>
        <a href="#popular" onClick={()=>props.changeView("portfolio")}>portfolio</a>
        <a href="#gallery" onClick={()=>props.changeView("Skill")}>Skill</a>
        <a href="#gallery" onClick={()=>props.changeView("Contact")}>Contact</a>
         {props.login ? 
          <a onClick={()=>props.logout()}>Logout</a>
          :
         <a href="#gallery" onClick={()=>props.changeView("Admin")}>Admin</a>
         }
        

      </nav>
    </header>
    </div>
  </div>
);
export default navbar;