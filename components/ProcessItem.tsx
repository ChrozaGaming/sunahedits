import React, { FC } from 'react';

interface ProcessItemProps {
    image: string;
    title: string;
    description: string;
    step: string;
}

const ProcessItem: FC<ProcessItemProps> = ({ image, title, description, step }) => {
    return (
        <div className="swiper-slide">
            <div className="item">
                <div className="d-flex">
                    <div>
                        <div className="img fit-img">
                            <img src={image} alt={title} />
                        </div>
                    </div>
                    <div className="text">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="botm d-flex align-items-end">
                    <h3>{title}</h3>
                    <div className="ml-auto">
                        <span>{step}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessItem;