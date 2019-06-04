import React from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import ListingFullWidth from '../components/ListingFullWidth';
import Footer from '../components/Footer';



function Home() {
    return (
        <div className="App">
            <header className="hero">
                <Navbar />
                <SearchForm />
            </header>
            <ListingFullWidth />
            <Footer />
        </div>
    );
}

export default Home;

