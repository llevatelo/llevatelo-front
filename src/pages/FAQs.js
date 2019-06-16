import React from 'react';
import FaqContent from '../components/Faq/FaqContent';
import ArticleLayout from '../components/Layouts/ArticleLayout';

function FAQs() {
    return (
        <div className="App">
            <ArticleLayout title="Frequently Asked Questions">
                <FaqContent />
            </ArticleLayout>  
        </div>
    );
}

export default FAQs;

