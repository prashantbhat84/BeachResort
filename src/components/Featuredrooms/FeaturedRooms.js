import React, { Component } from "react";
import { RoomContext } from "../context";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { greeting, name } = this.context;
    //console.log(value);
    return (
      <div>
        {greeting} from featured rooms {name}
      </div>
    );
  }
}

export default FeaturedRooms;
