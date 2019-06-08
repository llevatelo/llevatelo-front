import React, { Component } from 'react';

class RealStateType extends Component {
    render() {
        return (
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
        );
    }
}

export default RealStateType;