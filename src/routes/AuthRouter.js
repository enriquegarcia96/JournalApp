import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegistreScreen } from "../components/auth/RegistreScreen";

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/login" component={LoginScreen } exact />
        <Route path="/auth/register" component={RegistreScreen } exact />

        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};
