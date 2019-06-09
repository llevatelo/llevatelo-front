import React, { Component } from 'react';

class FormCollapse extends Component {
    render() {
        return (
            <div>
                <div className="collapse" id="collapseMainSearchForm">
                    <form className="hero-form form">
                        <div className="container">
                            {/*Main Form*/}
                            <div className="main-search-form">
                                <div className="form-row">
                                    <div className="col-md-3 col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="what" className="col-form-label">What?</label>
                                            <input name="keyword" type="text" className="form-control small" id="what" placeholder="What are you looking for?" />
                                        </div>
                                    {/*end form-group*/}
                                    </div>
                                    {/*end col-md-3*/}
                                    <div className="col-md-3 col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="input-location" className="col-form-label">Where?</label>
                                            <input name="location" type="text" className="form-control small" id="input-location" placeholder="Enter Location" />
                                            <span className="geo-location input-group-addon" data-toggle="tooltip" data-placement="top" title="Find My Position"><i className="fa fa-map-marker" /></span>
                                        </div>
                                    {/*end form-group*/}
                                    </div>
                                    {/*end col-md-3*/}
                                    <div className="col-md-3 col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="category" className="col-form-label">Category?</label>
                                            <select name="category" id="category" className="small" data-placeholder="Select Category">
                                                <option value>Select Category</option>
                                                <option value={1}>Computers</option>
                                                <option value={2}>Real Estate</option>
                                                <option value={3}>Cars &amp; Motorcycles</option>
                                                <option value={4}>Furniture</option>
                                                <option value={5}>Pets &amp; Animals</option>
                                            </select>
                                        </div>
                                    {/*end form-group*/}
                                    </div>
                                    {/*end col-md-3*/}
                                    <div className="col-md-3 col-sm-3">
                                        <button type="submit" className="btn btn-primary width-100 small">Search</button>
                                    </div>
                                    {/*end col-md-3*/}
                                </div>
                            {/*end form-row*/}
                            </div>
                        </div>
                    {/*end container*/}
                    </form>
                    {/*end hero-form*/}
                </div>    
            </div>
        );
    }
}

export default FormCollapse;