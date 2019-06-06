import React, { Component } from 'react';
import NavbarCollapse from '../Navbar/NavbarCollapse';
import FormCollapse from '../Form/FormCollapse';
import SecondaryNavigation from '../Navbar/SecondaryNavigation';
import ItemDetailTitle from '../Item/ItemDetailTitle';


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