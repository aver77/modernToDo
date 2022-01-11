import React from 'react';
import styled from 'styled-components';
import BurgerUl from './BurgerUl';

const BurgerNavElem = styled.nav`
    padding-top: 200px;
    @media screen and (max-width: 768px), screen and (max-height: 768px) {
        & {
            padding-top: 100px;
        }
    }
    @media screen and (max-width: 428px), screen and (max-height: 428px) {
        & {
            padding-top: 74px;
        }
    }
`;

const BurgerNav = () => {
    return (
        <BurgerNavElem>
            <BurgerUl/>
        </BurgerNavElem>
    );
};
export default React.memo(BurgerNav);