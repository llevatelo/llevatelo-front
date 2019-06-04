import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Footer from '../components/Footer';
import SolditemsContent from '../components/SolditemsContent';

function Solditems() {
    return (
        <div className="App">
            <header className="hero">
                <ProfileHeader title="My Sold Items"/>
            </header>
            
            <SolditemsContent />
            
            <Footer />
        </div>
    );
}

export default Solditems;


