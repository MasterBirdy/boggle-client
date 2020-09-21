export const Form = styled.form`
    margin: 0 auto;
    max-width: 300px;
`;

export const Label = styled.label`
    font-family: Poppins, sans-serif;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    display: block;
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0.75")}rem;
`;

export const Input = styled.input`
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
