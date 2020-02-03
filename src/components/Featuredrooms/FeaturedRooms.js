import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "../loading/Loading";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // const { rooms } = this.context;
    // console.log(rooms[0]);
    const { featuredrooms } = this.context;
    console.log(featuredrooms);

    return <Loading />;
  }
}

export default FeaturedRooms;
