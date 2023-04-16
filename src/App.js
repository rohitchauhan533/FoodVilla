import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body"

/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */

//Config Driven UI



// const RestrauntCard = ({
//   name,
//   cuisines,
//   cloudinaryImageId,
//   lastMileTravelString,
// }) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
//           cloudinaryImageId
//            }
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(", ")}</h3>
//       <h4>{lastMileTravelString} minutes</h4>
//     </div>
//   );
// };



// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default AppLayout;
