import { FC } from 'react';
import { ChessType } from '../types/enum';
import ChessComp from './ChessComp';
import "./board.css";

interface BoardInter {
    allChess: ChessType[];
    isGameOver?: boolean;
    clickBoard?: (i: number) => void;
}

const BoardComp: FC<BoardInter> = ({ allChess, clickBoard, isGameOver = false }) => {

    return (
        <div className='board'>
            {allChess.map((item, i) => <ChessComp
                key={i}
                type={item}
                clickChess={() => {
                    if (clickBoard && !isGameOver) {
                        clickBoard(i);
                    }
                }}
            />)}
        </div>
    );
};

export default BoardComp;
