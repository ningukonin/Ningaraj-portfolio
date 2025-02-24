import React from 'react';
import profileImage from './portfolio.png'; 

function Header() {
  return (
    <header>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e90ff', padding: '10px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={profileImage} alt="Profile" style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
          <h1 style={{ marginLeft: '10px', color: 'white' }}>Ningaraj</h1>
          <p> ( Full-Stack Developer )</p>
        </div>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
      <a
        href="https://drive.google.com/file/d/1ubZucPkmHZc74ZNykvvgJO-YsQFEw5ps/view"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'black', textDecoration: 'none', fontSize: '1.2em' }}
      >
        Download Resume
      </a>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
