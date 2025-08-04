import type { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import inlineCss from 'inline-css';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import VerifyEmail from '@/modules/Mail/VerifyEmail/VerifyEmail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const formData = req.body;

  try {
    // 1. Đọc CSS từ Tailwind đã build
    const cssPath = path.join(process.cwd(), 'dist/output.css');
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

    // 3. Inline CSS để phù hợp với email client
    const finalHtml = await inlineCss(htmlWithStyle, { url: '/' });

    // 4. Gửi mail với nội dung HTML
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    // ghi ra file để kiểm tra giao diện email
    fs.writeFileSync(path.join(process.cwd(), 'dist/email-final.html'), finalHtml);
    //
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Xác nhận đặt tour thành công',
      html: finalHtml,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌ Lỗi khi gửi email:', error);
    res.status(500).json({ error: 'Gửi email thất bại' });
  }
}
