"use client"
import React, { useState, useEffect } from 'react';
import { Board } from '../../util/board';

export default function Play() {
  const [board, setBoard] = useState(null);

  useEffect( () => {
    console.log("starting game");
    const rows = 8;
    const cols = 8;
    const mines = 20;
    const newBoard = new Board(rows, cols, mines);
    setBoard(()=>newBoard);
  }, []);

  const renderBoard = () => {
    if (!board) return null; 
    return board.grid.map((row, rowIndex) => (
      <div key={rowIndex} className="flex gap-2">
        {row.map((cell, colIndex) => (
          <span
            key={colIndex}
            className="min-w-3"
            onClick={() => handleCellClick(rowIndex, colIndex)}
            onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
          >
           {cell.isRevealed ? cell.adjacentMines : cell.isFlagged ? 'F' : '[]'}
          </span>
        ))}
      </div>
    ));
  };

  const handleCellClick = (row, col) => {
    if (!board) return;
    const updatedBoard = new Board(board.rows, board.cols, board.mines);
    updatedBoard.grid = board.grid.map(row => [...row]);
    updatedBoard.revealCell(row, col);
    setBoard(updatedBoard);
  };

  const handleRightClick = (e, row, col) => {
    e.preventDefault();
    if (!board) return; 
    const updatedBoard = new Board(board.rows, board.cols, board.mines);
    updatedBoard.grid = board.grid.map(row => [...row]);
    updatedBoard.toggleFlag(row, col);
    setBoard(updatedBoard);
  };
  
  

  return (
    <div className="game text-white">
      {board && (
        <div className="board">{renderBoard()}</div>
      )}
    </div>
  );
};
