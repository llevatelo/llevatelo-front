import React, { Component } from 'react';

class FormBasicInfo extends Component {
    render() {
        return (
            <section>
                <h2>Basic Information</h2>
                    <div className="form-group" id="type">
                        <label htmlFor="type" className="required">Type</label>
                        <figure>
                        <label className="framed">
                            <input type="radio" name="type" defaultValue={1} required />
                            Offer
                        </label>
                        <label className="framed">
                            <input type="radio" name="type" defaultValue={2} required />
                            Demand
                        </label>
                        </figure>
                    </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                            <label htmlFor="title" className="col-form-label required">Title</label>
                            <input name="title" type="text" className="form-control" id="title" placeholder="Title" required />
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-8*/}
                    <div className="col-md-4">
                        <div className="form-group">
                        
                            <label htmlFor="submit-category" className="col-form-label">Category</label>
                            <select className="change-tab" data-change-tab-target="category-tabs" name="submit_category" id="submit-category" data-placeholder="Select Category">
                            <option value>Select Category</option>
                            <option value="computers">Computers</option>
                            <option value="real_estate">Real Estate</option>
                            <option value="cars_motorcycles">Cars &amp; Motorcycles</option>
                            <option value="furniture">Furniture</option>
                            </select>
                        
                        </div>
                    {/*end form-group*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="name" className="col-form-label required">Your Name</label>
                            <input name="name" type="text" className="form-control" id="name" placeholder="Name" required />
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-4*/}
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="email" className="col-form-label required">Your Email</label>
                            <input name="email" type="email" className="form-control" id="email" placeholder="Email" required />
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-4*/}
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="phone" className="col-form-label required">Your Phone</label>
                            <input name="phone" type="text" className="form-control" id="phone" placeholder="Phone" required />
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-4*/}
                </div>
            </section>
        );
    }
}

export default FormBasicInfo;