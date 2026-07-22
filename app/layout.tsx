import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import SmoothScroller from "@/components/SmoothScroller";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amal Thilakan | Developer Portfolio',
  description: 'Portfolio of Amal Thilakan, a Software Engineer specializing in Data Science and Web Development.',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (localTheme === 'dark' || (!localTheme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  if (document.body) {
                    document.body.style.cursor = 'auto';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 min-h-screen flex flex-col`}>
        <ErrorBoundary>
          <Toaster position="top-center" toastOptions={{
            style: { background: '#1a1a1a', color: '#fff' },
            error: { duration: 4000 },
          }} />
          <Navbar />
          <SmoothScroller>
            <main className="grow w-full flex flex-col">
              {children}
            </main>
          </SmoothScroller>
        </ErrorBoundary>
      </body>
    </html>
  );
}
