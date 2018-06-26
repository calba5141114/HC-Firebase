import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light">
                    <NavbarBrand>Poolio</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}



export default Header;