import React from "react";
import NavBar from "./NavBar";
import "./scss/User.scss";
import { Link, withRouter } from "react-router-dom";

class AddUser extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/edit-asegurados");
  };
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

              <form onSubmit={this.handleSubmit}>
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
                        id="nro"
                        type="text"
                        className="form-control"
                        placeholder="Nro. de Documento"
                        required
                        pattern="\d{8,14}"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombres"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido Paterno"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido Materno"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fecha de nacimiento"
                        required
                      />
                    </div>
                  </div>
                  <div className="genero">Género</div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio1"
                      name="genero"
                      className="custom-control-input"
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
                      type="radio"
                      id="customRadio2"
                      name="genero"
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
                      type="submit"
                      className="btn btn-danger btn-danger__asegurado--nuevouser"
                    >
                      Guardar
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

export default withRouter(AddUser);
