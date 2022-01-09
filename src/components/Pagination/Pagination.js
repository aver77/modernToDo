import React from 'react';
import styled from 'styled-components';

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
    font-size: 20px;
    padding: 0 2px 0 2px;
    color: ${props => props.textColor || 'black'};
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
                                <PaginationLiText textColor={currentPage === numberBtn?'red':null}>{numberBtn}</PaginationLiText>
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

export default Pagination;

//     const ViewLiItem = ({number = null}) => {
//     return (
//         <PaginationLiItem 
//             onClick={() => number?handleBtnPageClick(number): null}
//         >
//             <PaginationLiText>{number?number: <>&hellip;</>}</PaginationLiText>
//         </PaginationLiItem>
//     );
// }