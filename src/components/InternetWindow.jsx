import React, { useState } from 'react';

const InternetWindow = ({ onClose }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  return (
    <div
      className="internet-window win7-window"
      style={{
        position: 'absolute',
        top: '10%',
        left: '15%',
        width: 700,
        height: 480,
        border: '2px solid #3a6ea5',
        borderRadius: 6,
        boxShadow: '0 8px 32px #0008',
        background: '#f3f3f3',
        overflow: 'hidden',
        fontFamily: 'Segoe UI, Arial, sans-serif',
        color: '#222',
        zIndex: 1000,
      }}
    >
      <div
        className="win7-titlebar"
        style={{
          background: 'linear-gradient(to bottom, #4990e2 0%, #3566a8 100%)',
          color: '#fff',
          padding: '0 12px',
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #2c4c7c',
          fontWeight: 600,
          fontSize: 16,
          userSelect: 'none',
        }}
      >
        <span>
          <img
            //src="https://img.icons8.com/fluency/24/000000/internet.png"
            //alt="icon"
            style={{ verticalAlign: 'middle', marginRight: 8 }}
          />
          Internet
        </span>
        <button
          onClick={onClose}
          style={{
            background: 'linear-gradient(to bottom, #f66 0%, #c00 100%)',
            border: '1px solid #a00',
            borderRadius: 3,
            color: '#fff',
            width: 28,
            height: 24,
            fontWeight: 'bold',
            fontSize: 18,
            cursor: 'pointer',
            boxShadow: '0 1px 2px #0004',
            marginLeft: 8,
            transition: 'background 0.2s',
          }}
          title="Close"
        >
          ×
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100% - 32px)',
          background: '#222',
        }}
      >
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
          alt="Google"
          style={{ margin: '32px 0 24px 0', width: 180 }}
        />
        <form
          onSubmit={handleSearch}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search Google"
            style={{
              width: 320,
              padding: 12,
              borderRadius: 24,
              border: '1px solid #444',
              background: '#222',
              color: '#fff',
              fontSize: 18,
              marginBottom: 24,
              outline: 'none',
              boxShadow: '0 1px 2px #0008 inset',
            }}
          />
          <div>
            <button
              type="submit"
              style={{
                background: '#303134',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                padding: '10px 24px',
                marginRight: 8,
                fontSize: 16,
                cursor: 'pointer',
                boxShadow: '0 1px 2px #0004',
              }}
            >
              Google Search
            </button>
            <button
              type="button"
              style={{
                background: '#303134',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                padding: '10px 24px',
                fontSize: 16,
                cursor: 'pointer',
                boxShadow: '0 1px 2px #0004',
              }}
              onClick={() => window.open('https://www.google.com/doodles', '_blank')}
            >
              I'm Feeling Lucky
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InternetWindow;