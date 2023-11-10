import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './components/sidebar'

import { Col, Container, Row } from 'react-bootstrap';
import NavBarMusic from './components/navBarMusic';
import Music from './components/music';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main';


function App() {
  return (
    <div className="App">
<Row className='div'>
<Col sm={2}>
  <SideBar/></Col>
    

<Col sm={10}>
  <Main/>
</Col>   
</Row> 
    <Row>
<NavBarMusic/>
    </Row>

<BrowserRouter> 
   <Routes>
    <Route element={<Music/>} path='/music'/>
   </Routes>
   </BrowserRouter>

</div>

    
  );
}

export default App;

    

     