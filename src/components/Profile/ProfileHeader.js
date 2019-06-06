import React, { Component } from 'react';
import NavbarCollapse from '../Navbar/NavbarCollapse';
import FormCollapse from '../Form/FormCollapse';
import SecondaryNavigation from '../Navbar/SecondaryNavigation';
import PageHeader from '../Complements/PageHeader';


class ProfileHeader extends Component {
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
                
                <PageHeader title={this.props.title} />
                <div className="background" />
                {/*end background*/}
            </div>
        );
    }
}

export default ProfileHeader;