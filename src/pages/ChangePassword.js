import React, { Component } from 'react';
import ChangePasswordContent from '../components/ChangePassword/ChangePasswordContent';
import ProfileLayout from '../components/Layouts/ProfileLayout';

class ChangePassword extends Component {
    render() {
        return (
            <div className="App">
                <ProfileLayout title="Change My Password">            
                    <ChangePasswordContent />
                </ProfileLayout>        
            </div>
        );
    }
}

export default ChangePassword;