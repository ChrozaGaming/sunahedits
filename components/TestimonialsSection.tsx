import React, { FC } from 'react';
import styled from 'styled-components';
import TestimonialItem from './TestimonialItem';

const TestimonialsWrapper = styled.div`
    overflow-x: hidden;
    max-width: 100%;
`;

const SwiperContainer = styled.div`
    overflow-x: hidden;
    max-width: 100%;
`;

const SwiperWrapper = styled.div`
    overflow-x: hidden;
    max-width: 100%;
`;

const TestimonialsSection: FC = () => {
    const testimonials = [
        {
            text: "“A rebrand is not typically done in a chaotic, archaic industry like ours, so their work has really set us apart. 10/10 for Hub’s team.”",
            role: "CEO & Founder, Archin Studio",
            name: "B. Gordon",
            image: "assets/imgs/testim/avatar1.jpg",
            styleClass: "gray"
        },
        {
            text: "“Thanks for the support of Hubfolio team, who have been with our business for more than 3 years. A long journey with many exciting experiences and moments.”",
            role: "Project Managerment at Zumar Inc",
            name: "d. Szoboslai",
            image: "assets/imgs/testim/avatar2.jpg",
            styleClass: "colorful"
        },
        {
            text: "“Hubfolio ability to create a high quality user interface stands out. It’s something we placed a premium on.Recommended!.”",
            role: "Marketing Manager, OKG",
            name: "T. Morthy",
            image: "assets/imgs/testim/avatar3.jpg",
            styleClass: "darklen"
        },
        {
            text: "“The Hubfolio team truly amplified our messaging through their expert use of visuals.”",
            role: "President, Newz Jsc",
            name: "J. Arron",
            image: "assets/imgs/testim/avatar4.jpg",
            styleClass: "lighten"
        },
        {
            text: "“Thanks for the support of Hubfolio team, who have been with our business for more than 3 years. A long journey with many exciting experiences and moments.”",
            role: "Project Managerment at Zumar Inc",
            name: "d. Szoboslai",
            image: "assets/imgs/testim/avatar2.jpg",
            styleClass: "colorful"
        }
    ];

    return (
        <TestimonialsWrapper className="testimonials-mp section-padding">
            <div className="container-fluid">
                <div className="sec-head text-center mb-80">
                    <h2><span>Client’s</span> reviews</h2>
                    <div className="gl-rate d-flex align-items-center">
                        <div className="icon">
                            <img src="assets/imgs/testim/logo-clutch.svg" alt="Clutch" />
                        </div>
                        <div className="cont">
                            <h6>
                                4.9/5
                                <span className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </span>
                            </h6>
                            <p>Based on 24 reviews on <a href="#0">Clutch</a></p>
                        </div>
                    </div>
                </div>
                <SwiperContainer className="swiper testim-swiper swiper-container">
                    <SwiperWrapper className="swiper-wrapper">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialItem
                                key={index}
                                text={testimonial.text}
                                role={testimonial.role}
                                name={testimonial.name}
                                image={testimonial.image}
                                styleClass={testimonial.styleClass}
                            />
                        ))}
                    </SwiperWrapper>
                </SwiperContainer>
            </div>
            <span className="brush">
                <img src="assets/imgs/header/brush.svg" alt="Brush" />
            </span>
        </TestimonialsWrapper>
    );
};

export default TestimonialsSection;