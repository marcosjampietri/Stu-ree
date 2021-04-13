import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";

const Home = () => {
    //Page
    return (
        <Page>
            <h1>HOME</h1>
            <h1>HOME</h1>
            <h1>HOME</h1>
            <h1>HOME</h1>
            <h1>HOME</h1>
            <h1>HOME</h1>
            <h1>HOME</h1>
            <h1>HOME</h1>
            <h1>HOME</h1>
        </Page>
    );
};

export default Home;

//style------------------------------------------------------------------

const Page = styled(animated.div)`
    width: 100%;
    background-image: linear-gradient(#1592c5, #a73563, #44b7b4);
    h1 {
        padding: 200px;
        color: hsla(0, 0%, 0%, 0.1);
    }
`;
