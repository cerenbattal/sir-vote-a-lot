import Body from './pages/Body';
import Header from './components/header/Header';
import { Provider } from './context/GlobalContext';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className="ui divider"></div>
        <Body />
      </div>
    </Provider>
  );
}

export default App;
