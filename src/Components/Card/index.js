import React from 'react'
import './style.css'
import { CalendarOutlined,HeartOutlined } from "@ant-design/icons";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom'
export default function Card({setSwitchNav}) {
    return (
        <div className="card_item">
        <div className="like">
        <HeartOutlined />
        </div>
        <div className="card-image">
            <img src="https://static.vecteezy.com/system/resources/previews/000/228/437/original/female-developer-vector-illustration.jpg"/>
        </div>
        <div className="card-body">
        <div className="card-body-mini-card">
                20 oct.
            </div>
            <div className="card-body__header">
            <Link onClick={()=>setSwitchNav(true)} className="card-link" to="/event/1"><h5>Techno Fair 2020</h5></Link>
            </div>
            <div className="card-body__content">
                <div className="location">
                <LocationOnIcon/>
                <p>Hilton, San Fran.</p>
                </div>
                <div className="date">
                <CalendarOutlined />
                <p>05:00 pm</p>
                </div>
            </div>
        </div>
    </div>
    )
}
