import React from 'react';
import styled from 'styled-components';

import MainDate from './components/MainDate';
import MainInputSection from './components/MainInput/MainInputSection';

const FlexDiv = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;
`;

const MainWrapper = styled.div`
    margin-top: 64px;
    z-index: 2;
    @media screen and (max-width: 793px) {
        & {
            margin-top: 128px;
        }
    }
`;
const MainMenu = styled(FlexDiv)``;

const MainAddItem = () => {
    return (
        <MainWrapper>
            <MainMenu className="_container">
                <MainDate/>
                <MainInputSection/>
            </MainMenu>
        </MainWrapper>
    );
};

export default MainAddItem;