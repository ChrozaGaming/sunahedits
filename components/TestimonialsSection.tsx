import React, { FC } from 'react';
import TestimonialItem from './TestimonialItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        <div className="testimonials-mp section-padding">
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
                <Swiper
                    modules={[Navigation, Pagination]}
                    loop={false} // Aktifkan kembali loop
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{ clickable: false }}
                    navigation={true}
                    className="testim-swiper"
                    observer={true} // Tambahkan ini
                    observeParents={true} // Tambahkan ini
                    breakpoints={{
                        320: { slidesPerView: 1 }, // untuk layar kecil
                        640: { slidesPerView: 2 }, // untuk layar sedang
                        768: { slidesPerView: 3 }, // untuk layar tablet
                        1024: { slidesPerView: 5 } // untuk layar besar
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialItem
                                text={testimonial.text}
                                role={testimonial.role}
                                name={testimonial.name}
                                image={testimonial.image}
                                styleClass={testimonial.styleClass}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <span className="brush">
                <img src="assets/imgs/header/brush.svg" alt="Brush" />
            </span>
        </div>
    );
};

export default TestimonialsSection;