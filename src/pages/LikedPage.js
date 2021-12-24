import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Tasks from '../components/Tasks/Tasks';

const TasksPageWrapper = styled.div`
    padding-top: 48px;
`;

const LikedPage = ({allTasks}) => {
    let likedTasks = [];
    if (allTasks) {
        likedTasks = allTasks.map(item => 
            item.liked === true
        );
    }

    return (
        <TasksPageWrapper className="__container">
            <Tasks name="liked" tasks={likedTasks}/>
        </TasksPageWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        allTasks: state.allTasks
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(LikedPage);