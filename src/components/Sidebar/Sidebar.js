
import React from 'react';
import { navigationLinks } from '../../data/navigationLinks.js';
import '../Sidebar/Sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <h3 className="sidebar-heading">General</h3>
      <ul className="sidebar-nav">
        {navigationLinks.map((link) => (
          <li key={link.id} className="sidebar-nav-item">
            <link.icon className="nav-icon" />
            <span>{link.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;