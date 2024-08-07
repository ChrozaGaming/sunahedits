import React, { FC, useState } from 'react';
import ServiceTab from './ServiceTab';

const ServicesSection: FC = () => {
    const [activeTab, setActiveTab] = useState('tab-1');

    const servicesData = [
        {
            id: 'tab-1',
            title: 'Design',
            image: 'assets/imgs/serv/1.jpg',
            services: [
                ['Branding identity', 'Strategy and planning', 'rebrand', 'pitchdesk'],
                ['UI/UX Design', 'Wireframe & prototype', 'motion']
            ]
        },
        {
            id: 'tab-2',
            title: 'Deployment',
            image: 'assets/imgs/serv/2.jpg',
            services: [
                ['website development', 'mobile app', 'ecommerce website', 'no-code website'],
                ['landing page', 'plugins']
            ]
        },
        {
            id: 'tab-3',
            title: 'Growth',
            image: 'assets/imgs/serv/3.jpg',
            services: [
                ['Marketing Consult', 'SEO / PPC', 'Social Media', 'GG/ FB Ads'],
                ['Affiliate', 'Email Marketing']
            ]
        }
    ];

    return (
        <div className="services-mp section-padding">
            <div className="container">
                <div className="sec-head mb-80">
                    <div className="row">
                        <div className="col-lg-7">
                            <h2><span>Our</span> Services</h2>
                        </div>
                        <div className="col-lg-5 d-flex align-items-center">
                            <div className="ml-auto">
                <span className="sub-head">
                  As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.
                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 valign">
                        <div className="serv-title md-mb50">
                            {servicesData.map((service) => (
                                <div
                                    key={service.id}
                                    className={`tab-title ${activeTab === service.id ? 'current' : ''}`}
                                    data-tab={service.id}
                                    onClick={() => setActiveTab(service.id)}
                                >
                                    <h2>{service.title}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-5 content">
                        {servicesData.map((service) => (
                            <ServiceTab
                                key={service.id}
                                id={service.id}
                                title={service.title}
                                image={service.image}
                                services={service.services}
                                isActive={activeTab === service.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;