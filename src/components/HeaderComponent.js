import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class HeaderComponent extends Component {
  render() {
    return (
    	<div>
        <Navbar color="faded" light expand="md" className="Header">
          <NavbarBrand href="/">
            <h2>FND APP</h2>
          </NavbarBrand>
        </Navbar>
    	</div>
    );
  }
}

export default HeaderComponent;
