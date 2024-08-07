import React from 'react';
import Head from 'next/head';
import SmoothWrapper from '../components/SmoothWrapper';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                {/* Metas */}
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="keywords" content="HTML5 Template Hubfolio Multi-Purpose themeforest" />
                <meta name="description" content="Hubfolio - Multi-Purpose HTML5 Template" />
                <meta name="author" content="" />

                {/* Title */}
                <title>Sunnahedits</title>

                {/* Favicon */}
                <link rel="shortcut icon" href="/assets/imgs/favicon.ico" />
                <link rel="shortcut icon" href="/assets2/imgs/favicon.ico" />
            </Head>
            <SmoothWrapper />
        </>
    );
};

export default Home;