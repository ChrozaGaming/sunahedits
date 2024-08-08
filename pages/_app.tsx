import '../public/assets/common/css/plugins.css';
import '../public/assets/common2/css/plugins.css';
import '../public/assets/common/css/common_style.css';
import '../public/assets2/css/home8-style.css';
import '../public/assets/css/home4-style.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

// Muat CommonScripts secara dinamis
const CommonScripts = dynamic(() => import('../public/assets/common/js/common_scripts.mjs'), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (  
    <>
      <Component {...pageProps} />
      <CommonScripts />
    </>
  );
}

export default MyApp;