import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
// import './Navbar.css';
// import logo from '../images/Logo.9221bc4c.png';
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
width: 100%;
// height: 4.5rem;
// border-bottom: 5px solid #f1f1f1;
padding: 10px 20px;
display: flex;
justify-content: space-between;
background: #DAE0E2;
color: black;
box-shadow: 0 0 10px #95a5a6;

.logo {
  font-size: 2rem;
}

  .logo img {
    padding: 5px 0;
    height: 3rem;
    width:8rem;
    animation: brand 2s linear infinite alternate-reverse both;

  }

  @-webkit-keyframes brand {
    0%{
        transform: scale(0.8);
    }

    100%{
        transform: scale(1.1);
    }
}

@keyframes brand {
    0%{
        transform: scale(0.8);
    }

    100%{
        transform: scale(1.1);
    }
}

`

const Navbar = () => {
  return (
    <Nav className="fixed-top container-fluid bg-dark">
      <div className="logo text-white font-weight-bold">
       <NavLink className="text-white navbar-brand" to="/ecommerce" > Painting</NavLink>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
