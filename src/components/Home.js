import React from "react";
import Hero from "./Hero/Hero";
import Banner from "./Banner/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Hero>
      <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          Our Rooms
        </Link>
      </Banner>
    </Hero>
  );
}
