import React from 'react';
import styled from 'styled-components';

import find from '../../../../../../images/search.png';

const HeaderElemSearchImg = styled.img`
    position: absolute;
    height: 24px;
    bottom:0;
    right: 0;
    transition: 0.3s ease;
    &:focus,&:hover,&:active {
        opacity: 0.6;
    }
    @media screen and (max-width: 1024px),
    screen and (max-height: 1024px) {
        &:focus,&:hover,&:active {
            opacity: 1;
        }
    }
`;

const HeaderSearch = ({inputFindRefHandler}) => {
    return (
        <HeaderElemSearchImg
            src={find}
            alt="Find"
            onClick = { inputFindRefHandler }
        />
    );
};
export default React.memo(HeaderSearch);