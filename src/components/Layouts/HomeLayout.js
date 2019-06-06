import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import SearchForm from '../SearchForm';


function HomeLayout(props) {
    /* const children = props.children; */
    return (
        <React.Fragment>
            <header className="hero">
                <Navbar />
                <SearchForm />
            </header>
            { props.children }
            <Footer />
        </React.Fragment>
    );
}

export default HomeLayout;