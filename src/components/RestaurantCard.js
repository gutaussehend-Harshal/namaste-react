import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="rounded-lg h-[250px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="py-0.5">{cuisines.join(", ")}</h4>
      <h4 className="py-0.5">{avgRating} Stars</h4>
      <h4 className="py-0.5">{costForTwo}</h4>
      <h4 className="py-0.5">{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
