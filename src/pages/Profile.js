import React from 'react';
import ProfileContent from '../components/ProfileContent';
import ProfileLayout from '../components/Layouts/ProfileLayout';

function Profile() {
    return (
        <div className="App">
            <ProfileLayout title="My Profile">            
                <ProfileContent />
            </ProfileLayout>            
        </div>
    );
}

export default Profile;

