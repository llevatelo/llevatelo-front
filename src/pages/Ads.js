import React from 'react';
import AdsContent from '../components/Ads/AdsContent';
import ProfileLayout from '../components/Layouts/ProfileLayout';

function Ads() {
    return (
        <div className="App">
            <ProfileLayout title="My Ads">            
                <AdsContent />
            </ProfileLayout>        
        </div>
    );
}

export default Ads;

