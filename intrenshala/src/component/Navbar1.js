import React from 'react';
import '../style.css'
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'

function Navbar1() {
    return (
        <div className = "navbody">
            <div className = "logo">
                <img
                src = "https://internshala.com/static/images/common/new_internshala_logo.svg"
                alt = "intrenshala"/>
                </div>
               <div className = "menu">
                 <a>intrenships</a>
                 <a>Online Training <span className = "contest">Contest</span></a>
                 <a>Fresher Jobs</a>
                 <div className ="button">
                 <button className="login">login</button>
                 <button className="register">register</button>
                      </div>
                 
                </div>     
                    
        </div>

        
//         <Navbar collapseOnSelect expand="lg" bg="light" >
//   <Container>
//   <Navbar.Brand href="#home"> 
//                <img
//                src = "https://internshala.com/static/images/common/new_internshala_logo.svg"
//                alt = "intrenshala"/>
//                </Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="me-auto">
     
//     </Nav>
//     <Nav >
//     <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//       <Nav.Link href="#deets">login</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//         register
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
//   </Container>
// </Navbar>
    )
}

export default Navbar1
