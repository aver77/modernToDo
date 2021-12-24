import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Tasks from '../components/Tasks/Tasks';

const TasksPageWrapper = styled.div`
    padding-top: 48px;
`;

const TasksPage = ({allTasks}) => {
    return (
        <TasksPageWrapper className="__container">
            <Tasks name="allTasks" tasks={allTasks}/>
        </TasksPageWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        allTasks: state.allTasks
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(TasksPage);