import React from 'react';
import styled from 'styled-components';

import burgerImg from '../../../../../../images/menuIcon.png';

const BurgerWrapper = styled.div`
    margin: 12px 0 0 34px;
`;
const BurgerImg = styled.img`
    height: 34px;
    width: 34px;
`;

const HeaderBurgerItem = ({burgerHandler}) => {
    return (
        <BurgerWrapper>
            <BurgerImg
                src={burgerImg} 
                alt="burger"
                onClick = {() => burgerHandler(true)}
            />
        </BurgerWrapper>
    );
};

export default React.memo(HeaderBurgerItem);