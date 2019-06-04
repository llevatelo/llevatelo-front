import React, { Component } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Footer from '../components/Footer';
import ChangePasswordContent from '../components/ChangePasswordContent';

class ChangePassword extends Component {
    render() {
        return (
            <div className="App">
                <header className="hero">
                    <ProfileHeader title="Change my password"/>
                </header>
                
                <ChangePasswordContent />
                
                <Footer />
            </div>
        );
    }
}

export default ChangePassword;