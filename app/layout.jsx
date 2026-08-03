import './globals.css';

export const metadata = {
  title: 'The Merash Exporters | Premier Export & Global Cargo Solutions',
  description: 'The Merash Exporters provides end-to-end B2B ocean freight, customs clearance, and commodity export logistics from India ports.',
  keywords: 'export, import, cargo, shipment, global freight, Nhava Sheva, air cargo, container booking, The Merash Exporters',
};

export const viewport = {
  themeColor: '#070a10',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070a10] text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
