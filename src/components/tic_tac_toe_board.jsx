import React, { useState } from 'react';
import Partial from './partials';

const TicTacToe = (props) => {

    const [state, setState] = useState(true);
    const [cellsTable, setCellsTable] = useState(Partial.initialBoard);
    const TicTacToeTable = cellsTable.map((cell, index) =>
        <h1 className="box" onClick={() => handlePlayerAction(index)}>{ cell }</h1>
    )

    function handlePlayerAction(index) {
        const tttTable = [...cellsTable];
        if (state && tttTable[index] !== 'X') {
            setState(false);
            tttTable[index] = 'O';
        }
        else if (!state && tttTable[index] !== 'O') {
            setState(true);
            tttTable[index] = 'X';
        }
        if (Partial.isMatched({ possibleMatch: tttTable, playerId: index })) {
            return setCellsTable(Partial.initialBoard);
        }   return setCellsTable(tttTable);
    }

    return (
        <div className="wrapper">
            <div className="box grided">
                { TicTacToeTable }
            </div>
        </div>
    );
}

export default TicTacToe;