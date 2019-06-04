import React, { Component } from 'react';


class ChangePasswordContent extends Component {
    render() {
        return (
            <div className="page sub-page">
                <section className="content">
                    <section className="block">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                            <nav className="nav flex-column side-nav">
                                <a className="nav-link icon" href="/profile">
                                    <i className="fa fa-user" />My Profile
                                </a>
                                <a className="nav-link icon" href="/my-ads">
                                    <i className="fa fa-heart" />My Ads Listing
                                </a>
                                <a className="nav-link icon" href="/bookmarks">
                                    <i className="fa fa-star" />Bookmarks
                                </a>
                                <a className="nav-link active icon" href="/change-password">
                                <i className="fa fa-recycle" />Change Password
                                </a>
                                <a className="nav-link icon" href="/sold-items">
                                <i className="fa fa-check" />Sold Items
                                </a>
                            </nav>
                            </div>
                            {/*end col-md-3*/}
                            <div className="col-md-9">
                            <form className="form">
                                <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="current_password" className="col-form-label required">Current Password</label>
                                    <input name="current_password" type="password" className="form-control" id="current_password" placeholder="Current Password" required />
                                    </div>
                                    {/*end form-group*/}
                                    <div className="form-group">
                                    <label htmlFor="new_current_password" className="col-form-label required">New Password</label>
                                    <input name="new_current_password" type="password" className="form-control" id="new_current_password" placeholder="New Password" required />
                                    </div>
                                    {/*end form-group*/}
                                    <div className="form-group">
                                    <label htmlFor="repeat_new_current_password" className="col-form-label required">Repeat Password</label>
                                    <input name="repeat_new_current_password" type="password" className="form-control" id="repeat_new_current_password" placeholder="Repeat New Password" required />
                                    </div>
                                    {/*end form-group*/}
                                    <button type="submit" className="btn btn-primary float-right">Change Password</button>
                                </div>
                                {/*end col-md-6*/}
                                </div>
                            </form>
                            </div>
                            {/*end col-md-9*/}
                        </div>
                        {/*end row*/}
                        </div>
                        {/*end container*/}
                    </section>
                    {/*end block*/}
                </section>
            </div>
        );
    }
}

export default ChangePasswordContent;