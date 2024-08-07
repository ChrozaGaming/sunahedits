import React, { FC } from 'react';
import MarqueeItem from './MarqueeItem';

interface MarqueeBoxProps {
    items: string[];
}

const MarqueeBox: FC<MarqueeBoxProps> = ({ items }) => {
    return (
        <div className="box">
            {items.map((item, index) => (
                <MarqueeItem key={index} text={item} />
            ))}
        </div>
    );
};

export default MarqueeBox;