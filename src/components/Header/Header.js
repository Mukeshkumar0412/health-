import React from 'react';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';
import '../Header/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Healthcare.</h1>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <FiBell className="notification-icon" />
        <div className="user-profile">
          <img src="/assets/images/user-avatar.png" alt="User" className="user-avatar" />
          <span className="user-name">John Doe</span>
        </div>
        <button className="add-button">
          <FiPlus />
        </button>
      </div>
    </header>
  );
}

export default Header;