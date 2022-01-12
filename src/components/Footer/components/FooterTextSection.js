import React from 'react';
import styled from 'styled-components';

const Br = styled.br`
`;
const FooterTextSectionElem = styled.div`
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

const FooterTextSection = () => {
    return (
        <FooterTextSectionElem>
            <FooterText>Thanks for using<Br/>NW Todo app!</FooterText>
        </FooterTextSectionElem>
    );
};
export default React.memo(FooterTextSection);