import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Footer from '../components/Footer';
import AdsContent from '../components/AdsContent';

function Ads() {
    return (
        <div className="App">
            <header className="hero">
                <ProfileHeader title="My Ads"/>
            </header>
            
            <AdsContent />
            
            <Footer />
        </div>
    );
}

export default Ads;

