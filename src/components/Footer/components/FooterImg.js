import React from 'react';
import styled from 'styled-components';

const FooterImgElem = styled.img`
    cursor: pointer;
    margin: 4px 6px 0px 4px;
    height: 32px;
    width: 32px;
    transition: 0.3s ease;
    &:focus,&:hover,&:active {
        opacity: 0.5;
    }
`;

const FooterImg = ({imgLink,imgAlt}) => {
    return (
        <FooterImgElem src={imgLink} alt={imgAlt} />
    );
};

export default React.memo(FooterImg);