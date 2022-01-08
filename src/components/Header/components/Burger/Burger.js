import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import BurgerImg from './components/BurgerImg';
import BurgerNav from './components/BurgerNav';

const BurgerElement = styled.div`
    position: fixed;
    background:#EE6E73;
    top:0;
    right: 0;
    z-index: 999;
    height: 100vh;
    width: 50vw;
    box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.4);
`;
const BurgerWrapper = styled.div`
    position: relative;
    width:100%;
    height: 100%;
`;

const Burger = ({burgerHandler}) => {
    const burgerRef = useRef(null);

    useEffect(() => {    
        const refClickHandler = (e) => {
            if (burgerRef.current) {
                if (!burgerRef.current.contains(e.target)) burgerHandler(false)
            }
        } 
        document.addEventListener('click', refClickHandler);

        return () => document.removeEventListener('click', refClickHandler);
    }, [burgerHandler]);

    return (
        <BurgerElement ref={burgerRef}>
            <BurgerWrapper>
                <BurgerImg burgerHandler={burgerHandler}/>      
                <BurgerNav/>
            </BurgerWrapper>
        </BurgerElement>
    );
};

export default React.memo(Burger);