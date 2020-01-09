import React from "react";
import { Link } from "react-router-dom";
import "./scss/User.scss";
import NavBar from "./NavBar";

class ListUser extends React.Component {
  state = {
    nombres: "",
    numDocumento: "",
    fecNacimiento: ""
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
      fecNacimiento: data.fecNacimiento
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
                <div className="col-6 username">
                  <div className="nombre-asegurado">{this.state.nombres}</div>
                </div>
                <div className="col-3 opciones">
                  <Link className="text-reset" to="/edit-asegurados">
                    Editar
                  </Link>
                </div>
                <div className="col-3 opciones">Eliminar</div>

                <div className="dni-fecha">
                  <span>DNI {this.state.numDocumento}</span>
                  <span>F.N {this.state.fecNacimiento}</span>
                </div>
              </div>
            </div>
            <div className="add-asegurado">
              <Link to="/nuevo-asegurados">Quiero asegurar a alguien más</Link>
            </div>
            <div className="content-button">
              <Link
                to="/nuevo-asegurados"
                className="btn btn-primary"
                role="button"
                aria-pressed="true"
              >
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListUser;
