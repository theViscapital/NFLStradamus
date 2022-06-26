import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Predictions from './pages/Predictions';
import RegularSeason from './pages/RegularSeason';
import Postseason from './pages/Postseason';
import Versus from './pages/Versus';
import Overunder from './pages/Overunder';
import Awards from './pages/Awards';
import Error from './pages/Error';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '/' element= {<Login/>}/>
          <Route path= 'home' element= {<Home/>}/>
          <Route path= 'register' element= {<Register/>}/>
          <Route path= 'predictions' element= {<Predictions/>}/>
          <Route path= 'regularseason' element= {<RegularSeason/>}/>
          <Route path= 'postseason' element= {<Postseason/>}/>
          <Route path= 'versus' element= {<Versus/>}/>
          <Route path= 'overunder' element= {<Overunder/>}/>
          <Route path= 'awards' element= {<Awards/>}/>
          <Route path= 'home' element= {<Home/>}/>
          <Route path= '*' element= {<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
