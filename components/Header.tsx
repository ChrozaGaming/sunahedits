import React, { FC } from 'react';

const Header: FC = () => {
    return (
        <header className="header-cst">
            <div className="container-fluid">
                <div className="row sm-marg">
                    <div className="col-lg-12">
                        <div className="fit-img img">
                            <img src="assets/imgs/header/kindy.jpg" alt="Kindy" />
                        </div>
                    </div>
                </div>
                <div className="caption text-center">
                    <h1 className="title-font">SUNNAH EDITS</h1>
                    <h4 className="mt-30 fw-300">
                        Description #1 <br /> Description #2
                    </h4>
                </div>
            </div>
        </header>
    );
};

export default Header;