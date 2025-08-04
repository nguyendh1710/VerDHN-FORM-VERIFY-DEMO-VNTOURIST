import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background text-foreground">
      {/* Header*/}
      {/* container-fluid: 100% width */}
      <header className="w-full max-w-fluid mx-auto">
        <Header />
      </header>
      {/* Main content */}
      {/* áp dụng container: max width 1440px  và container-fuild từ tailwind config*/}
      <main className="flex-1 w-full flex justify-center px-4">
        <div className="w-full max-w-container">{children}</div>
      </main>
      {/* Footer*/}
      <footer className="w-full max-w-fluid mx-auto">
        <Footer />
      </footer>
    </div>
  );
}
