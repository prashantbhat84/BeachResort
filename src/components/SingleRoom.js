import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import { RoomContext } from "./context";

import { Link } from "react-router-dom";
import StyledHero from "./styledhero/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  componentDidMount() {
    // console.log(params);
  }
  static contextType = RoomContext;
  render() {
    let { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      price,
      size,
      extras,
      breakfast,
      pets,
      images
    } = room;
    return (
      <StyledHero img={images[0] || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </Banner>
      </StyledHero>
    );
  }
}
