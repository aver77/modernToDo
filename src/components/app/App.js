import React from 'react';
import RoutingChain from '../RoutingChain/RoutingChain';
import store from '../../redux/store';
import { Provider } from 'react-redux';

    /* осталось: 
    1)пагинацию 
    2)организовать добавление таска и поиск
    3) хранение в localstorage (для каждой страницы он разный)
    проверка 1,2 чтоб все работало! => делать 3 => делать всплывающие окна => темная тема => реаклама
    */

const App = () => {
    return (
        <Provider store={store}>
            <RoutingChain />
        </Provider>
    )
}

export default App;
