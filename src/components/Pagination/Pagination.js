import React from 'react';
import styled, { css } from 'styled-components';

const PaginationWrapper = styled.div`
`;
const PaginationUl = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const PaginationLiItem = styled.li`
    &:focus,&:hover,&:active {
        opacity: 0.6;
    }
`;

const PaginationLiText= styled.span`
    font-size: 24px;
    padding: 0 6px 0 6px;
    ${props => props.highlightStyles && css`
        text-shadow: 0 0 2px black;
        font-weight: 500; 
    `}
`;

const Pagination = ({pagesAmount, currentPage, maxPageNumberLimit, minPageNumberLimit, handleBtnPageClick}) => {
    //btns
    const pageNumbersBtns = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pageNumbersBtns.push(i);
    }

    return (
        <PaginationWrapper>
            <PaginationUl>
                {
                    pageNumbersBtns.map((numberBtn) => {
                        if (numberBtn < maxPageNumberLimit + 1 && numberBtn >= minPageNumberLimit) {
                        return (
                            <PaginationLiItem
                                key={numberBtn}
                                id={numberBtn}
                                onClick={handleBtnPageClick}
                            >
                                <PaginationLiText highlightStyles={currentPage === numberBtn? true : false}>{numberBtn}</PaginationLiText>
                            </PaginationLiItem>
                            )
                        }
                        else return null;
                    }   
                        
                    )
                }
            </PaginationUl>
        </PaginationWrapper>
    );
};

export default React.memo(Pagination);