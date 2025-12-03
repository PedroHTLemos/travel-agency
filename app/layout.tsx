import './globals.css';

export const metadata = {
  title: 'TravelX',
  description: 'Agência de viagens',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  );
}
