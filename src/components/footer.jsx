export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-zinc-400 border-t border-zinc-700">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm">
          © {new Date().getFullYear()} Fauzan Ilyas Almeyda. Portofolio
        </p>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition">
            WhatsApp
          </a>
        </div>

      </div>
    </footer>
  );
}
