import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

class InfoUser extends React.Component {
  state = {
    ModificaDni: true,
    nombres: "",
    numDocumento: ""
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
      numDocumento: data.numDocumento
    });
  }
  getInitialState() {
    return { email: "", seguro: "" };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/tus-asegurados");
  };

  render() {
    return (
      <div className="step">
        <div className="box-step__content">
          <div className="nav-bar">
            <Link to="/"></Link>
            <NavBar />
          </div>
          <div className="box-step__content--interna">
            <div className="titulo-user">
              Hola <span>{this.state.nombres},</span>
              <br /> cuéntanos sobre ti
            </div>
            <div className="descripcion-user">
              Podrás protegerlos <span>por solo S/20 al mes</span> por asegurado
            </div>
            <div className="form-step">
              <form onSubmit={this.handleSubmit}>
                <div className="datos-titular">Datos del titular</div>
                <div className="form-row">
                  <div className="form-group col-4">
                    <select
                      id="inputDni"
                      name="doc"
                      className="form-control"
                      disabled={this.state.ModificaDni}
                    >
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
                      placeholder="10137823"
                      name="numDocumento"
                      value={this.state.numDocumento || ""}
                      pattern="\d{8,14}"
                      required
                      disabled={this.state.ModificaDni}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      onChange={this.handleChange}
                      type="email"
                      className="form-control"
                      placeholder="Correo"
                      name="email"
                      value={this.state.email || ""}
                      required
                    />
                  </div>
                </div>
                <div className="titulo-seguro">¿ESTE SEGURO ES PARA TI?</div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio1"
                    name="seguro"
                    className="custom-control-input"
                    value="NO"
                    checked={this.state.seguro === "NO"}
                    onChange={e => this.setState({ seguro: e.target.value })}
                    required
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio1"
                  >
                    No
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio2"
                    name="seguro"
                    value="SI"
                    checked={this.state.seguro === "SI"}
                    onChange={e => this.setState({ seguro: e.target.value })}
                    className="custom-control-input"
                    required
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio2"
                  >
                    Si
                  </label>
                </div>
                <div className="mod-dni">
                  <button
                    className="mod-dni"
                    onClick={e => this.setState({ ModificaDni: false })}
                    name="modifica"
                  >
                    Modificar DNI
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={!this.state.email || !this.state.seguro}
                  className="btn btn-danger btn-danger__disabled"
                >
                  Continuar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(InfoUser);
