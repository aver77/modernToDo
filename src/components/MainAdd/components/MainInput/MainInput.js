import React from 'react';
import styled from 'styled-components';

const MainInputElem = styled.input`
    margin: 0 32px 0 32px;
    border: 0px;
    border-bottom: 2px solid black;
    width: 80%;
    &[type="text"], textarea {
        background: rgba(0,0,0,0);
    }
    &::placeholder {
        font-family: 'Montserrat';
        opacity: 0.6;
        color: black;
    }

    @media screen and (max-width: 1402px) {
        & {
            width: 85%;
            margin: 0 32px 0 0px;
        }
    }
    @media screen and (max-width: 1033px) {
        & {
            width: 80%;
        }
    }
    @media screen and (max-width: 587px) {
        & {
            width: 70%;
        }
    }
    @media screen and (max-width: 391px) {
        & {
            margin: 0 8px 0 0px;
        }
    }
`;

const MainInput = ({inputAddRefHandler, inputAddRef}) => {

    const keyPressAddHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            inputAddRefHandler();
        }
    }

    return (
        <MainInputElem 
            ref = {inputAddRef}
            autoComplete="off" 
            type="text" 
            placeholder="Add a task..."
            onKeyDown = { keyPressAddHandler }
        />
    );
};

export default React.memo(MainInput);