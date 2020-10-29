import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light ">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
           <Link to ="/"> <a class="nav-link mr-5">Home <span class="sr-only">(current)</span></a> </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#"> About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">Dental services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5 text-white" href="#">reviews</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5 text-white" href="#">Blog</a>
          </li>
          
          <li class="nav-item">
          <Link to ="/addDoctor"> <a class="nav-link mr-5 text-white" href="#">Admin</a></Link> 
          </li>
          
          <li class="nav-item">
            <a class="nav-link mr-5 text-white" href="#">Contact us</a>
          </li>
        </ul>
        
      </div>
    </nav>
    );
};

export default Navbar;