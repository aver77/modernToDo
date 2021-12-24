import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Burger from '../Header/Burger';
import Header from '../Header/Header';

import MainAdd from '../MainAdd/MainAdd';
// eslint-disable-next-line
import TasksPage from '../../pages/TasksPage';
import LikedPage from '../../pages/LikedPage';
import SolvedPage from '../../pages/SolvedPage';
import DeletedPage from '../../pages/DeletedPage';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
    const [showBurger, setShowBurger] = useState(false);

    const burgerHandler = (value) => {
        setShowBurger(value)
    }

    /* осталось: 
    1)пагинацию 
    2)организовать добавление таска и поиск
    3) хранение в localstorage (для каждой страницы он разный)
    проверка 1,2 чтоб все работало! => делать 3 => делать всплывающие окна => темная тема => реаклама
    */
    return (
        <Router>
            <Route path='/' component={() => <Header burgerHandler={burgerHandler}/>}/>
            {
                showBurger?<Burger burgerHandler={burgerHandler}/>:<></>
            }
            <Route path='/' exact component={MainAdd}/>
            <Route path='/' exact component={TasksPage}/>
            <Route path='/liked' exact component={LikedPage}/>
            <Route path='/solved' exact component={SolvedPage}/>
            <Route path='/deleted' exact component={DeletedPage}/>
            <Route path='/' component={Footer}/>
        </Router>
    );
}

export default App;
