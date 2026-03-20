export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e6ef] py-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm font-bold tracking-tight">
          <span className="text-[#345ec4]">Mapa</span>
          <span className="text-[#0d1117]">Kode</span>
        </span>

        <p className="text-xs text-[#64748b]">
          © {year} MapaKode. All rights reserved.
        </p>

        <a
          href="https://facebook.com/mapakode"
          className="text-xs text-[#64748b] hover:text-[#345ec4] transition-colors duration-200"
        >
          facebook.com/mapakode
        </a>
      </div>
    </footer>
  );
}
