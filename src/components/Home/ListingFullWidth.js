import React, { Component } from 'react';
import ItemSold from './ItemSold';
import Item from './Item';
import $ from 'jquery';

class ListingFullWidth extends Component {

    componentDidMount() {
        $(".change-class").on("click", function(e){
            e.preventDefault();
            var parentClass = $( "."+$(this).attr("data-parent-class") );
            parentClass.removeClass( $(this).attr("data-change-from-class") );
            parentClass.addClass( $(this).attr("data-change-to-class") );
            $(this).parent().find(".change-class").removeClass("active");
            $(this).addClass("active");
        });
    }

    render() {
        return (
            <div className="page sub-page">
                <section className="content">
                    <section className="block">
                        <div className="container">
                        {/*============ Section Title===================================================================*/}
                            <div className="section-title clearfix">
                                <div className="float-left float-xs-none">
                                    <label className="mr-3 align-text-bottom">Sort by: </label>
                                    <select name="sorting" id="sorting" className="small width-200px" data-placeholder="Default Sorting">
                                        <option value>Default Sorting</option>
                                        <option value={1}>Newest First</option>
                                        <option value={2}>Oldest First</option>
                                        <option value={3}>Lowest Price First</option>
                                        <option value={4}>Highest Price First</option>
                                    </select>
                                </div>
                                <div className="float-right d-xs-none thumbnail-toggle">
                                    <a onClick={this.handleClick} href="/" className="change-class" data-change-from-class="list" data-change-to-class="grid" data-parent-class="items">
                                        <i className="fa fa-th" />
                                    </a>
                                    <a href="/" className="change-class active" data-change-from-class="grid" data-change-to-class="list" data-parent-class="items">
                                        <i className="fa fa-th-list" />
                                    </a>
                                </div>
                            </div>
                        {/*============ Items ==========================================================================*/}
                            <div className="items list grid-xl-4-items grid-lg-3-items grid-md-2-items">
                                <ItemSold />
                                <Item city="Nashville, TN" />
                                <Item city="Dallas, TX"/>
                                <Item city="Provo, UT"/>
                                
                                <a href="/create-article" className="item call-to-action">
                                    <div className="wrapper">
                                        <div className="title">
                                            <i className="fa fa-plus-square-o" />
                                            Create An Article
                                        </div>
                                    </div>
                                </a>
                                
                                <Item city="Manhattan, NY"/>
                                <Item city="Seattle, WA"/>
                                <Item city="Detroit, MI"/>
                                <Item city="Long Beach, CA"/>
                                
                            </div>
                        {/*============ End Items ======================================================================*/}
                            <div className="page-pagination">
                                <nav aria-label="Pagination">
                                    <ul className="pagination">
                                        <li className="page-item">
                                        <a className="page-link" href="/" aria-label="Previous">
                                            <span aria-hidden="true">
                                            <i className="fa fa-chevron-left" />
                                            </span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="/">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/">3</a>
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
                        {/*end container*/}
                    </section>
                {/*end block*/}
                </section>
            </div>
        );
    }
}

export default ListingFullWidth;