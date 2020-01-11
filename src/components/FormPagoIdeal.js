import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavBar from "./NavBar";
import CardNombre from "../assets/visa.svg";
import CardNumero from "../assets/visa-azul.svg";
import Toltip from "../assets/ic_tooltip.svg";
import "./scss/Formpagoideal.scss";

class FormPagoIdeal extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/gracias");
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
            <div className="box-step__content--ideal">
              <div className="titulo-user">
                Elige <span>el pago ideal</span>
              </div>
              <div className="descripcion-user">
                Decide entre 12 pagos mensuales o sólo una cuota al año.
              </div>
              <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-pago-ideal">
                    <div className="form-pago-ideal__box">
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="customRadioInline1"
                          name="customRadioInline1"
                          className="custom-control-input"
                          required
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadioInline1"
                        ></label>
                        <div className="info-pago">
                          <div className="titulo-pago">PAGO MENSUAL</div>
                          <div className="precio-pago">
                            <sup>S/</sup>40
                          </div>
                          <div className="detalle-pago">por 12 meses</div>
                        </div>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          id="customRadioInline2"
                          name="customRadioInline1"
                          className="custom-control-input"
                          pattern="\d{8,14}"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadioInline2"
                        ></label>
                        <div className="info-pago">
                          <div className="titulo-pago">PAGO ANUAL</div>
                          <div className="precio-pago">
                            <sup>S/</sup>400
                          </div>
                          <div className="detalle-pago">Ahorras S/ 80</div>
                        </div>
                      </div>
                      <div className="row pago-total">
                        <div className="col-12 pago-total__titulo">
                          Pago total
                        </div>
                        <div className="col-6 pago_total__asegurado-detalle">
                          Por 2 asegurados <span>Detalle</span>
                        </div>
                        <div className="col-6 pago-total__precio-asegurado">
                          <sub>S/</sub> 40
                        </div>
                      </div>
                    </div>
                    <div className="box-cupon">
                      <input
                        type="text"
                        placeholder="Ingresar código de dscto."
                        minLength="5"
                        maxLength="40"
                        pattern="[A-Za-z0-9]+"
                      />
                      <button type="button" className="btn-danger__cupon">
                        Aplicar
                      </button>
                    </div>
                    <div className="titulo-tarjeta">
                      Ahora ingresa los datos de tu tarjeta
                    </div>
                    <div className="row box-payment">
                      <div className="col-12 box-payment__input">
                        <input
                          type="text"
                          placeholder="Nombre del titular"
                          required
                        />
                        <div className="card">
                          <img src={CardNombre} alt="Visa" />
                        </div>
                      </div>
                      <div className="col-12 box-payment__input">
                        <input
                          type="text"
                          placeholder="Número de tarjeta"
                          required
                          pattern="[0-9]{13,16}"
                          title="Por favor rellena el formato requerido"
                        />
                        <div className="card">
                          <img src={CardNumero} alt="Visa" />
                        </div>
                      </div>
                      <div className="col-6 box-payment__input--date">
                        <input
                          type="text"
                          placeholder="Fecha de vencimiento"
                          pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"
                          title="Ingrese una fecha en este formato MM/YY"
                          required
                        />
                      </div>
                      <div className="col-6 box-payment__input--cvv">
                        <input
                          type="text"
                          placeholder="CVV"
                          required
                          maxlength="3"
                          title="123"
                        />
                        <div className="toltip">
                          <img src={Toltip} alt="Toltip" />
                        </div>
                      </div>
                      <div className="col-12 box-payment__input--email">
                        <input
                          type="email"
                          placeholder="Correo electrónico"
                          required
                        />
                      </div>
                    </div>
                    <div className="check-pago-ideal">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Checked1"
                          defaultChecked
                          required
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="Checked1"
                        >
                          Autorizo el cargo de mi cuota a la tarjeta registrada
                          como cargo
                          <br /> recurrente.
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Checked2"
                          defaultChecked
                          required
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="Checked2"
                        >
                          Acepto las
                          <span>
                            políticas de envío de la póliza electrónica.
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="button-pago-ideal">
                      <button
                        type="submit"
                        className="btn btn-danger btn-pago-ideal"
                      >
                        PAGAR S/40
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FormPagoIdeal);
