import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import GetAll from './GetAll';
import Add from './Add';
import Nav from './Nav';
import UpdateAll from './UpdateAll';
import Update from './Update';
import Delete from './Delete';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<GetAll/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/updateall' element={<UpdateAll/>}/>
          <Route path='/delete' element={<Delete/>}/>

          <Route path='/update/:updateid' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
