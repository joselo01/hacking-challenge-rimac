import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import User from "../pages/User";
import NotFound from "../pages/NotFound";
import ListAsegurados from "../pages/ListAsegurados";
import AddAsegurados from "../pages/AddAsegurados";
import EditAsegurados from "../pages/EditAsegurados";
import PagoIdeal from "../pages/PagoIdeal";
import ThankYou from "../pages/ThankYou";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/tus-asegurados" component={ListAsegurados} />
          <Route exact path="/nuevo-asegurados" component={AddAsegurados} />
          <Route exact path="/edit-asegurados" component={EditAsegurados} />
          <Route exact path="/pago-ideal" component={PagoIdeal} />
          <Route exact path="/gracias" component={ThankYou} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
