import React, { FC } from 'react';
import SmoothContent from './SmoothContent';
import Header from './Header';
import PortfolioSection from './PortfolioSection';
import MarqueeSection from './MarqueeSection';
import ServicesSection from './ServicesSection';
import BoxLight from './BoxLight';
import BoxDark from './BoxDark';
import styled from 'styled-components';

const Wrapper = styled.div`
    overflow-x: hidden;
    width: 100%;
`;

const SmoothWrapper: FC = () => {
    return (
        <Wrapper id="smooth-wrapper">
            <SmoothContent>
                <Header />
                <PortfolioSection />
                <MarqueeSection />
                <ServicesSection />
                <BoxLight />
                <BoxDark />
                {/* Konten lainnya bisa ditambahkan di sini */}
            </SmoothContent>
        </Wrapper>
    );
};

export default SmoothWrapper;