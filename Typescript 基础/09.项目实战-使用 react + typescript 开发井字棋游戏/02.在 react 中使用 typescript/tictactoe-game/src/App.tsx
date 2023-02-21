import { FC, useState } from 'react';
import CountComp from './components/CountComp';

// interface AppState {
//   num: number;
// }

const App: FC = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <CountComp num={num} onChange={n => setNum(prev => prev = n)} />
    </div>
  );
};

// 类组件
// interface IState {
//   num: number;
// }

// class App extends React.Component<{}, IState> {
//   state: IState = {
//     num: 0
//   };
//   render() {
//     return (
//       <CountComp num={this.state.num} onChange={n => {
//         this.setState({
//           num: n
//         });
//       }} />
//     );
//   }
// }

export default App;

