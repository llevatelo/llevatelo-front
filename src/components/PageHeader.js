import React, { Component } from 'react';

class PageHeader extends Component {
    render() {
        return (
            <div>
                <div className="page-title">
                    <div className="container">
                        <h1>{this.props.title}</h1>
                    </div>
                    {/*end container*/}
                </div>
            </div>
        );
    }
}

export default PageHeader;