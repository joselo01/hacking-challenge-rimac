import React, { Component } from "react";
import Aside from "../components/Aside";
import AddUser from "../components/FormAddUser";

class AddAsegurados extends Component {
  render() {
    return (
      <div className="user">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 box-aside">
              <Aside />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-8">
              <AddUser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAsegurados;
