import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className="nav__bar" id="navbar">
        <ul>
          <li><a className="nav__links" href="#works">About</a></li>
          <li><a className="nav__links" href="#blog">Classes</a></li>
          <li><img src="Group 1.png" alt="logo" className="logo" /></li>
          <li><a className="nav__links" href="#recipes">Recipes</a></li>
          <li><a className="nav__links" href="#order">Order</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header
