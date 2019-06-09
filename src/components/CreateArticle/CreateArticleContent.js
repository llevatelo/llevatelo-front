import React, { Component } from 'react';
import FormBasicInfo from '../Profile/FormBasicInfo';
import FormFeatures from './FormFeatures';
/* import FormLocation from './FormLocation'; */

class CreateArticleContent extends Component {
    render() {
        return (
            <div className="page sub-page">
                <section className="content">
                    <section className="block">
                        <div className="container">
                            <section>
                                <div className="alert alert-warning" role="alert">
                                    <h2 className="alert-heading">You don't have an account!</h2>
                                    <p>You can submit only 1 ad at a time. To submit more, you need to
                                        <a href="sign-in.html" className="link"><strong>Sign In</strong></a> or
                                        <a href="register.html" className="link"><strong>Register</strong></a></p>
                                </div>
                            </section>
                            <form className="form form-submit">
                                <FormBasicInfo />
                                    {/*end basic information*/}
                                <section>
                                    <div className="row">
                                        <FormFeatures />
                                    </div>
                                    {/*end row*/}
                                </section>
                                <section>
                                    <h2>Details</h2>
                                    <div className="form-group">
                                        <label htmlFor="details" className="col-form-label">Additional Details</label>
                                        <textarea name="details" id="details" className="form-control" rows={4} defaultValue={""} />
                                    </div>
                                {/*end form-group*/}
                                </section>
                                {/* <FormLocation /> */}
                                <section>
                                    <h2>Gallery</h2>
                                    <div className="file-upload-previews" />
                                    <div className="file-upload">
                                        <input type="file" name="files[]" className="file-upload-input with-preview" multiple title="Click to add files" maxLength={10} accept="gif|jpg|png" />
                                        <span><i className="fa fa-plus-circle" />Click or drag images here</span>
                                    </div>
                                </section>
                                    
                                <section className="clearfix">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary large icon float-right">Preview<i className="fa fa-chevron-right" /></button>
                                    </div>
                                </section>
                            </form>
                        {/*end form-submit*/}
                        </div>
                        {/*end container*/}
                    </section>
                    {/*end block*/}
                </section>
            </div>
            
        );
    }
}

export default CreateArticleContent;