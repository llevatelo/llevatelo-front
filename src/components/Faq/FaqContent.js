import React, { Component } from "react";
import FaqAnswer from "./FaqAnswer";

class FaqContent extends Component {
  render() {
    return (
      <div className="page sub-page">
        <section className="content">
          <section className="block">
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <section>
                    <form className="form inputs-underline">
                      <h3>Search in Answers</h3>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Enter your search"
                        />
                      </div>
                      {/*end form-group*/}
                    </form>
                  </section>
                  <section>
                    <FaqAnswer />
                    <FaqAnswer />
                    <FaqAnswer />
                  </section>
                  <div className="page-pagination">
                    <nav aria-label="Pagination">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">
                              <i className="fa fa-chevron-left" />
                            </span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="/">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/" aria-label="Next">
                            <span aria-hidden="true">
                              <i className="fa fa-chevron-right" />
                            </span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/*end page-pagination*/}
                </div>
                {/*end col-md-9*/}

                {/*end col-md-3*/}
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

export default FaqContent;
