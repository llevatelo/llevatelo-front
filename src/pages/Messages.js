import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Footer from '../components/Footer';
import MessageContent from '../components/MessageContent';

function Messages() {
    return (
        <div className="App">
            <header className="hero">
                <ProfileHeader title="Messages"/>
            </header>
            
            <MessageContent />
            
            <Footer />
        </div>
    );
}

export default Messages;

