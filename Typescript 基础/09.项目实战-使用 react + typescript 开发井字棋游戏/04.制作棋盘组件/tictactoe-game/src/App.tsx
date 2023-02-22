import { FC } from 'react';
import { ChessType } from './types/enum';
// import ChessComp from './components/ChessComp';
import BoardComp from './components/BoardComp';

const App: FC = () => {

    const chess: ChessType[] = [
        ChessType.none,
        ChessType.black,
        ChessType.red,
        ChessType.none,
        ChessType.black,
        ChessType.red,
        ChessType.none,
        ChessType.black,
        ChessType.red
    ];

    return (
        <div>
            <BoardComp
                allChess={chess}
                clickBoard={(i) => console.log(i)}
            />
        </div>
    );
};

export default App;
