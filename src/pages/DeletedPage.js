import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Tasks from '../components/Tasks/Tasks';

const TasksPageWrapper = styled.div`
    padding-top: 48px;
`;

const DeletedPage = ({removedTasks}) => {
    return (
        <TasksPageWrapper className="__container">
            <Tasks name="deleted" tasks={removedTasks?removedTasks:[]}/>
        </TasksPageWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        allTasks: state.removedTasks
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(DeletedPage);