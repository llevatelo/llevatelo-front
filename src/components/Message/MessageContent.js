import React, { Component } from "react";
import MessagePerson from "./MessagePerson";
import MessageWindow from "./MessageWindow";

class MessageContent extends Component {
  render() {
    return (
      <div className="page sub-page">
        <section className="content">
          <section className="block">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-lg-5 col-xl-4">
                  {/*============ Section Title===========================================================*/}
                  <div className="section-title clearfix">
                    <h3>People</h3>
                  </div>
                  <div id="messaging__chat-list" className="messaging__box">
                    <div className="messaging__header">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a className="nav-link active" href="/">
                            All
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            Buyers
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            Sellers
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            Blocked
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="messaging__content">
                      <ul className="messaging__persons-list">
                        <MessagePerson name="Daniel" />
                        <MessagePerson name="Nicolas" />
                        <MessagePerson name="Adrián" />
                        <MessagePerson name="Santiago" />
                      </ul>
                      {/*end messaging__persons-list*/}
                    </div>
                    {/*messaging__content*/}
                  </div>
                  {/*end section-title*/}
                </div>
                {/*end col-md-3*/}
                <MessageWindow />
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

export default MessageContent;
