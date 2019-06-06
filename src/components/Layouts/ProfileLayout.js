import React from 'react';
import Footer from '../Footer';
import ProfileHeader from '../ProfileHeader';


function ProfileLayout(props) {
    /* const children = props.children; */
    return (
        <React.Fragment>
            <header className="hero">
                <ProfileHeader title={props.title}/>
            </header>
            { props.children }
            <Footer />
        </React.Fragment>
    );
}

export default ProfileLayout;