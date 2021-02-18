import React, { Component } from 'react'

export default class ChGlProps extends Component {
    render() {
        let { item, details } = this.props;
        return (
            <div className="card" >
                <div>
                    <div >
                        <img width="100" className="card-img-top" src={item.url} alt={item.name} />
                        <div className="card-body">
                            <button className="btn btn-success"
                                onClick={() => {
                                    details(item)
                                }}
                            >More Details</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
