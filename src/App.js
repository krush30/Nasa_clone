import { Provider } from 'react-redux';
import './App.css';
import Body from './component/Body';
import appStore from './component/utils/appStore';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>

        <Body />
      </Provider>


    </div>
  );
}

export default App;
