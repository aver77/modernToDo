import React from 'react';
import styled from 'styled-components';

import find from '../../../../../../images/search.png';

const HeaderElemSearchImg = styled.img`
    position: absolute;
    height: 24px;
    top:0;
    right: 0;
    transition: 0.3s ease;
    &:focus,&:hover,&:active {
        opacity: 0.5;
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