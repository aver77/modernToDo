import React from 'react';
import styled from 'styled-components';

import close from '../../../../../images/close.png';

const BurgerImgWrapper = styled.div`
    position: absolute;
    top: 12px;
    right: 20%;
`;
const BurgerCloseImg = styled.img`
    height: 34px;
    width: 34px;
`;

const BurgerImg = ({burgerHandler}) => {

    const closeBurger = () => {
        burgerHandler(false);
    }

    return (
        <BurgerImgWrapper>
            <BurgerCloseImg 
                src={close} 
                alt="close"
                onClick={closeBurger}
            />
        </BurgerImgWrapper>   
    );
};

export default React.memo(BurgerImg);