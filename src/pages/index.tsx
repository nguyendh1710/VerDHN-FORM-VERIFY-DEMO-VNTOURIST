import Head from 'next/head';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className=" bg-[url('/bg-home.webp')] bg-cover bg-center h-screen">
        <Head>
          <title>Trang chủ </title>
          <meta name="description" content="Chào mừng đến với VN Tourist - Trang chủ ." />
        </Head>
        <div className="py-32">
          <h1 className="text-3xl text-center font-bold text-white">
            Chào mừng đến với trang chủ VN Tourisst
          </h1>

          <button
            type="button"
            onClick={() => router.push('/tour-form')}
            className="bg-blue-600 block w-full md:w-[400px] my-4 mx-auto hover:bg-blue-800 text-yellow-700 text-lg font-semibold py-3 rounded-lg transition mx-auto"
          >
            Nhấn để vào trang đặt tour
          </button>
        </div>
      </div>
    </>
  );
}
