import React from 'react';
import styled from 'styled-components';

import HeaderSearch from './HeaderSearch';
import HeaderInput from './HeaderInput';

const HeaderInputWrapper = styled.div`
    margin-left: 58px;
    margin-right: 34px;
    padding-top:14px;
    @media screen and (max-width: 793px) {
        & {
            padding: 0px;
            margin: 0px 10% 24px 0px;
            position: absolute;
            width: 80%;
            bottom: 0;
        }
    }
`;
const HeaderInputElems = styled.div`
    position: relative;
    @media screen and (min-width: 794px) {
        width: 340px;
    }
`;

const HeaderInputSection = ({inputFindRefHandler, inputFindRef}) => {
    return (
        <HeaderInputWrapper>
            <HeaderInputElems>
                <HeaderInput inputFindRefHandler={inputFindRefHandler} inputFindRef={inputFindRef}/>
                <HeaderSearch inputFindRefHandler={inputFindRefHandler}/>
            </HeaderInputElems>
        </HeaderInputWrapper>
    );
};

export default React.memo(HeaderInputSection);