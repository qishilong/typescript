import React from 'react';
import "./chess.css";
import { ChessType } from '../types/enum';

interface ChessInter {
    type: ChessType,
    clickChess: () => void;
}

const ChessComp: React.FC<ChessInter> = ({ type, clickChess }: ChessInter) => {
    let chess = null;

    if (type === ChessType.black) {
        chess = <div className='black chess-item'></div>;
    } else if (type === ChessType.red) {
        chess = <div className='red chess-item'></div>;
    }

    return (
        <div className='chess' onClick={() => {
            if (type === ChessType.none && clickChess) {
                clickChess();
            }
        }}>
            {chess}
        </div>
    );
};

export default ChessComp;
