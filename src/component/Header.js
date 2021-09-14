import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const Header = props => {
  
  return (
    <header>
      
      <Navbar className="mb-5" bg="light" variant='light' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Sneackers</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to='/cart'>
                <Nav.Link ><i className= 'fas fa-shopping-cart p-3' > ({props.cartItemNumber}) </i>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link ><i className='fas fa-user p-3'></i>Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header



  