import React from 'react';
import styled from 'styled-components';

const DefaultTaskImg = styled.img`
    transition: .3s ease;
    height: 24px;
    width: 24px;
    padding-left: 34px;
    cursor: ${props => props.cursorDefault || "pointer"};
    &:focus,&:hover,&:active {
        opacity: 0.6;
    }
    @media screen and (max-width: 576px) {
        & {
            padding-left: 12px;
            height: 20px;
            width: 20px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            height: 18px;
            width: 18px;
            padding-left: 6px;
        }
    }
`;

const DefaultImage = ({imgLink,imgAlt,imgTitle}) => {
    return (
        <DefaultTaskImg cursorDefault={"not-allowed"} src={imgLink} alt={imgAlt} title={imgTitle}/>
    );
};

export default React.memo(DefaultImage);