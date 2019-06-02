import React from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import ListingFullWidth from '../components/ListingFullWidth';


function Home() {
    return (
        <div className="App">
            <header className="hero">
                <Navbar />
                <SearchForm />
            </header>
            <ListingFullWidth />
        </div>
    );
}

export default Home;

