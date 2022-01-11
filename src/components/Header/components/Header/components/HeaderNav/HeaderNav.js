import React from 'react';
import styled from 'styled-components';
import HeaderLinkItem from './HeaderLinkItem';

const HeaderNavElem = styled.nav``;
const HeaderUl = styled.ul`
    padding-top:14px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;
`;

const HeaderNav = () => {
    return (
        <HeaderNavElem>
            <HeaderUl>
                <HeaderLinkItem linkPath='/liked' linkText='Liked'/>
                <HeaderLinkItem linkPath='/solved' linkText='Solved'/>
                <HeaderLinkItem linkPath='/deleted' linkText='Deleted'/>
            </HeaderUl>
        </HeaderNavElem>
    );
};
export default React.memo(HeaderNav);