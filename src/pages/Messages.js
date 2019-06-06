import React from 'react';
import ProfileLayout from '../components/Layouts/ProfileLayout';
import MessageContent from '../components/Message/MessageContent';

function Messages() {
    return (
        
        <div className="App">
            <ProfileLayout title="Messages">            
                <MessageContent />
            </ProfileLayout>            
        </div>
    );
}

export default Messages;

