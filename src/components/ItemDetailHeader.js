import React, { Component } from 'react';
import NavbarCollapse from './NavbarCollapse';
import FormCollapse from './FormCollapse';
import SecondaryNavigation from './SecondaryNavigation';
import ItemDetailTitle from './ItemDetailTitle';


class ItemDetailHeader extends Component {
    render() {
        return (
            <div className="hero-wrapper">
                {/*============ Secondary Navigation ===============================================================*/}
                <SecondaryNavigation />
                {/* Navbar */}
                <NavbarCollapse />
                {/* End of Navbar */}
                
                {/* Form Collapse */}
                <FormCollapse />
                
                <ItemDetailTitle price="100"/>
                <div className="background" />
                {/*end background*/}
            </div>
        );
    }
}

export default ItemDetailHeader;