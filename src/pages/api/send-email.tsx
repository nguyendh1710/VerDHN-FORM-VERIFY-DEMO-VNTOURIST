import type { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import inlineCss from 'inline-css';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import VerifyEmail from '@/modules/Mail/VerifyEmail/VerifyEmail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const formData = req.body;

  try {
    // 1. Đọc CSS từ Tailwind đã build
    const cssPath = path.join(process.cwd(), 'dist/output.css');

    if (!fs.existsSync(cssPath)) {
      console.error('❌ Không tìm thấy file CSS:', cssPath);
      return res.status(500).json({ error: 'Không tìm thấy CSS để render email' });
    }

    const tailwindCss = fs.readFileSync(cssPath, 'utf8');

    // 2. Render React component -> HTML string
    const htmlWithStyle = ReactDOMServer.renderToStaticMarkup(
      <html>
        <head>
          <style>{tailwindCss}</style>
        </head>
        <body>
          <VerifyEmail data={formData} />
        </body>
      </html>
    );

    // 3. Inline CSS
    const finalHtml = await inlineCss(htmlWithStyle, { url: '/' });

    // 4. Gửi email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ❌ Không dùng fs.writeFileSync ở môi trường Vercel Production
    if (process.env.NODE_ENV !== 'production') {
      const previewPath = path.join(process.cwd(), 'dist/email-preview.html');
      fs.writeFileSync(previewPath, finalHtml);
      console.log('✅ Ghi file email preview tại:', previewPath);
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
