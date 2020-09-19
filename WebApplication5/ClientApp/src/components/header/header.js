import React from 'react';
import {Navbar,Nav ,NavDropdown,Container} from "react-bootstrap";

import Git from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import Gmail from '../../assets/email.png'
import './header.css'

const Header = () => {
  return (
    
    
      <header>
        <Navbar expand="lg" className="header bg-secondary bshadow" variant="dark" fixed="top">
          <Container fluid>

          
          <Navbar.Brand>
            SinApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="menu"/>
          <Navbar.Collapse id="menu" className="justify-content-end">
            <Nav>
                <Nav.Link href="https://github.com/MatheusDevelop" target="_blank" className="d-flex align-items-center">
                  <div>
                    <img src={Git} />
                  </div>
                  <div className="m-1">
                    Github
                  </div>
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/matheus-vieira-4a7597172/" target="_blank" className="d-flex align-items-center">
                  <div>
                    <img src={Linkedin} />
                  </div>
                  <div className="m-1">
                    Linkedin
                  </div>
                </Nav.Link>
                <Nav.Link href="mailto:mathvierabarbosa@gmail.com" target="_blank" className="d-flex align-items-center">
                  <div>
                    <img src={Gmail} />
                  </div>
                  <div className="m-1">
                    Gmail
                  </div>
                </Nav.Link>
               
                
               
               
            </Nav>
          </Navbar.Collapse>  
          </Container>
        </Navbar>
      </header>
    

  );
};


export default Header;