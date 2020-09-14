import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    a{
      text-decoration:none;
    }

    a:hover{
      color:#0ABDE3 !important;
    }

    .menu_active {
      font-weight: bold;
      border-bottom: 2px solid #19dae7;
  }
  }

  

  .form-center{
    display: flex;
    fext-flow: row nowrap;
    justify-content: center;
    background: #fff;
    height: 2.5rem;
    width: 13rem;
    align-items: center;
    border-radius: 5rem;
    padding: 0 0.2rem 0 0.5rem;
  }
  .form-center input{
    height: 1rem;
    border-radius: 1.5rem;
    border: none;
    padding: 0.5rem;
  }

  .form-center button{
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 1rem;
    border: none;
    background: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    // background-color: #0D2538;
    // background-color: #DAE0E2;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    top: 4.3rem;
    left: -15rem;
    height: 100vh;
    width: 15rem;
    // padding-top: 2rem;
    // transition: transform 0.1s ease-in-out;

    li {
      color: #fff;

      .menu_active {
        font-weight: bold;
        border-bottom: none;
    }

    }
    
    .form-center{
      margin-left: 0.5rem;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} className="bg-dark text-light">
      <form className="form-center mt-3">
      <input className="form-control" type="search" placeholder="Search by name" aria-label="Search" style={{height:'2rem'}}/>
      <button className="btn btn-white" type="submit" style={{height:'2.5rem'}}><SearchIcon/></button>
    </form>
      <li>
          <NavLink activeClassName="menu_active" exact className="text-white active" to="/ecommerce">Home</NavLink>
      </li>
      <li>
        <a className="dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div className="dropdown-menu text-center bg-dark" aria-labelledby="navbarDropdownMenuLink">
          <NavLink activeClassName="menu_active" className="dropdown-item text-light  bg-dark" to="/ecommerce">Action</NavLink>
          <NavLink activeClassName="menu_active" className="dropdown-item text-light  bg-dark" to="/ecommerce">Another action</NavLink>
          <NavLink activeClassName="menu_active" className="dropdown-item text-light  bg-dark" to="/ecommerce">Something else here</NavLink>
        </div>
      </li>
      <li>
          <NavLink activeClassName="menu_active" className="text-light" to="/artist">Artist</NavLink>
        </li>
      <li><NavLink activeClassName="menu_active" className="text-white" to="/contact">Contact Us</NavLink></li>
      <li><NavLink activeClassName="menu_active" className="text-white" to="/login">LogIn</NavLink></li>
      <li><NavLink activeClassName="menu_active" className="text-white" to="/signup">SingUp</NavLink></li>
      <li><NavLink activeClassName="menu_active" className="text-white" to="/about">About Us</NavLink></li>
      {/* <li>FAQs</li>
      <li>Refunds & Cancellations</li> */}
    </Ul>
  );
};

export default RightNav;
