import React from 'react'
import './style.css'
export default function EventCard({count}) {
    return (
        <div className="mini-card">
        <div className="container">
            <div className="row" style={{position:'relative'}}>
                <div className="mini-card__content-wrapper">
                    <div className="mini-card__content">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <h4>You have <span>{count}</span> events in this week</h4>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <button className="check-button">Check Status</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
