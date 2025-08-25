import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-1 border-gray-300 text-left"
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold">{item?.card?.info?.name} </span>
            <span className="font-semibold">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}{" "}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <img
              className="w-40 mr-6 h-40  object-contain"
              src={CDN_URL + item?.card?.info?.imageId}
            />
            <button className="absolute w-20 p-2 mx-10 mt-30 bg-black text-white rounded-lg shadow-lg">
              Add +
            </button>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
