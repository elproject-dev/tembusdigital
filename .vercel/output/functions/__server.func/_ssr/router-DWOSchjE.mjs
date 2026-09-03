import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as lazyRouteComponent, d as Link, f as useRouter, i as HeadContent, l as createFileRoute, o as createRouter, r as Scripts, s as Outlet, u as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Analytics } from "../_libs/vercel__analytics.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DWOSchjE.js
var router_DWOSchjE_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-9dbc6wdD.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Jasa Buat Aplikasi Mobile, Web, Desktop & Server | Tembus Digital" },
			{
				name: "description",
				content: "Cari jasa buat aplikasi? Tembus Digital menyediakan jasa pembuatan aplikasi mobile (Android & iOS), desktop, website modern, sistem ERP, hingga aplikasi kasir dengan harga terjangkau."
			},
			{
				name: "keywords",
				content: "jasa buat aplikasi, jasa buat aplikasi mobile, jasa buat aplikasi web, jasa buat aplikasi kasir, jasa pembuatan aplikasi, jasa pembuatan website, aplikasi mobile android, ios developer, bikin aplikasi desktop, web developer indonesia, konsultan it, jasa pembuatan server, konten kreatif, tembus digital, tembusdigital studio, software house, jasa pembuatan aplikasi jogja, jasa pembuatan website yogyakarta, software house jogja, web developer yogyakarta, bikin aplikasi android jogja, ios developer yogyakarta, pembuatan aplikasi kasir jogja, jasa it yogyakarta, developer aplikasi jogja, tembus digital yogyakarta, tembusdigital studio, konsultan it jogja, jasa pembuatan server yogyakarta, software house indonesia, jasa pembuatan aplikasi jakarta, jasa pembuatan website jakarta, software house jakarta, web developer jakarta, bikin aplikasi android jakarta, ios developer jakarta, pembuatan aplikasi kasir jakarta, jasa it jakarta, developer aplikasi jakarta, tembus digital jakarta, tembusdigital studio, konsultan it jakarta, jasa pembuatan server jakarta, software house jakarta"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "author",
				content: "Tembus Digital"
			},
			{
				property: "og:site_name",
				content: "Tembus Digital"
			},
			{
				property: "og:url",
				content: "https://www.tembusdigital.studio"
			},
			{
				property: "og:title",
				content: "Jasa Buat Aplikasi Mobile, Web, Desktop & Server | Tembus Digital"
			},
			{
				property: "og:description",
				content: "Cari jasa buat aplikasi? Tembus Digital menyediakan jasa pembuatan aplikasi mobile (Android & iOS), desktop, website modern, sistem ERP, hingga aplikasi kasir dengan harga terjangkau."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: "https://www.tembusdigital.studio/og-image.jpg"
			},
			{
				property: "og:image:secure_url",
				content: "https://www.tembusdigital.studio/og-image.jpg"
			},
			{
				property: "og:image:type",
				content: "image/jpeg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "675"
			},
			{
				property: "og:image:alt",
				content: "Tembus Digital - Jasa Pembuatan Aplikasi & Web"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Jasa Buat Aplikasi Mobile, Web, Desktop & Server | Tembus Digital"
			},
			{
				name: "twitter:description",
				content: "Cari jasa buat aplikasi? Tembus Digital menyediakan jasa pembuatan aplikasi mobile, desktop, web apps, hingga server dan konsultasi bisnis."
			},
			{
				name: "twitter:image",
				content: "https://www.tembusdigital.studio/og-image.jpg"
			},
			{
				name: "theme-color",
				content: "#000000"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://www.tembusdigital.studio"
			},
			{
				rel: "manifest",
				href: "/manifest.json"
			},
			{
				rel: "icon",
				href: "/icon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "apple-touch-icon",
				href: "/icon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Outfit:wght@400;700;900&display=swap"
			}
		],
		scripts: [
			{ children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W475F8Z5');` },
			{
				src: "https://www.googletagmanager.com/gtag/js?id=G-6VKWPQVQPQ",
				async: true
			},
			{ children: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-6VKWPQVQPQ');` },
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "ProfessionalService",
					"name": "Jasa Pembuatan Aplikasi Mobile, Web, Desktop & Server, Kursus Pemrograman Sampai Bisa, Mentoring Coding Programmer Profesional, Kelas Belajar Coding Pemula hingga Mahir",
					"image": "https://www.tembusdigital.studio/og-image.jpg",
					"url": "https://www.tembusdigital.studio",
					"telephone": "+6281253822525",
					"priceRange": "Rp 1.000.000 - Custom",
					"knowsAbout": [
						"Layanan Kursus Pemrograman Sampai Bisa",
						"Mentoring Coding Programmer Profesional",
						"Kelas Belajar Coding Pemula hingga Mahir",
						"Layanan Jasa Pembuatan Aplikasi",
						"Layanan Jasa Pembuatan Aplikasi Costum",
						"Layanan Jasa Pembuatan Aplikasi Android",
						"Layanan Jasa Pembuatan Aplikasi iOS",
						"Layanan Jasa Pembuatan Aplikasi Dekstop",
						"Layanan Jasa Pembuatan Aplikasi Web",
						"Layanan Jasa Pembuatan Server",
						"Layanan Jasa Pembuatan Aplikasi AI",
						"Layanan Jasa Pembuatan Konten Kreatif",
						"Layanan Jasa Pengembangan Aplikasi",
						"Layanan Jasa Pembuatan Website",
						"Layanan Jasa Web Development",
						"Layanan Jasa iOS App Development",
						"Layanan Jasa Android App Development",
						"Layanan Jasa Desktop App Development",
						"Layanan Jasa Server Infrastructure",
						"Layanan Jasa IT Consulting",
						"Layanan Jasa Konsultasi Bisnis",
						"Jasa Pembuatan Aplikasi Android",
						"Jasa Pembuatan Aplikasi iOS",
						"Jasa Pembuatan Aplikasi Desktop",
						"Jasa Pembuatan Aplikasi Web",
						"Jasa Pembuatan Server",
						"Jasa Pembuatan Aplikasi AI",
						"Jasa Pembuatan Konten Kreatif",
						"Jasa Pengembangan Aplikasi",
						"Jasa Pembuatan Website",
						"Jasa Web Development",
						"Jasa iOS App Development",
						"Jasa Android App Development",
						"Jasa Desktop App Development",
						"Jasa Server Infrastructure",
						"Jasa IT Consulting",
						"Jasa Konsultasi Bisnis",
						"Pembuatan Aplikasi Mobile",
						"Pembuatan Aplikasi Android",
						"Pembuatan Aplikasi iOS",
						"Pembuatan Aplikasi Desktop",
						"Pembuatan Aplikasi Web",
						"Pembuatan Server",
						"Pembuatan Aplikasi AI",
						"Pembuatan Konten Kreatif",
						"Pengembangan Aplikasi",
						"Pembuatan Website",
						"Web Development",
						"iOS App Development",
						"Android App Development",
						"Desktop App Development",
						"Server Infrastructure",
						"IT Consulting",
						"Buat Aplikasi Sistem Antrean",
						"Buat Aplikasi POS",
						"Buat Aplikasi Toko Online",
						"Buat Aplikasi Marketplace",
						"Buat Aplikasi Restoran",
						"Buat Aplikasi E-Commerce",
						"Buat Aplikasi Kasir",
						"Buat Aplikasi Laundry",
						"Buat Aplikasi Bengkel",
						"Buat Aplikasi Salon",
						"Buat Aplikasi Barbershop",
						"Buat Aplikasi Klinik",
						"Buat Aplikasi Apotek",
						"Buat Aplikasi Rumah Sakit",
						"Buat Aplikasi Hotel",
						"Buat Aplikasi Villa",
						"Buat Aplikasi Kos",
						"Buat Aplikasi Kontrakan",
						"Jasa Pembuatan Aplikasi Sistem Antrean",
						"Jasa Pembuatan Aplikasi POS",
						"Jasa Pembuatan Aplikasi Toko Online",
						"Jasa Pembuatan Aplikasi Marketplace",
						"Jasa Pembuatan Aplikasi Restoran",
						"Jasa Pembuatan Aplikasi E-Commerce",
						"Jasa Pembuatan Aplikasi Kasir",
						"Jasa Pembuatan Aplikasi Laundry",
						"Jasa Pembuatan Aplikasi Bengkel",
						"Jasa Pembuatan Aplikasi Salon",
						"Jasa Pembuatan Aplikasi Barbershop",
						"Jasa Pembuatan Aplikasi Klinik",
						"Jasa Pembuatan Aplikasi Apotek",
						"Jasa Pembuatan Aplikasi Rumah Sakit",
						"Jasa Pembuatan Aplikasi Hotel",
						"Jasa Pembuatan Aplikasi Villa",
						"Jasa Pembuatan Aplikasi Kos",
						"Jasa Pembuatan Aplikasi Kontrakan",
						"Jasa Pembuatan Aplikasi Game",
						"Jasa Pembuatan Aplikasi Edukasi",
						"Jasa Pembuatan Aplikasi Kesehatan",
						"Jasa Pembuatan Aplikasi Keuangan",
						"Jasa Pembuatan Aplikasi Bisnis",
						"Jasa Pembuatan Aplikasi Pemerintah",
						"Jasa Pembuatan Aplikasi Sosial",
						"Jasa Pembuatan Aplikasi Hiburan",
						"Jasa Pembuatan Aplikasi Transportasi",
						"Jasa Pembuatan Aplikasi Sekolah",
						"Jasa Pembuatan Aplikasi Universitas",
						"Jasa Pembuatan Aplikasi Institusi Pendidikan",
						"Jasa Pembuatan Aplikasi Institusi Kesehatan",
						"Jasa Pembuatan Aplikasi Institusi Pemerintahan",
						"Jasa Pembuatan Aplikasi Institusi Swasta",
						"Jasa Pembuatan Aplikasi Institusi Militer",
						"Pembuatan Aplikasi Sistem Antrean",
						"Pembuatan Aplikasi POS",
						"Pembuatan Aplikasi Toko Online",
						"Pembuatan Aplikasi Marketplace",
						"Pembuatan Aplikasi Restoran",
						"Pembuatan Aplikasi E-Commerce",
						"Pembuatan Aplikasi Kasir",
						"Pembuatan Aplikasi Laundry",
						"Pembuatan Aplikasi Bengkel",
						"Pembuatan Aplikasi Salon",
						"Pembuatan Aplikasi Barbershop",
						"Pembuatan Aplikasi Klinik",
						"Pembuatan Aplikasi Apotek",
						"Pembuatan Aplikasi Rumah Sakit",
						"Pembuatan Aplikasi Hotel",
						"Pembuatan Aplikasi Villa",
						"Pembuatan Aplikasi Kos",
						"Pembuatan Aplikasi Kontrakan",
						"Pembuatan Aplikasi Game",
						"Pembuatan Aplikasi Edukasi",
						"Pembuatan Aplikasi Kesehatan",
						"Pembuatan Aplikasi Keuangan",
						"Pembuatan Aplikasi Bisnis",
						"Pembuatan Aplikasi Pemerintah",
						"Pembuatan Aplikasi Sosial",
						"Pembuatan Aplikasi Hiburan",
						"Pembuatan Aplikasi Transportasi",
						"Pembuatan Aplikasi Sekolah",
						"Pembuatan Aplikasi Universitas",
						"Pembuatan Aplikasi Institusi Pendidikan",
						"Pembuatan Aplikasi Institusi Kesehatan",
						"Pembuatan Aplikasi Institusi Pemerintahan",
						"Pembuatan Aplikasi Institusi Swasta",
						"Pembuatan Aplikasi Institusi Militer",
						"Pengembangan Aplikasi Sistem Antrean",
						"Pengembangan Aplikasi POS",
						"Pengembangan Aplikasi Toko Online",
						"Pengembangan Aplikasi Marketplace",
						"Pengembangan Aplikasi Restoran",
						"Pengembangan Aplikasi E-Commerce",
						"Pengembangan Aplikasi Kasir",
						"Pengembangan Aplikasi Laundry",
						"Pengembangan Aplikasi Bengkel",
						"Pengembangan Aplikasi Salon",
						"Pengembangan Aplikasi Barbershop",
						"Pengembangan Aplikasi Klinik",
						"Pengembangan Aplikasi Apotek",
						"Pengembangan Aplikasi Rumah Sakit",
						"Pengembangan Aplikasi Hotel",
						"Pengembangan Aplikasi Villa",
						"Pengembangan Aplikasi Kos",
						"Pengembangan Aplikasi Kontrakan",
						"Pengembangan Aplikasi Game",
						"Pengembangan Aplikasi Edukasi",
						"Pengembangan Aplikasi Kesehatan",
						"Pengembangan Aplikasi Keuangan",
						"Pengembangan Aplikasi Bisnis",
						"Pengembangan Aplikasi Pemerintah",
						"Pengembangan Aplikasi Sosial",
						"Pengembangan Aplikasi Hiburan",
						"Pengembangan Aplikasi Transportasi",
						"Pengembangan Aplikasi Sekolah",
						"Pengembangan Aplikasi Universitas",
						"Pengembangan Aplikasi Institusi Pendidikan",
						"Pengembangan Aplikasi Institusi Kesehatan",
						"Pengembangan Aplikasi Institusi Pemerintahan",
						"Pengembangan Aplikasi Institusi Swasta",
						"Pengembangan Aplikasi Institusi Militer",
						"Jasa Pengembangan Aplikasi Sistem Antrean",
						"Jasa Pengembangan Aplikasi POS",
						"Jasa Pengembangan Aplikasi Toko Online",
						"Jasa Pengembangan Aplikasi Marketplace",
						"Jasa Pengembangan Aplikasi Restoran",
						"Jasa Pengembangan Aplikasi E-Commerce",
						"Jasa Pengembangan Aplikasi Kasir",
						"Jasa Pengembangan Aplikasi Laundry",
						"Jasa Pengembangan Aplikasi Bengkel",
						"Jasa Pengembangan Aplikasi Salon",
						"Jasa Pengembangan Aplikasi Barbershop",
						"Jasa Pengembangan Aplikasi Klinik",
						"Jasa Pengembangan Aplikasi Apotek",
						"Jasa Pengembangan Aplikasi Rumah Sakit",
						"Jasa Pengembangan Aplikasi Hotel",
						"Jasa Pengembangan Aplikasi Villa",
						"Jasa Pengembangan Aplikasi Kos",
						"Jasa Pengembangan Aplikasi Kontrakan",
						"Jasa Pengembangan Aplikasi Game",
						"Jasa Pengembangan Aplikasi Edukasi",
						"Jasa Pengembangan Aplikasi Kesehatan",
						"Jasa Pengembangan Aplikasi Keuangan",
						"Jasa Pengembangan Aplikasi Bisnis",
						"Jasa Pengembangan Aplikasi Pemerintah",
						"Jasa Pengembangan Aplikasi Sosial",
						"Jasa Pengembangan Aplikasi Hiburan",
						"Jasa Pengembangan Aplikasi Transportasi",
						"Jasa Pengembangan Aplikasi Sekolah",
						"Jasa Pengembangan Aplikasi Universitas",
						"Jasa Pengembangan Aplikasi Institusi Pendidikan",
						"Jasa Pengembangan Aplikasi Institusi Kesehatan",
						"Jasa Pengembangan Aplikasi Institusi Pemerintahan",
						"Jasa Pengembangan Aplikasi Institusi Swasta",
						"Jasa Pengembangan Aplikasi Institusi Militer",
						"Jasa Pembuatan Aplikasi Sekolah",
						"Jasa Pembuatan Aplikasi Universitas",
						"Jasa Pembuatan Aplikasi Institusi Pendidikan",
						"Jasa Pembuatan Aplikasi Institusi Kesehatan",
						"Jasa Pembuatan Aplikasi Institusi Pemerintahan",
						"Jasa Pembuatan Aplikasi Institusi Swasta",
						"Jasa Pembuatan Aplikasi Institusi Militer",
						"Jasa Pembuatan Server",
						"Jasa Konsultasi Bisnis",
						"Jasa Pembuatan Konten Kreatif"
					],
					"serviceArea": {
						"@type": "AdministrativeArea",
						"name": "Indonesia"
					},
					"address": {
						"@type": "PostalAddress",
						"addressCountry": "ID",
						"areaServed": "Indonesia, Global",
						"telephone": "+6281253822525"
					},
					"hasMap": "https://maps.app.goo.gl/2Zz55g4VUP2fi1Ya6",
					"sameAs": ["https://www.instagram.com/tembusdigital"],
					"description": "Kami adalah salah satu penyedia layanan jasa pembuatan aplikasi mobile, dekstop, ios dan website, aplikasi mobile android, ios, desktop, serta web app. Kami menyediakan jasa pembuatan server juga, konsultasi bisnis, serta menyediakan jasa pembuatan Konten Kreatif. Kami akan memberikan rekomendasi dan arahan terbaik untuk bisnis Anda"
				})
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					"mainEntity": [
						{
							"@type": "Question",
							"name": "Apa saja layanan yang disediakan oleh Tembus Digital?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Tembus Digital menyediakan jasa pembuatan aplikasi mobile (Android & iOS), aplikasi desktop (Windows, macOS, Linux), website modern (landing page, e-commerce, web app), pembuatan & manajemen server, serta konsultasi IT & bisnis profesional."
							}
						},
						{
							"@type": "Question",
							"name": "Bagaimana cara berkonsultasi atau memesan layanan di Tembus Digital?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Anda dapat menghubungi kami langsung melalui nomor WhatsApp resmi di +62 812 5382 2525 atau mengirim pesan langsung (DM) ke akun Instagram kami di @tembusdigital."
							}
						},
						{
							"@type": "Question",
							"name": "Berapa biaya pembuatan aplikasi atau website di Tembus Digital?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Biaya pengembangan bervariasi mulai dari Rp 1.000.000, tergantung pada kompleksitas fitur, platform yang digunakan (web, mobile, atau desktop), serta estimasi waktu pengerjaan. Kami selalu memberikan opsi penawaran terbaik yang sesuai dengan anggaran dan kebutuhan bisnis Anda."
							}
						},
						{
							"@type": "Question",
							"name": "Teknologi dan tools apa saja yang digunakan oleh Tembus Digital?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Kami menggunakan berbagai tumpukan teknologi dan tools modern seperti Javascript, React, SwiftUI, Next.js, Flutter, Node.js, Figma, AWS, Firebase, GitHub, Supabase, Canva, Python, TypeScript, TanStack Start, TailwindCSS, dan Nitro/Vercel serverless."
							}
						},
						{
							"@type": "Question",
							"name": "Apakah Tembus Digital menyediakan layanan pasca-pembuatan (maintenance & support)?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Ya, setiap proyek yang kami kerjakan dilengkapi dengan masa garansi pemeliharaan (maintenance) gratis untuk memastikan aplikasi berjalan lancar dan bebas dari bug. Kami juga menawarkan paket dukungan jangka panjang untuk pembaruan fitur atau kapasitas server."
							}
						},
						{
							"@type": "Question",
							"name": "Apakah Tembus Digital menyediakan kursus atau kelas belajar pemrograman?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Ya, kami menyediakan layanan kursus dan mentoring belajar pemrograman intensif secara terarah dari pemula (nol) hingga tingkat mahir (sampai bisa) untuk menguasai teknologi modern sesuai standar kebutuhan industri."
							}
						}
					]
				})
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				src: "https://www.googletagmanager.com/ns.html?id=GTM-W475F8Z5",
				height: "0",
				width: "0",
				style: {
					display: "none",
					visibility: "hidden"
				}
			}) }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	(0, import_react.useEffect)(() => {
		if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").then(() => {}).catch(() => {});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Analytics, { debug: false })]
	});
}
var $$splitComponentImporter$1 = () => import("./routes-CfwOApCM.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Layanan Jasa Pembuatan Aplikasi Mobile,Desktop & Website Modern" },
		{
			name: "description",
			content: "Pembuatan Aplikasi Android, iOS, Desktop, WebApps, Aplikasi Costum, Website dan Server untuk kebutuhan Bisnis Anda."
		},
		{
			property: "og:site_name",
			content: "Tembus Digital"
		},
		{
			property: "og:url",
			content: "https://www.tembusdigital.studio"
		},
		{
			property: "og:title",
			content: "Layanan Jasa Pembuatan Aplikasi Mobile, Desktop & Website Modern"
		},
		{
			property: "og:description",
			content: "Pembuatan Aplikasi Android, iOS, Desktop, WebApps, Aplikasi Costum, Website dan Server untuk kebutuhan Bisnis Anda."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:image",
			content: "https://www.tembusdigital.studio/og-image.jpg"
		},
		{
			property: "og:image:secure_url",
			content: "https://www.tembusdigital.studio/og-image.jpg"
		},
		{
			property: "og:image:type",
			content: "image/jpeg"
		},
		{
			property: "og:image:width",
			content: "1200"
		},
		{
			property: "og:image:height",
			content: "675"
		},
		{
			property: "og:image:alt",
			content: "Tembus Digital"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Layanan Jasa Pembuatan Aplikasi Mobile, Desktop & Website Modern"
		},
		{
			name: "twitter:description",
			content: "Pembuatan Aplikasi Android, iOS, Desktop, WebApps, Aplikasi Costum, Website dan Server untuk kebutuhan Bisnis Anda."
		},
		{
			name: "twitter:image",
			content: "https://www.tembusdigital.studio/og-image.jpg"
		},
		{
			name: "robots",
			content: "max-image-preview:large"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blog-Cg897pCE.mjs");
var Route = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: "Blog & Artikel — Tembus Digital" },
		{
			name: "description",
			content: "Kumpulan artikel, tips digital marketing, dan wawasan teknologi terbaru dari Tembus Digital."
		},
		{
			property: "og:site_name",
			content: "Tembus Digital"
		},
		{
			property: "og:url",
			content: "https://www.tembusdigital.studio/blog"
		},
		{
			property: "og:title",
			content: "Blog & Artikel — Tembus Digital"
		},
		{
			property: "og:description",
			content: "Kumpulan artikel, tips digital marketing, dan wawasan teknologi terbaru dari Tembus Digital."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:image",
			content: "https://www.tembusdigital.studio/og-image.jpg"
		},
		{
			property: "og:image:secure_url",
			content: "https://www.tembusdigital.studio/og-image.jpg"
		},
		{
			property: "og:image:type",
			content: "image/jpeg"
		},
		{
			property: "og:image:width",
			content: "1200"
		},
		{
			property: "og:image:height",
			content: "675"
		},
		{
			property: "og:image:alt",
			content: "Blog & Artikel Tembus Digital"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Blog & Artikel — Tembus Digital"
		},
		{
			name: "twitter:description",
			content: "Kumpulan artikel, tips digital marketing, dan wawasan teknologi terbaru dari Tembus Digital."
		},
		{
			name: "twitter:image",
			content: "https://www.tembusdigital.studio/og-image.jpg"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	BlogRoute: Route.update({
		id: "/blog",
		path: "/blog",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter, router_DWOSchjE_exports as t };
