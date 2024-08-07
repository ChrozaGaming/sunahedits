import React, { FC } from 'react';
import MarqueeBox from './MarqueeBox';

const MarqueeSection: FC = () => {
    const items = [
        "Top-notch Experts",
        "Dedicated Support 24/7",
        "Flexible Pricing",
        "Top-notch Experts",
        "AI-Driven Solutions",
        "Flexible Pricing"
    ];

    return (
        <div className="marq-mp">
            <div className="main-marq color-bg shadow-off">
                <div className="slide-har st1">
                    <MarqueeBox items={items} />
                    <MarqueeBox items={items} />
                </div>
            </div>
            <div className="main-marq gray-bg shadow-off">
                <div className="slide-har st2">
                    <MarqueeBox items={items} />
                    <MarqueeBox items={items} />
                </div>
            </div>
        </div>
    );
};

export default MarqueeSection;