import React from "react";
import { useEffect, useState } from "react";
import firebase from "firebase";
import Form from "./components/Form/Form";
import { BrowserRouter as Router, Route, Switch ,Redirect} from "react-router-dom";
import MainContainer from "./container/MainContainer";
import TestContainer from "./container/TestContainer";
import NotFound from "./container/NotFound";



function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const user  =JSON.parse(localStorage.getItem("user"))
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          console.log("User id not login");
          return;
        }
        console.log("logged in user", user.displayName);
        const token = await user.getIdToken();
        console.log(token);
        // setIsSignedIn(!!user);
      });

    return () => unregisterAuthObserver();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/main">
          {user ?  <MainContainer /> : <Redirect to = "/"/>}
        </Route>
        <Route path="/test">
          {user ?  <TestContainer /> : <Redirect to = "/"/>}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
