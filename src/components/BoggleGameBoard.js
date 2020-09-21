import React from "react";
import styled from "styled-components";

const BoggleGameBoard = ({ board }) => {
    return (
        <Container>
            <BoggleGrid>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
                <BoggleTile>A</BoggleTile>
            </BoggleGrid>
        </Container>
    );
};

export default BoggleGameBoard;

const Container = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
`;

const BoggleGrid = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
`;

const BoggleTile = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    font-family: Poppins, sans-serif;
    font-size: 4rem;
    user-select: none;
    text-transform: uppercase;
    font-weight: 600;
    background-color: rgba(255, 203, 156, 0.5);
    align-items: center;
    border: 1px solid darkgrey;
    cursor: pointer;
    border-radius: 5px;
`;
