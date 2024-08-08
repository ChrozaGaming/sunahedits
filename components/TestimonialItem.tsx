import React, { FC } from 'react';

interface TestimonialItemProps {
    text: string;
    role: string;
    name: string;
    image: string;
    styleClass: string;
}

const TestimonialItem: FC<TestimonialItemProps> = ({ text, role, name, image, styleClass }) => {
    return (
        <div className={`swiper-slide ${styleClass}`}>
            <div className="item">
                <div>
                    <h6>{text}</h6>
                </div>
                <div className="info d-flex align-items-center mt-60">
                    <div className="info-text">
                        <p>{role}</p>
                        <span>{name}</span>
                    </div>
                    <div className="ml-auto">
                        <div className="img-author fit-img">
                            <img src={image} alt={name} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;
