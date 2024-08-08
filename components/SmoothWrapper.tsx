import React, { FC } from 'react';
import SmoothContent from './SmoothContent';
import Header from './Header';
import PortfolioSection from './PortfolioSection';
import MarqueeSection from './MarqueeSection';
import ServicesSection from './ServicesSection';
import BoxLight from './BoxLight';
import BoxDark from './BoxDark';

const SmoothWrapper: FC = () => {
    return (
        <div id="smooth-wrapper">
            <SmoothContent>
                <Header />
                <PortfolioSection />
                <MarqueeSection />
                <ServicesSection />
                <BoxLight />
                <BoxDark />
                {/* Konten lainnya bisa ditambahkan di sini */}
            </SmoothContent>
        </div>
    );
};

export default SmoothWrapper;