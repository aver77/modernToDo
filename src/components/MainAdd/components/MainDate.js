import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import moment from 'moment';

import moonTime from '../../../images/moonTime.png';
import earthTime from '../../../images/earthTime.png';

const FlexDiv = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;
`;

const MainDateImg = styled.img`
    height: 64px;
    width: 64px;
    @media screen and (max-width: 403px) {
        & {
            height: 48px;
            width: 48px;
        }
    }
`;
const MainDateImgWrapper = styled(FlexDiv)`
    padding-top:24px;
    @media screen and (max-width: 1402px) {
        & {
            margin: 0 auto;
        }
    }
`;
const MainItemDateWrapper = styled(FlexDiv)`
`;

const MainItemCurrentDate = styled.span`
    margin: 0px 0 0 32px;
    font-size: 24px;
    @media screen and (max-width: 403px) {
        & {
            font-size: 19px;
            margin: 0px 0 0 16px;
        }
    }
`;

const MainDate = () => {
    const [currentDate, setCurrentDate] = useState('');
    const nowDate = moment().format('LL') + '';
    const nowTime = moment().format('LT').split('');
    const checkNowTime = nowTime[nowTime.length-2];

    useEffect(() => {
        setCurrentDate(nowDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[nowDate]);

    const timeHandler = () => {
        if (checkNowTime === "A" && (nowTime[0] + nowTime[1]) === "12") {return true;}
        if (checkNowTime === "A" && nowTime.length === 7 && +nowTime[0] < 5) {return true;}
        if (checkNowTime === "A" && nowTime.length === 7 && +nowTime[0] >= 5) return false;
        if (checkNowTime === "A" && nowTime.length > 7) {return false;}
        if (checkNowTime === "P" && (nowTime[0] + nowTime[1]) === "12") {return false;}
        if (checkNowTime === "P" && nowTime.length === 7 && +nowTime[0] < 6) {return false;}
        if (checkNowTime === "P" && nowTime.length === 7 && +nowTime[0] >= 6) {return true;}
        if (checkNowTime === "P" && nowTime.length > 7) {return true;}
        return true;
    }

    return (
        <MainDateImgWrapper>
            {
            timeHandler()?
                <MainDateImg src={moonTime} alt="time img"/>
                :
                <MainDateImg src={earthTime} alt="time img"/>
            }
            <MainItemDateWrapper>
                <MainItemCurrentDate>{currentDate}</MainItemCurrentDate>
            </MainItemDateWrapper>
        </MainDateImgWrapper>
    );
};

export default React.memo(MainDate);