import { X, ExternalLink, ShoppingBag, CreditCard, Calendar, LayoutDashboard, Sparkles, MessageSquare, Ticket, Film, Wallet } from "lucide-react";

export interface DemoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  badge?: string;
  icon: React.ElementType;
  isExternal?: boolean;
}

const DEMO_ITEMS: DemoItem[] = [
  {
    id: "maga-swalayan",
    title: "Maga Swalayan & Toko Online",
    category: "E-Commerce / Retail",
    description: "Platform swalayan & e-commerce modern dengan katalog produk, keranjang belanja, dan manajemen transaksi.",
    tags: ["React / Web App", "Katalog Produk", "Shopping Cart"],
    url: "https://maga-swalayan.vercel.app/",
    badge: "Populer 🔥",
    icon: ShoppingBag,
  },
  {
    id: "toko-ungu",
    title: "Toko Ungu - E-Commerce",
    category: "Toko Online & E-Commerce",
    description: "Website e-commerce & toko online interaktif dengan katalog produk, keranjang belanja, dan tampilan modern.",
    tags: ["Toko Online", "Shopping Cart", "Responsive Web"],
    url: "https://toko-ungu.vercel.app/",
    badge: "Live Demo 🛍️",
    icon: ShoppingBag,
  },
  {
    id: "finance-cashflow",
    title: "Aplikasi Keuangan & Arus Kas",
    category: "Keuangan & Akuntansi",
    description: "Sistem pencatatan keuangan arus kas masuk & keluar, laporan keuangan bulanan, dan manajemen anggaran.",
    tags: ["Arus Kas", "Laporan Keuangan", "Pemasukan & Pengeluaran"],
    url: "https://jmb-liart.vercel.app/",
    badge: "Live Demo 💸",
    icon: Wallet,
  },
  {
    id: "movies-app",
    title: "Aplikasi Streaming & Informasi Film",
    category: "Entertainment & Media",
    description: "Platform streaming film & hiburan dengan katalog bioskop, pencarian cepat, sinopsis, dan UI modern.",
    tags: ["Movie App", "Streaming UI", "Media Platform"],
    url: "https://movies.elproject.studio/",
    badge: "Live Demo 🎬",
    icon: Film,
  },
  {
    id: "ticket-event",
    title: "Sistem Tiket Event & Konser",
    category: "Ticketing & Event",
    description: "Platform pemesanan tiket event & konser online dengan sistem e-ticket, QR code check-in, dan manajemen tiket.",
    tags: ["Event Ticket", "E-Ticket QR", "Booking Online"],
    url: "https://ticket-event-flame.vercel.app/",
    badge: "Live Demo 🎫",
    icon: Ticket,
  },
  {
    id: "booking-app",
    title: "Sistem Booking & Antrean Digital",
    category: "Reservasi & Jasa",
    description: "Sistem reservasi jadwal otomatis untuk klinik, salon, bengkel, dan manajemen antrean pelanggan.",
    tags: ["Booking System", "Jadwal Otomatis", "Antrean HP"],
    url: "https://wa.me/6281393412277?text=Halo%20Tembus%20Digital,%20saya%20tertarik%20mencoba%20demo%20Sistem%20Booking%20%26%20Antrean",
    badge: "Interactive",
    icon: Calendar,
    isExternal: true,
  },
  {
    id: "erp-dashboard",
    title: "Dashboard ERP & Analytic Bisnis",
    category: "Enterprise System",
    description: "Dashboard executive monitoring performa bisnis, statistik realtime, dan manajemen karyawan.",
    tags: ["Analytics UI", "Grafik Realtime", "Multi-Role"],
    url: "https://wa.me/6281393412277?text=Halo%20Tembus%20Digital,%20saya%20tertarik%20mencoba%20demo%20Dashboard%20ERP",
    badge: "Enterprise",
    icon: LayoutDashboard,
    isExternal: true,
  },
  {
    id: "custom-demo",
    title: "Minta Demo Custom / Konsultasi Gratis",
    category: "Custom Web & Mobile",
    description: "Membutuhkan sistem aplikasi dengan alur bisnis khusus? Konsultasikan ide Anda secara langsung.",
    tags: ["Mobile App", "Web App Custom", "Konsultasi IT"],
    url: "https://wa.me/6281393412277?text=Halo%20Tembus%20Digital,%20saya%20ingin%20meminta%20demo%20aplikasi%20custom%20sesuai%20kebutuhan%20bisnis%20saya",
    badge: "Custom Request",
    icon: MessageSquare,
    isExternal: true,
  },
];

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LiveDemoModal({ isOpen, onClose }: LiveDemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container - Purple Theme */}
      <div className="relative w-full max-w-2xl bg-[#0f0b17] border border-purple-500/30 rounded-2xl shadow-[0_0_50px_rgba(147,51,234,0.25)] overflow-hidden z-10 flex flex-col my-auto max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1e1333] via-[#160c28] to-[#0f0b17] p-5 border-b border-purple-500/20 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">

            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight">
              Pilih Live Demo Aplikasi
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/70 mt-0.5">
              Pilih salah satu demo sistem yang ingin Anda coba secara langsung:
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-purple-500/10 hover:bg-purple-500/25 text-purple-200 hover:text-white flex items-center justify-center transition-colors border border-purple-500/30 shrink-0"
            aria-label="Tutup Pop-up Demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo List Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 max-h-[60vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#0c0814]">
          {DEMO_ITEMS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-[#181226]/80 hover:bg-[#201736] border border-purple-500/20 hover:border-purple-500/60 rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(147,51,234,0.2)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600/30 to-indigo-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-105 group-hover:text-purple-200 transition-all shrink-0 mt-0.5 shadow-inner">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[11px] font-semibold text-purple-400 tracking-wide uppercase">
                        {item.category}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] bg-purple-500/20 text-purple-200 border border-purple-500/35 px-2.5 py-0.5 rounded-full font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-purple-950/40 text-purple-200/80 px-2.5 py-0.5 rounded-full border border-purple-500/15 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-purple-500/15 flex justify-end">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold transition-all duration-200 shadow-md hover:shadow-purple-500/40 active:scale-95 group-hover:translate-x-0.5"
                  >
                    <span>{item.isExternal ? "Hubungi CS" : "Uji Coba Demo"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="bg-[#130b21] px-5 py-3.5 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-purple-200/70">
          <p>Butuh aplikasi dengan desain &amp; fitur khusus?</p>
          <a
            href="https://wa.me/6281393412277?text=Halo%20Tembus%20Digital,%20saya%20ingin%20diskusi%20pembuatan%20aplikasi%20custom"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="text-purple-300 font-medium hover:text-white hover:underline flex items-center gap-1 transition-colors"
          >
            Konsultasi Gratis via WhatsApp ↗
          </a>
        </div>
      </div>
    </div>
  );
}
