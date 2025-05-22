import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

export default function ChessGame({ onClose, playerColor }) {
  const [game, setGame] = useState(new Chess());
  const [playerTurn, setPlayerTurn] = useState('w'); 
  const [gameOver, setGameOver] = useState(false);

  // On mount, set initial turn based on player's color
  useEffect(() => {
    setPlayerTurn('w');  // White always starts
  }, []);

  // Check if it's player's turn depending on color
  const isPlayerTurn = playerTurn === playerColor;

  // Make random move for computer
  const makeRandomMove = () => {
    const possibleMoves = game.moves();
    if (possibleMoves.length === 0) {
      setGameOver(true);
      return;
    }
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    game.move(possibleMoves[randomIndex]);
    setGame(new Chess(game.fen()));
  };

  // Player move
  const onDrop = (sourceSquare, targetSquare) => {
    if (gameOver) return false;

    if (!isPlayerTurn) return false; // prevent move if not player's turn

    const gameCopy = new Chess(game.fen());
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });

    if (move === null) return false;

    setGame(gameCopy);
    setPlayerTurn(playerTurn === 'w' ? 'b' : 'w');
    return true;
  };

  // Computer move effect
  useEffect(() => {
    if (!gameOver && !isPlayerTurn) {
      const timer = setTimeout(() => {
        makeRandomMove();
        setPlayerTurn(playerTurn === 'w' ? 'b' : 'w');
      }, 700);
      return () => clearTimeout(timer);
    }

    if (game.isCheckmate()) {
      alert(`Checkmate! ${playerTurn === 'w' ? 'White' : 'Black'} wins.`);
      setGameOver(true);
    } else if (game.isStalemate()) {
      alert("Stalemate! It's a draw.");
      setGameOver(true);
    } else if (game.isDraw()) {
      alert('Draw!');
      setGameOver(true);
    }
  }, [game, playerTurn, gameOver, isPlayerTurn]);

  const resetGame = () => {
    setGame(new Chess());
    setPlayerTurn('w');
    setGameOver(false);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '100px',
      left: 'calc(50% - 250px)',
      width: '500px',
      height: '600px',
      backgroundColor: '#1e1e1e',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 0 20px rgba(0,0,0,0.8)',
      color: 'white',
      zIndex: 2000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <h2>Chess (Play vs Computer)</h2>
        <button onClick={onClose} style={{
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer'
        }}>✖</button>
      </div>

      <Chessboard
        position={game.fen()}
        onPieceDrop={onDrop}
        boardWidth={460}
        arePiecesDraggable={!gameOver && isPlayerTurn}
      />

      <button
        onClick={resetGame}
        style={{
          marginTop: '15px',
          padding: '8px 16px',
          fontSize: '16px',
          borderRadius: '6px',
          cursor: 'pointer',
          backgroundColor: '#0078d7',
          color: 'white',
          border: 'none',
          outline: 'none',
        }}
      >
        Reset Game
      </button>
    </div>
  );
}
