import axios from 'axios';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
  type NguoiDiCung = {
    ten: string;
    doiTuong: string;
    soGhe: string;
  };

  const [formData, setFormData] = useState<{
    tenNguoiDat: string;
    soDienThoai: string;
    email: string;
    soCCCD: string;
    tenTour: string;
    ngayDi: string;
    ngayVe: string;
    diemDon: string;
    maDonHang: string;
    trangThai: string;
    nguoiDiCung: NguoiDiCung[];
    tenNguoiDiCung: string;
    doiTuongDiCung: string;
    soGheDiCung: string;
  }>({
    tenNguoiDat: '',
    soDienThoai: '',
    email: '',
    soCCCD: '',
    tenTour: '',
    ngayDi: '',
    ngayVe: '',
    diemDon: '',
    maDonHang: '',
    trangThai: 'Chưa thanh toán',
    nguoiDiCung: [],
    tenNguoiDiCung: '',
    doiTuongDiCung: 'Nguoi lon',
    soGheDiCung: '',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      maDonHang: uuidv4().slice(0, 8).toUpperCase(),
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đơn hàng ${formData.maDonHang} đã được gửi!`);
    console.log(formData);

    try {
      const res = await axios.post('/api/send-email', formData);
      if (res.status == 200) {
        alert('Gửi email thành công!');
      }
    } catch (err) {
      console.error('❌ Gửi email thất bại:', err);
    }
  };

  const handleAddNguoiDiCung = () => {
    if (!formData.tenNguoiDiCung.trim() || !formData.soGheDiCung) return;
    setFormData((prev) => ({
      ...prev,
      nguoiDiCung: [
        ...prev.nguoiDiCung,
        {
          ten: prev.tenNguoiDiCung,
          doiTuong: prev.doiTuongDiCung,
          soGhe: prev.soGheDiCung,
        },
      ],
      tenNguoiDiCung: '',
      doiTuongDiCung: 'Nguoi lon',
      soGheDiCung: '',
    }));
  };

  const gheOptions = Array.from({ length: 40 }, (_, i) => `G${i + 1}`);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl my-6 mx-auto p-8 bg-white shadow-lg rounded-2xl space-y-6 bg-[url('/bg-form.jpg')] bg-cover bg-center"
    >
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">🧳 Đặt Tour Du Lịch</h2>

      {/* Người đặt */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-green-700 bg-slate-600">👤 Thông tin người đặt</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Họ tên</label>
            <input
              name="tenNguoiDat"
              value={formData.tenNguoiDat}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Số điện thoại</label>
            <input
              name="soDienThoai"
              value={formData.soDienThoai}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Số CCCD</label>
            <input
              name="soCCCD"
              value={formData.soCCCD}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 mt-1"
              required
            />
          </div>
        </div>
      </div>

      {/* Người đi cùng */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-green-700 bg-slate-600">🧑‍🤝‍🧑 Người đi cùng</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="tenNguoiDiCung"
            placeholder="Tên người đi cùng"
            value={formData.tenNguoiDiCung}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2"
          />
          <select
            name="doiTuongDiCung"
            value={formData.doiTuongDiCung}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2"
          >
            <option value="Nguoi lon">Người lớn</option>
            <option value="Tre em">Trẻ em</option>
          </select>
          <select
            name="soGheDiCung"
            value={formData.soGheDiCung}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2"
          >
            <option value="">-- Chọn ghế --</option>
            {gheOptions.map((ghe) => (
              <option key={ghe} value={ghe}>
                {ghe}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={handleAddNguoiDiCung}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          ➕ Thêm người đi cùng
        </button>
        {formData.nguoiDiCung.length > 0 && (
          <div className="overflow-x-auto mt-4">
            <table className="w-full table-auto text-sm border border-gray-300">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="border px-3 py-2 text-left">Họ tên</th>
                  <th className="border px-3 py-2 text-left">Đối tượng</th>
                  <th className="border px-3 py-2 text-left">Số ghế</th>
                  <th className="border px-3 py-2 text-left">Đơn giá</th>
                  <th className="border px-3 py-2 text-left">Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {formData.nguoiDiCung.map((nguoi: any, index: number) => {
                  const donGia = nguoi.doiTuong === 'Tre em' ? 500000 : 2000000;
                  return (
                    <tr key={index}>
                      <td className="border px-3 py-2">{nguoi.ten}</td>
                      <td className="border px-3 py-2">{nguoi.doiTuong}</td>
                      <td className="border px-3 py-2">{nguoi.soGhe}</td>
                      <td className="border px-3 py-2">{donGia.toLocaleString()} VND</td>
                      <td className="border px-3 py-2">{donGia.toLocaleString()} VND</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Tour */}
      <div className="space-y-4 m-4">
        <h3 className="text-2xl font-semibold text-gray-700">📍 Thông tin tour</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <h2 className="text-xl font-bold text-yellow-600 my-3">Vui lòng chọn tour </h2>
          <select
            name="tenTour"
            value={formData.tenTour}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          >
            <option value="">-- Chọn tour --</option>
            <option value="Hạ Long">Hạ Long</option>
            <option value="Nha Trang">Nha Trang</option>
            <option value="Đà Lạt">Đà Lạt</option>
            <option value="Sa Pa">Sa Pa</option>
          </select>
          <h2 className="text-xl font-bold text-yellow-600 my-3">Điểm đón</h2>
          <select
            name="diemDon"
            value={formData.diemDon}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          >
            <option value="">-- Chọn điểm đón --</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="TP.HCM">TP.HCM</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
            <option value="Cần Thơ">Cần Thơ</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <h2 className="text-xl font-bold text-blue-900 my-3">Ngày đi</h2>

          <input
            type="date"
            name="ngayDi"
            value={formData.ngayDi}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <h2 className="text-xl font-bold text-blue-900">Ngày về</h2>
          <input
            type="date"
            name="ngayVe"
            value={formData.ngayVe}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>
      </div>

      {/* Mã đơn hàng */}
      <div className="text-sm text-gray-600 mt-4">
        <p>
          <strong>Mã đơn hàng:</strong> {formData.maDonHang || 'Đang tạo...'}
        </p>
        <p>
          <strong>Trạng thái:</strong> {formData.trangThai}
        </p>
      </div>

      <button
        type="submit"
        className="bg-blue-400 block w-full  hover:bg-blue-800 text-yellow-700 text-lg font-semibold py-3 rounded-lg transition"
      >
        Đặt tour
      </button>
    </form>
  );
}
