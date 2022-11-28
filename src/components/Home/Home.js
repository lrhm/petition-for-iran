import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import HomePage from "./Homepage";

function Home() {

  return (
    <section>
      <HomePage />
      <Home2 />

    </section>
  );
}

export default Home;
