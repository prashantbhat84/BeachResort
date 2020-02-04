import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "./context";
import Loading from "./loading/Loading";

const RoomContainer = () => {
  return (
    <RoomConsumer>
      {value => {
        const { rooms, loading, sortedRooms } = value;
        return (
          <div>
            Hello from Rooms Container
            <RoomsFilter />
            <RoomsList />
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomContainer;
