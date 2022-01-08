import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderItem from '../Header/HeaderItem';
import MainAddItem from '../MainAdd/MainAddItem';
import TasksPage from '../../pages/TasksPage';
import LikedPage from '../../pages/LikedPage';
import SolvedPage from '../../pages/SolvedPage';
import DeletedPage from '../../pages/DeletedPage';
import FooterItem from '../Footer/FooterItem';

const RoutingChain = () => {

    return (
        <Router>
            <HeaderItem/>
                <Routes>
                    <Route path='/' element={
                        <>
                            <MainAddItem/>
                            <TasksPage/>
                        </>
                    }/>
                    <Route path='/liked'element={<LikedPage/>}/>
                    <Route path='/solved' element={<SolvedPage/>}/>
                    <Route path='/deleted' element={<DeletedPage/>}/>
                </Routes>
            <FooterItem/>
        </Router>
    );
};

export default RoutingChain;