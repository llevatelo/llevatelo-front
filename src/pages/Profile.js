import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Footer from '../components/Footer';
import ProfileContent from '../components/ProfileContent';

function Home() {
    return (
        <div className="App">
            <header className="hero">
                <ProfileHeader title="My Profile"/>
            </header>
            
            <ProfileContent />
            
            <Footer />
        </div>
    );
}

export default Home;

