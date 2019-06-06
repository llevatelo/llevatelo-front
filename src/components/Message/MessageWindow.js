import React, { Component } from 'react';
import Image02 from '../assets/img/author-02.jpg';
import Image06 from '../assets/img/author-06.jpg';
import BlockMessageReceive from './BlockMessageReceive';
import BlockMessageReply from './BlockMessageReply';

class MessageWindow extends Component {
    render() {
        return (
            <div className="col-md-7 col-lg-7 col-xl-8">
                
                <div className="section-title clearfix">
                    <h3>Message Window</h3>
                </div>
                
                <div id="messaging__chat-window" className="messaging__box">
                    <div className="messaging__header">
                        <div className="float-left flex-row-reverse messaging__person">
                            <h5 className="font-weight-bold">Rosina Warner</h5>
                            <figure className="mr-4 messaging__image-person" data-background-image={Image02} />
                        </div>
                        <div className="float-right messaging__person">
                            <h5 className="mr-4">You</h5>
                            <figure id="messaging__user" className="messaging__image-person" data-background-image={Image06} />
                        </div>
                    </div>
                    <div className="messaging__content" data-background-color="rgba(0,0,0,.05)">
                        <div className="messaging__main-chat">
                            <BlockMessageReply text="Hola"/>
                            <BlockMessageReceive text="Hola, ¿Qué más?"/>
                        </div> 
                    </div>
                    <div className="messaging__footer">
                    <form className="form">
                        <div className="input-group">
                        <input type="text" className="form-control mr-4" placeholder="Your Message" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Send <i className="fa fa-send ml-3" /></button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageWindow;