import React, { Component } from 'react';
import FormSlideComputer from './FormSlideComputer';
import FormSlideRealState from './FormSlideRealState';
import FormSlideCars from './FormSlideCars';
import FormSlideFurniture from './FormSlideFurniture';

class FormFeatures extends Component {
    render() {
        return (
            <div className="col-md-8">
                <h2>Features</h2>
                <div className="form-slides" id="category-tabs">
                    <div className="form-slide default">
                        <h3>Please Select a Category</h3>
                    </div>
                    <FormSlideComputer />
                    {/*end computers.form-slide*/}
                    <FormSlideRealState />
                    {/*end real_estate.form-slide*/}
                    <FormSlideCars />
                    {/*end cars.form-slide*/}
                    <FormSlideFurniture />
                    {/*end furniture.form-slide*/}
                </div>
            </div>
        );
    }
}

export default FormFeatures;