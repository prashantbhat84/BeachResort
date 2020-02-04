import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

const RoomContainer = () => {
  return (
    <div>
      Hello from Rooms Container
      <RoomsFilter />
      <RoomsList />
    </div>
  );
};

export default RoomContainer;
