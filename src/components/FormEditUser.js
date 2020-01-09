import React from "react";
import NavBar from "./NavBar";
import "./scss/User.scss";
import { Link } from "react-router-dom";

class EditUser extends React.Component {
  state = {
    nombres: "",
    numDocumento: "",
    fecNacimiento: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    sexo: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  async componentDidMount() {
    let _fetch = await fetch(
      "https://freestyle.getsandbox.com/dummy/obtenerdatospersona",
      {
        method: "POST",
        mode: "cors",
        cache: "default"
      }
    );
    let json = await _fetch.json();
    let data = json.data.tercero;
    this.setState({
      nombres: data.nombres,
      numDocumento: data.numDocumento,
      fecNacimiento: data.fecNacimiento,
      apellidoPaterno: data.apellidoPaterno,
      apellidoMaterno: data.apellidoMaterno,
      sexo: data.sexo
    });
  }
  render() {
    return (
      <div className="step">
        <div className="box-step__content">
          <div className="nav-bar">
            <Link to="/"></Link>
            <NavBar />
          </div>
          <div className="box-step__content--asegurado">
            <div className="titulo-user">
              Tus <span>asegurados</span>
            </div>
            <div className="descripcion-user">
              Preséntanos a quién vamos a proteger.
            </div>
            <div className="container">
              <div className="row division">
                <div className="col-6 asegurados">Asegurados (01)</div>
                <div className="col-6 todos">
                  <Link to="/tus-asegurados">Ver todos</Link>
                </div>
              </div>
              <div className="datos-del-asegurado">Datos del asegurado Nº2</div>

              <form>
                <div className="form-user">
                  <div className="form-row">
                    <div className="form-group col-4">
                      <select id="inputDni" className="form-control">
                        <option>DNI</option>
                        <option>CE</option>
                      </select>
                    </div>
                    <div className="form-group col-8">
                      <input
                        onChange={this.handleChange}
                        id="nro"
                        type="text"
                        className="form-control"
                        placeholder="Nro. de Documento"
                        value={this.state.numDocumento || ""}
                        pattern="\d{8,14}"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Nombres"
                        name="nombres"
                        value={this.state.nombres || ""}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Apellido Paterno"
                        name="apellidoPaterno"
                        value={this.state.apellidoPaterno || ""}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Apellido Materno"
                        name="apellidoMaterno"
                        value={this.state.apellidoMaterno || ""}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Fecha de nacimiento"
                        name="fecNacimiento"
                        value={this.state.fecNacimiento || ""}
                        required
                      />
                    </div>
                  </div>
                  <div className="genero">Género</div>
                  <div className="custom-control custom-radio">
                    <input
                      onChange={this.handleChange}
                      type="radio"
                      id="customRadio1"
                      name="sexo"
                      value={this.state.sexo || ""}
                      className="custom-control-input"
                      required
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio1"
                    >
                      Msculino
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      onChange={this.handleChange}
                      type="radio"
                      id="customRadio2"
                      name="sexo"
                      value={this.state.sexo || ""}
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio2"
                    >
                      Femenino
                    </label>
                  </div>
                  <div className="content-button">
                    <div className="cancelar">Cancelar</div>
                    <button
                      type="button"
                      className="btn btn-danger btn-danger__asegurado--edit"
                    >
                      Guardar Edición
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUser;
