import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Footer from '../components/Footer';
import AdsContent from '../components/AdsContent';

function Home() {
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

export default Home;

