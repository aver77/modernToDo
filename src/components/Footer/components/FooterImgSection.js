import React from 'react';
import styled from 'styled-components';
import FooterImg from './FooterImg';

import app from '../../../images/app.png';
import git from '../../../images/github.png';

const FooterImgsText = styled.p`
    margin-top: 14px;
    @media screen and (max-height: 374px) {
        & {
            margin-top: 4px;
        }
    }
`;
const FooterImgsElems = styled.div`
    margin-top: 4px;
`;
const FooterImagesSection = styled.div``;

const FooterImgs = () => {
    return (
        <FooterImagesSection>
            <FooterImgsText>NW Apps:</FooterImgsText>
            <FooterImgsElems>
                <FooterImg imgLink={app} imgAlt="NW apps" hrefLink='https://nwproject.netlify.app'/>
                <FooterImg imgLink={git} imgAlt="GitHub" hrefLink='https://github.com/aver77'/>
            </FooterImgsElems>
        </FooterImagesSection>
    );
};
export default React.memo(FooterImgs);