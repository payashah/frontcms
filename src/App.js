import logo from './logo.svg';
import './App.css';
import Sidbar from './Components/Sidbar/Sidbar';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import routes from './Routes';

function App() {

  const router = useRoutes(routes)

  return (
    <div className="app">
      <Sidbar></Sidbar>
      <div className="main">
        <Header></Header>

        {router}

      </div>
    </div>
  );
}

export default App;
