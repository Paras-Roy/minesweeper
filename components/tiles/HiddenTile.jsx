import React from 'react'

export default function HiddenTile({cell, rowIndex, colIndex, handleCellClick, handleRightClick}) {
    return (
        <span
            key={colIndex}
            className="min-w-3 bg-white bg-opacity-35 text-xl rounded-lg backdrop-blur-sm aspect-square flex items-center justify-center flex-1 text-center"
            onClick={() => handleCellClick(rowIndex, colIndex)}
            onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
        >
            {cell.isFlagged ? '#' : ' '}
        </span>
    )
}
