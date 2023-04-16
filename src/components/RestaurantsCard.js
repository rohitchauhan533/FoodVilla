import {RESTAURANT_IMAGE_URL} from "../utils/constant"

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
    // console.log(props, "sdsd");
    // const { name, cuisines, cloudinaryImageId, lastMileTravelString } = props;
    // const {name, cloudinaryImageId, costForTwoString, cuisines} =resInfo.data;
    return (<>



      <div className="card">
        <img
          src={RESTAURANT_IMAGE_URL
             +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    </>

    );
  };

  export default RestaurantCard;