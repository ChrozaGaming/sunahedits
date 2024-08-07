import '../public/assets/common/css/plugins.css';
import '../public/assets/common2/css/plugins.css';
import '../public/assets/common/css/common_style.css';
import '../public/assets2/css/home8-style.css';
import '../public/assets/css/home4-style.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;