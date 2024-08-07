import React, { FC } from 'react';

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    socialLinks: { platform: string; url: string }[];
}

const TeamMember: FC<TeamMemberProps> = ({ name, role, image, socialLinks }) => {
    return (
        <div className="item mb-10">
            <div className="d-flex">
                <div>
                    <div className="img fit-img">
                        <img src={image} alt={name} />
                    </div>
                </div>
                <div className="cont">
                    <h2>{name}</h2>
                    <span>{role}</span>
                </div>
                <div className="ml-auto">
                    <div className="social-icon">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.url}>
                                <i className={`fa-brands fa-${link.platform}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;