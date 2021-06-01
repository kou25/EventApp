import React, { useEffect } from "react";
import "./style.css";
import { SearchOutlined, AudioFilled, SlidersFilled } from "@ant-design/icons";
import EventCard from "../../Components/EventCard";
import Card from "../../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { GetEvents } from "../../Actions/eventsAction";
import { Spin } from "antd";

export default function Events() {
  const dispatch = useDispatch();
  const getEventsData = useSelector(
    (state) => state.EventsReducer.getEventsData
  );
  const getEventsLoading = useSelector(
    (state) => state.EventsReducer.getEventsLoading
  );
  const totalCount = useSelector((state) => state.EventsReducer.totalCount);

  useEffect(() => {
    dispatch(GetEvents());
  }, []);

  return (
    <>
      {console.log(getEventsData, "getEventsData")}
      <Spin size="large" spinning={getEventsLoading}>
        <div className="event-container">
          <div className="event-container__wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="getting-started">
                    <h1>Find Amazing Events</h1>
                    <h3>253 Events Around You</h3>
                  </div>
                </div>
                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
                  <div className="input-container">
                    <div className="input-search__container">
                      <SearchOutlined />
                      <input type="text" placeholder="Find Events" />
                      <AudioFilled />
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-4 col-xs-4">
                  <div className="filter-container">
                    <SlidersFilled />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EventCard count={totalCount} />
        <div className="recommended_events">
          <div className="recommended_events-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                  <h2>Recommended Events</h2>
                </div>
                <div
                  className="col-lg-2 col-md-2 col-sm-2 col-xs-2"
                  style={{ textAlign: "end" }}
                >
                  <a>View All</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recommended_events">
          <div className="recommended_events-wrapper">
            <div className="container">
              <div
                className="row"
                style={{
                  overflowX: "scroll",
                  flexWrap: "nowrap",
                  padding: "10px 0",
                  paddingRight: "5rem",
                }}
              >
                {getEventsData?._embedded?.events.map((data, i) => (
                  <div key={i} className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <Card data={data} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </>
  );
}
