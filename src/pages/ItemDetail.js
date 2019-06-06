import React from 'react';

import ItemsList from  '../components/Item/ItemsList';
import ItemDetailCarousel from '../components//Item/ItemDetailCarousel'; 
import UserSidebar from '../components/Complements/UserSidebar';
import ItemDetailLayout from '../components/Layouts/ItemDetailLayout';

function Messages() {
    return (
        <div className="App">
            
            <ItemDetailLayout>
            
            <div className="page sub-page">
    
                
                {/***********************************************************************************************************/}
                {/************* CONTENT *************************************************************************************/}
                {/***********************************************************************************************************/}
                <section className="content">
                    <section className="block">
                    <div className="container">
                        {/*Gallery Carousel*/}
                        <ItemDetailCarousel />
                        {/*end Gallery Carousel*/}
                        <div className="row flex-column-reverse flex-md-row">
                        {/*============ Listing Detail =============================================================*/}
                        <div className="col-md-8">
                            {/*Description*/}
                            <section>
                                <h2>Description</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit
                                    amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                    per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus,
                                    risus mi euismod elit, in dictum justo lacus sit amet dui. Sed faucibus vitae nisl
                                    at dignissim.
                                </p>
                            </section>
                            {/*end Description*/}
                            {/*Details*/}
                            <section>
                                <h2>Details</h2>
                                <dl className="columns-3">
                                    <dt>Date Added</dt>
                                    <dd>05.04.2017</dd>
                                    <dt>Type</dt>
                                    <dd>Offer</dd>
                                    <dt>Status</dt>
                                    <dd>Used</dd>
                                    <dt>First Owner</dt>
                                    <dd>Yes</dd>
                                    <dt>Material</dt>
                                    <dd>Wood, Leather</dd>
                                    <dt>Color</dt>
                                    <dd>White, Grey</dd>
                                    <dt>Height</dt>
                                    <dd>47cm</dd>
                                    <dt>Width</dt>
                                    <dd>203cm</dd>
                                    <dt>Length</dt>
                                    <dd>54cm</dd>
                                </dl>
                            </section>
                            {/*end Details*/}

                            {/*Location*/}
                            {/* <section>
                                <h2>Location</h2>
                                <div className="map height-300px" id="map-small" />
                            </section> */}
                            {/*end Location*/}
                            {/*Features*/}
                            <section>
                            <h2>Features</h2>
                                <ul className="features-checkboxes columns-3">
                                    <li>Quality Wood</li>
                                    <li>Brushed Alluminium Handles</li>
                                    <li>Foam mattress</li>
                                    <li>Detachable chaise section</li>
                                    <li>3 fold pull out mechanism</li>
                                </ul>
                            </section>
                            {/*end Features*/}
                            <hr />
                            {/*Similar Ads*/}
                            <ItemsList />
                            {/*end Similar Ads*/}
                        </div>
                        {/*============ End Listing Detail =========================================================*/}
                        {/*============ Sidebar ====================================================================*/}
                        <UserSidebar />
                        {/*============ End Sidebar ================================================================*/}
                        </div>
                    </div>
                    {/*end container*/}
                    </section>
                    {/*end block*/}
                </section>
            
            </div>
            </ItemDetailLayout>

        </div> 
    );
}

export default Messages;

