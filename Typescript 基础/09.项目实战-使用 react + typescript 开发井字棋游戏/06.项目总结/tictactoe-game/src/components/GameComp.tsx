import { FC, useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import BoardComp from './BoardComp';
import { ChessType, GameStatus } from "../types/enum";

interface GameStatusResult {
    chess: ChessType[];
    status: GameStatus;
    next: ChessType.black | ChessType.red;
}

const GameComp: FC = () => {
    const [initArr, setInitArr] = useState<GameStatusResult["chess"]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatusResult["status"]>(GameStatus.gaming);
    const [next, setNext] = useState<GameStatusResult["next"]>(ChessType.black);
    const [reset, setReset] = useState<boolean>(false);

    useEffect(() => {
        let arr: GameStatusResult["chess"] = [];
        for (let i = 0; i < 9; i++) {
            arr.push(ChessType.none);
        }
        setInitArr(prev => prev = arr);
        setGameStatus(prev => prev = GameStatus.gaming);
    }, [reset]);

    console.log(initArr, 11);
    // 判断胜负
    const judgmentResult = (chesses: ChessType[], index: number): GameStatus => {
        // 行最小值
        const rowMin = Math.floor(index / 3) * 3;
        // 列最小值
        const columnMin = index % 3;
        if ((chesses[rowMin] === chesses[rowMin + 1] && chesses[rowMin] === chesses[rowMin + 2])
            ||
            (chesses[columnMin] === chesses[columnMin + 3] && chesses[columnMin] === chesses[columnMin + 6])
            ||
            (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== ChessType.none)
            ||
            (chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== ChessType.none)) {
            if (chesses[index] === ChessType.red) {
                return GameStatus.redWin;
            }
            else {
                return GameStatus.blackWin;
            }
        }
        //2. 判断是否平局
        if (!chesses.includes(ChessType.none)) {
            return GameStatus.equal;
        }
        //3. 游戏正在进行
        return GameStatus.gaming;
    };

    const handleClickChess = (index: number) => {
        const chesses: GameStatusResult["chess"] = [...initArr];
        chesses[index] = next;
        setInitArr(prev => prev = chesses);
        setNext(prev => prev === ChessType.black ? ChessType.red : ChessType.black);
        setGameStatus(prev => prev = judgmentResult(chesses, index));
    };

    console.log(initArr, 222);
    return (
        <div style={{ textAlign: "center" }}>
            <h1>井字棋游戏</h1>
            <GameBoard
                status={gameStatus}
                next={next}
            />
            <BoardComp
                allChess={initArr}
                isGameOver={gameStatus !== GameStatus.gaming}
                clickBoard={(i) => handleClickChess(i)}
            />
            <button
                onClick={() => setReset(prev => !prev)}
            >重新开始</button>
        </div>
    );
};

export default GameComp;
