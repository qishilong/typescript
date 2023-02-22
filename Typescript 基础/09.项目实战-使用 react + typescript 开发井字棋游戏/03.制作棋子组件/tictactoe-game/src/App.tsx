import { FC } from 'react';
import { ChessboardType } from './types/enum';
import ChessboardComp from './components/ChessboardComp';

const App: FC = () => {
    return (
        <div>
            <ChessboardComp type={ChessboardType.none} clickChessboard={() => console.log("点击了")} />
            <ChessboardComp type={ChessboardType.black} clickChessboard={() => console.log("点击了")} />
            <ChessboardComp type={ChessboardType.red} clickChessboard={() => console.log("点击了")} />
        </div>
    );
};

export default App;
