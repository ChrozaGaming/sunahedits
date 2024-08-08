import React, { FC } from 'react';
import styled from 'styled-components';

interface TestimonialItemProps {
    text: string;
    role: string;
    name: string;
    image: string;
    styleClass: string;
}

const SwiperSlide = styled.div`
    overflow-x: hidden;
    max-width: 100%;
`;

const Item = styled.div`
    overflow-x: hidden;
    max-width: 100%;
`;

const TestimonialItem: FC<TestimonialItemProps> = ({ text, role, name, image, styleClass }) => {
    return (
        <SwiperSlide className="swiper-slide">
            <Item className={`item ${styleClass}`}>
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
            </Item>
        </SwiperSlide>
    );
};

export default TestimonialItem;