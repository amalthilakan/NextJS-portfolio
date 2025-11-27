import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amal Thilakan | Developer Portfolio',
  description: 'Portfolio of Amal Thilakan, a Software Engineer specializing in Data Science and Web Development.',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20 px-4 container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
