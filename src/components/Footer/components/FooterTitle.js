import React from 'react';
import styled from 'styled-components';

const FooterTitleElem = styled.p`
    cursor: pointer;
    /* margin-top:14px; */
    font-family: 'Birthstone';
    font-style: normal;
    font-size:44px;
    color: black;
    @media screen and (max-width: 721px) {
        & {
            margin-top: 12px;
        }
    }
    @media screen and (max-height: 374px) {
        & {
            margin-top: 0px;
        }
    }
`;

const FooterTitle = () => {
    return (
        <FooterTitleElem>NW Project</FooterTitleElem>
    );
};
export default React.memo(FooterTitle);