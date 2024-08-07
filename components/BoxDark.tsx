import React, { FC } from 'react';
import ProcessSection from './ProcessSection';
import TeamSection from './TeamSection';

const BoxDark: FC = () => {
    return (
        <section className="box-dark">
            <ProcessSection />
            <TeamSection />
        </section>
    );
};

export default BoxDark;