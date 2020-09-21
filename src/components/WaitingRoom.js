import React from "react";
import styled from "styled-components";
import { Button } from "../elements/components";
import { colors } from "../elements/utilities";

const WaitingRoom = ({ players, startGameHandler }) => {
    return (
        <Container>
            <WaitingRoomHeader>You are in the waiting room...</WaitingRoomHeader>
            <List>
                {Object.keys(players).map((player, index) => (
                    <li key={player + index}>{player}</li>
                ))}
            </List>
            <p>When all players are ready, click Play.</p>
            <ButtonHolder>
                <Button
                    primaryColor={colors.startPrimary}
                    secondaryColor={colors.startSecondary}
                    onClick={(e) => startGameHandler(e)}
                >
                    Start Game
                </Button>
                <Button primaryColor={colors.rulesPrimary} secondaryColor={colors.rulesSecondary}>
                    Rules
                </Button>
            </ButtonHolder>
        </Container>
    );
};

const Container = styled.div`
    margin: 3.5rem auto 0;
    font-family: Poppins, sans-serif;
    text-align: center;
`;

const WaitingRoomHeader = styled.h2`
    font-size: 3rem;
    font-weight: 600;
`;

const List = styled.ul`
    margin-top: 2rem;
    margin-bottom: 2.33rem;
    font-family: Poppins, sans-serif;
    font-size: 1.8rem;
`;

const ButtonHolder = styled.div`
    margin-top: 1.25rem;
    ${Button}:not(:last-child) {
        margin-right: 1rem;
    }
`;

export default WaitingRoom;
