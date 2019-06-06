import React from 'react';
import BookmarkContent from '../components/BookmarkContent';
import ProfileLayout from '../components/Layouts/ProfileLayout';

function Bookmark() {
    return (
        <div className="App">
            <ProfileLayout title="Bookmarks">            
                <BookmarkContent />
            </ProfileLayout>        
        </div>
        
    );
}

export default Bookmark;

