import React from "react";
import "./style.css";
import { SearchOutlined, AudioFilled, SlidersFilled,} from "@ant-design/icons";
import EventCard from "../../Components/EventCard";
import Card from "../../Components/Card";
export default function Events({setSwitchNav}) {
  return (
    <>
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
      <EventCard />
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
          <div className="row" style={{overflowX:"scroll", flexWrap:"nowrap", padding:"10px 0"}}>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6" >
              <Card setSwitchNav={setSwitchNav}/>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6" >
              <Card/>
              </div><div className="col-lg-4 col-md-4 col-sm-6 col-xs-6" >
              <Card/>
              </div><div className="col-lg-4 col-md-4 col-sm-6 col-xs-6" >
              <Card/>
              </div>
          </div>
         </div> 
        </div>
      </div>
    </>
  );
}
