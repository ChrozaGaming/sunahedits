import React, { FC } from 'react';
import ProcessItem from './ProcessItem';

const ProcessSection: FC = () => {
    const processes = [
        {
            image: 'assets/imgs/process/1.jpg',
            title: 'Research',
            description: 'We listen stories of user to understand pain points and give a rough estimate about cost and time-frame',
            step: '01'
        },
        {
            image: 'assets/imgs/process/2.jpg',
            title: 'Concept',
            description: 'After wireframe got approved, we’ll build a prototype design to visually the idea. Client can easy to interactive with its',
            step: '02'
        },
        {
            image: 'assets/imgs/process/3.jpg',
            title: 'Implementation',
            description: 'Coding will implement at this step, by using combine new tech as Webflow, Wordpress, iOs, etc. We turn design into live',
            step: '03'
        },
        {
            image: 'assets/imgs/process/4.jpg',
            title: 'Testing',
            description: 'We’ll test carefully with A/B, accessible, usability, etc to ensure best quality as possible before hand over to client',
            step: '04'
        }
    ];

    return (
        <div className="process-mp section-padding">
        <div className="container">
        <div className="sec-head mb-80">
        <div className="row">
        <div className="col-lg-7">
            <h2><span>Process</span> Workflow</h2>
    </div>
    <div className="col-lg-5 d-flex align-items-center">
    <div className="ml-auto">
    <span className="sub-head">
        As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.
    </span>
    <a href="https://uithemez.com/i/hubfolio_HTML/inner_pages/contact.html" className="butn butn-md butn-bord butn-rounded mt-40">
    <div className="d-flex align-items-center">
        <span>Start Project</span>
    <span className="icon ml-10">
    <i className="fa-solid fa-chevron-right"></i>
        </span>
        </div>
        </a>
        </div>
        </div>
        </div>
        </div>
        <div className="swiper process-swiper swiper-container">
    <div className="swiper-wrapper">
        {processes.map((process, index) => (
                <ProcessItem
                    key={index}
            image={process.image}
            title={process.title}
            description={process.description}
            step={process.step}
    />
))}
    </div>
    </div>
    </div>
    </div>
);
};

export default ProcessSection;