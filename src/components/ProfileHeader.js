import React, { Component } from 'react';
import NavbarCollapse from './NavbarCollapse';
import FormCollapse from './FormCollapse';
import SecondaryNavigation from './SecondaryNavigation';
import PageHeader from './PageHeader';


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