import React from "react";
import NavBar from "./components/navComponent";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <NavBar />
            <Home />
        </>
    );
};

export default App;
