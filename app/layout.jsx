import './globals.css';

export const metadata = {
  title: 'Merash Exporters | Premier Export & Global Cargo Solutions',
  description: 'Leading B2B Export & Freight Forwarding Company from India. High-quality Spices, Textiles, Kitchenware, Rice & Industrial Products. 100% Customs Clearance & 24/7 Satellite Vessel Tracking.',
  keywords: 'export, import, cargo, shipment, global freight, Nhava Sheva, air cargo, container booking, Merash Exporters',
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
