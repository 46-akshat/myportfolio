import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import DesktopIcon from './components/DesktopIcon';
import ProjectsWindow from './components/ProjectsWIndow';
import InternetWindow from './components/InternetWindow';
import ChessGame from './components/ChessGame';

function App() {
  const [showprojects, setshowprojects] = useState(false);
  const [showinternet, setshowinternet] = useState(false);
  const [contextmenu, setcontextmenu] = useState({ visible: false, x: 0, y: 0 });
  const [showchess, setshowchess] = useState(false);
  const [emptybin, setemptybin] = useState(false);
  const [playercolor, setplayercolor] = useState(null); 
  const [chessstart, setchessstart] = useState(false);
  const menuRef = useRef(null);

  const openchessstartscreen = () => {
    setchessstart(true);
  };

  const startgameas = (color) => {
    setplayercolor(color);
    setchessstart(false);   
    setshowchess(true);     
  };

  const handlerecyclebindoubleclick = (e) => {
    e.preventDefault();
    setcontextmenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (contextmenu.visible && menuRef.current && !menuRef.current.contains(e.target)) {
        setcontextmenu({ ...contextmenu, visible: false });
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [contextmenu]);

  const icons = [
    { icon: '/icons/computer.png', label: 'Computer' },
    { icon: emptybin ? '/icons/recyclebin.png' : '/icons/filledrecyclebin.png', label: 'Recyclebin', action: handlerecyclebindoubleclick },
    { icon: '/icons/pdf.png', label: 'MyResume', link: 'https://drive.google.com/file/d/1-OTZ0Lr25r7T1JM5RkoTDFmGVmrVNI-n/view?usp=sharing' },
    { icon: '/icons/internet.png', label: 'Internet', action: () => setshowinternet(true) },
    { icon: '/icons/projects.png', label: 'My Projects', action: () => setshowprojects(true) },
    { icon: '/icons/chess.png', label: 'Chess', action: openchessstartscreen },  // Open start screen on click
    { icon: '/icons/github.png', label: 'Github', link: 'https://github.com/akshat4619' },
    { icon: '/icons/linkedin.png', label: 'LinkedIn', link: 'https://www.linkedin.com/in/akshat-jain-97538b255/' },
  ];

  return (
    <div className='desktop'>
      <div className='icons-area'>
        {icons.map((item, index) => (
          <DesktopIcon
            key={index}
            icon={item.icon}
            label={item.label}
            link={item.link}
            onDoubleClick={item.action}
          />
        ))}
      </div>

      {showprojects && <ProjectsWindow onClose={() => setshowprojects(false)} />}
      {showinternet && <InternetWindow onClose={() => setshowinternet(false)} />}
      {showchess && <ChessGame playerColor={playercolor} onClose={() => setshowchess(false)} />}

      {/* Chess start screen modal */}
      {chessstart && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 3000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#222',
              padding: '30px',
              borderRadius: '12px',
              textAlign: 'center',
              color: 'white',
              width: '300px',
            }}
          >
            <h2>Choose your side</h2>
            <button
              onClick={() => startgameas('w')}
              style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer', fontSize: '16px' }}
            >
              Play First (White)
            </button>
            <button
              onClick={() => startgameas('b')}
              style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer', fontSize: '16px' }}
            >
              Play Second (Black)
            </button>
            <br />
            <button
              onClick={() => setchessstart(false)}
              style={{
                marginTop: '15px',
                padding: '8px 16px',
                fontSize: '14px',
                backgroundColor: '#555',
                borderRadius: '6px',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {contextmenu.visible && (
        <div
          className='context-menu'
          style={{
            top: contextmenu.y,
            left: contextmenu.x,
            position: 'absolute',
            backgroundColor: '#2e2e2e',
            color: 'white',
            padding: '8px',
            borderRadius: '6px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            zIndex: 1000,
          }}
          ref={menuRef}
        >
          <div
            className='menu-item'
            onClick={() => {
              alert('Opening Recycle Bin..');
              setcontextmenu({ ...contextmenu, visible: false });
            }}
          >
            Open
          </div>
          <div
            className={`menu-item ${emptybin ? 'disabled' : ''}`}
            onClick={() => {
              if (!emptybin) {
                setemptybin(true);
                alert('Recycle Bin emptied!');
                setcontextmenu({ ...contextmenu, visible: false });
              }
            }}
          >
            🗑 Empty Recycle Bin
          </div>
          <div className="menu-item" onClick={() => alert('Properties clicked')}>
            ⚙️ Properties
          </div>
        </div>
      )}

      <div className='taskbar'>
        <img src="/icons/windowslogo.png" alt="Start" className='start-button' width={35} height={35} />
        <div className='taskbar-right'>
          <div className='system-icons'>
            <img src="/icons/action1.png" alt="Flag" width={30} height={30} />
            <img src="/icons/audio2.png" alt="Audio" width={30} height={30} />
            <img src="/icons/network.png" alt="Network" width={30} height={30} />
          </div>
          <div className="time-date">
            <span className="time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
            <span className="date">{new Date().toLocaleDateString('en-GB')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
