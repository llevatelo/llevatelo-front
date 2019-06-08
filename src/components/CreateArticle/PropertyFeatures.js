import React, { Component } from 'react';

class PropertyFeatures extends Component {
    render() {
        return (
            <div>
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

export default PropertyFeatures;