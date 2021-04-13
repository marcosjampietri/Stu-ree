import React, { useEffect } from "react";
import { ImPhone } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { navAction } from "../actions/buttonAction";
import { below } from "../styles";

const NavBar = () => {
    const dispatch = useDispatch();

    //dispatch buttons
    const ToggleNav = () => {
        dispatch(navAction());
    };

    const { NavOn } = useSelector((state) => state.nav);
    useEffect(() => {
        if (NavOn) {
            dispatch(navAction());
        }
    }, [dispatch]);

    //access rootReducer

    //Spring
    const navAnimation = useSpring({
        transform: NavOn ? "translate3d(0vw,0,0) " : "translate3d(100%,0,0)",
    });

    //component
    return (
        <Block>
            <Box>
                <Logo>
                    <Link as="a" to="/">
                        <img
                            src="./Images/Icons/Reesa(LOGO).svg"
                            alt="logo"
                            height="50px"
                        />
                    </Link>
                </Logo>

                <Main>
                    <Phone as="a">
                        <ImPhone style={{ color: "black" }} />
                        <Link as="a" to="#">
                            <h3>0330 004 0404</h3>
                        </Link>
                    </Phone>
                    <LinkA>
                        <Link to="#">
                            <h4>Workplace Strategy</h4>
                        </Link>
                        <div></div>
                        <ul>
                            <Link as="a" to="#">
                                <h5>Approach</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>Human Experience</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>Business Excellence</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>Future Proofing</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>COVID-19 Response</h5>
                            </Link>
                        </ul>
                    </LinkA>
                    <LinkB>
                        <Link to="#">
                            <h4>Real Estate</h4>
                        </Link>
                        <div></div>
                        <ul>
                            <Link as="a" to="#">
                                <h5>Property Search</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>"M.O.R.E."</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>Business Rates</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>Disposals</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>Tenant Representation</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>Project Management</h5>
                            </Link>
                        </ul>
                    </LinkB>
                    <LinkC>
                        <Link to="https://google.com">
                            <h4>Furniture and Interiors</h4>
                        </Link>
                        <div></div>
                        <ul>
                            <Link as="a" to="#">
                                <h5>Furniture Services</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>Interior Design</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>Audio Visual</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>Build</h5>
                            </Link>
                            <Link as="a" to="#">
                                <h5>Store</h5>
                            </Link>
                        </ul>
                    </LinkC>
                </Main>
            </Box>
        </Block>
    );
};

export default NavBar;

//style------------------------------------------------------------------

const Block = styled(animated.div)`
    position: fixed;
    z-index: 5;
    width: 100vw;
    height: 120px;
`;
const Box = styled(animated.div)`
    display: flex;
    justify-content: space-between;
    height: 100%;

    background-color: hsla(0, 0%, 100%, 0.95);
`;
const Logo = styled(animated.button)`
    justify-self: flex-end;
    background: transparent;
    margin-left: 40px;
    border: none;
    // grid-row: 1;
    //     ${below.med`
//        justify-self: start;
//         margin-left: 10px;
// 
//      `}
`;

const Phone = styled(animated.div)`
    position: absolute;
    display: flex;
    align-items: center;
    top: 20px;
    right: 40px;
    h3 {
        margin: 0px 0px 0px 10px;
        color: #e53c65;
        letter-spacing: 0.05em;
        font-family: ui-rounded;
        font-weight: 900;
        font-size: 16px;
    }
`;

const Main = styled(animated.div)`
    display: flex;
    justify-content: space-around;

    align-items: flex-end;

    ${below.med`
       // display: none;
     `};
`;

const LinkAll = styled(animated.div)`
    z-index: 2;
    position: relative;
    padding: 0px 40px 20px 0px;

    h4 {
        transition: 0.03s;
        font-weight: 900;
        color: grey;
    }
    div {
        transition: 0.1s;
        width: 0px;
    }
    ul {
        background-color: white;
        padding: 10px 30px 20px 30px;
        width: 230px;

        transition: 0.5s;
        position: absolute;
        // top: 0px;
        left: -30px;
        visibility: hidden;
        opacity: 0;
    }

    h5 {
        padding: 10px 10px 10px 0px;
        font-weight: 900;
        color: #858585;
        transition: 0.1s;

        border-bottom: 2px solid hsla(197, 81%, 43%, 0);
        &:hover {
            transition: 0.25s;
        }
    }

    &:hover {
        h4 {
            transition: 0.03s;
            color: #1592c5;
        }
        div {
            transition: 0.15s;
            width: 100%;
        }
        ul {
            transition: 0.2s;
            visibility: visible;
            opacity: 1;
        }
    }
`;

const LinkA = styled(LinkAll)`
    div {
        border-bottom: 2px solid #1592c5;
    }
    h5 {
        &:hover {
            border-bottom: 2px solid hsla(197, 81%, 43%, 1);
            color: #1592c5;
        }
    }
`;
const LinkB = styled(LinkAll)`
    div {
        border-bottom: 2px solid #a73563;
    }
    &:hover {
        h4 {
            transition: 0.03s;
            color: #a73563;
        }
        div {
            transition: 0.15s;
            width: 100%;
        }
    }
    h5 {
        &:hover {
            border-bottom: 2px solid hsla(336, 52%, 43%, 1);
            color: #a73563;
        }
    }
`;
const LinkC = styled(LinkAll)`
    div {
        border-bottom: 2px solid #44b7b4;
    }
    &:hover {
        h4 {
            transition: 0.03s;
            color: #44b7b4;
        }
        div {
            transition: 0.15s;
            width: 100%;
        }
    }
    h5 {
        &:hover {
            border-bottom: 2px solid hsla(179, 46%, 49%, 1);
            color: #44b7b4;
        }
    }
`;
