import React from "react";
import { Header, SplitContainer, AddTable, FilterTable } from "./Components";

export const App = () => {
  return (
    <>
      <Header />
      <SplitContainer>
        <FilterTable />
        <AddTable />
      </SplitContainer>
    </>
  );
};

export default App;
