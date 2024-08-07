import React, { FC, ReactNode } from 'react';

interface SmoothContentProps {
    children: ReactNode;
}

const SmoothContent: FC<SmoothContentProps> = ({ children }) => {
    return <div id="smooth-content">{children}</div>;
};

export default SmoothContent;