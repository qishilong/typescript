import { FC } from 'react';
import { ChessType, GameStatus } from '../types/enum';
import "./gameBoard.css";

interface Game {
    status: GameStatus;
    next: ChessType.black | ChessType.red;
}

const GameBoard: FC<Game> = ({ status, next }) => {
    let result: JSX.Element = <></>;

    if (status === GameStatus.gaming) {
        if (next === ChessType.red) {
            result = <div className='red'>红方落子</div>;
        } else if (next === ChessType.black) {
            result = <div className='black'>黑方落子</div>;
        }
    } else if (status === GameStatus.blackWin) {
        result = <div className='black win'>黑方胜利</div>;
    } else if (status === GameStatus.redWin) {
        result = <div className='red win'>红方胜利</div>;
    } else {
        result = <div className='win equal'>平局</div>;
    }

    return (
        <div className='status'>
            {result}
        </div>
    );
};

export default GameBoard;;
