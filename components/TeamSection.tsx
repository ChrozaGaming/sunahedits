import React, { FC } from 'react';
import TeamMember from './TeamMember';

const TeamSection: FC = () => {
    const teamMembers = [
        {
            name: 'Dejava Alif',
            role: 'CEO Founder - Sunnahedits',
            image: 'assets/imgs/team/1.png',
            socialLinks: [
                { platform: 'x-twitter', url: '#0' },
                { platform: 'instagram', url: '#0' },
                { platform: 'dribbble', url: '#0' },
                { platform: 'behance', url: '#0' }
            ]
        },
        {
            name: 'Rahat Chowhury',
            role: 'CTO & Product Management',
            image: 'assets/imgs/team/2.png',
            socialLinks: [
                { platform: 'x-twitter', url: '#0' },
                { platform: 'instagram', url: '#0' }
            ]
        },
        {
            name: 'Luke Van de Berg',
            role: 'Marketing Director',
            image: 'assets/imgs/team/3.png',
            socialLinks: [
                { platform: 'x-twitter', url: '#0' },
                { platform: 'dribbble', url: '#0' },
                { platform: 'behance', url: '#0' }
            ]
        },
        {
            name: 'Logan Dang',
            role: 'Creative Director',
            image: 'assets/imgs/team/4.png',
            socialLinks: [
                { platform: 'instagram', url: '#0' },
                { platform: 'dribbble', url: '#0' },
                { platform: 'behance', url: '#0' }
            ]
        }
    ];

    return (
        <div className="team-mp">
            <div className="container section-padding bord-thin-top-light">
                <div className="sec-head mb-80">
                    <div className="row">
                        <div className="col-lg-7">
                            <h2><span>Team’s</span> Leaders</h2>
                        </div>
                        <div className="col-lg-5 d-flex align-items-center">
                            <div className="ml-auto">
                <span className="sub-head">
                  Each product is built by passionate hearts. It’s our team! Meet our leaders.
                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        role={member.role}
                        image={member.image}
                        socialLinks={member.socialLinks}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamSection;