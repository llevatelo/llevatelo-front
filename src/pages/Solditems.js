import React from 'react';
import Layout from '../components/Layouts/ProfileLayout';
import SolditemsContent from '../components/SoldItem/SolditemsContent';

function Solditems() {
    return (
        <div className="App">
            <Layout title="My Sold Items">            
                <SolditemsContent />
            </Layout>            
        </div>
    );
}

export default Solditems;


