import React, { Fragment } from "react";
import Hero from "./Hero/Hero";
import Banner from "./Banner/Banner";
import { Link } from "react-router-dom";
import Services from "./Services/Services";
import FeaturedRooms from "./Featuredrooms/FeaturedRooms";

export default function Home() {
  return (
    <Fragment>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </Fragment>
  );
}
