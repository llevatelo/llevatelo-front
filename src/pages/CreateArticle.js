import React from 'react';
import CreateArticleContent from '../components/Article/CreateArticleContent';
import ArticleLayout from '../components/Layouts/ArticleLayout';

function CreateArticle() {
    return (
        <div className="App">
            <ArticleLayout title="Create Article">
                <CreateArticleContent />
            </ArticleLayout>  
        </div>
    );
}

export default CreateArticle;

