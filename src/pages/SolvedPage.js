import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Tasks from '../components/Tasks/Tasks';

const TasksPageWrapper = styled.div`
    padding-top: 48px;
`;

const SolvedPage = ({allTasks}) => {
    let solvedTasks = [];
    if (allTasks) {
        solvedTasks = allTasks.map(item => 
            item.solved === true
        );
    }

    return (
        <TasksPageWrapper className="__container">
            <Tasks name="solved" tasks={solvedTasks}/>
        </TasksPageWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        allTasks: state.allTasks
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(SolvedPage);