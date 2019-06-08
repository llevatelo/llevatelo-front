import React, { Component } from 'react';
import ImageAuthor from '../assets/img/author-08.jpg';
import PersonalSection from './PersonalSection';
import ContactSection from './ContactSection';
import NavItems from '../Navbar/NavItems';


class ProfileContent extends Component {
    render() {
        return (
            <div className="page sub-page">
                <section className="content">
                    <section className="block">
                        <div className="container">
                            <div className="row">
                                <NavItems path="Profile"/>
                                {/*end col-md-3*/}
                                <div className="col-md-9">
                                    <form className="form">
                                        <div className="row">
                                        <div className="col-md-8">
                                            <PersonalSection />
                                            <ContactSection />
                                        </div>
                                        {/*end col-md-8*/}
                                        <div className="col-md-4">
                                            <div className="profile-image">
                                                <div className="image background-image">
                                                    <img src={ImageAuthor} alt="Imagen" />
                                                </div>
                                                <div className="single-file-input">
                                                    <input type="file" id="user_image" name="user_image" />
                                                    <div className="btn btn-framed btn-primary small">Upload a picture</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end col-md-3*/}
                                        </div>
                                    </form>
                                </div>
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

export default ProfileContent;