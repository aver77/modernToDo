import React from 'react';
import styled from 'styled-components';

import BurgerLink from './BurgerLink';

const BurgerUlElem = styled.ul`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const BurgerUl = () => {
    return (
        <BurgerUlElem>
            <BurgerLink path='/liked' text='Liked'/>
            <BurgerLink path='/solved' text='Solved'/>
            <BurgerLink path='/deleted' text='Deleted'/>
        </BurgerUlElem>
    );
};

export default BurgerUl;