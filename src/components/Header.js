import React from "react";
import styled from "styled-components";

const colors = [
    "rgb(25, 25, 25)",
    "rgb(45, 45, 45)",
    "rgb(65, 65, 65)",
    "rgb(85, 85, 85)",
    "rgb(105, 105, 105)",
    "rgb(110, 110, 110)",
];

const Header = () => {
    return (
        <Heading>
            {"Boggle".split("").map((letter, index) => (
                <Letter key={index} color={colors[index]}>
                    {letter}
                </Letter>
            ))}
        </Heading>
    );
};

const Heading = styled.h1`
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 6rem;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 2.25rem;
    color: rgb(25, 25, 25);
`;

const Letter = styled.span`
    color: ${(props) => (props.color ? props.color : "black")};
`;

export default Header;
