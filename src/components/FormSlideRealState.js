import React, { Component } from 'react';

class FormSlideRealState extends Component {
    render() {
        return (
            <div className="form-slide" id="real_estate">
                <h3>Real Estate</h3>
                <figure className="category-icon">
                    <img src="assets/icons/real-estate.png" alt="" />
                </figure>
                {/*end category-icon*/}
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="real_estate___type" className="col-form-label">Property Type</label>
                            <select name="real_estate___type" id="real_estate___type" data-placeholder="Property Type">
                            <option value>Property Type</option>
                            <option value={1}>Apartment</option>
                            <option value={2}>Condominium</option>
                            <option value={3}>Cabin</option>
                            <option value={4}>House</option>
                            </select>
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-6*/}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="real_estate___status" className="col-form-label">Status</label>
                            <select name="real_estate___status" id="real_estate___status" data-placeholder="Status">
                            <option value>Status</option>
                            <option value={1}>Sale</option>
                            <option value={2}>Rent</option>
                            </select>
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-6*/}
                </div>
                {/*end row*/}
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="real_estate___area" className="col-form-label">Area</label>
                            <input name="real_estate___area" type="text" className="form-control" id="real_estate___area" />
                            <span className="input-group-addon">m<sup>2</sup></span>
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-4*/}
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="real_estate___bedrooms" className="col-form-label">Bedrooms</label>
                            <input name="real_estate___bedrooms" type="text" className="form-control" id="real_estate___bedrooms" />
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-4*/}
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="real_estate___bathrooms" className="col-form-label">Bathrooms</label>
                            <input name="real_estate___bathrooms" type="text" className="form-control" id="real_estate___bathrooms" />
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-4*/}
                </div>
                {/*end row*/}
                <h4>Property Features</h4>
                <ul className="list-unstyled columns-2">
                    <li>
                        <label>
                            <input type="checkbox" name="real_estate___features[]" defaultValue={1} />
                            Air conditioning
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="real_estate___features[]" defaultValue={2} />
                            Heating
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="real_estate___features[]" defaultValue={3} />
                            Terrace
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="real_estate___features[]" defaultValue={4} />
                            Balcony
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="real_estate___features[]" defaultValue={5} />
                            Garage
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="real_estate___features[]" defaultValue={6} />
                            Central Heating
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="real_estate___features[]" defaultValue={7} />
                            Laundry Room
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="real_estate___features[]" defaultValue={8} />
                            Alarm
                        </label>
                    </li>
                </ul>
            </div>
        );
    }
}

export default FormSlideRealState;