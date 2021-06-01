import React from "react";
import "./style.css";
import { ClockCircleOutlined,CalendarOutlined} from "@ant-design/icons";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Avatar } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { GetEventDetails } from "../../Actions/eventsAction";
import { Spin } from "antd";

export default function ViewEvent({setSwitchNav}) {

  const dispatch = useDispatch();
  const { id } = useParams();
  const getEventDetailData = useSelector(
    (state) => state.EventsReducer.getEventDetailData
  );
  const getEventDetailLoading = useSelector(
    (state) => state.EventsReducer.getEventDetailLoading
  );

  const [getUrl, setGetUrl]=React.useState('')
  React.useEffect(()=>{
    setSwitchNav(true)
    window.scrollTo(0,0)
  },[])


  React.useEffect(()=>{
    dispatch(GetEventDetails(id))
  },[id])


  React.useEffect(()=>{
    const imageUrl = getEventDetailData?.images.find(element => element?.width >= 2000)
    setGetUrl(imageUrl?.url)
  },[getEventDetailData])
  

  return (
    <>
    <Spin size="large" spinning={getEventDetailLoading}>
    {console.log(getEventDetailData,'------getEventDetailData------',)}
      <div className="view-event">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="image-container">
                <img src={getUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="view-event-card_container">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-md-9 col-sm-12">
              <div className="view-event-card">
                <div className="card-time">
                  <div className="time">
                  <ClockCircleOutlined />
                  <p>11:00 am - 10:00 pm</p>
                  </div>
                  <div className="date">
                  <CalendarOutlined />
                  <p>20th Oct. 2020</p>
                  </div>
                </div>
                <div className="card-header">
                    <div className="col-12">
                        <h1>{getEventDetailData?.name}</h1>
                        <div className="location">
                            <LocationOnIcon/>
                            <p>Hilton, San Francisco</p>
                        </div>
                        <div className="description">
                          <p>{getEventDetailData?.info}</p>
                        </div>
                        <div className="attendies">
                        <Avatar.Group
                              maxCount={2}
                              size="large"
                              maxStyle={{
                                color: '#f56a00',
                                backgroundColor: '#fde3cf',
                              }}
                            >
                              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                              <Avatar
                                style={{
                                  backgroundColor: '#f56a00',
                                }}
                              >
                                K
                              </Avatar>
                                <Avatar
                                  style={{
                                    backgroundColor: '#87d068',
                                  }}
                                  icon={<UserOutlined />}
                                />
                              <Avatar
                                style={{
                                  backgroundColor: '#1890ff',
                                }}
                                icon={<AntDesignOutlined />}
                              />
                            </Avatar.Group>
                            <p>Participants</p>
                        </div>
                        <div className="price">
                              <h3>Ticket Price: <span>120$</span></h3>
                        </div>
                        <div className="button-container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <button className="check-button">Books</button>
                        </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Spin>
    </>
  );
}
