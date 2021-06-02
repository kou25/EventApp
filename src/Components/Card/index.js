import React from "react";
import "./style.css";
import {
  CalendarOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { updateLikedData } from "../../Actions/eventsAction";

let localState=[]
export default function Card({ data }) {
  const dispatch = useDispatch();
  const [getUrl, setGetUrl] = React.useState("");
  const [like, setLike] = React.useState(false);
  const liked = useSelector(
    (state) => state.EventsReducer.liked
  );

  //get url of specified size
  React.useEffect(() => {
    const imageUrl = data?.images.find((element) => element?.width >= 2000);
    setGetUrl(imageUrl?.url);
  }, [data]);



  //set like even after reload
  React.useEffect(() => {
    if(localStorage.getItem('liked')) {
        const getData = JSON.parse(localStorage.getItem('liked'))
        getData.forEach((element )=> {
        if(element  === data?.id){
            setLike(true)
          }
      });
      dispatch(updateLikedData(getData))
    }
  }, []);


  //handle like function
  const HandleLike = (id) => {
    localState=liked
    setLike(!like);
    if(like){
        let arr = localState.filter(item => item !== id)
        dispatch(updateLikedData(arr))
        localStorage.setItem('liked', JSON.stringify(arr))
    }
    else{
        localState=[...liked,id]
        dispatch(updateLikedData(localState))
        localStorage.setItem('liked', JSON.stringify(localState))
    }

  };

  
  return (
    <div className="card_item">
      <div className="like">
        {like ? (
          <HeartFilled onClick={() => HandleLike(data?.id)} />
        ) : (
          <HeartOutlined onClick={() => HandleLike(data?.id)} />
        )}
      </div>
      <div className="card-image">
        <img src={getUrl} />
      </div>
      <div className="card-body">
        <div className="card-body-mini-card">
          {moment(data?.dates?.start?.localDate).format("DD MMM")}
        </div>
        <div className="card-body__header">
          <Link className="card-link" to={"/event/" + data?.id}>
            <h5>{data?.name}</h5>
          </Link>
        </div>
        <div className="card-body__content">
          <div className="location">
            <LocationOnIcon />
            {(data?._embedded?.venues || data?.place) && (
              <p>
                {data?.place
                  ? data?.place?.address?.line1
                  : data?._embedded?.venues[0]?.address?.line1}
              </p>
            )}
          </div>
          <div className="date">
            <CalendarOutlined />
            <p>
              {data?.dates?.start?.localTime
                ? moment(data?.dates?.start?.localTime, "HH:mm:ss").format(
                    "hh:mm A"
                  )
                : "To be Decided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
