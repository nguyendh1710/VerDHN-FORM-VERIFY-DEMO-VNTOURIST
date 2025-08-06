import * as React from 'react';

type NguoiDiCung = {
  ten: string;
  doiTuong: string;
  soGhe: string;
};

type Props = {
  data: {
    tenNguoiDat: string;
    email: string;
    soDienThoai: string;
    soCCCD: string;
    tenTour: string;
    ngayDi: string;
    ngayVe: string;
    maDonHang: string;
    nguoiDiCung: NguoiDiCung[];
  };
};

export default function VerifyEmail({ data }: Props) {
  const today = new Date().toLocaleDateString();

  return (
    <html>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#f5f5f5',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <table
          width="100%"
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{ backgroundColor: '#f5f5f5', padding: '24px' }}
        >
          <tbody>
            <tr>
              <td align="center">
                <table
                  width="600"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }}
                >
                  {/* Header */}
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://api.builder.io/api/v1/image/assets/TEMP/3e36a2f500287a1bbaf7984065b786304f352a38?width=1200"
                          width={600}
                          height={131}
                          style={{
                            display: 'block',
                            border: 0,
                            outline: 'none',
                            textDecoration: 'none',
                          }}
                          alt="Header"
                        />
                      </td>
                    </tr>

                    {/* Lời cảm ơn */}
                    <tr>
                      <td style={{ padding: '24px' }}>
                        <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#333333' }}>
                          Chúng tôi xin trân trọng cảm ơn Qúy khách hàng{' '}
                          <strong style={{ color: '#4f46e5' }}>{data.tenNguoiDat}</strong>, đã đặt
                          tour du lịch tại Vietnam Tourist.
                        </p>
                        <p style={{ margin: '5px 0', fontSize: '14px', color: '#333333' }}>
                          Đơn hàng <strong style={{ color: '#4f46e5' }}>{data.maDonHang}</strong>{' '}
                          của Qúy khách đã được ghi nhận thành công ngày {today}, với thông tin như
                          sau:
                        </p>
                      </td>
                    </tr>

                    {/* Tiêu đề */}
                    <tr>
                      <td align="center" style={{ padding: '10px 20px' }}>
                        <h2 style={{ margin: 0, fontSize: '20px', color: '#1e3a8a' }}>
                          <strong>XÁC NHẬN ĐƠN HÀNG</strong>
                        </h2>
                      </td>
                    </tr>

                    {/* Chi tiết tour */}
                    <tr>
                      <td style={{ padding: '10px 20px' }}>
                        <table
                          width="100%"
                          border={0}
                          cellPadding={5}
                          cellSpacing={0}
                          style={{ borderCollapse: 'collapse', fontSize: '14px', color: '#333333' }}
                        >
                          <tbody>
                            <tr>
                              <td width={150}>
                                <strong>Tên tour:</strong>
                              </td>
                              <td>{data.tenTour}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Ngày đi:</strong>
                              </td>
                              <td>{data.ngayDi}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Ngày về:</strong>
                              </td>
                              <td>{data.ngayVe}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Mã đơn hàng:</strong>
                              </td>
                              <td style={{ color: '#4f46e5' }}>{data.maDonHang}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Trạng thái:</strong>
                              </td>
                              <td style={{ color: '#b91c1c' }}>Chưa thanh toán</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* thông tin Chi tiết */}

                    <table
                      style={{
                        display: 'flex',
                        justifyContent: 'center',

                        borderRadius: '12px',
                      }}
                    >
                      <tr>
                        <td
                          style={{
                            padding: '2px',
                            // backgroundColor: '#eef2ff',
                            border: '2px solid #4f46e5',
                            // borderRadius: '12px',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              paddingTop: '12px',
                              paddingBottom: '7px',
                              backgroundColor: '#3730A3',
                            }}
                          >
                            <strong
                              style={{
                                margin: '0 0 15px 0',
                                fontSize: '18px',
                                color: '#fffff',
                                textAlign: 'center',
                              }}
                            >
                              <h3
                                style={{
                                  color: '#fffff',
                                }}
                              >
                                CHI TIẾT ĐƠN HÀNG
                              </h3>
                            </strong>
                          </div>
                          {/* Thông tin người đặt */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Bảng thông tin người đặt */}
                            <table
                              cellPadding={10}
                              cellSpacing={0}
                              style={{
                                borderCollapse: 'collapse',
                                fontSize: '15px',
                                backgroundColor: '#ffffff',
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td width={150}>
                                    <strong>Người đặt:</strong>
                                  </td>
                                  <td style={{ color: '#4f46e5' }}>{data.tenNguoiDat}</td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>Số điện thoại:</strong>
                                  </td>
                                  <td>{data.soDienThoai}</td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>Email:</strong>
                                  </td>
                                  <td>{data.email}</td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>Số CMND/CCCD:</strong>
                                  </td>
                                  <td>{data.soCCCD}</td>
                                </tr>
                              </tbody>
                            </table>
                            {/* chi tiet dich vu*/}
                            <div style={{ backgroundColor: '#ffffff', padding: '12px' }}>
                              <div style={{ fontSize: 14, fontWeight: 'bold', color: '#4f46e5' }}>
                                Chi tiết dịch vụ
                              </div>

                              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <div style={{ display: 'flex', gap: 4 }}>
                                  <span style={{ fontSize: 14, color: '#262626' }}>Khách sạn:</span>
                                  <span style={{ fontSize: 14, fontWeight: 500, color: '#262626' }}>
                                    Khách sạn 3 sao
                                  </span>
                                </div>
                                <div style={{ display: 'flex', gap: 4 }}>
                                  <span style={{ fontSize: 14, color: '#262626' }}>
                                    Loại phòng:
                                  </span>
                                  <span style={{ fontSize: 14, fontWeight: 500, color: '#262626' }}>
                                    Phòng Twin - SL:2 | Phòng Single - SL:1
                                  </span>
                                </div>
                                <div style={{ display: 'flex', gap: 4 }}>
                                  <span style={{ fontSize: 14, color: '#262626' }}>VAT:</span>
                                  <span style={{ fontSize: 14, fontWeight: 500, color: '#262626' }}>
                                    10% - Đã bao gồm VAT
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/* bang nguoi phu thuoc */}
                            <div style={{ backgroundColor: '#ffffff', padding: '12px' }}>
                              <table
                                style={{
                                  width: '100%',
                                  borderCollapse: 'collapse',
                                  fontSize: 12,
                                  border: '1px solid #ccc',
                                }}
                              >
                                <thead
                                  style={{
                                    backgroundColor: '#e5e7eb',
                                    color: '#262626',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  <tr style={{ padding: '12px' }}>
                                    <th
                                      style={{
                                        border: '1px solid #ccc',
                                        padding: 8,
                                        textAlign: 'left',
                                      }}
                                    >
                                      Họ tên
                                    </th>
                                    <th
                                      style={{
                                        border: '1px solid #ccc',
                                        padding: 8,
                                        textAlign: 'left',
                                      }}
                                    >
                                      Đối tượng
                                    </th>
                                    <th
                                      style={{
                                        border: '1px solid #ccc',
                                        padding: 8,
                                        textAlign: 'left',
                                      }}
                                    >
                                      Đơn giá
                                    </th>
                                    <th
                                      style={{
                                        border: '1px solid #ccc',
                                        padding: 8,
                                        textAlign: 'left',
                                      }}
                                    >
                                      Số ghế
                                    </th>
                                    <th
                                      style={{
                                        border: '1px solid #ccc',
                                        padding: 8,
                                        textAlign: 'left',
                                      }}
                                    >
                                      Thành tiền
                                    </th>
                                  </tr>
                                </thead>
                                <tbody style={{ color: '#0f172a' }}>
                                  <tr>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>
                                      Nguyễn Văn A
                                    </td>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>
                                      Người lớn
                                    </td>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>
                                      2,000,000 VND
                                    </td>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>1</td>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>
                                      2,000,000 VND
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>Bé B</td>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>Trẻ em</td>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>
                                      500,000 VND
                                    </td>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>-</td>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>
                                      500,000 VND
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            {/* chi tiet phu thu */}
                            <div style={{ backgroundColor: '#ffffff', padding: '12px' }}>
                              <h3
                                style={{
                                  fontWeight: 'bold',
                                  fontSize: 14,
                                  color: '#4f46e5',
                                  marginTop: 24,
                                }}
                              >
                                Chi tiết phụ thu
                              </h3>
                              <table
                                style={{
                                  width: '100%',
                                  borderCollapse: 'collapse',
                                  fontSize: 12,
                                  border: '1px solid #ccc',
                                  marginTop: 8,
                                }}
                              >
                                <thead
                                  style={{
                                    backgroundColor: '#e5e7eb',
                                    color: '#262626',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  <tr>
                                    <th style={{ border: '1px solid #ccc', padding: 8 }}>
                                      Loại phòng phụ thu
                                    </th>
                                    <th style={{ border: '1px solid #ccc', padding: 8 }}>
                                      Đơn giá
                                    </th>
                                    <th style={{ border: '1px solid #ccc', padding: 8 }}>
                                      Số lượng
                                    </th>
                                    <th style={{ border: '1px solid #ccc', padding: 8 }}>Đơn vị</th>
                                    <th style={{ border: '1px solid #ccc', padding: 8 }}>
                                      Thành tiền
                                    </th>
                                  </tr>
                                </thead>
                                <tbody style={{ color: '#0f172a' }}>
                                  <tr>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>
                                      Phòng Twin
                                    </td>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>
                                      500,000 VND
                                    </td>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>1</td>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>Phòng</td>
                                    <td style={{ border: '1px solid #ccc', padding: 8 }}>
                                      500,000 VND
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            {/* tong tien tam tinh */}
                            <div style={{ backgroundColor: '#ffffff', padding: '12px' }}>
                              <h3
                                style={{
                                  fontWeight: 'bold',
                                  fontSize: 14,
                                  color: '#4f46e5',
                                  marginTop: 24,
                                }}
                              >
                                Tổng tiền tạm tính
                              </h3>
                              <table style={{ width: '100%', fontSize: 14, marginTop: 8 }}>
                                <tbody>
                                  <tr>
                                    <td style={{ color: '#262626' }}>Tổng tiền tạm tính:</td>
                                    <td style={{ color: '#262626', fontWeight: 500 }}>
                                      4,500,000 VNĐ
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{ color: '#262626' }}>Tổng tiền phụ thu:</td>
                                    <td style={{ color: '#262626', fontWeight: 500 }}>
                                      500,000 VNĐ
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{ color: '#262626' }}>Chiết khấu (giảm giá):</td>
                                    <td style={{ color: '#262626', fontWeight: 500 }}>0 VNĐ</td>
                                  </tr>
                                  <tr>
                                    <td style={{ color: '#262626' }}>Đã thanh toán:</td>
                                    <td style={{ color: '#262626', fontWeight: 500 }}>0 VNĐ</td>
                                  </tr>
                                  <tr>
                                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>
                                      Số tiền còn lại cần thanh toán:
                                    </td>
                                    <td style={{ color: '#ea580c', fontWeight: 'bold' }}>
                                      5,000,000 VNĐ
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>

                    {/* 2 nut */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: '26px',
                        marginBottom: ' 20px',
                        marginTop: '20px',
                        width: '100%',
                      }}
                    >
                      {/* Nút 1: Xác nhận đơn hàng */}
                      <a
                        href="#"
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#10b981',
                          color: '#ffffff',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          textDecoration: 'none',
                          padding: '12px 24px',
                          borderRadius: '9999px',
                          marginRight: '8px',
                        }}
                      >
                        Xác nhận đơn hàng
                      </a>

                      {/* Nút 2: Chỉnh sửa thông tin */}
                      <a
                        href="#"
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#f97316',
                          color: '#ffffff',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          textDecoration: 'none',
                          padding: '12px 24px',
                          borderRadius: '9999px',
                        }}
                      >
                        Chỉnh sửa thông tin
                      </a>
                    </div>

                    {/* Footer và thông báo thanh toán */}
                    <tr>
                      <td style={{ padding: '20px' }}>
                        <table
                          width="100%"
                          cellPadding={10}
                          style={{
                            backgroundColor: '#e0e7ff',
                            borderRadius: '8px',
                            fontSize: '14px',
                            color: '#333333',
                            width: '100%',
                          }}
                        >
                          <tbody>
                            <tr>
                              {/* Cột 1: Icon */}
                              <td style={{ paddingRight: '17px' }}>
                                <img src="/clock.png" alt="icon" width={80} height={80} />
                              </td>

                              {/* Cột 2: Nội dung văn bản */}
                              <td
                                style={{
                                  textAlign: 'center',
                                  fontWeight: 'bold',
                                  color: '#000000',
                                }}
                              >
                                <p
                                  style={{
                                    margin: '0 0 12px 0',
                                    textAlign: 'left',
                                    fontSize: '14px',
                                    fontWeight: 'normal',
                                  }}
                                >
                                  Để đảm bảo giữ chỗ, Quý khách vui lòng thanh toán đơn hàng trong
                                  vòng <span style={{ color: '#dc2626' }}>24 giờ</span> kể từ khi
                                  nhận được email này.
                                </p>

                                <p
                                  style={{
                                    margin: 0,
                                    textAlign: 'left',
                                    fontSize: '14px',
                                    fontWeight: 'normal',
                                  }}
                                >
                                  Sau thời hạn trên, nếu chưa nhận được thanh toán, đơn hàng sẽ tạm
                                  huỷ để nhường suất cho khách hàng khác.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ textAlign: 'center', padding: '20px' }}>
                        <strong style={{ color: '#1e3a8a' }}>
                          VIETNAM TOURIST KÍNH CHÚC QUÝ KHÁCH HÀNG CÓ MỘT CHUYẾN ĐI THÚ VỊ VÀ BỔ ÍCH
                          !
                        </strong>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <table
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          style={{ backgroundColor: '#3730A3' }}
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                style={{
                                  padding: '24px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  gap: '16px',
                                }}
                              >
                                <img
                                  src="https://api.builder.io/api/v1/image/assets/TEMP/5ac2678b1d9e0ab46f638ff29ab81f302e8e865a?width=180"
                                  alt="Logo"
                                  width={90}
                                  height={45}
                                  style={{ display: 'block', marginBottom: '16px' }}
                                />
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '8px',
                                  }}
                                >
                                  {/* Hotline */}
                                  <table
                                    cellPadding={0}
                                    cellSpacing={0}
                                    style={{ marginBottom: '10px' }}
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style={{ verticalAlign: 'middle', paddingRight: '6px' }}
                                        >
                                          <img
                                            src="/phone-call.png"
                                            width={14}
                                            height={14}
                                            alt="Phone"
                                          />
                                        </td>
                                        <td
                                          style={{
                                            color: '#ffffff',
                                            fontSize: '12px',
                                            lineHeight: '18px',
                                          }}
                                        >
                                          Hotline:
                                        </td>
                                        <td
                                          style={{
                                            color: '#ffffff',
                                            fontSize: '12px',
                                            lineHeight: '18px',
                                          }}
                                        >
                                          (028) 36360292 - (028) 36360293
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  {/* Địa chỉ */}
                                  <table
                                    cellPadding={0}
                                    cellSpacing={0}
                                    style={{ marginBottom: '10px' }}
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style={{ verticalAlign: 'middle', paddingRight: '6px' }}
                                        >
                                          <img
                                            src="/map-pin.png"
                                            width={14}
                                            height={14}
                                            alt="Map"
                                          />
                                        </td>
                                        <td style={{ color: '#ffffff', fontSize: '12px' }}>
                                          Trụ sở chính:
                                        </td>
                                        <td style={{ color: '#ffffff', fontSize: '12px' }}>
                                          208 Hoàng Văn Thụ, phường 4, quận Tân Bình
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  {/* Website */}
                                  <table
                                    cellPadding={0}
                                    cellSpacing={0}
                                    style={{ marginBottom: '16px' }}
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style={{ verticalAlign: 'middle', paddingRight: '6px' }}
                                        >
                                          <img src="/link.png" width={14} height={14} alt="Link" />
                                        </td>
                                        <td style={{ color: '#ffffff', fontSize: '12px' }}>
                                          Website:
                                        </td>
                                        <td style={{ color: '#ffffff', fontSize: '12px' }}>
                                          vietnamtouristvn.com
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>

                                {/* Social Icons */}
                                <div
                                  style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
                                >
                                  <img
                                    src="/youtube.png"
                                    width={30}
                                    height={30}
                                    alt="Social Icons"
                                    style={{ display: 'block' }}
                                  />
                                  <img
                                    src="/fb.png"
                                    width={30}
                                    height={30}
                                    alt="Social Icons"
                                    style={{ display: 'block' }}
                                  />
                                  <img
                                    src="/instagram.png"
                                    width={30}
                                    height={30}
                                    alt="Social Icons"
                                    style={{ display: 'block' }}
                                  />
                                  <img
                                    src="/tiktok.png"
                                    width={30}
                                    height={30}
                                    alt="Social Icons"
                                    style={{ display: 'block' }}
                                  />
                                </div>
                              </td>
                              <div
                                style={{
                                  paddingTop: '10px',
                                  fontSize: '12px',
                                  color: '#6b7280',
                                  textAlign: 'center',
                                  marginBottom: '1rem',
                                }}
                              >
                                © 2025 Vietnam Tourist. All rights reserved.
                              </div>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
