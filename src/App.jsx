import { AddCom, EditCom, ComDetail, ComList } from './pages';
import './App.css'
import { BrowserRouter, Route,  Routes } from 'react-router-dom';


function App() {


  return (
  <div className="container">
    <h1>React.js CRUD Operation Computer</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ComList />}></Route>
      <Route path='/computer/create' element={<AddCom />}></Route>
      <Route path='/computer/edit/:id' element={<EditCom />}></Route>
      <Route path='/computer/detail/:id' element={<ComDetail />}></Route>
      </Routes>
      </BrowserRouter>
  </div>
  );
}
export default App
