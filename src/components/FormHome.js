import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../components/Footer";
class FormHome extends React.Component {
  state = {
    proteccionDatos: "proteccionDatos",
    proteccionEnvio: "proteccionEnvio"
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/user");
  };

  render() {
    return (
      <div className="box-white__content">
        <div className="box-white__content--white">
          <div className="titulo-form">
            Protégelos <span>ahora</span>
          </div>
          <p>Ingresa los datos del titular.</p>

          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-4">
                  <select id="inputDni" name="doc" className="form-control">
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
                    name="numDocumento"
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
                    placeholder="Nombre"
                    name="nombres"
                    value={this.state.nombres || ""}
                    required
                  />
                </div>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  onChange={this.handleChange}
                  type="checkbox"
                  className="custom-control-input"
                  id="Checked1"
                  name="proteccionDatos"
                  value={this.state.proteccionDatos || ""}
                  required
                  defaultChecked
                />
                <label className="custom-control-label" htmlFor="Checked1">
                  Acepto la Política de Protección de Datos
                  <br /> Personales y los Términos y Condiciones.
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  onChange={this.handleChange}
                  type="checkbox"
                  className="custom-control-input"
                  id="Checked2"
                  name="proteccionEnvio"
                  value={this.state.proteccionEnvio || ""}
                  defaultChecked
                  required
                />
                <label className="custom-control-label" htmlFor="Checked2">
                  Acepto la Política de Envío de
                  <br /> Comunicaciones Comerciales.
                </label>
              </div>

              <button className="btn btn-danger">Comencemos</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(FormHome);
