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

    const burgerShowHandler = () => {
        burgerHandler(true);
    }

    return (
        <BurgerWrapper>
            <BurgerImg
                src={burgerImg} 
                alt="burger"
                onClick = {burgerShowHandler}
            />
        </BurgerWrapper>
    );
};

export default React.memo(HeaderBurgerItem);