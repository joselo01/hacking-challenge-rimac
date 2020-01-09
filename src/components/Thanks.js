import React from "react";
import { Link } from "react-router-dom";
import "./scss/Thanks.scss";
import IlusApp from "../assets/Illustration-app.svg";

function Thanks() {
  return (
    <div className="step">
      <div className="box-step__content">
        <div className="box-step__content--asegurado">
          <div className="titulo-user">
            <span> ¡Felicidades!</span> <br />
            Tus seres queridos ahora se encuentran protegidos
          </div>
          <div className="descripcion-user">
            Descarga tu póliza llegará que en un máximo de 24 horas al correo
            <a className="correo-user" href={"mailto:eva.pinedo@rimac.com.pe"}>
              eva.pinedo@rimac.com.pe
            </a>
          </div>
          <div className="container"></div>
          <div className="conoce-mas">
            <a href={"/"}>Conoce más sobre tu seguro</a>
          </div>
          <div className="usa-app">
            <div className="row">
              <div className="col-8 centra-detalle">
                <div className="titulo-app">
                  Usa nuestra <span>RIMAC APP</span>
                </div>
                <div className="detalle-app">
                  Descarga nuestra APP, crea tu usuario
                  <br /> y cuenta con todas las coberturas.
                </div>
              </div>
              <div className="col-4">
                <div className="ilus-app">
                  <img src={IlusApp} alt="app" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-button-gracias">
            <Link
              to="/"
              className="btn btn-primary"
              role="button"
              aria-pressed="true"
            >
              Ir al home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
