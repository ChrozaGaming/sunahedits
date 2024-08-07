import React, { FC } from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioSection: FC = () => {
    return (
        <div className="works-mp section-padding pt-40">
            <div className="container">
                <div className="sec-head mb-80">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2><span>Our Portfolio</span></h2>
                        </div>
                        <div className="col-lg-5 d-flex align-items-center">
                            <div className="ml-auto">
                                {/* <span className="sub-head">Our user-centered design encourages <br/> productivity & boosts revenue.</span> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row md-marg gallery">
                    <PortfolioItem
                        title="Trainwithgaff"
                        description="Fitness Niche"
                        link="https://uithemez.com/i/hubfolio_HTML/inner_pages/project-details.html"
                        media="assets/video_portfolio/portfolio11.mp4"
                        mediaType="video"
                    />
                    <PortfolioItem
                        title="Brother Saleh"
                        description="Long Form"
                        link="https://uithemez.com/i/hubfolio_HTML/inner_pages/project-details.html"
                        media="assets/video_portfolio/portfolio12.mp4"
                        mediaType="video"
                    />
                    <PortfolioItem
                        title="Newz Magazine Site"
                        description="ui/ux design, Illustration photography"
                        link="https://uithemez.com/i/hubfolio_HTML/inner_pages/project-details.html"
                        media="assets/imgs/works/3.jpg"
                        mediaType="image"
                    />
                    <PortfolioItem
                        title="Archin"
                        description="branding, ui/ux design, motion, seo"
                        link="https://uithemez.com/i/hubfolio_HTML/inner_pages/project-details.html"
                        media="assets/imgs/works/4.jpg"
                        mediaType="image"
                    />
                    <PortfolioItem
                        title="Jorger Clarkson"
                        description="UI/UX Designm Landing Page, Webflow, Framer"
                        link="https://uithemez.com/i/hubfolio_HTML/inner_pages/project-details.html"
                        media="assets/imgs/works/6.jpg"
                        mediaType="image"
                    />
                    <PortfolioItem
                        title="LW Rebrand"
                        description="branding, rebrand, postion strategy, animation"
                        link="https://uithemez.com/i/hubfolio_HTML/inner_pages/project-details.html"
                        media="assets/imgs/works/5.jpg"
                        mediaType="image"
                    />
                    <PortfolioItem
                        title="Boat News"
                        description="UI/Ux Design, Webflow"
                        link="https://uithemez.com/i/hubfolio_HTML/inner_pages/project-details.html"
                        media="assets/imgs/works/9.jpg"
                        mediaType="image"
                    />
                    <PortfolioItem
                        title="The Unerio"
                        description="ui/ux design, mobile app, motion, seo"
                        link="https://uithemez.com/i/hubfolio_HTML/inner_pages/project-details.html"
                        media="assets/imgs/works/7.jpg"
                        mediaType="image"
                    />
                    <PortfolioItem
                        title="Arc Garden"
                        description="branding, Graphic Design"
                        link="https://uithemez.com/i/hubfolio_HTML/inner_pages/project-details.html"
                        media="assets/imgs/works/8.jpg"
                        mediaType="image"
                    />
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;