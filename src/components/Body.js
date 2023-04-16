import RestaurantCard from "./RestaurantsCard"
import { restrautList } from "../utils/constant"
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const[search , setSearch]= useState("")
    const[restraurantData , setRestraurantData]= useState([])
    const[restraurantFilter , setRestraurantFilter]= useState([])

    useEffect(()=>{
        getData();
    },[])

    async function getData(){
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&page_type=DESKTOP_WEB_LISTING");
        const json = await res.json()
        console.log(json?.data?.cards[2]?.data?.data?.cards,"kkkk" )
        setRestraurantData(json?.data?.cards[2]?.data?.data?.cards)
        setRestraurantFilter(json?.data?.cards[2]?.data?.data?.cards)
    }

    const filteredData = (searchText, restraurants) => {
        const result = restraurants.filter((restraurant)=>{return restraurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())});
        console.log(result, "restrrrr");
        return result;
    }

    return restraurantData.length<=0 ? (<Shimmer />)
    :(
    <>
        <div className= "searchButton">
            <input type="text"
                value={search}
                 onChange={(e)=>{return setSearch(e.target.value)}}
                 />

                <button onClick={()=>{const data=filteredData(search ,restraurantData)
                setRestraurantFilter(data)
                }}>Search</button>
                <div>{search}</div>
        </div>
      <div className="restaurant-list">
        {restraurantFilter.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
      </>
    );
  };

  export default Body;