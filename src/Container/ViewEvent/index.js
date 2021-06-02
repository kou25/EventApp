import React from "react";
import "./style.css";
import { ClockCircleOutlined, CalendarOutlined } from "@ant-design/icons";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Avatar, Tooltip } from "antd";
import {
  UserOutlined,
  AntDesignOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetEventDetails, SearchVenue } from "../../Actions/eventsAction";
import { Spin, Modal, Button } from "antd";
import moment from "moment";

function ListItem({ title, value }) {
  return (
    <>
      <div className="col-md-4 col-sm-4" style={{ fontWeight: "600" }}>
        {`${title}: `}
      </div>
      {title !== "Visit" ? (
        <div className="col-md-8 col-sm-8">{value || "-"}</div>
      ) : (
        <div className="col-md-8 col-sm-8">
          <a href={value} target="_blank">
            Click here
          </a>
        </div>
      )}
    </>
  );
}

export default function ViewEvent({ setSwitchNav }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const getEventDetailData = useSelector(
    (state) => state.EventsReducer.getEventDetailData
  );
  const getEventDetailLoading = useSelector(
    (state) => state.EventsReducer.getEventDetailLoading
  );
  const searchEventVenueLoading = useSelector(
    (state) => state.EventsReducer.searchEventVenueLoading
  );
  const searchEventVenueData = useSelector(
    (state) => state.EventsReducer.searchEventVenueData
  );

  const [getUrl, setGetUrl] = React.useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  React.useEffect(() => {
    setSwitchNav(true);
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    dispatch(GetEventDetails(id));
  }, [id]);

  React.useEffect(() => {
    if (getEventDetailData?.images) {
      const imageUrl = getEventDetailData?.images.find(
        (element) => element?.width >= 2000
      );
      setGetUrl(imageUrl?.url);
    }
  }, [getEventDetailData]);

  const searchVenue = (value) => {
    dispatch(SearchVenue(value));
    showModal();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Spin
        size="large"
        spinning={getEventDetailLoading || searchEventVenueLoading}
      >
        {console.log(searchEventVenueData, "------getEventDetailData------")}
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
                      <p>
                        {getEventDetailData?.dates?.start?.localTime
                          ? moment(
                              getEventDetailData?.dates?.start?.localTime,
                              "HH:mm:ss"
                            ).format("hh:mm A")
                          : "To be Decided"}
                      </p>
                    </div>
                    <div className="date">
                      <CalendarOutlined />
                      <p>
                        {" "}
                        {moment(
                          getEventDetailData?.dates?.start?.localDate
                        ).format("DD MMM YYYY")}
                      </p>
                    </div>
                  </div>
                  <div className="card-header">
                    <div className="col-12">
                      <h1>{getEventDetailData?.name}</h1>
                      <div className="location">
                        <LocationOnIcon />
                        <p>{getEventDetailData?._embedded?.venues[0]?.name}</p>
                        <Tooltip
                          placement="right"
                          title={"Click to search this venue"}
                        >
                          <SearchOutlined
                            onClick={() =>
                              searchVenue(
                                getEventDetailData?._embedded?.venues[0]?.name
                              )
                            }
                          />
                        </Tooltip>
                      </div>
                      <div className="description">
                        <p>{getEventDetailData?.info}</p>
                      </div>
                      <div className="attendies">
                        <Avatar.Group
                          maxCount={2}
                          size="large"
                          maxStyle={{
                            color: "#f56a00",
                            backgroundColor: "#fde3cf",
                          }}
                        >
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          <Avatar
                            style={{
                              backgroundColor: "#f56a00",
                            }}
                          >
                            K
                          </Avatar>
                          <Avatar
                            style={{
                              backgroundColor: "#87d068",
                            }}
                            icon={<UserOutlined />}
                          />
                          <Avatar
                            style={{
                              backgroundColor: "#1890ff",
                            }}
                            icon={<AntDesignOutlined />}
                          />
                        </Avatar.Group>
                        <p>Participants</p>
                      </div>
                      <div className="price">
                        {getEventDetailData?.priceRanges && (
                          <h3>
                            Ticket Price:{" "}
                            <span>
                              {getEventDetailData?.priceRanges[0]?.min} $
                            </span>{" "}
                            <span className="strike">
                              {getEventDetailData?.priceRanges[0]?.max} $
                            </span>
                          </h3>
                        )}
                      </div>
                      <div className="button-container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <button disabled className="check-button">
                            Book
                          </button>
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
      <Modal
        title="Venue Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Back
          </Button>,
        ]}
      >
        <div className="container">
          <div className="row">
            <ListItem title="Name" value={searchEventVenueData[0]?.name} />
            <ListItem
              title="Address"
              value={searchEventVenueData[0]?.address?.line1}
            />
            <ListItem
              title="City"
              value={searchEventVenueData[0]?.city?.name}
            />
            <ListItem
              title="State"
              value={searchEventVenueData[0]?.state?.name}
            />
            <ListItem
              title="Country"
              value={searchEventVenueData[0]?.country?.name}
            />
            <ListItem
              title="Parking Detail"
              value={searchEventVenueData[0]?.parkingDetail}
            />
            <ListItem
              title="Postal Code"
              value={searchEventVenueData[0]?.postalCode}
            />
            <ListItem title="Visit" value={searchEventVenueData[0]?.url} />
          </div>
        </div>
      </Modal>
    </>
  );
}
