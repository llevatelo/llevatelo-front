import React, { Component } from 'react';

class FormSlideComputer extends Component {
    render() {
        return (
            <div className="form-slide" id="computers">
                <h3>Computers</h3>
                <figure className="category-icon">
                    <img src="assets/icons/computer.png" alt="" />
                </figure>
                {/*end category-icon*/}
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="computers___processor" className="col-form-label">Processor</label>
                            <select name="computers___processor" id="computers___processor" data-placeholder="Select Processor">
                            <option value>Select Processor</option>
                            <option value={1}>Intel Core i5</option>
                            <option value={2}>Intel Core i7</option>
                            <option value={3}>AMD FX-8300</option>
                            <option value={4}>AMD Ryzen</option>
                            </select>
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-4*/}
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="computers___frequency" className="col-form-label">Frequency</label>
                            <input name="computers___frequency" type="text" className="form-control" id="computers___frequency" />
                            <span className="input-group-addon">GHz</span>
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-4*/}
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="computers___cores" className="col-form-label">Cores</label>
                            <input name="computers___cores" type="text" className="form-control" id="computers___cores" />
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-4*/}
                </div>
                {/*end row*/}
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="computers___ram" className="col-form-label">RAM</label>
                            <input name="computers___ram" type="text" className="form-control" id="computers___ram" />
                            <span className="input-group-addon">GB</span>
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-4*/}
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="computers___main_board" className="col-form-label">Main Board</label>
                            <input name="computers___main_board" type="text" className="form-control" id="computers___main_board" />
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-4*/}
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="computers___os" className="col-form-label">OS</label>
                            <select name="computers___os" id="computers___os" data-placeholder="Select OS">
                            <option value>Select OS</option>
                            <option value={1}>Windows 10</option>
                            <option value={2}>Windows 7</option>
                            <option value={3}>Mac OS</option>
                            <option value={4}>Linux</option>
                            <option value={5}>No OS</option>
                            </select>
                        </div>
                    {/*end form-group*/}
                    </div>
                    {/*end col-md-4*/}
                </div>
                {/*end row*/}
                <div className="form-group">
                    <label htmlFor="computers___other_details" className="col-form-label">Other Details</label>
                    <textarea name="computers___other_details" id="computers___other_details" className="form-control" rows={4} defaultValue={""} />
                </div>
            {/*end form-group*/}
            </div>
        );
    }
}

export default FormSlideComputer;