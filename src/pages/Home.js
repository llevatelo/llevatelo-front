import React from 'react';

import ListingFullWidth from '../components/ListingFullWidth';
import HomeLayout from '../components/Layouts/HomeLayout';



function Home() {
    return (
        <div className="App">
            <HomeLayout>
                <ListingFullWidth />
            </HomeLayout>
        </div>
    );
}

export default Home;

