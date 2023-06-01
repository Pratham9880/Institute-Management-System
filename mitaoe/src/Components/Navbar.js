import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Container } from 'react-bootstrap'
import Home from '../NavbarCom/Home';
import Aboutus from '../NavbarCom/Aboutus';
import Admission from '../NavbarCom/Admission';
import Awards from '../NavbarCom/Awards';
import Testonomials from '../NavbarCom/Testonomials';
import CE from '../Dropdowns/CE';
import CSe from '../Dropdowns/CSe';
import Civil from '../Dropdowns/Civil';
import ENTC from '../Dropdowns/ENTC';
import ETX from '../Dropdowns/ETX';
import Mech from '../Dropdowns/Mech';
import Placements from '../Dropdowns/Placements'
import Companies from '../Dropdowns/Companies';
import CorporateRelation from '../Dropdowns/CorporateRelation';
import Student from './Student';
import Faculty from './Faculty';

import DownloadB from '../Dropdowns/DownloadB';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";

export default class Navbarcomp extends Component {
  render() {
    return (
        <Router>
      <div>
         <Navbar bg="dark" variant={'dark'} expand="lg">
            <Container>
        <Navbar.Brand href="#home">MITAOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to={'/Home'} >Home</Nav.Link>
            <Nav.Link as = {Link} to={'/Aboutus'}>AboutUs</Nav.Link>

            <NavDropdown title="Admission" id="basic-nav-dropdown">
              <NavDropdown.Item as ={Link} to={'/DownloadB'}>Download Brochure</NavDropdown.Item>
              </NavDropdown>

            <NavDropdown title="Placement" id="basic-nav-dropdown">
              <NavDropdown.Item as ={Link} to={'/CorporateRelation'}>Corporate Relation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/Placements'}>Placement</NavDropdown.Item>
              <NavDropdown.Item as ={Link} to={'/Companies'}>Companies</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as = {Link} to={'/Awards'} >Awards</Nav.Link>
              <Nav.Link as = {Link} to={'/Testonomials'} >Testonomials</Nav.Link>

              <NavDropdown title="Department" id="basic-nav-dropdown">
              <NavDropdown.Item as ={Link} to={'/CSe'}>Computer Science Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/CE'}>Chemical Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/ETX'}>Electronics Engineering</NavDropdown.Item>
              <NavDropdown.Item as ={Link} to={'/ENTC'}>Electronics & Telecommunication Engineering</NavDropdown.Item>
              <NavDropdown.Item as ={Link} to={'/Mech'}>Mechanical Engineering</NavDropdown.Item>
              <NavDropdown.Item as ={Link} to={'/Civil'}>Civil Engineering</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="ERP" id="basic-nav-dropdown">
              <NavDropdown.Item as ={Link} to={'/Student'}>Student</NavDropdown.Item>
              <NavDropdown.Item as ={Link} to={'/Faculty'}>Faculty</NavDropdown.Item>
              </NavDropdown>

          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
      </div>
      <div>
        <Routes>
            <Route path="/Aboutus" element={<Aboutus />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Admission" element={<Admission/>}/>
            <Route path="/Awards" element={<Awards />}/>
            <Route path="/Testonomials" element={<Testonomials />}/>
            <Route path="/CSe" element={<CSe />}/>
            <Route path="/CE" element={<CE />}/>
            <Route path="/Civil" element={<Civil />}/>
            <Route path="/ENTC" element={<ENTC />}/>
            <Route path="/ETX" element={<ETX />}/>
            <Route path="/Mech" element={<Mech />}/>
            <Route path="/DownloadB" element={<DownloadB/>}/>

            <Route path="/Placements" element={<Placements />}/>
            <Route path="/Companies" element={<Companies/>}/>
            <Route path="/CorporateRelation" element={<CorporateRelation />}/>

            <Route path="/Student" element={<Student/>}/>
            <Route path="/Faculty" element={<Faculty />}/>
        
        </Routes>
      </div>
      </Router>
    );
  }
}