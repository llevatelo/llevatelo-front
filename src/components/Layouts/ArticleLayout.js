import React from 'react';
import Footer from '../Footer';
import CreateArticleHeader from '../CreateArticleHeader';


function ArticleLayout(props) {
    /* const children = props.children; */
    return (
        <React.Fragment>
            <header className="hero">
                <CreateArticleHeader title={props.title}/>
            </header>
            { props.children }
            <Footer />
        </React.Fragment>
    );
}

export default ArticleLayout;