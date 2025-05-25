import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import './style/Global.css'
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;