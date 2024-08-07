import React, { FC } from 'react';

interface PortfolioItemProps {
    title: string;
    description: string;
    link: string;
    media: string;
    mediaType: 'image' | 'video';
}

const PortfolioItem: FC<PortfolioItemProps> = ({ title, description, link, media, mediaType }) => {
    return (
        <div className="col-lg-4 items">
            <div className="item">
                <div className="cont d-flex align-items-center">
                    <div>
                        <h5>{title}</h5>
                        <span>{description}</span>
                    </div>
                    <div className="ml-auto">
                        <a href={link}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="img">
                    {mediaType === 'video' ? (
                        <video controls style={{ width: '100%', height: 'auto' }}>
                            <source src={media} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={media} alt={title} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;