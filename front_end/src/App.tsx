import React from "react";
import { DAppProvider, Goerli, Mainnet } from "@usedapp/core";
import {Header} from "./components/Header"
import {Container} from "@material-ui/core"

function App() {
  return (
    <DAppProvider
      config={{
        networks: [Goerli],
      }}
    >
      <Header/>
      <Container maxWidth="md">
      <div>Hi!</div>
      </Container>
    </DAppProvider>
  );
}

export default App;
