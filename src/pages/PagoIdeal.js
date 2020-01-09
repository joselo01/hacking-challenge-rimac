import React, { Component } from "react";
import Aside from "../components/Aside";
import FormPagoIdeal from "../components/FormPagoIdeal";
class PagoIdeal extends Component {
  render() {
    return (
      <div className="user">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 box-aside">
              <Aside />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-8">
              <FormPagoIdeal />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PagoIdeal;
