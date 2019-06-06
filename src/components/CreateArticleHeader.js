import React, { Component } from 'react';
import Navbar from './Navbar';
import FormCollapse from './FormCollapse';
import PageHeader from './PageHeader';


class CreateArticleHeader extends Component {
    render() {
        return (
            <div className="hero-wrapper">
                
                {/* Navbar */}
                <Navbar />
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

export default CreateArticleHeader;