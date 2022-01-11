import React from 'react';
import styled from 'styled-components';

import FooterTitle from './components/FooterTitle';
import FooterTextSection from './components/FooterTextSection';
import FooterImgs from './components/FooterImgSection';

const FlexD = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;
`;
const FooterWrapper = styled.div`
    background:#EE6E73;
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    z-index:998;
    min-width: 100%;
    min-height: 76px;
    box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.16);
`;
const FooterMenu = styled(FlexD)`
    @media screen and (max-width: 721px) and (min-height: 400px) {
        & {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;
const FooterSection = styled(FlexD)`
    @media screen and (max-width: 721px) {
        & {
            margin: 12px 0 12px 0;
        }
    }
`;

const FooterItem = () => {
    return (
        <FooterWrapper>
            <FooterMenu className="_container">
                <FooterTitle/>
                <FooterSection>
                    <FooterTextSection/>
                    <FooterImgs/>
                </FooterSection>
            </FooterMenu>
        </FooterWrapper>
    );
};
export default FooterItem;