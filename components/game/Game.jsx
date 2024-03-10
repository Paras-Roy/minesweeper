"use client"
import React, { useState, useEffect } from 'react';
import { Board } from '../../util/board';
import Tile from '../tiles/Tile';

export default function Game() {
  const [board, setBoard] = useState(null);

  useEffect( () => {
    console.log("starting game");
    const cols = 12;
    const rows = 10;
    const mines = 20;
    const newBoard = new Board(rows, cols, mines);
    setBoard(()=>newBoard);
  }, []);

  const renderBoard = () => {
    if (!board) return null; 
    return board.grid.map((row, rowIndex) => (
      <div key={rowIndex} className="flex gap-2">
        {row.map((cell, colIndex) => (
          <Tile cell={cell} rowIndex={rowIndex} colIndex={colIndex} handleCellClick={handleCellClick} handleRightClick={handleRightClick}/>
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
    <div className="text-white pb-[20%] flex flex-col gap-2 flex-1 w-full">
      {board && renderBoard()}
    </div>
  );
};
