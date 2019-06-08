import React, { Component } from 'react';
import PropertyFeatures from './PropertyFeatures';
import RealStateArea from './RealStateArea';
import RealStateType from './RealStateType';

class FormSlideRealState extends Component {
    render() {
        return (
            <div className="form-slide" id="real_estate">
                <h3>Real Estate</h3>
                <figure className="category-icon">
                    <img src="assets/icons/real-estate.png" alt="" />
                </figure>
                {/*end category-icon*/}
                <RealStateType />
                {/*end row*/}
                <RealStateArea />
                {/*end row*/}
                <PropertyFeatures />
            </div>
        );
    }
}

export default FormSlideRealState;