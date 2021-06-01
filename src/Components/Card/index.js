import React from 'react'
import './style.css'
import { CalendarOutlined,HeartOutlined } from "@ant-design/icons";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';
import moment from 'moment';
export default function Card({data}) {
    return (
        <div className="card_item">
        <div className="like">
        <HeartOutlined />
        </div>
        <div className="card-image">
            <img src={data?.images[1]?.url}/>
        </div>
        <div className="card-body">
        <div className="card-body-mini-card">
        {moment(data?.dates?.start?.localDate).format('DD MMM')}    
            </div>
            <div className="card-body__header">
            <Link  className="card-link" to={"/event/"+data?.id}><h5>{data?.name}</h5></Link>
            </div>
            <div className="card-body__content">
                <div className="location">
                <LocationOnIcon/>
                <p>{data?._embedded?.venues[0]?.address?.line1}</p>
                </div>
                <div className="date">
                <CalendarOutlined />
                <p>{ data?.dates?.start?.localTime ? moment(data?.dates?.start?.localTime, "HH:mm:ss").format("hh:mm A"): 'To be Decided'}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
