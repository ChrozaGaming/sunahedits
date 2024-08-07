import React, { FC } from 'react';
import TestimonialsSection from './TestimonialsSection';
import BrandsSection from './BrandsSection';

const BoxLight: FC = () => {
    return (
        <section className="box-light botm-box">
            <div className="layers"></div>
            <TestimonialsSection />
            <BrandsSection />
        </section>
    );
};

export default BoxLight;