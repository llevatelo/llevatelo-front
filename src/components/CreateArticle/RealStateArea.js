import React, { Component } from 'react';

class RealStateArea extends Component {
    render() {
        return (
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
        );
    }
}

export default RealStateArea;