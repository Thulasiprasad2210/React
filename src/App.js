// import logo from './logo.svg';
import './App.css';
import {HashRouter} from 'react-router-dom'
import Anchor from './API/Anchor';
import Pages from './API/Pages';


function App() {
  return (
    <>
      <div>
      <HashRouter>
      <Anchor/>
      <Pages/>
      </HashRouter>
      </div>
    </>
  );
}

export default App;
