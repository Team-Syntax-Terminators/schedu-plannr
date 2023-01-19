
import React from "react";
import LogIn from "../LogIn/LogIn";
import Details from "./Details/Details";
import Header from "./Header/Header";
import Membership from "./Membership/Membership";
import Services from "./Services/Services";
import Sponsorship from "./Sponsorship/Sponsorship";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Details></Details>
      <Membership></Membership>
      <Sponsorship></Sponsorship>
      <LogIn />
    </div>
  );
};

export default Home;
