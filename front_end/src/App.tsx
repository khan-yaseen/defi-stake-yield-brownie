import React from "react";
import { DAppProvider, Goerli } from "@usedapp/core";
import { Header } from "./components/Header";
import { Container } from "@material-ui/core";
import { Main } from "./components/Main";

function App() {
  return (
    <DAppProvider
      config={{
        networks: [Goerli]
      }}
    >
      <Header />
      <Container maxWidth="md">
        <Main />
      </Container>
    </DAppProvider>
  );
}

export default App;
