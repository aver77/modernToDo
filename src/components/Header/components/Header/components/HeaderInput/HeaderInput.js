import React from 'react';
import styled from 'styled-components';

const HeaderElemInput = styled.input`
    border: 0px;
    border-bottom: 2px solid black;
    width: 300px;
    &[type="text"], textarea {
            background:#EE6E73;
        }
    &::placeholder {
        font-family: 'Montserrat';
        opacity: 0.6;
        color: black;
    }

    @media screen and (max-width: 793px) {
        & {
            width: 88%;
        }
    }
`;

const HeaderInput = ({inputFindRefHandler, inputFindRef}) => {
    
    const keyPressFindHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            inputFindRefHandler();
        }
    }

    return (
        <HeaderElemInput
            ref={inputFindRef}
            type="text"
            placeholder="Find a task..."
            onKeyDown = {keyPressFindHandler}
        />
    );
};
export default React.memo(HeaderInput);