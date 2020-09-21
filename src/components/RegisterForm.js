import React from "react";
import styled from "styled-components";
import { Button } from "../elements/components";
import { colors } from "../elements/utilities";

const RegisterForm = ({ name, setName, registerHandler }) => {
    return (
        <Container>
            <Form>
                <Label>Enter your name here!</Label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)}></Input>
                <RegisterButton
                    marginTop="1"
                    secondaryColor={colors.submitSecondary}
                    primaryColor={colors.submitPrimary}
                    onClick={(e) => registerHandler(e)}
                >
                    Submit
                </RegisterButton>
            </Form>
        </Container>
    );
};

export default RegisterForm;

const Container = styled.div`
    margin-top: 5rem;
`;

const Form = styled.form`
    margin: 0 auto;
    max-width: 300px;
`;

const Label = styled.label`
    font-family: Poppins, sans-serif;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    display: block;
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0.75")}rem;
`;

const Input = styled.input`
    font-family: Poppins, sans-serif;
    font-weight: 300;
    padding: 0.5rem 0.75rem;
    border: 1px solid #777;
    outline: none;
    border-radius: 10px;
    font-size: 1.4rem;
    width: 100%;
    transition: all 0.3s ease;
    box-shadow: 0;
    &:focus {
        box-shadow: 3px 7px #888888;
    }
`;

const RegisterButton = styled(Button)`
    display: block;
    margin: ${(props) => (props.marginTop ? props.marginTop : 0)}rem auto 0;
`;
