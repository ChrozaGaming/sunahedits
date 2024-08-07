import React, { FC } from 'react';

interface BrandItemProps {
    name: string;
    image: string;
    noDot?: boolean;
}

const BrandItem: FC<BrandItemProps> = ({ name, image, noDot }) => {
    return (
        <div className={`item ${noDot ? 'nodot' : ''}`}>
            <h2>{name}</h2>
            <div className="icon">
                <img src={image} alt={name} />
            </div>
        </div>
    );
};

export default BrandItem;