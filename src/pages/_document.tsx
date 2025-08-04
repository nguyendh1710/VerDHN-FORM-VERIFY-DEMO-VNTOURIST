import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="vi">
    <Head>
      {/* Favicon */}
      <link rel="icon" href="/logofavicon.png" type="image/png" />

      {/* Title mặc định sẽ được override bằng <title> trong _app.tsx hoặc page cụ thể */}

      {/* SEO Cơ bản */}
      <meta name="description" content="SUNFIL - Kết nối con người, kiến tạo tương lai số bền vững." />
      <meta name="keywords" content="SUNFIL, công nghệ, chuyển đổi số, phát triển bền vững, phần mềm" />
      <meta name="author" content="SUNFIL Team" />
      <meta name="theme-color" content="#243F91" />

      {/* Open Graph - Facebook/Zalo... */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="SUNFIL - Công nghệ cho tương lai bền vững" />
      <meta property="og:description" content="Cùng SUNFIL kết nối và phát triển giải pháp công nghệ hiện đại." />
      <meta property="og:image" content="/public/images/logo-textwhite.png" /> {/* Đảm bảo ảnh này tồn tại */}
      <meta property="og:url" content="https://SUNFIL.vn" />
      <meta property="og:site_name" content="SUNFIL" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SUNFIL - Tương lai số bền vững" />
      <meta name="twitter:description" content="SUNFIL cùng bạn kiến tạo giải pháp công nghệ hiện đại, nhân văn." />
      <meta name="twitter:image" content="/public/images/logo-textwhite.png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  );
}
