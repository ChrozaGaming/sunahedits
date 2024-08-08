import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* Google Fonts */}
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap" rel="stylesheet" />
                    
                    {/* Swiper CSS */}
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/swiper/swiper-bundle.min.css"
                    />

                    {/* Font Awesome */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    
                    {/* jQuery */}
                    <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
                    <Script src="https://code.jquery.com/jquery-migrate-3.4.0.min.js" strategy="beforeInteractive" />
                    
                    {/* Swiper JS */}
                    <Script src="https://unpkg.com/swiper/swiper-bundle.min.js" strategy="beforeInteractive" />
                    
                    {/* Plugins */}
                    <Script src="/assets/common/js/lib/plugins.js" strategy="lazyOnload" />
                    <Script src="/assets/common2/js/lib/plugins.js" strategy="lazyOnload" />

                    {/* GSAP */}
                    <Script src="/assets/common/js/gsap_lib/gsap.min.js" strategy="lazyOnload" />
                    <Script src="/assets/common/js/gsap_lib/ScrollSmoother.min.js" strategy="lazyOnload" />
                    <Script src="/assets/common/js/gsap_lib/ScrollTrigger.min.js" strategy="lazyOnload" />
                    <Script src="/assets/common/js/gsap_lib/SplitText.min.js" strategy="lazyOnload" />
                    <Script src="/assets/common2/js/gsap_lib/gsap.min.js" strategy="lazyOnload" />
                    <Script src="/assets/common2/js/gsap_lib/ScrollSmoother.min.js" strategy="lazyOnload" />
                    <Script src="/assets/common2/js/gsap_lib/ScrollTrigger.min.js" strategy="lazyOnload" />
                    <Script src="/assets/common2/js/gsap_lib/SplitText.min.js" strategy="lazyOnload" />

                    {/* Common Scripts */}
                    <Script src="/assets/common/js/common_scripts.js" strategy="lazyOnload" />
                    {/* <Script src="/assets/common2/js/common_scripts.js" strategy="lazyOnload" /> */}

                    {/* Custom Scripts */}
                    <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
                    <Script src="/assets2/js/hscroll.js" strategy="lazyOnload" />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
