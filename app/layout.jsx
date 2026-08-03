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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#070a10] text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
