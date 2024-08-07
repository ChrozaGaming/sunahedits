import React, { FC } from 'react';

interface MarqueeItemProps {
    text: string;
}

const MarqueeItem: FC<MarqueeItemProps> = ({ text }) => {
    return (
        <div className="item">
            <h5>{text}</h5>
        </div>
    );
};

export default MarqueeItem;