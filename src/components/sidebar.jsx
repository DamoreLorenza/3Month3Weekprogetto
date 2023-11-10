import Button from 'react-bootstrap/Button';
import { Col, Container, ListGroupItem, Navbar, Row } from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';

const SideBar=()=>{



    return(
        <Container className='cont d-flex flex-column  bg-black'>
            <Row className='d-flex align-items-start flex-column mb-3'>
             <Col >
<Row className='d-flex flex-column'>
    <Col className='d-flex flex-column'>
    <img
              src="../assets/logo/logo.png"
              width="130"
              height="50"
              className="d-inline-block align-top mt-5 ms-3"
              alt="Spotify logo"
            />
            
            <Button href='/' className='bottUno mt-5 text-white' variant="link"><i className="bi bi-house-door-fill me-3"></i>Home</Button>
            <Button href='/music' className='bottUno mt-4 text-white' variant="link"><i className="bi bi-book-fill me-3"></i>Your Library</Button>
    
            <InputGroup className="mb-3 mt-4">
        <Form.Control
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Go
        </Button>
      </InputGroup>
    </Col>

</Row>
<Row className='d-flex align-items-end' >
    <Col className='d-flex flex-column '>
    <Button className='mt-5 rounded-pill' variant="light">Sign Up</Button>
    <Button className='mt-4 border border-white rounded-pill' variant="dark">Login</Button>
    </Col>
    <p className='fs-6 mt-4'>Coockie Policy | Privacy</p>
</Row>

  </Col>   

            </Row>
        </Container>
    
)
}

export default SideBar