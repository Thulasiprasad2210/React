// import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Anchor from './API/Anchor';
import Pages from './API/Pages';


function App() {
  return (
    <>
      <div>
      <BrowserRouter>
      <Anchor/>
      <Pages/>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
