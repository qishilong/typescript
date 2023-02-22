import React from 'react';
import "./Chessboard.css";
import { ChessboardType } from '../types/enum';

interface ChessBoardInter {
    type: ChessboardType,
    clickChessboard: () => void;
}

const ChessboardComp = ({ type, clickChessboard }: ChessBoardInter) => {
    let chess = null;

    if (type === ChessboardType.black) {
        chess = <div className='chess-item black'></div>;
    } else if (type === ChessboardType.red) {
        chess = <div className='chess-item red'></div>;
    }

    return (
        <div className='chess' onClick={() => {
            if (type === ChessboardType.none && clickChessboard) {
                clickChessboard();
            }
        }}>
            {chess}
        </div>
    );
};

export default ChessboardComp;
