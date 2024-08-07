import React, { FC } from 'react';

interface ServiceTabProps {
    id: string;
    title: string;
    image: string;
    services: string[][];
    isActive: boolean;
}

const ServiceTab: FC<ServiceTabProps> = ({ id, title, image, services, isActive }) => {
    return (
        <div id={id} className={`item ${isActive ? 'current' : ''}`}>
            <div className="img">
                <img src={image} alt={title} />
            </div>
            <div className="cont">
                <div className="row">
                    {services.map((column, index) => (
                        <div className="col-sm-6" key={index}>
                            {column.map((service, idx) => (
                                <span key={idx}>{service}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceTab;