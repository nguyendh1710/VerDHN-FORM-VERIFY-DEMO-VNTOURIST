
export default function TopNav() {
  return (
    <div className="w-full bg-muted text-sm text-foreground px-4 py-2">
      <div className="max-w-container mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <span>📞 0909 999 999</span>
          <span>✉ support@yourdomain.com</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Đăng nhập</a>
          <a href="#" className="hover:underline">Ngôn ngữ: VN</a>
        </div>
      </div>
    </div>
  );
}
