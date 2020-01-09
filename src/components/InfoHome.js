import React from "react";
import Footer from "./Footer";

function InfoHome() {
  return (
    <div className="box-red__content">
      <div className="box-red__content--red">
        <div className="titulo-home">
          Seguro de
          <br /> accidentes para
          <br /> <strong>Niños y Jóvenes</strong>
        </div>
        <div className="descripcion-home">
          <p>
            En accidentes <strong>los cubrimos al 100%</strong> para que se
            recuperen por completo.
          </p>
        </div>
        <div className="lista-home">
          <ul>
            <li>Atención médica y medicinas</li>
            <li>Examenes de laboratorio</li>
            <li>Hospitalización y rehabilitación</li>
            <li>Cirugías y operaciones</li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default InfoHome;
