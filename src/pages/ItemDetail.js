import React from 'react';
import ItemDetailCarousel from '../components/ItemDetail/ItemDetailCarousel';
import UserSidebar from '../components/Complements/UserSidebar';
import ItemDetailLayout from '../components/Layouts/ItemDetailLayout';

class ItemDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <ItemDetailLayout>
          <div className="page sub-page">
            <section className="content">
              <section className="block">
                <div className="container">
                  <ItemDetailCarousel />
                  <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-8">
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
                      <hr />
                    </div>
                    <UserSidebar />
                  </div>
                </div>
              </section>
            </section>
          </div>
        </ItemDetailLayout>
      </div>
    );
  }
}

export default ItemDetails;

