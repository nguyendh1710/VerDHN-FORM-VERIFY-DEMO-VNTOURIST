import Form from '@/modules/Mail/Form/Form';
import VerifyEmail from '@/modules/Mail/VerifyEmail/VerifyEmail';
import Head from 'next/head';
const sampleData = {
  tenNguoiDat: 'Nguyen Van A',
  email: 'example@gmail.com',
  soDienThoai: '0123456789',
  soCCCD: '123456789',
  tenTour: 'Ha Long Bay Tour',
  ngayDi: '2025-08-10',
  ngayVe: '2025-08-15',
  maDonHang: 'DH001',
  nguoiDiCung: [{ ten: 'Nguyen Van B', doiTuong: 'Bạn', soGhe: '2' }],
};

export default function TourForm() {
  return (
    <>
      <Head>
        <title>Trang đặt tour</title>
        <meta name="description" content="Chào mừng đến với VN Tourist - Trang đặt tour ." />
      </Head>
      {/* <Form /> */}
      <VerifyEmail data={sampleData} />
    </>
  );
}
