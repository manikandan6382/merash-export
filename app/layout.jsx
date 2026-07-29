import './globals.css';

export const metadata = {
  title: 'Merash Express | Premier Export & Global Cargo Solutions',
  description: 'Fast, secure, and transparent international export, air freight, container shipping & customs clearance.',
  keywords: 'export, import, cargo, shipment, global freight, Nhava Sheva, air cargo, container booking, Merash Express',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content="#0b0f17" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased min-h-screen pb-20 md:pb-0 selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
