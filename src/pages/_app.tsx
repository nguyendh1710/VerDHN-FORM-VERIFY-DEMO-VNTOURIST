import Head from 'next/head'; // Đảm bảo đường dẫn chính xác
import { AppProps } from 'next/app';
import '@/styles/globals.css'; // Đảm bảo đường dẫn chính xác tới file CSS của bạn
import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SUNFIL - Website chính thức</title>
        <meta name="description" content="VN Tourist - Kiến tạo tương lai số bền vững." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="App">
        <Component {...pageProps} /> {/* Render trang hiện tại */}
      </div>
    </>
  );
}
export default MyApp;
