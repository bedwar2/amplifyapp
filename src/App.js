import React from "react";
import "./App.css";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Notes from "./Notes";

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <Notes />
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
