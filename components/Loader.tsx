import React, { FC } from 'react';

const Loader: FC = () => {
    return (
        <div className="loader-wrap">
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
            </svg>

            <div className="loader-wrap-heading" style={{ textAlign: 'center' }}>
                <div className="load-text">
                    <span>S</span><span>u</span><span>n</span><span>n</span><span>a</span>
                    <span>h</span><br />
                    <span>E</span><span>d</span><span>i</span><span>t</span><span>s</span>
                </div>
            </div>
        </div>
    );
};

export default Loader;