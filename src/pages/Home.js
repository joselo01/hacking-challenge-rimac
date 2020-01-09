import React, { Component } from "react";
import Header from "../components/Header";
import InfoHome from "../components/InfoHome";
import FormHome from "../components/FormHome";
import SkyHome from "../components/SkyHome";
import "./scss/Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <SkyHome />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-6 box-red">
              <Header />
              <InfoHome />
            </div>
            <div className="col-md-12 col-lg-6 box-white">
              <FormHome />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
