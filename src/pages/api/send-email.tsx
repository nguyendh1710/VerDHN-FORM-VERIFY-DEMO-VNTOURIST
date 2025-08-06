import type { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import juice from 'juice';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import VerifyEmail from '@/modules/Mail/VerifyEmail/VerifyEmail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const formData = req.body;

  try {
    // 1️⃣ Đọc CSS Tailwind đã build, nhưng chỉ CSS cần thiết
    const cssPath = path.join(process.cwd(), 'dist/output.css');
    if (!fs.existsSync(cssPath)) return res.status(500).json({ error: 'Không tìm thấy CSS' });
    const tailwindCss = fs.readFileSync(cssPath, 'utf8');

    // 2️⃣ Render React component -> HTML string
    const componentHtml = ReactDOMServer.renderToStaticMarkup(<VerifyEmail data={formData} />);

    const htmlWithCss = `
      <html>
        <head>
          <style>${tailwindCss}</style>
        </head>
        <body>
          ${componentHtml}
        </body>
      </html>
    `;

    // 3️⃣ Inline CSS tất cả class/selector để Gmail hiểu
    const finalHtml = juice(htmlWithCss);

    // 4️⃣ Gửi email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    if (process.env.NODE_ENV !== 'production') {
      const previewPath = path.join(process.cwd(), 'dist/email-preview.html');
      fs.writeFileSync(previewPath, finalHtml);
      console.log('✅ Email preview tại:', previewPath);
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Xác nhận đặt tour thành công',
      html: finalHtml,
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('❌ Lỗi khi gửi email:', error);
    return res.status(500).json({ error: error.message || 'Gửi email thất bại' });
  }
}
