import React from 'react';
import styled from 'styled-components';
import { FlexDiv } from '../MainAdd/MainAdd';

import app from '../../images/app.png';
import git from '../../images/github.png';

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
const FooterMenu = styled(FlexDiv)`
    @media screen and (max-width: 721px) and (min-height: 400px) {
        & {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;
const FooterTitle = styled.p`
    cursor: pointer;
    /* margin-top:14px; */
    font-family: 'Birthstone';
    font-style: normal;
    font-size:44px;
    color: black;
    @media screen and (max-width: 721px) {
        & {
            margin-top: 12px;
        }
    }
    @media screen and (max-height: 374px) {
        & {
            margin-top: 0px;
        }
    }
`;
// const FooterExtraInfo = styled.p`
//     padding-top: 44px;
//     color: #fff;
//     font-size: 12px;
//     opacity: 0.4;
//     text-align: center;
// `
const Br = styled.br``;
const FooterSection = styled(FlexDiv)`
    @media screen and (max-width: 721px) {
        & {
            margin: 12px 0 12px 0;
        }
    }
`;
const FooterTextSection = styled.div`
    padding: 12px 48px 0 0;
    @media screen and (max-width: 372px) {
        & {
            padding: 12px 28px 0 0;
        }
    }
    @media screen and (max-height: 374px) {
        & {
            padding: 12px 28px 6px 0;
        }
    }
`;
const FooterText = styled.span`
    font-size: 20px;
    @media screen and (max-width: 372px) {
        & {
            font-size: 16px;
        }
    }
    @media screen and (max-height: 374px) {
        & {
            font-size: 16px;
        }
    }
`;
const FooterImagesSection = styled.div`
    
`;
const FooterImgsText = styled.p`
    margin-top: 14px;
    @media screen and (max-height: 374px) {
        & {
            margin-top: 4px;
        }
    }
`;
const FooterImgs = styled.div`    
`;
const FooterImg = styled.img`
    cursor: pointer;
    margin: 4px 6px 0px 4px;
    height: 32px;
    width: 32px;
    transition: 0.3s ease;
    &:focus,&:hover,&:active {
        opacity: 0.5;
    }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterMenu className="_container">
                <FooterTitle>NW Project</FooterTitle>
                <FooterSection>
                    <FooterTextSection>
                        <FooterText>Thanks for using<Br/>NW Todo app!</FooterText>
                    </FooterTextSection>
                    <FooterImagesSection>
                        <FooterImgsText>NW Apps:</FooterImgsText>
                        <FooterImgs>
                            <FooterImg src={app} alt="NW apps" />
                            <FooterImg src={git} alt="GitHub" />
                        </FooterImgs>
                    </FooterImagesSection>
                </FooterSection>
            </FooterMenu>
        </FooterWrapper>
    );
};

export default Footer;