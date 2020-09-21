import styled from "styled-components";

export const Button = styled.button`
    margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}rem;
    padding: 0.75rem 2.5rem;
    font-family: Poppins, sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.6rem;
    color: white;
    border: 1px solid ${(props) => (props.primaryColor ? props.primaryColor : "#8b939a")};
    background: ${(props) => (props.secondaryColor ? props.secondaryColor : "#8b939a")};
    background: linear-gradient(
        315deg,
        ${(props) => (props.primaryColor ? props.primaryColor : "#8b939a")} 0%,
        ${(props) => (props.secondaryColor ? props.secondaryColor : "#5b6467")} 100%
    );
    border-radius: 20px;
    box-shadow: 10px 10px 10px -14px rgba(0, 0, 0, 0.75);
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;

    :hover {
        transform: translateY(-2px);
        box-shadow: 10px 10px 10px -12px rgba(0, 0, 0, 0.75);
    }
    :active {
        transform: translateY(-1px);
        box-shadow: 10px 10px 10px -13px rgba(0, 0, 0, 0.75);
    }
`;
