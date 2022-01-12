import React from 'react';
import styled from 'styled-components';
import DefaultImage from './DefaultImage';

import likeImg from '../../../../../images/like.png';
import solveImg from '../../../../../images/solve.png';
import deleteImg from '../../../../../images/delete.png';

const TasksWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    border: 2px solid black;
    border-radius: 10px;
    background:#EE6E73;
`;
const TaskNumber = styled.p`
    font-size: 20px;
    padding: 22px 6px 22px 32px;
    font-weight: 500;
    @media screen and (max-width: 576px) {
        & {
            padding: 22px 6px 22px 22px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            font-size: 18px;
            padding: 24px 6px 24px 12px;
        }
    }
    @media screen and (max-width: 337px) {
        & {
            font-size: 16px;
            padding: 25px 4px 24px 12px;
        }
    }
`;
const TaskText = styled.p`
    font-size: 20px;
    padding-top: 22px;
    @media screen and (max-width: 576px) {
        & {
            padding-top: 24px;
            font-size: 18px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            padding-top: 26px;
            font-size: 16px;
        }
    }
    @media screen and (max-width: 337px) {
        & {
            font-size: 14px;
        }
    }
`;
const TaskImgWrapper = styled.div`
    min-width: 200px;
    padding: 22px 32px 22px 6px;
    @media screen and (max-width: 576px) {
        & {
            min-width: 100px;
            padding: 22px 22px 22px 6px;
        }
    }
    @media screen and (max-width: 417px) {
        & {
            min-width: 80px;
            padding: 22px 12px 22px 4px;
        }
    }
`;

const DefaultView = () => {
    return (
        <TasksWrapper>
            <TaskNumber>1.</TaskNumber>
            <TaskText>Add your first task!</TaskText>
            <TaskImgWrapper>
                <DefaultImage imgLink={likeImg} imgAlt="like" imgTitle="Like task"/>
                <DefaultImage imgLink={solveImg} imgAlt="solve" imgTitle="Solve task"/>
                <DefaultImage imgLink={deleteImg} imgAlt="delete" imgTitle="Delete task"/>
            </TaskImgWrapper>
        </TasksWrapper>
    );
};
export default React.memo(DefaultView);