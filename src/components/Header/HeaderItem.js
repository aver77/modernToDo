import React, {useCallback, useState} from 'react';

import Header from './components/Header/Header';
import Burger from './components/Burger/Burger';

const HeaderItem = () => {

    const [showBurger, setShowBurger] = useState(false);

    const burgerHandler = useCallback((value) => {
        setShowBurger(value)
    }, [setShowBurger]);
    
    return (
        <>
            <Header burgerHandler={burgerHandler}/>
            {
                showBurger?<Burger burgerHandler={burgerHandler}/>:<></>
            }
        </>
    );
};

export default React.memo(HeaderItem);