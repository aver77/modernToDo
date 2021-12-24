import React from 'react';
import styled from 'styled-components';

//компонент с кнопками (ссылками)
const Pagination = ({currentIndex, tasksPerPage, totalTasks, paginate}) => {
    const totalPagesAmount =  Math.ceil(totalTasks / tasksPerPage);
    //вывод кнопочек (исправить как 1,2,3...n)
    const pageOfAllNumbers = [] //1,2,...кол-во страниц
    for (let i=1; i<=totalPagesAmount; i++) { //1,2,3,4,5,6,7,8
        pageOfAllNumbers.push(i);
    }

    const PaginationWrapper = styled.div`
    `;
    const PaginationUl = styled.ul`
    `;
    const PaginationLi = styled.li`
    `;
    const PaginationLiItem = styled.a`
        &:focus,&:hover,&:active {
            opacity: 0.6;
        }
    `;
    const PaginationLiText= styled.span`
    `;

    const ViewLiItem = ({number = null}) => {
        return (
            <PaginationLiItem 
                href="#0"
                onClick={() => number?paginate(number): null}
            >
                <PaginationLiText>{number?number:'...'}</PaginationLiText>
            </PaginationLiItem>
        );
    }

    return (
        <PaginationWrapper>
            <PaginationUl>
                {
                    (pageOfAllNumbers.length <=3) ?
                        pageOfAllNumbers.map(number => {
                            return (
                                <PaginationLi key={number}>
                                    <ViewLiItem number={number}/>
                                </PaginationLi>
                            );
                        })
                    :
                    pageOfAllNumbers.map((number,index) => {
                        if (currentIndex <= 3) {
                            return (
                                index < 3?
                                <PaginationLi key={number}>
                                    <ViewLiItem number={number}/>
                                </PaginationLi>
                                :
                                index === 3?
                                <PaginationLi key={number}>
                                    <ViewLiItem/>
                                    <ViewLiItem number={totalPagesAmount}/>
                                </PaginationLi>
                                :
                                null
                            );
                        }   
                        else if (currentIndex > 3 && totalPagesAmount >=7 && currentIndex<= totalPagesAmount - 3) {
                            return (
                                index === 0?
                                <PaginationLi key={number}>
                                    <ViewLiItem number={number}/>
                                    <ViewLiItem/>
                                </PaginationLi>
                                :
                                (index >= currentIndex && index < currentIndex + 3)?
                                    <PaginationLi key={number}>
                                        <ViewLiItem number={number}/>
                                    </PaginationLi>
                                :
                                (index === currentIndex + 3)?
                                    <PaginationLi key={number}>
                                        <ViewLiItem/>
                                        <ViewLiItem number={totalPagesAmount}/>
                                    </PaginationLi>
                                :
                                null
                            );
                        }
                        else if (currentIndex > 3 && currentIndex >= totalPagesAmount - 3) {
                            return (
                                index === 0?
                                    <PaginationLi key={number}>
                                        <ViewLiItem number={number}/>
                                        <ViewLiItem/>
                                    </PaginationLi>
                                :
                                (index >= totalPagesAmount - 2)? 
                                    <PaginationLi key={number}>
                                        <ViewLiItem number={number}/>
                                    </PaginationLi>
                                :
                                null
                            );
                        }

                        return <></>;
                    })
                }
            </PaginationUl>
        </PaginationWrapper>
    );
};

export default Pagination;