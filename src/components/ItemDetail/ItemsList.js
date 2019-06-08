import React, { Component } from 'react';
/* import Image02 from '../components/assets/img/image-02.jpg';
import Image03 from '../components/assets/img/image-03.jpg'; */
import ItemList from './ItemList';

class ItemsList extends Component {
    render() {
        return (
            <section>
                <h2>Similar Ads</h2>
                <div className="items list compact">
                    
                    <ItemList />
                    {/*end item*/}
                    <ItemList />
                    {/*end item*/}
                    <ItemList />
                    {/*end item*/}
                    <div className="center">
                        <a href="/" className="btn btn-primary text-caps btn-framed">Show All</a>
                    </div>
                </div>
                {/*end items.list.compact*/}
            </section>
        );
    }
}

export default ItemsList;