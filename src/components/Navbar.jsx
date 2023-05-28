import React from "react";

import NavLink from "react-bootstrap";

import { Link } from "react-router-dom";

import {Navbar} from "react-bootstrap";
import {Button} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Modal} from "react-bootstrap";

import styled from "styled-components";

import {useState} from "react";





const Styles = styled.div`
a, .navbar-brand, .navbar-nav, .nav-link{
  color: white;
  &:hover{
    color: red;
  }
}
`


const MyNavbar = () => {





  return(


    <div>
      <Styles>
      <Navbar bg="dark" variant="dark" expand="lg" >
        <Navbar.Brand>My Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
 
          <Nav className="mr-auto" >
            <Nav.Link>
              <Link to="/" >Home</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/gallery" >Gallery</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/about" >About</Link>
            </Nav.Link>
          </Nav> 


          <Nav>
            <Button variant="primary">Log in</Button>
          </Nav>

        </Navbar.Collapse>

      </Navbar>

      </Styles>
    
    </div>

  )
}

export default MyNavbar