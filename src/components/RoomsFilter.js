import React, { useContext } from "react";
import { RoomContext } from "./context";
// import Title from "./Title/Title";

const RoomsFilter = () => {
  const context = useContext(RoomContext); // context using hooks
  console.log(context);
  return <div>Hello from Rooms Filter</div>;
};

export default RoomsFilter;
