import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { JournalScreen } from "../components/journal/JournalScreen";
import { firebase } from "../firebase/firebase-config";
import { login } from "../actions/auth";

import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggenIn, setIsLoggenIn] = useState(false);

  /*
  Estado de la autenticacion
  */
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggenIn(true);
      } else {
        setIsLoggenIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggenIn]);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggenIn}
          />

          <PrivateRoute
            path="/"
            exact
            component={JournalScreen}
            isAuthenticated={isLoggenIn}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
