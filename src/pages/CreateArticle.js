import React from 'react';

import Footer from '../components/Footer';
import CreateArticleHeader from '../components/CreateArticleHeader';
import CreateArticleContent from '../components/CreateArticleContent';

function CreateArticle() {
    return (
        <div className="App">
            <header className="hero">
                <CreateArticleHeader title="Submit Ad"/>
            </header>
                
                <CreateArticleContent />
            <Footer />
        </div>
    );
}

export default CreateArticle;

