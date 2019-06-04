import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Footer from '../components/Footer';
import BookmarkContent from '../components/BookmarkContent';

function Bookmark() {
    return (
        <div className="App">
            <header className="hero">
                <ProfileHeader title="Bookmarks"/>
            </header>
            
            <BookmarkContent />
            
            <Footer />
        </div>
    );
}

export default Bookmark;

