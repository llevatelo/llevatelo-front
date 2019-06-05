import React from 'react';

import Footer from '../components/Footer';
import CreateArticleHeader from '../components/CreateArticleHeader';
import FaqContent from '../components/FaqContent';

function FAQs() {
    return (
        <div className="App">
            <header className="hero">
                <CreateArticleHeader title="Frequently Asked Questions"/>
            </header>
                
            <FaqContent />
            
            <Footer />
        </div>
    );
}

export default FAQs;

